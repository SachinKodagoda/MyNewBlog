import BigCross from '@components/Buttons/BigCross';
import Button from '@components/Buttons/Button';
import CheckMark from '@components/Buttons/CheckMark';
import LinkBtn from '@components/Buttons/LinkBtn';
import Loader from '@components/Loaders/CircularLoader';
import { UserContext } from '@ctx/UserContext';
import NoData from '@layouts/menu/NoData';
import { deleteMeeting, getAllMeetings } from '@lib/firebase';
import { TFMeet } from '@ts/common';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import styled from 'styled-components';

function Meetings(): JSX.Element {
  const [data, setData] = useState<TFMeet[]>([]);
  const [loading, setLoading] = useState(false);
  const { domain } = useContext(UserContext);
  const checkUsername = useCallback(async () => {
    setLoading(true);
    const response = await getAllMeetings();
    const temp = response.data.map(item => {
      return {
        meetingId: item.meetingId,
        authenticate: item.authenticate,
        interactive: item.interactive,
        classId: item.classId,
        smartQa: item.smartQa,
        tracking: item.tracking,
        uid: item.uid,
      };
    });
    setData(temp);
    setLoading(false);
  }, []);

  useEffect(() => {
    checkUsername();
  }, [checkUsername]);

  if (data.length === 0 && !loading) return <NoData text='No Meeting Found!' />;
  return (
    <Container>
      <table className='table'>
        <thead className='thead'>
          {data.length > 0 && (
            <tr className='tr'>
              <th className='th'>#</th>
              <th className='th'>Authenticated</th>
              <th className='th'>Class ID</th>
              <th className='th'>Interactive</th>
              <th className='th'>Attention</th>
              <th className='th'>Smart QA</th>
              <th className='th'>Session ID</th>
              <th className='th'>Edit</th>
            </tr>
          )}
        </thead>
        <tbody className='tbody'>
          {data.map((item, i) => {
            return (
              <tr className='tr' key={`meetings-${i + 1}`}>
                <td className='td'>{i + 1}</td>
                <td className='td'>{item.authenticate ? <CheckMark /> : <BigCross />}</td>
                <td className='td'>{item.classId}</td>
                <td className='td'>{item.interactive ? <CheckMark /> : <BigCross />}</td>
                <td className='td'>{item.tracking ? <CheckMark /> : <BigCross />}</td>
                <td className='td'>{item.smartQa ? <CheckMark /> : <BigCross />}</td>
                <td className='td'>
                  <div className='LinkWrapper'>
                    <LinkBtn href={`${domain}/pro/${item.meetingId}`}>{item.meetingId}</LinkBtn>
                  </div>
                </td>
                <td className='td'>
                  <div className='buttonCover'>
                    <Button
                      type='normal'
                      isDisabled={false}
                      text='Delete'
                      onClickHandler={async () => {
                        const response = await deleteMeeting(item.meetingId);
                        if (response) {
                          await checkUsername();
                          toast.success(`Successfully Deleted`);
                        } else {
                          toast.error('Something Went Wrong. Try again!');
                        }
                      }}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {loading && (
        <div className={`${data.length > 0 ? `loaderCtr` : `loaderCtrFull`}`}>
          <Loader show={loading} />
        </div>
      )}
    </Container>
  );
}

export default Meetings;

const Container = styled.div`
  width: 100%;
  position: relative;

  .loaderCtr {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loaderCtrFull {
    width: 100%;
    height: calc(100vh - 40px);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .LinkWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
