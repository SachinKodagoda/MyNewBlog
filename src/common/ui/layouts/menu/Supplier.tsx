import { supplier } from '@prisma/client';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import { number, object, string, TypeOf } from 'yup';

const Home: NextPage = () => {
  const [data, setData] = useState<supplier[]>([]);

  const [formState, setFormState] = useState<'create' | 'update'>('create');
  const initialValues: TypeOf<typeof SupplierSchema> = {
    supplierId: null,
    firstName: '',
    lastName: '',
    supplierEmail: '',
    supplierNIC: '',
    CompanyName: '',
    PhoneNumber: '',
    category: '',
  };
  const [initialData, setInitialData] = useState({ ...initialValues });

  const getOfferData = () => {
    fetch('/api/dashboard?type=supplier_get', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `${process.env.JWT}`,
      },
    })
      .then(res => res.json())
      .then(res => {
        setData(res.data);
      })
      .catch(() => {
        toast.error('Something Went Wrong. Try again!');
      });
  };

  const deleteAUser = (supplierId: number) => {
    fetch('/api/dashboard?type=supplier_delete_one', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `${process.env.JWT}`,
      },
      body: JSON.stringify({
        supplierId: supplierId,
      }),
    })
      .then(res => res.json())
      .then(() => {
        getOfferData();
      })
      .catch(() => {
        toast.error('Something Went Wrong. Try again!');
      });
  };

  const deleteAllUsers = () => {
    fetch('/api/dashboard?type=supplier_delete_all', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `${process.env.JWT}`,
      },
    })
      .then(res => res.json())
      .then(() => {
        getOfferData();
      })
      .catch(() => {
        toast.error('Something Went Wrong. Try again!');
      });
  };

  const SupplierSchema = object({
    supplierId: number().nullable(),
    firstName: string().required('First Name is required'),
    lastName: string().required('Last Name is required'),
    supplierEmail: string().required('Email is required').email('Must be a valid email'),
    supplierNIC: string()
      .required()
      .matches(/^[0-9]{9}[x|X|v|V]$/, 'It is not a valid NIC'),
    CompanyName: string().required(),
    PhoneNumber: string()
      .required()
      .matches(/^(?:7|0|(?:\+94))[0-9]{9,10}$/, 'It is not a valid Phone Number'),
    category: string().required(),
  });

  const onModalSubmitHandler = (data: TypeOf<typeof SupplierSchema>, formState: 'create' | 'update') => {
    fetch(`/api/dashboard?type=supplier_${formState}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `${process.env.JWT}`,
      },
      body: JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        supplierEmail: data.supplierEmail,
        supplierNIC: data.supplierNIC,
        CompanyName: data.CompanyName,
        PhoneNumber: data.PhoneNumber,
        category: data.category,
        ...(data?.supplierId && { supplierId: data.supplierId }),
      }),
    })
      .then(res => res.json())
      .then(res => {
        toast.success(res.message);
        getOfferData();
      })
      .catch(() => {
        toast.error('Something Went Wrong. Try again!');
      });
  };

  useEffect(() => {
    getOfferData();
  }, []);

  return (
    <Container>
      <InnerContainer>
        <div className='supdetail-container'>
          <Formik
            initialValues={initialData}
            validationSchema={SupplierSchema}
            enableReinitialize
            onSubmit={data => {
              onModalSubmitHandler(data, formState);
            }}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit} className='supdetail-form'>
                <div className='supdetail-form-body'>
                  {/* Form Grop ---> */}
                  <div className='supdetail-form-group'>
                    {/* Form Item 🔥 ---> */}
                    <i className='fa fa-calendar-o' />
                    <span>Supplier First Name</span>
                    <Field
                      type='text'
                      name='firstName'
                      placeholder='Your First Name'
                      className='supdetail-form-group_input'
                    />
                    <EMsg>
                      <ErrorMessage name='firstName' className='eMessage' />
                    </EMsg>
                    {/* Form Item 🔥 ---> */}
                    <i className='fa fa-calendar-o' />
                    <span>Supplier Last Name</span>
                    <Field
                      type='text'
                      name='lastName'
                      placeholder='Your Last Name'
                      className='supdetail-form-group_input'
                    />
                    <EMsg>
                      <ErrorMessage name='lastName' className='eMessage' />
                    </EMsg>
                  </div>
                  {/* Form Group ---> */}
                  <div className='supdetail-form-group'>
                    {/* Form Item 🔥 ---> */}
                    <i className='fa fa-calendar-o' />
                    <span>Supplier email</span>
                    <Field
                      type='email'
                      name='supplierEmail'
                      placeholder='aaaaa@gmail.com'
                      className='supdetail-form-group_input'
                    />
                    <EMsg>
                      <ErrorMessage name='supplierEmail' className='eMessage' />
                    </EMsg>
                    {/* Form Item 🔥 ---> */}
                    <i className='fa fa-calendar-o' />
                    <span>Supplier NIC Number</span>
                    <Field
                      type='text'
                      name='supplierNIC'
                      placeholder='000000000V'
                      className='supdetail-form-group_input'
                    />
                    <EMsg>
                      <ErrorMessage name='supplierNIC' className='eMessage' />
                    </EMsg>
                  </div>
                  {/* Form Group ---> */}
                  <div className='supdetail-form-group'>
                    {/* Form Item 🔥 ---> */}
                    <i className='fa fa-calendar-o' />
                    <span>Company Name</span>
                    <Field
                      type='text'
                      name='CompanyName'
                      placeholder='000000000V'
                      className='supdetail-form-group_input'
                    />
                    <EMsg>
                      <ErrorMessage name='CompanyName' className='eMessage' />
                    </EMsg>
                    {/* Form Item 🔥 ---> */}
                    <i className='fa fa-calendar-o' />
                    <span>Supplier Phone Number</span>
                    <Field
                      type='text'
                      name='PhoneNumber'
                      placeholder='0123456789'
                      className='supdetail-form-group_input'
                    />
                    <EMsg>
                      <ErrorMessage name='PhoneNumber' className='eMessage' />
                    </EMsg>
                  </div>
                  {/* Form Group ---> */}
                  <div className='supdetail-form-group'>
                    {/* Form Item 🔥 ---> */}
                    <i className='fa fa-calendar-o' />
                    <span>Category</span>
                    <Field type='text' name='category' placeholder='Food' className='supdetail-form-group_input' />
                    <EMsg>
                      <ErrorMessage name='category' className='eMessage' />
                    </EMsg>
                  </div>
                  <div className='ordsupdetailer-form-search-btn'>
                    {/* Form Item 🔥 ---> */}
                    <i className='fa fa-search' />
                    <div
                      className='supdetail-btn-margin'
                      onClick={() => {
                        setFormState('create');
                        handleSubmit();
                      }}
                    >
                      Create
                    </div>
                    <div
                      className='supdetail-btn-margin'
                      onClick={() => {
                        deleteAllUsers();
                      }}
                    >
                      Delete All
                    </div>
                    {formState === 'update' && (
                      <div
                        className='supdetail-btn-margin'
                        onClick={() => {
                          setFormState('update');
                          handleSubmit();
                        }}
                      >
                        Update
                      </div>
                    )}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        <table>
          <thead>
            <tr>
              <th>SupplierId</th>
              <th>Supplier first Name</th>
              <th>Supplier Last Name</th>
              <th>supplier Email</th>
              <th>Supplier NIC</th>
              <th>Company Name</th>
              <th>Phone Number</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={`test-${i + 1}`}>
                <td>{item.supplierId}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.supplierEmail}</td>
                <td>{item.supplierNIC}</td>
                <td>{item.CompanyName}</td>
                <td>{item.PhoneNumber}</td>
                <td>{item.category}</td>
                <td>
                  <BtnCtr>
                    <FormBtn
                      onClick={() => {
                        deleteAUser(item.supplierId);
                      }}
                    >
                      Delete
                    </FormBtn>
                    <FormBtn
                      onClick={() => {
                        setFormState('update');
                        setInitialData({
                          supplierId: item.supplierId,
                          firstName: item.firstName,
                          lastName: item.lastName,
                          supplierEmail: item.supplierEmail,
                          supplierNIC: item.supplierNIC,
                          CompanyName: item.CompanyName,
                          PhoneNumber: item.PhoneNumber,
                          category: item.category,
                        });
                      }}
                    >
                      Update
                    </FormBtn>
                  </BtnCtr>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </InnerContainer>
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
    width: 100vw;
  }

  .supdetail-form {
    background: lighten(#f7b1ab, 5%);
    display: grid;
    grid-template-areas: '.' '.';
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
    width: 100%;
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
    background-color: #fbfbfb;
  }

  .supdetail-form-group_select {
    width: 100%;
    display: block;
    margin: 0 auto;
    padding: 8px;
    border: none;
    border-bottom: 1px solid #ccc;
    background-color: #fbfbfb;
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
    padding: 10px 20px;
    border-radius: 4px;
    background: black;
    color: white;
    display: inline-block;
    cursor: pointer;
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

  .ordsupdetailer-form-search-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 10px;
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

const InnerContainer = styled.div`
  padding: 20px;
  margin-top: 25px;
`;

const EMsg = styled.div`
  color: red;
  margin: 4px 0;
`;

const FormBtn = styled.div`
  cursor: pointer;
  border-radius: 4px;
  background: black;
  color: white;
  width: 100px;
`;

const BtnCtr = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
