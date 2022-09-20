import Tbl from '@components/Table/Tbl';
import { limitOpt } from '@lib/optionLib';
import { Booking } from '@prisma/client';
import { TInputValue, TRoute } from '@ts/common';
import { accumulateByKey, sortBy, sumBy } from '@util/normalize';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

type TProps = { rType: TRoute };
function Booking({ rType }: TProps): JSX.Element {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [limit, setLimit] = useState<TInputValue>('8');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Booking[]>([]);
  const headerArr = [
    { align: 'left', priority: 1, minWidth: 30, maxWidth: 300, title: <Heading>#</Heading> },
    {
      align: 'left',
      priority: 2,
      minWidth: 30,
      maxWidth: 300,
      title: <Heading>ID</Heading>,
    },
    {
      align: 'left',
      priority: 11,
      minWidth: 120,
      maxWidth: 300,
      title: <Heading>CHECK-IN</Heading>,
    },
    {
      align: 'left',
      priority: 10,
      minWidth: 120,
      maxWidth: 300,
      title: <Heading>CHECK-OUT</Heading>,
    },
    {
      align: 'left',
      priority: 9,
      minWidth: 120,
      maxWidth: 300,
      title: <Heading>ROOM-TYPE</Heading>,
    },
    {
      align: 'left',
      priority: 8,
      minWidth: 100,
      maxWidth: 300,
      title: <Heading>OFFER-ID</Heading>,
    },
    {
      align: 'left',
      priority: 7,
      minWidth: 80,
      maxWidth: 300,
      title: <Heading>MEAL</Heading>,
    },
    {
      align: 'left',
      priority: 6,
      minWidth: 120,
      maxWidth: 300,
      title: <Heading>NOTE</Heading>,
    },
    {
      align: 'left',
      priority: 4,
      minWidth: 80,
      maxWidth: 300,
      title: <Heading>#ROOMS</Heading>,
    },
    {
      align: 'left',
      priority: 5,
      minWidth: 160,
      maxWidth: 300,
      title: <Heading>EMAIL</Heading>,
    },
    {
      align: 'left',
      priority: 5,
      minWidth: 80,
      maxWidth: 300,
      title: <Heading>PAYMENT</Heading>,
    },
  ];
  const skuDataRows = data.map((item, i) => [
    <div key={`data-row-${i + 1}-hash`}>{i + 1}</div>,
    <div key={`data-row-${i + 1}-id`}>{item.id || '--'}</div>,
    <div key={`data-row-${i + 1}-status`}>{format(new Date(item.checkIn), 'dd-MMMM-yyyy')}</div>,
    <div key={`data-row-${i + 1}-type`}>{format(new Date(item.checkOut), 'dd-MMMM-yyyy')}</div>,
    <div key={`data-row-${i + 1}-desc`}>{item.roomType}</div>,
    <div key={`data-row-${i + 1}-startDate`}>{item.offerId || '--'}</div>,
    <div key={`data-row-${i + 1}-endDate`}>{item.meal}</div>,
    <div key={`data-row-${i + 1}-offerCode`}>{item.note || '--'}</div>,
    <div key={`data-row-${i + 1}-discount`}>{item.numberOfRooms}</div>,
    <div key={`data-row-${i + 1}-createdAt`}>{item.userEmail}</div>,
    <div key={`data-row-${i + 1}-updatedAt`}>{item.totalPayment}</div>,
  ]);

  const sortedByHPriorityArr = sortBy(headerArr, 'priority');
  const accumulatedSortedArr = accumulateByKey(sortedByHPriorityArr, 'minWidth');
  const accumulatedMaxSum = sumBy(headerArr, 'maxWidth');

  const getOfferData = async () => {
    setLoading(true);
    fetch(`/api/dashboard?type=booking_get`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `${process.env.JWT}`,
      },
    })
      .then(res => res.json())
      .then(async res => {
        if (res.data.length > 0) {
          setData(res.data);
        }
        setLoading(false);
      })
      .catch(res => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getOfferData();
  }, []);

  return (
    <Container>
      <TableCtr>
        <Tbl
          name='offers'
          headerArr={headerArr}
          dataArr={skuDataRows as unknown as JSX.Element[][]}
          accumulatedSortedArr={accumulatedSortedArr}
          accumulatedMaxSum={accumulatedMaxSum}
          currentPage={currentPage}
          pageCount={pageCount}
          onPageChange={nextPage => {
            // getOfferData(nextPage, +(limit as string), orderBy);
          }}
          limit={limit}
          setLimit={item => {
            // getOfferData(1, +(item || 8), orderBy);
          }}
          options={limitOpt}
          loading={loading}
        />
      </TableCtr>
    </Container>
  );
}

export default Booking;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const TableCtr = styled.div`
  margin: 10px 0;
  .link {
    text-decoration: underline;
    user-select: text !important;
  }
`;

const Heading = styled.div`
  cursor: pointer;
  font-weight: 900;
`;
