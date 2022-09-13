import { storage } from '@lib/firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React, { Dispatch, useMemo, useState } from 'react';
import toast from 'react-hot-toast';

type TProps = {
  children: JSX.Element;
};

// 🔥🔥🔥 Init Functions 🔥🔥🔥
interface IContextFn {
  uploadFiles: (file: File) => void;
  setCloudUrl: Dispatch<React.SetStateAction<string>>;
  setProgress: Dispatch<React.SetStateAction<number>>;
  setFiles: Dispatch<React.SetStateAction<File[]>>;
}

const initFn: IContextFn = {
  uploadFiles: () => null,
  setCloudUrl: () => '',
  setProgress: () => 0,
  setFiles: () => [],
};

// 🔥🔥🔥 Init Values 🔥🔥🔥
interface IContextVal {
  progress: number;
  cloudUrl: string;
  files: File[];
}

const initVal: IContextVal = {
  progress: 0,
  cloudUrl: '',
  files: [],
};

interface IContext extends IContextFn, IContextVal {}
export const UploadContext = React.createContext<IContext>({ ...initFn, ...initVal });

export function UploadContextProvider({ children }: TProps): React.ReactElement {
  const [progress, setProgress] = useState(initVal.progress);
  const [cloudUrl, setCloudUrl] = useState('');
  const [files, setFiles] = useState<File[]>(initVal.files);

  const uploadFiles = (file: File) => {
    if (!file) return;
    try {
      const storageRef = ref(storage, `/files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        'state_changed',
        snapshot => {
          const prog = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(prog);
        },
        err => {
          // eslint-disable-next-line no-console
          console.log('err=-->', err);
          toast.error('Something went wrong');
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(url => {
            setCloudUrl(url);
          });
        }
      );
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('error: =-->', error);
    }
  };

  // 🔥🔥🔥 Ctx Functions 🔥🔥🔥
  const contextFn = {
    uploadFiles,
    setCloudUrl,
    setProgress,
    setFiles,
  };

  // 🔥🔥🔥 Ctx Values 🔥🔥🔥
  const contextVal = useMemo(
    () => ({
      progress,
      cloudUrl,
      files,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [progress, cloudUrl, files]
  );

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return <UploadContext.Provider value={{ ...contextVal, ...contextFn }}>{children}</UploadContext.Provider>;
}
