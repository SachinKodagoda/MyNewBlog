import { stock } from '@prisma/client';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Home: NextPage = () => {
  const [data, setData] = useState<stock[]>([]);
  const [supplierName, setsupplierName] = useState('');
  const [orderDate, setorderDate] = useState('');
  const [itemCode, setitemCode] = useState('');
  const [itemName, setitemName] = useState('');
  const [quanitity, setquanitity] = useState('');
  const [unitePrice, setunitePrice] = useState('');
  const [total, settotal] = useState('');

  const getstockData = () => {
    fetch('api/stock')
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  };

  useEffect(() => {
    getstockData();
  }, []);

  return (
    <Container>
      <div className='stock-container'>
        <form className='stock-form'>
          <div className='supdetail-form-body'>
            <div className='stockgroup'>
              <i className='fa fa-calendar-o' />
              <span className='stockspan'>supplier Name</span>
              <input
                className='supdetail-form-group_input'
                type='string'
                placeholder='your frist name'
                value={supplierName}
                onChange={e => {
                  setsupplierName(e.target.value);
                }}
              />
            </div>
            <div>
              <i className='fa fa-calendar-o' />
              <span className='stockspan'>Order Date</span>
              <input
                className='supdetail-form-group_input'
                type='Date'
                placeholder='Please Pick Start Date.'
                value={orderDate}
                onChange={e => {
                  setorderDate(e.target.value);
                }}
              />
            </div>
            <div className='stockgroup'>
              <i className='fa fa-calendar-o' />
              <span className='stockspan'>Item Code</span>
              <input
                className='supdetail-form-group_input'
                type='String'
                placeholder='aaaaa@gmail.com'
                value={itemCode}
                onChange={e => {
                  setitemCode(e.target.value);
                }}
              />
              <i className='fa fa-calendar-o' />
              <span className='stockspan'>Item Name</span>
              <input
                className='supdetail-form-group_input'
                type='int'
                placeholder='000000000V'
                value={itemName}
                onChange={e => {
                  setitemName(e.target.value);
                }}
              />
            </div>
            <div className='stockgroup'>
              <i className='fa fa-calendar-o' />
              <span className='stockspan'>Quanitity</span>
              <input
                className='supdetail-form-group_input'
                type='String'
                placeholder='boya'
                value={quanitity}
                onChange={e => {
                  setquanitity(e.target.value);
                }}
              />
              <i className='fa fa-calendar-o' />
              <span className='stockspan'>Unite Price</span>
              <input
                className='supdetail-form-group_input'
                type='int'
                placeholder='0123456789'
                value={unitePrice}
                onChange={e => {
                  setunitePrice(e.target.value);
                }}
              />
            </div>
            <div className='stockgroup'>
              <i className='fa fa-calendar-o' />
              <span className='stockspan'>Total</span>
              <input
                className='supdetail-form-group_input'
                type='string'
                placeholder='food'
                value={total}
                onChange={e => {
                  settotal(e.target.value);
                }}
              />
            </div>

            <div className='ordsupdetailer-form-search-btn'>
              <i className='fa fa-search' />
              <button
                className='set'
                onClick={async () => {
                  await fetch('api/stock', {
                    method: 'POST',
                    headers: {
                      'content-type': 'application/json',
                    },
                    body: JSON.stringify({
                      supplierName: supplierName,
                      orderDate: orderDate,
                      itemCode: itemCode,
                      itemName: itemName,
                      quanitity: quanitity,
                      unitePrice: unitePrice,
                      total: total,
                    }),
                  });
                  getstockData();
                }}
              >
                SUBMITE
              </button>
            </div>
          </div>
        </form>
      </div>
      <table>
        <thead>
          <tr>
            <th>item Id</th>
            <th>supplier Name</th>
            <th>Order Date</th>
            <th>Item Code</th>
            <th>Item Name</th>
            <th>Quanitity</th>
            <th>UnitePrice</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={`test-${i + 1}`}>
              <td>{item.itemId}</td>
              <td>{item.supplierName}</td>
              <td>{`${new Date(item.orderDate)}`}</td>
              <td>{item.itemCode}</td>
              <td>{item.itemName}</td>
              <td>{item.quanitity}</td>
              <td>{item.unitePrice}</td>
              <td>{item.total}</td>
              <td>
                <div
                  style={{ cursor: 'pointer' }}
                  onClick={async () => {
                    await fetch(`api/stock/${item.itemId}`, {
                      method: 'DELETE',
                    });
                    getstockData();
                  }}
                >
                  Delete
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  a {
    color: inherit;
    text-decoration: none;
  }

  .container {
    padding: 20px;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    font-size: 0.9em;
    min-width: 400px;
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  }

  thead > tr {
    background-color: #000;
    color: #fff;
    text-align: left;
    font-weight: bold;
    border: 1px solid #000;
  }

  td {
    padding: 8px;
    border-right: 1px solid #000;
    text-align: center;
  }

  td:last-child {
    border: none;
  }

  th {
    padding: 8px;
    text-align: center;
  }

  tbody > tr {
    border: 1px solid #000;
    border-bottom: 1px solid #000;
  }

  tbody > tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  tbody > tr:last-of-type {
    border-bottom: 2px solid #000;
  }

  .div1 {
    display: grid;
    grid-template-areas: 'left right';
    max-width: 900px;
  }
  .cal .title h1 {
    font-weight: bold;
    font-weight: 500;
    font-size: 40px;
    font-family: Bree Serif;
    color: #fff;
    line-height: 40px;
    background: #000000;
    text-transform: uppercase;
    display: inline-block;
    padding: 0px 10px;
    margin-left: 50%;
  }

  .supdetail-container {
    height: auto;
    width: 100%;
    padding: 16px;
    background: #fbfbfb;
    border: 1px solid #000;
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    margin-bottom: 25px;
  }

  .stock-container {
    align-items: center;
    background: #d8aa96;
    color: rgba(0, 0, 0, 0.8);
    display: grid;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 400;
    height: 100vh;
    justify-items: center;
    weight: 100vw;
  }

  .supdetail-form {
    background: lighten(#f7b1ab, 5%);
    display: grid;
    grid-template-areas: '.' '.';
    width: 750px;
  }

  .stock-form {
    background: lighten(#ec4637, 5%);
    display: grid;
    grid-template-areas: '.' '.';
    width: 750px;
  }

  @media only screen and (min-width: 769px) {
    .order-form {
      width: 400px;
      margin: auto;
    }
  }

  .supdetail-form-head {
    background: #f7b1ab;
    overflow: hidden;
    padding: 25px 0 25px 0;
    position: relative;
    text-align: center;
    width: 400px;
  }

  .stock-form-head {
    background: #f7b1ab;
    overflow: hidden;
    padding: 25px 0 25px 0;
    position: relative;
    text-align: center;
    width: 400px;
  }

  .supright {
    background: #f79e95;
    display: grid;
    width: 400px;
    text-align: center;
    padding: 25px 0 25px 0;
    overflow: hidden;
  }

  .supdetail-form-body {
    padding: 16px;
  }

  .supdetail-form-group {
    width: 100%;
    padding: 0 8px;
    margin-bottom: 16px;
  }

  .supdetail-form-group_input {
    width: 100%;
    display: block;
    margin: 0 auto;
    padding: 8px;
    border: none;
    border-bottom: 1px solid #ccc;
    background-color: #fff;
  }

  .supdetail-form-group_select {
    width: 100%;
    display: block;
    margin: 0 auto;
    padding: 8px;
    border: none;
    border-bottom: 1px solid #ccc;
    background-color: #fff;
  }

  .supdetail-form-search-btn {
    width: 200px;
    margin: auto;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    background: #ff6239;
    color: #fff;
    border-radius: 4px;
  }

  .supdetail-btn-margin {
    padding-left: 10px;
  }

  .stockspan {
    font-size: 20px;
    float: left;
    width: 100%;
    display: block;
    margin-bottom: 5px;
    margin-top: 15px;
    margin-bottom: 10px;
  }

  .ordsupdetailer-form-search-btn > button {
    border: none;
    border-radius: 50%;
    height: 50px;
    margin-right: 10px;
    outline: none;
    width: 100px;
  }

  .stockgroup > input {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    height: 38px;
    line-height: 38px;
    padding-left: 5px;
  }

  .set {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
  }
`;
