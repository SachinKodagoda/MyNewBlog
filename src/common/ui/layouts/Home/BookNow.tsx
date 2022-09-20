import { ChangeEvent, useContext, useEffect, useState } from 'react';

import { PayPalButtons } from '@paypal/react-paypal-js';
import { MealType, RoomType } from '@prisma/client';
import { differenceInDays, eachWeekendOfInterval } from 'date-fns';
import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import styled from 'styled-components';

import Welcome from '@components/Animated/Welcome';
import Button from '@components/Buttons/Button';
import DateFieldInput from '@components/FormElements/fields/DateFieldInput';
import NumberInput from '@components/FormElements/fields/NumberInput';
import SelectBoxInput from '@components/FormElements/fields/SelectBoxInput';
import TextInput from '@components/FormElements/fields/TextInput';
import Modal from '@components/Other/Modal';
import ScrollRef from '@components/ScrollRef';
import { UserContext } from '@ctx/UserContext';
import useDebounce from '@hooks/useDebounce';
import { roomTypeOpt } from '@lib/optionLib';
import { bookingSchema, initBookingSchema, TBookingSchema } from '@schemas/bookingSchema';
import { colors, devices } from '@theme/baseTheme';

function BookNow(): JSX.Element {
  const { uData } = useContext(UserContext);
  const router = useRouter();
  const [totalPrice, setTotalPrice] = useState(0);
  const [offerVal, setOfferVal] = useState('');
  const debouncedOfferVal = useDebounce(offerVal, 250) as string;
  const [modelOpened, setModelOpened] = useState(false);
  const [paid, setPaid] = useState(true);
  const [loading, setLoading] = useState(true);
  const [offerPercentage, setOfferPercentage] = useState(0);
  const [referenceCode, setReferenceCode] = useState('');
  const [offerId, setOfferId] = useState(null);

  const calculateNumberOfPeople = (selected: RoomType, numberOfRooms: number) => {
    if (selected === RoomType.single) {
      return numberOfRooms * 1;
    }
    if (selected === RoomType.double) {
      return numberOfRooms * 2;
    }
    if (selected === RoomType.deluxe) {
      return numberOfRooms * 2;
    }
    return numberOfRooms * 1;
  };

  const getNumberOfPeople = (selected: RoomType) => {
    if (selected === RoomType.single) {
      return 1;
    }
    if (selected === RoomType.double) {
      return 2;
    }
    if (selected === RoomType.deluxe) {
      return 2;
    }
    return 1;
  };

  const getRoomPrice = (selected: RoomType, numberOfRooms: number) => {
    if (selected === RoomType.single) {
      return numberOfRooms * 33;
    }
    if (selected === RoomType.double) {
      return numberOfRooms * 66;
    }
    if (selected === RoomType.deluxe) {
      return numberOfRooms * 99;
    }
    return numberOfRooms * 33;
  };

  const getOneRoomPrice = (selected: RoomType) => {
    if (selected === RoomType.single) {
      return 33;
    }
    if (selected === RoomType.double) {
      return 66;
    }
    if (selected === RoomType.deluxe) {
      return 99;
    }
    return 33;
  };

  const getMealPrice = (selected: MealType) => {
    if (selected === MealType.full_board) {
      return 10;
    }
    return 5;
  };

  const getOfferData = async (offerCode: string) => {
    setLoading(true);
    fetch(`/api/dashboard?type=offer_get`, {
      body: JSON.stringify({
        offerCode,
      }),
      headers: {
        authorization: `${process.env.JWT}`,
        'content-type': 'application/json',
      },
      method: 'POST',
    })
      .then(res => res.json())
      .then(async res => {
        if (res.data.length > 0 && res.success === 1) {
          setOfferPercentage(res.data[0].discount);
          setOfferId(res.data[0].id);
        } else {
          setOfferPercentage(0);
          setOfferId(null);
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const setBooking = async (data: TBookingSchema) => {
    setLoading(true);
    fetch(`/api/dashboard?type=booking_set`, {
      body: JSON.stringify({
        checkIn: data.checkIn,
        checkOut: data.checkOut,
        meal: data.meal,
        note: data.note,
        numberOfRooms: data.numberOfRooms,
        offerId,
        roomType: data.roomType,
        totalPayment: totalPrice,
        userEmail: uData?.email,
      }),
      headers: {
        authorization: `${process.env.JWT}`,
        'content-type': 'application/json',
      },
      method: 'POST',
    })
      .then(res => res.json())
      .then(async res => {
        toast.success(res.message);
        setReferenceCode(`0000${res.data.id}`);
        setLoading(false);
      })
      .catch(res => {
        toast.error(res.message);
        setReferenceCode('');
        setLoading(false);
      });
  };

  useEffect(() => {
    if (debouncedOfferVal.trim().length > 0) {
      getOfferData(debouncedOfferVal);
    }
  }, [debouncedOfferVal]);

  const getFinalPrice = (roomPrice: number, mealPrice: number, weekend: number, _offerPercentage: number) =>
    (roomPrice + mealPrice + weekend) * (1 - 0.01 * _offerPercentage);
  const getDeductionVal = (roomPrice: number, mealPrice: number, weekend: number, _offerPercentage: number) =>
    (roomPrice + mealPrice + weekend) * (0.01 * _offerPercentage);

  const getDateDifference = (outDate: Date, inDate: Date) => {
    if (outDate && inDate) {
      return differenceInDays(outDate, inDate);
    }
    return -1;
  };

  const getNoOfWeekends = (outDate: Date, inDate: Date) => {
    if (outDate && inDate) {
      return eachWeekendOfInterval({
        end: outDate,
        start: inDate,
      }).length;
    }
    return 0;
  };

  return (
    <Container>
      <ScrollRef name='BookNow' />
      <OrderContainer>
        <Formik
          initialValues={initBookingSchema}
          validationSchema={bookingSchema}
          onSubmit={data => {
            setBooking(data);
            // onModalSubmitHandler(data, formState);
          }}>
          {({ errors, handleSubmit, setFieldValue, values }) => (
            <Form onSubmit={handleSubmit} className='order-form'>
              <OrderFormHead>
                <span>{uData?.email ? `Booking for (${uData?.email})` : 'BOOK NOW'}</span>
              </OrderFormHead>
              {/* <pre>{JSON.stringify(values, null, 4)}</pre>
              <pre>{JSON.stringify(errors, null, 4)}</pre> */}
              <OrderFormBody>
                <TwoColumnForm>
                  <FormElementSp>
                    <Field
                      name='checkIn'
                      component={DateFieldInput}
                      placeholder='Check In Date'
                      label='Check In (after 2.00 p.m)'
                      value={values.checkIn}
                      setFieldValue={setFieldValue}
                      required
                      alignment='center'
                    />
                  </FormElementSp>
                  <FormElementSp>
                    <Field
                      name='checkOut'
                      component={DateFieldInput}
                      placeholder='Check Out Date'
                      label='Check Out (before 12.00 a.m)'
                      value={values.checkOut}
                      setFieldValue={setFieldValue}
                      required
                      alignment='right'
                    />
                  </FormElementSp>
                  <FormElement>
                    <Field
                      name='roomType'
                      component={SelectBoxInput}
                      label='Type :'
                      placeholder='Type'
                      value={values.roomType}
                      selectFirst={false}
                      options={roomTypeOpt}
                      setFieldValue={setFieldValue}
                      required
                    />
                  </FormElement>
                  <FormElement>
                    <Field
                      name='numberOfRooms'
                      component={NumberInput}
                      placeholder='Rooms'
                      label='Number Of Rooms'
                      value={values.numberOfRooms}
                      setFieldValue={setFieldValue}
                      required
                    />
                  </FormElement>
                  <FormElement>
                    <Field
                      name='offerCode'
                      component={TextInput}
                      placeholder='Offer Code'
                      unique={offerPercentage}
                      uniqueShow={
                        debouncedOfferVal.trim().length > 0 &&
                        !(errors.offerCode || `${errors.offerCode || ''}`.trim().length > 0)
                      }
                      label='Offer Code :'
                      value={values.offerCode}
                      required
                      onValChange={(e: ChangeEvent<HTMLInputElement>) => setOfferVal(e.target.value)}
                    />
                  </FormElement>
                  <FormElement>
                    <Field
                      name='note'
                      component={TextInput}
                      placeholder='Note'
                      label='Note:'
                      value={values.note}
                      required
                    />
                  </FormElement>
                </TwoColumnForm>
                <RadioGroup role='group' aria-labelledby='board-radio-group' color={colors.black}>
                  Meal Type :
                  <RadioLabel>
                    <Field
                      className='themeRadio'
                      type='radio'
                      name='meal'
                      value='full_board'
                      onClick={() => {
                        setFieldValue('meal', 'full_board');
                      }}
                    />
                    Full Board
                  </RadioLabel>
                  <RadioLabel>
                    <Field
                      className='themeRadio'
                      type='radio'
                      name='meal'
                      value='half_board'
                      onClick={() => {
                        setFieldValue('meal', 'half_board');
                      }}
                    />
                    Half Board
                  </RadioLabel>
                </RadioGroup>
                <Total>
                  <Title>Number Of Days</Title>
                  <Price>
                    {getDateDifference(values.checkOut as Date, values.checkIn as Date) > 0
                      ? getDateDifference(values.checkOut as Date, values.checkIn as Date)
                      : '???'}
                  </Price>
                  <Title>
                    Number Of People ({getNumberOfPeople(values.roomType as RoomType)} * {values.numberOfRooms})
                  </Title>
                  <Price>{calculateNumberOfPeople(values.roomType as RoomType, values.numberOfRooms as number)}</Price>
                  <Title>
                    Room Price ({getOneRoomPrice(values.roomType as RoomType)} * {values.numberOfRooms})
                  </Title>
                  <Price>
                    + {getRoomPrice(values.roomType as RoomType, values.numberOfRooms as number).toFixed(2)} USD
                  </Price>
                  <Title>
                    Meal Price ({getMealPrice(values.meal as MealType).toFixed(2)} *{' '}
                    {getDateDifference(values.checkOut as Date, values.checkIn as Date) > 0
                      ? getDateDifference(values.checkOut as Date, values.checkIn as Date)
                      : '???'}{' '}
                    * {calculateNumberOfPeople(values.roomType as RoomType, values.numberOfRooms as number)})
                  </Title>
                  <Price>
                    +{' '}
                    {getDateDifference(values.checkOut as Date, values.checkIn as Date) > 0
                      ? +getDateDifference(values.checkOut as Date, values.checkIn as Date) *
                        +getMealPrice(values.meal as MealType).toFixed(2) *
                        +calculateNumberOfPeople(values.roomType as RoomType, values.numberOfRooms as number)
                      : '???'}{' '}
                    USD
                  </Price>
                  <Title>
                    Number Of Weekends (1.2 * {getNoOfWeekends(values.checkOut as Date, values.checkIn as Date)})
                  </Title>
                  <Price>+ {1.2 * getNoOfWeekends(values.checkOut as Date, values.checkIn as Date)} USD</Price>
                  {offerPercentage > 0 && (
                    <>
                      <Title>
                        Offer Code {offerVal.trim().length > 0 ? `(${offerVal})` : ''} - {offerPercentage}%
                      </Title>
                      <Price>
                        -{' '}
                        {getDeductionVal(
                          getRoomPrice(values.roomType as RoomType, values.numberOfRooms as number),
                          getDateDifference(values.checkOut as Date, values.checkIn as Date) > 0
                            ? +getDateDifference(values.checkOut as Date, values.checkIn as Date) *
                                +getMealPrice(values.meal as MealType).toFixed(2) *
                                +calculateNumberOfPeople(values.roomType as RoomType, values.numberOfRooms as number)
                            : 0,
                          getNoOfWeekends(values.checkOut as Date, values.checkIn as Date) * 1.2,
                          offerPercentage
                        ).toFixed(2)}{' '}
                        USD
                      </Price>
                    </>
                  )}
                </Total>
                {getDateDifference(values.checkOut as Date, values.checkIn as Date) <= 0 && (
                  <EMsg>Ending date should be grater than Starting Date</EMsg>
                )}
                <FormElement>
                  {uData?.email ? (
                    <FormBtn>
                      <Button
                        arrow={{ size: 20 }}
                        type='normal'
                        text={
                          (errors.numberOfRooms && errors.numberOfRooms?.trim().length > 0) ||
                          getDateDifference(values.checkOut as Date, values.checkIn as Date) <= 0
                            ? 'Fix the error please'
                            : `Pay ${getFinalPrice(
                                getRoomPrice(values.roomType as RoomType, values.numberOfRooms as number),
                                getDateDifference(values.checkOut as Date, values.checkIn as Date) > 0
                                  ? +getDateDifference(values.checkOut as Date, values.checkIn as Date) *
                                      +getMealPrice(values.meal as MealType).toFixed(2) *
                                      +calculateNumberOfPeople(
                                        values.roomType as RoomType,
                                        values.numberOfRooms as number
                                      )
                                  : 0,
                                getNoOfWeekends(values.checkOut as Date, values.checkIn as Date) * 1.2,
                                offerPercentage
                              ).toFixed(2)} USD And Reserve Now!`
                        }
                        isDisabled={false}
                        height='38px'
                        onClickHandler={() => {
                          if (
                            !(
                              errors.numberOfRooms &&
                              errors.numberOfRooms?.trim().length > 0 &&
                              getDateDifference(values.checkOut as Date, values.checkIn as Date) > 0
                            ) &&
                            uData?.email
                          ) {
                            setModelOpened(true);
                            const totRoomPrice = +getFinalPrice(
                              getRoomPrice(values.roomType as RoomType, values.numberOfRooms as number),
                              getDateDifference(values.checkOut as Date, values.checkIn as Date) > 0
                                ? +getDateDifference(values.checkOut as Date, values.checkIn as Date) *
                                    +getMealPrice(values.meal as MealType).toFixed(2) *
                                    +calculateNumberOfPeople(
                                      values.roomType as RoomType,
                                      values.numberOfRooms as number
                                    )
                                : 0,
                              getNoOfWeekends(values.checkOut as Date, values.checkIn as Date) * 1.2,
                              offerPercentage
                            ).toFixed(2);
                            setTotalPrice(totRoomPrice);
                            setPaid(false);
                          }
                        }}
                      />
                    </FormBtn>
                  ) : (
                    <LoginMsg>
                      <Button
                        type='normal'
                        isDisabled={false}
                        text='First Login Into the System'
                        onClickHandler={() => {
                          router.push('/login');
                        }}
                      />
                    </LoginMsg>
                  )}
                </FormElement>
              </OrderFormBody>
              <Modal
                onClickOutside={() => {
                  setModelOpened(false);
                }}
                modalOpen={modelOpened}>
                <StripeCtr>
                  {!paid ? (
                    <>
                      <div>Total : {totalPrice.toFixed(2)} USD</div>
                      <PayPalButtons
                        createOrder={(data, actions) => {
                          return actions.order.create({
                            purchase_units: [
                              {
                                amount: {
                                  currency_code: 'USD',
                                  value: totalPrice.toFixed(2),
                                },
                              },
                            ],
                          });
                        }}
                        onApprove={async (data, actions) => {
                          if (actions) {
                            actions?.order?.capture().then(details => {
                              const name = details?.payer?.name?.given_name;
                              toast.success(`Transaction completed by ${name}`);
                              handleSubmit();
                              setPaid(true);
                            });
                          }
                        }}
                      />
                    </>
                  ) : (
                    <Success>
                      <Welcome />
                      <WelcomeMessage1>Successfully Paid! Thank You</WelcomeMessage1>
                      {referenceCode.trim().length > 0 ? (
                        <div>Your reference is: {referenceCode}</div>
                      ) : (
                        <div>If any issue then Call Us 0765742200</div>
                      )}
                    </Success>
                  )}
                </StripeCtr>
              </Modal>
            </Form>
          )}
        </Formik>
      </OrderContainer>
    </Container>
  );
}

export default BookNow;

// Styles 👕🧦👗🧣🧥👔 -->

const Container = styled.div`
  position: relative;
  height: auto;
  padding: 0 16px;
  padding-top: 16px;
  z-index: 10;
  .order-container {
  }
  .order-form {
    height: auto;
    background: #fff;
    padding: 0 0 20px 0;
    border: 1px solid #000;
  }
  @media only screen and (min-width: 769px) {
    .order-form {
      width: max-content;
      margin: auto;
    }
  }
`;

const OrderContainer = styled.div`
  height: auto;
  width: 100%;
  padding: 16px;
  background: #fbfbfb;
  border: 1px solid #000;
  background: url(/images/home/back1.jpg);
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
`;

const OrderFormHead = styled.div`
  height: 46px;
  line-height: 46px;
  background: #ff6239;
  font-weight: 400;
  font-size: 20px;
  color: #fff;
  text-align: center;
`;

const OrderFormBody = styled.div`
  padding: 16px 48px;
`;

const FormElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormElementSp = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const FormBtn = styled.div`
  width: 100%;
  margin-top: 16px;
  position: relative;
`;

const Total = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 20px;
  row-gap: 5px;
  width: 100%;
  margin: 0 auto;
  border: 1px solid ${colors.black};
  padding: 8px;
  border-radius: 4px;
`;

const Title = styled.div``;

const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const TwoColumnForm = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 20px;
  row-gap: 5px;
  @media ${devices.minDesktopSM} {
    grid-template-columns: 1fr 1fr;
  }
`;

const StripeCtr = styled.div`
  min-width: 400px;
`;

const Success = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${colors.red9};
  font-weight: 600;
`;

const RadioGroup = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 4px 0;
  z-index: 1;
  position: relative;
  .themeRadio {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: inline-block;
    width: 20px;
    height: 20px;
    padding: 2px;
    background-clip: content-box;
    border: 2px solid ${colors.black};
    background-color: transparent;
    border-radius: 50%;
    cursor: pointer;
  }
  .themeRadio:checked {
    background-color: ${p => p.color};
  }
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const WelcomeMessage1 = styled.div``;

const EMsg = styled.div`
  color: ${colors.red9};
  padding-top: 10px;
`;

const LoginMsg = styled.div`
  padding-top: 20px;
  position: relative;
  z-index: 2;
`;
