/* eslint-disable react/jsx-props-no-spreading */
import JumpingDots from '@components/Loaders/JumpingDots';
import { UploadContext } from '@ctx/UploadContext';
import { Cross } from '@svg/common';
import { colors } from '@theme/baseTheme';
import { IFile } from '@ts/interfaces';
import React, { useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';

function DropArea(): JSX.Element {
  const { files, progress, setFiles, setProgress, uploadFiles } = useContext(UploadContext);
  const { getInputProps, getRootProps, isDragAccept, isDragReject, isFocused } = useDropzone({
    maxFiles: 1,
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      if (acceptedFiles.length > 0) {
        uploadFiles(acceptedFiles[0]);
      }
    },
  });

  const isSingle = files.length === 1;
  let imageURL = '';
  if (files.length > 0) {
    const temp3 = files[0] as unknown as IFile;
    imageURL = temp3.preview as unknown as string;
  }

  return (
    <ContainerOuter>
      <Container {...getRootProps({ isFocused, isDragAccept, isDragReject, isSingle })}>
        <input {...getInputProps()} />
        <div className='dragAndDropTitle'>Drag & Drop</div>
        <div className='dragAndDropSubTitle'>OR</div>
        <div className='fileInputCtr'>
          <div className='fileInputTxt'>Click Here</div>
        </div>
      </Container>

      {files.length > 0 && (
        <DropOverlay>
          <img src={imageURL} alt='test' className='draggableFormImg' />
          {progress < 100 && (
            <div className='progressCtr'>
              <JumpingDots />
            </div>
          )}
          <button
            type='button'
            className='closeButton'
            onClick={() => {
              setFiles([]);
              setProgress(0);
            }}
          >
            <Cross cls='cross' />
          </button>
        </DropOverlay>
      )}
    </ContainerOuter>
  );
}

export default DropArea;

const ContainerOuter = styled.div`
  position: relative;
`;

const DropOverlay = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: ${colors.black};
  border-radius: 5px;
  overflow: hidden;

  .draggableFormImg {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: contain;
    border-radius: 5px;
  }

  .closeButton {
    position: absolute;
    right: 2px;
    top: 2px;
    cursor: pointer;
  }

  .progressCtr {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(4px);
  }
`;

type TContainer = {
  isDragAccept: boolean;
  isDragReject: boolean;
  isFocused: boolean;
  isSingle: boolean;
};

const getColor = (props: TContainer) => {
  if (props.isDragAccept) {
    return colors.dark_green;
  }
  if (props.isDragReject) {
    return colors.red1;
  }
  if (props.isFocused) {
    return colors.black;
  }
  return colors.black;
};

const Container = styled.div<TContainer>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  color: ${colors.black};
  outline: none;
  transition: border 0.24s ease-in-out;
  min-height: 300px;
  width: 100%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  ${p => (p.isSingle ? 'border: 2px solid black' : '')};

  .dragAndDropTitle {
    font-size: 1.5rem;
    font-weight: 500;
  }

  .dragAndDropSubTitle {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 10px;
  }

  .fileInputCtr {
    position: relative;
    height: 40px;
    width: 120px;
    overflow: hidden;
    cursor: pointer;
  }
  .fileInputTxt {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${colors.black};
    color: ${colors.white};
    border-radius: 4px;
    cursor: pointer;
  }
`;
