import { TRoute } from '@ts/common';
import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import styled from 'styled-components';

const data = [
  {
    name: 'Janith',
    quiz1: 10,
    quiz2: 20,
    quiz3: 10,
    total: 40,
  },
  {
    name: 'Abinaya',
    quiz1: 50,
    quiz2: 10,
    quiz3: 5,
    total: 65,
  },
  {
    name: 'Yohan',
    quiz1: 20,
    quiz2: 8,
    quiz3: 2,
    total: 30,
  },
  {
    name: 'Niranjan',
    quiz1: 60,
    quiz2: 6,
    quiz3: 0,
    total: 66,
  },
  {
    name: 'Akila',
    quiz1: 40,
    quiz2: 4,
    quiz3: 0,
    total: 44,
  },
  {
    name: 'Mathiban',
    quiz1: 10,
    quiz2: 3,
    quiz3: 10,
    total: 23,
  },
  {
    name: 'Yasinthan',
    quiz1: 0,
    quiz2: 2,
    quiz3: 1,
    total: 3,
  },
];
type TProps = { rType: TRoute };
function ProAnalytics({ rType }: TProps): JSX.Element {
  return (
    <Container>
      <div className='minCtr'>
        <div className='title'>Number of questions answered</div>
        <div className='questions1'>
          <ResponsiveContainer width='100%' height='100%'>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey='quiz1' fill='#800500' minPointSize={0} name='Quiz 1' />
              <Bar dataKey='quiz2' fill='#006400' minPointSize={0} name='Quiz 2' />
              <Bar dataKey='quiz3' fill='#f5bd02' minPointSize={0} name='Quiz 3' />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className='minCtr'>
        <div className='title'>Total number of question answered</div>
        <div className='questions2'>
          <ResponsiveContainer width='100%' height='100%'>
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type='monotone'
                dataKey='total'
                stroke='#000'
                activeDot={{ r: 8 }}
                strokeWidth={2}
                name='Total Answered Questions'
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className='minCtr'>
        <div className='title'>Fastest Finger</div>
        <div className='questions3'>
          <ResponsiveContainer width='100%' height='100%'>
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type='monotone' dataKey='total' stroke='#000' activeDot={{ r: 8 }} strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className='minCtr'>
        <div className='title'>Average</div>
        <div className='questions4'>
          <ResponsiveContainer width='100%' height='100%'>
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type='monotone' dataKey='total' stroke='#000' activeDot={{ r: 8 }} strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Container>
  );
}

export default ProAnalytics;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  .title {
    font-weight: 700;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .minCtr {
    width: 100%;
  }

  .questions1 {
    width: 100%;
    height: 300px;
  }
  .questions2 {
    width: 100%;
    height: 300px;
  }

  .questions3 {
    width: 100%;
    height: 300px;
  }
  .questions4 {
    width: 100%;
    height: 300px;
  }
`;
