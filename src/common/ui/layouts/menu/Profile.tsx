import Welcome from '@components/Animated/Welcome';
import Button from '@components/Buttons/Button';
import PhoneNumberInput from '@components/FormElements/fields/PhoneNumberInput';
import SelectBoxInput from '@components/FormElements/fields/SelectBoxInput';
import TextInput from '@components/FormElements/fields/TextInput';
import { UserContext } from '@ctx/UserContext';
import female from '@images/dashboard/female.png';
import male from '@images/dashboard/male.png';
import other from '@images/dashboard/other.png';
import { onlineStatusOpt } from '@lib/optionLib';
import { initUserUpdate, TUserUpdateSchema, userUpdateSchema } from '@schemas/userSchema';
import ArrowRight from '@svg/feather/ArrowRight';
import ArrowRightCircle from '@svg/feather/ArrowRightCircle';
import AtSign from '@svg/feather/AtSign';
import Camera from '@svg/feather/Camera';
import Chrome from '@svg/feather/Chrome';
import Edit from '@svg/feather/Edit';
import Eye from '@svg/feather/Eye';
import EyeOff from '@svg/feather/EyeOff';
import Facebook from '@svg/feather/Facebook';
import Github from '@svg/feather/Github';
import Globe from '@svg/feather/Globe';
import Instagram from '@svg/feather/Instagram';
import Twitter from '@svg/feather/Twitter';
import User from '@svg/feather/User';
import { colors, devices } from '@theme/baseTheme';
import { TRoute } from '@ts/common';
import { format } from 'date-fns';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import styled from 'styled-components';

type TProps = { rType: TRoute };
function Profile({ rType }: TProps): JSX.Element {
  const [loading, setLoading] = useState(false);
  const [initialData, setInitialData] = useState({ ...initUserUpdate });
  const [showPass, setShowPass] = useState(false);
  const { uData } = useContext(UserContext);

  const setUserDetails = async (data: TUserUpdateSchema) => {
    if (uData?.id) {
      setLoading(true);
      fetch(`/api/dashboard?type=user_update`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: `${process.env.JWT}`,
        },
        body: JSON.stringify(data),
      })
        .then(res => res.json())
        .then(async res => {
          if (res.error) {
            setLoading(false);
            toast.error(res?.message || 'Something Went Wrong. Try again!');
          } else {
            toast.success(res.message);
            setInitialData({
              id: res.data.id || '',
              address: res.data.address || '',
              createdAt: res.data.createdAt || '',
              email: res.data.email || '',
              fName: res.data.fName || '',
              lName: res.data.lName || '',
              mobileNo: res.data.mobileNo || '',
              password: res.data.password || '',
              role: res.data.role || '',
              updatedAt: res.data.updatedAt || '',
              website: res.data.website || '',
              gitHub: res.data.gitHub || '',
              twitter: res.data.twitter || '',
              instagram: res.data.instagram || '',
              facebook: res.data.facebook || '',
              gender: res.data.gender || '',
              onlineStatus: res.data.onlineStatus || '',
            });
          }
          setLoading(false);
        })
        .catch(res => {
          setLoading(false);
        });
    }
  };

  const getUserDetails = async () => {
    if (uData?.id) {
      setLoading(true);
      fetch(`/api/dashboard?type=user_read`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: `${process.env.JWT}`,
        },
        body: JSON.stringify({
          id: uData.id,
        }),
      })
        .then(res => res.json())
        .then(async res => {
          setInitialData({
            id: res.data.id || '',
            address: res.data.address || '',
            createdAt: res.data.createdAt || '',
            email: res.data.email || '',
            fName: res.data.fName || '',
            lName: res.data.lName || '',
            mobileNo: res.data.mobileNo || '',
            password: res.data.password || '',
            role: res.data.role || '',
            updatedAt: res.data.updatedAt || '',
            website: res.data.website || '',
            gitHub: res.data.gitHub || '',
            twitter: res.data.twitter || '',
            instagram: res.data.instagram || '',
            facebook: res.data.facebook || '',
            gender: res.data.gender || '',
            onlineStatus: res.data.onlineStatus || '',
          });
          setLoading(false);
        })
        .catch(res => {
          setLoading(false);
        });
    }
  };
  useEffect(() => {
    getUserDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uData]);

  const getBarColor = (value: number): string => {
    if (value > 75) {
      return colors.green9;
    } else if (value > 65) {
      return colors.green9;
    } else if (value > 50) {
      return colors.yellow9;
    } else if (value > 30) {
      return colors.yellow9;
    } else {
      return colors.red9;
    }
  };

  const keyArr = Object.keys(initialData);
  const percentage =
    (keyArr.map(key => initialData[key]).filter(val => `${val}`.trim().length > 0).length * 100) / keyArr.length;

  const getGenderDefaultImage = (gender: string) => {
    if (gender === 'male') {
      return male;
    } else if (gender === 'female') {
      return female;
    } else {
      return other;
    }
  };

  const getOnlineLightColor = (color: string) => {
    switch (color) {
      case 'available':
        return colors.green0;
      case 'busy':
        return colors.red0;
      case 'away':
        return colors.yellow0;
      case 'offline':
        return colors.gray0;
      default:
        return colors.gray0;
    }
  };
  const getOnlineMiddleColor = (color: string) => {
    switch (color) {
      case 'available':
        return colors.green2;
      case 'busy':
        return colors.red2;
      case 'away':
        return colors.yellow2;
      case 'offline':
        return colors.gray2;
      default:
        return colors.gray2;
    }
  };

  const getOnlineDarkColor = (color: string) => {
    switch (color) {
      case 'available':
        return colors.green9;
      case 'busy':
        return colors.red9;
      case 'away':
        return colors.yellow9;
      case 'offline':
        return colors.gray9;
      default:
        return colors.gray9;
    }
  };

  return (
    <Container>
      <Breadcrumb color={getOnlineLightColor(initialData.onlineStatus)}>
        <FirstItems color={getOnlineDarkColor(initialData.onlineStatus)}>
          <Globe className='colorPicker' />
          Dashboard
          <ArrowRight />
          <User className='colorPicker' />
          Profile
        </FirstItems>
        <TwinShield color={getOnlineDarkColor(initialData.onlineStatus)}>TWIN-SHIELD</TwinShield>
      </Breadcrumb>
      <Formik
        initialValues={initialData}
        enableReinitialize
        validationSchema={userUpdateSchema}
        onSubmit={data => {
          setUserDetails(data);
        }}
      >
        {({ values, handleSubmit, setFieldValue, errors }) => (
          <Form onSubmit={handleSubmit} autoComplete='off'>
            <InnerCtr>
              <TwoColumnRow>
                <ProfileCard color={getOnlineLightColor(initialData.onlineStatus)}>
                  <ProfileImageOuter>
                    <ProfileImage color={getOnlineDarkColor(initialData.onlineStatus)}>
                      <Image src={getGenderDefaultImage(initialData.gender)} alt='workspace' />
                    </ProfileImage>
                    <CameraIcon>
                      <Camera className='camera' />
                    </CameraIcon>
                  </ProfileImageOuter>
                  <UserName>
                    {initialData.fName} {initialData.lName}
                  </UserName>
                  <Role>
                    A <Capitalized data-cy='dashboard-userType'>{initialData.role}</Capitalized> of Twin Shield
                  </Role>
                  <Address>{initialData.address ? initialData.address : '- Address is not set yet -'}</Address>
                  <StatusBtn>
                    <Deactivate color={getOnlineDarkColor(initialData.onlineStatus)}>Deactivate</Deactivate>
                    <Status>
                      <Field
                        name='onlineStatus'
                        component={SelectBoxInput}
                        placeholder='Online Status'
                        value={values.onlineStatus}
                        selectFirst
                        options={onlineStatusOpt}
                        setFieldValue={(field: string, value: any) => {
                          setFieldValue(field, value);
                          handleSubmit();
                        }}
                        required
                        noFixed={false}
                      />
                    </Status>
                  </StatusBtn>
                  <RadioGroup
                    role='group'
                    aria-labelledby='gender-radio-group'
                    color={getOnlineDarkColor(initialData.onlineStatus)}
                  >
                    Gender :
                    <RadioLabel>
                      <Field
                        className='themeRadio'
                        type='radio'
                        name='gender'
                        value='female'
                        onClick={() => {
                          setFieldValue('gender', 'female');
                          handleSubmit();
                        }}
                      />
                      Female
                    </RadioLabel>
                    <RadioLabel>
                      <Field
                        className='themeRadio'
                        type='radio'
                        name='gender'
                        value='male'
                        onClick={() => {
                          setFieldValue('gender', 'male');
                          handleSubmit();
                        }}
                      />
                      Male
                    </RadioLabel>
                    <RadioLabel>
                      <Field
                        className='themeRadio'
                        type='radio'
                        name='gender'
                        value='other'
                        onClick={() => {
                          setFieldValue('gender', 'other');
                          handleSubmit();
                        }}
                      />
                      Other
                    </RadioLabel>
                  </RadioGroup>
                  <LinkCard color={getOnlineMiddleColor(initialData.onlineStatus)}>
                    <LinkItem>
                      <LinkTopic>
                        <Chrome style={{ color: '#1DA462' }} />
                        Website
                      </LinkTopic>
                      <LinkUrl>
                        <MiniFormElement>
                          <Field
                            name='website'
                            component={TextInput}
                            type='text'
                            placeholder='Website Link'
                            value={values.website}
                            required
                            noFixed={false}
                          />
                        </MiniFormElement>
                      </LinkUrl>
                    </LinkItem>
                    <LinkItem>
                      <LinkTopic>
                        <Github style={{ color: '#6e5494' }} />
                        Github
                      </LinkTopic>
                      <LinkUrl>
                        <MiniFormElement>
                          <Field
                            name='gitHub'
                            component={TextInput}
                            type='text'
                            placeholder='GitHub Link'
                            value={values.gitHub}
                            required
                            noFixed={false}
                          />
                        </MiniFormElement>
                      </LinkUrl>
                    </LinkItem>
                    <LinkItem>
                      <LinkTopic>
                        <Twitter style={{ color: '#00acee' }} />
                        Twitter
                      </LinkTopic>
                      <LinkUrl>
                        <MiniFormElement>
                          <Field
                            name='twitter'
                            component={TextInput}
                            type='text'
                            placeholder='Twitter Link'
                            value={values.twitter}
                            required
                            noFixed={false}
                          />
                        </MiniFormElement>
                      </LinkUrl>
                    </LinkItem>
                    <LinkItem>
                      <LinkTopic>
                        <Instagram style={{ color: '#FD1D1D' }} />
                        Instagram
                      </LinkTopic>
                      <LinkUrl>
                        <MiniFormElement>
                          <Field
                            name='instagram'
                            component={TextInput}
                            type='text'
                            placeholder='Instagram Link'
                            value={values.instagram}
                            required
                            noFixed={false}
                          />
                        </MiniFormElement>
                      </LinkUrl>
                    </LinkItem>
                    <LinkItem>
                      <LinkTopic>
                        <Facebook style={{ color: '#4267B2' }} />
                        Facebook
                      </LinkTopic>
                      <LinkUrl>
                        <MiniFormElement>
                          <Field
                            name='facebook'
                            component={TextInput}
                            type='text'
                            placeholder='Facebook Link'
                            value={values.facebook}
                            required
                            noFixed={false}
                          />
                        </MiniFormElement>
                      </LinkUrl>
                    </LinkItem>
                  </LinkCard>
                </ProfileCard>
                <DetailCard color={getOnlineLightColor(initialData.onlineStatus)}>
                  <WaveArea>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
                      <path
                        fill={getOnlineMiddleColor(initialData.onlineStatus)}
                        fillOpacity='1'
                        d='M0,288L48,288C96,288,192,288,288,277.3C384,267,480,245,576,224C672,203,768,181,864,186.7C960,192,1056,224,1152,224C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
                      ></path>
                    </svg>
                  </WaveArea>
                  <WaveAreaUpsideDown>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
                      <path
                        fill={getOnlineMiddleColor(initialData.onlineStatus)}
                        fillOpacity='1'
                        d='M0,288L48,288C96,288,192,288,288,277.3C384,267,480,245,576,224C672,203,768,181,864,186.7C960,192,1056,224,1152,224C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
                      ></path>
                    </svg>
                  </WaveAreaUpsideDown>
                  <DetailItem color={getOnlineDarkColor(initialData.onlineStatus)}>
                    <DetailTopic>
                      <DetailsLeft>
                        <AtSign className='atSign' />
                        User ID
                      </DetailsLeft>
                      <DetailsRight>
                        <ArrowRight />
                      </DetailsRight>
                    </DetailTopic>
                    <DetailUrl>
                      User-{`00${uData?.id}` || '???'}
                      <Edit className='edit disabled' />
                    </DetailUrl>
                  </DetailItem>
                  <DetailItem color={getOnlineDarkColor(initialData.onlineStatus)}>
                    <DetailTopic>
                      <DetailsLeft>
                        <AtSign className='atSign' />
                        Email
                      </DetailsLeft>
                      <DetailsRight>
                        <ArrowRight />
                      </DetailsRight>
                    </DetailTopic>
                    <DetailUrl>
                      {initialData.email}
                      <Edit className='edit disabled' />
                    </DetailUrl>
                  </DetailItem>
                  <DetailItem color={getOnlineDarkColor(initialData.onlineStatus)}>
                    <DetailTopic>
                      <DetailsLeft>
                        <AtSign className='atSign' />
                        Created At
                      </DetailsLeft>
                      <DetailsRight>
                        <ArrowRight />
                      </DetailsRight>
                    </DetailTopic>
                    <DetailUrl>
                      {initialData.createdAt ? format(new Date(initialData.createdAt), 'PPpp') : 'Not Available'}
                      <Edit className='edit disabled' />
                    </DetailUrl>
                  </DetailItem>
                  <DetailItem color={getOnlineDarkColor(initialData.onlineStatus)}>
                    <DetailTopic>
                      <DetailsLeft>
                        <AtSign className='atSign' />
                        Updated At
                      </DetailsLeft>
                      <DetailsRight>
                        <ArrowRight />
                      </DetailsRight>
                    </DetailTopic>
                    <DetailUrl>
                      {initialData.updatedAt ? format(new Date(initialData.updatedAt), 'PPpp') : 'Not Available'}
                      <Edit className='edit disabled' />
                    </DetailUrl>
                  </DetailItem>
                  <DetailItem color={getOnlineDarkColor(initialData.onlineStatus)}>
                    <DetailTopic>
                      <DetailsLeft>
                        <AtSign className='atSign' />
                        First Name
                      </DetailsLeft>
                      <DetailsRight>
                        <ArrowRight />
                      </DetailsRight>
                    </DetailTopic>
                    <DetailUrl>
                      <FormElement>
                        <Field
                          name='fName'
                          component={TextInput}
                          placeholder='First Name'
                          value={values.fName}
                          required
                          noFixed={false}
                        />
                        {errors.fName && errors.fName.trim().length > 0 && (
                          <ToolTip>
                            <ErrorMessage name='fName' />
                          </ToolTip>
                        )}
                      </FormElement>
                      <Edit className='edit' />
                    </DetailUrl>
                  </DetailItem>
                  <DetailItem color={getOnlineDarkColor(initialData.onlineStatus)}>
                    <DetailTopic>
                      <DetailsLeft>
                        <AtSign className='atSign' />
                        Last Name
                      </DetailsLeft>
                      <DetailsRight>
                        <ArrowRight />
                      </DetailsRight>
                    </DetailTopic>
                    <DetailUrl>
                      <FormElement>
                        <Field
                          name='lName'
                          component={TextInput}
                          placeholder='Last Name'
                          value={values.lName}
                          required
                          noFixed={false}
                        />
                        {errors.lName && errors.lName.trim().length > 0 && (
                          <ToolTip>
                            <ErrorMessage name='lName' />
                          </ToolTip>
                        )}
                      </FormElement>
                      <Edit className='edit' />
                    </DetailUrl>
                  </DetailItem>
                  <DetailItem color={getOnlineDarkColor(initialData.onlineStatus)}>
                    <DetailTopic>
                      <DetailsLeft>
                        <AtSign className='atSign' />
                        Mobile No
                      </DetailsLeft>
                      <DetailsRight>
                        <ArrowRight />
                      </DetailsRight>
                    </DetailTopic>
                    <DetailUrl>
                      <Sri>+94</Sri>
                      <FormElement>
                        <Field
                          name='mobileNo'
                          component={PhoneNumberInput}
                          placeholder='xxxxxxxxx'
                          value={values.mobileNo}
                          required
                          noFixed={false}
                        />
                        {errors.mobileNo && errors.mobileNo.trim().length > 0 && (
                          <ToolTip>
                            <ErrorMessage name='mobileNo' />
                          </ToolTip>
                        )}
                      </FormElement>
                      <Edit className='edit' />
                    </DetailUrl>
                  </DetailItem>
                  <DetailItem color={getOnlineDarkColor(initialData.onlineStatus)}>
                    <DetailTopic>
                      <DetailsLeft>
                        <AtSign className='atSign' />
                        Address
                      </DetailsLeft>
                      <DetailsRight>
                        <ArrowRight />
                      </DetailsRight>
                    </DetailTopic>
                    <DetailUrl>
                      <FormElement>
                        <Field
                          name='address'
                          component={TextInput}
                          placeholder='Address'
                          value={values.address}
                          required
                          noFixed={false}
                        />
                        {errors.address && errors.address.trim().length > 0 && (
                          <ToolTip>
                            <ErrorMessage name='address' />
                          </ToolTip>
                        )}
                      </FormElement>
                      <Edit className='edit' />
                    </DetailUrl>
                  </DetailItem>
                  <DetailItem color={getOnlineDarkColor(initialData.onlineStatus)}>
                    <DetailTopic>
                      <DetailsLeft>
                        <AtSign className='atSign' />
                        Password
                      </DetailsLeft>
                      <DetailsRight>
                        <ArrowRight />
                      </DetailsRight>
                    </DetailTopic>
                    <DetailUrl>
                      {showPass ? (
                        <EyeOff className='eye' onClick={() => setShowPass(false)} />
                      ) : (
                        <Eye className='eye' onClick={() => setShowPass(true)} />
                      )}
                      <FormElement>
                        <Field
                          name='password'
                          component={TextInput}
                          type={showPass ? 'text' : 'password'}
                          placeholder='Password'
                          value={values.password}
                          required
                          noFixed={false}
                        />
                        {errors.password && errors.password.trim().length > 0 && (
                          <ToolTip>
                            <ErrorMessage name='password' />
                          </ToolTip>
                        )}
                      </FormElement>
                      <Edit className='edit' />
                    </DetailUrl>
                  </DetailItem>
                  <DetailItemSp>
                    <FormBtn>
                      <Button
                        arrow={{ size: 20 }}
                        type='submit'
                        text='Save'
                        isDisabled={false}
                        height='38px'
                        outlined
                      />
                    </FormBtn>
                  </DetailItemSp>
                </DetailCard>
              </TwoColumnRow>
              <FooterCtr color={getOnlineLightColor(initialData.onlineStatus)}>
                <FooterLeft>
                  <WelcomeMessage1>Hi</WelcomeMessage1>
                  <WelcomeMessage2>Welcome To Twin-shield!</WelcomeMessage2>
                  <WelcomeMessage3>
                    This is User Profile Where <br />
                    you can see your important details.
                    <br /> You can edit them when ever you feel free
                  </WelcomeMessage3>
                </FooterLeft>
                <FooterRight color={getOnlineMiddleColor(initialData.onlineStatus)}>
                  <Welcome />
                </FooterRight>
                <ProfileUpdateCtr>
                  <ProgressTitle>
                    <ArrowRightCircle className='circleArrow' />
                    Profile Updates
                  </ProgressTitle>
                  <ProgressBar
                    percentage={+percentage.toFixed(0)}
                    color={getBarColor(+percentage.toFixed(0))}
                  ></ProgressBar>
                  <NumberCtr>{percentage.toFixed(0)}%</NumberCtr>
                  <ProgressTitle>
                    <ArrowRightCircle className='circleArrow' />
                    Dashboard Usage
                  </ProgressTitle>
                  <ProgressBar percentage={30} color={getBarColor(30)}></ProgressBar>
                  <NumberCtr>30%</NumberCtr>
                  <ProgressTitle>
                    <ArrowRightCircle className='circleArrow' />
                    Assigned Tasks
                  </ProgressTitle>
                  <ProgressBar percentage={10} color={getBarColor(10)}></ProgressBar>
                  <NumberCtr>10%</NumberCtr>
                  <ProgressTitle>
                    <ArrowRightCircle className='circleArrow' />
                    Finished Tasks
                  </ProgressTitle>
                  <ProgressBar percentage={90} color={getBarColor(90)}></ProgressBar>
                  <NumberCtr>90%</NumberCtr>
                </ProfileUpdateCtr>
              </FooterCtr>
            </InnerCtr>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default Profile;

// Styles 👕🧦👗🧣🧥👔 -->

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  form {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const InnerCtr = styled.div`
  border-radius: 10px;
  gap: 15px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Breadcrumb = styled.div<{ color: string }>`
  border-radius: 10px;
  padding: 12px 20px;
  border: 2px solid ${colors.black};
  width: 100%;
  margin-bottom: 15px;
  border-left: 25px solid ${colors.black};
  font-weight: 600;
  text-transform: uppercase;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${p => p.color};
  gap: 10px;
  &::after {
    content: '';
    position: absolute;
    left: 2px;
    top: 0;
    height: 100%;
    width: 4px;
    background: ${colors.niceBlue};
  }
`;

const FirstItems = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  .colorPicker {
    color: ${p => p.color};
  }
`;

const ProfileCard = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid ${colors.black};
  border-left: 25px solid ${colors.black};
  position: relative;
  background: ${p => p.color};
  &::after {
    content: '';
    position: absolute;
    left: 2px;
    top: 0;
    height: 100%;
    width: 4px;
    background: ${colors.niceBlue};
  }
`;

const ProfileImageOuter = styled.div`
  position: relative;
`;

const ProfileImage = styled.div<{ color: string }>`
  background: ${colors.gray2};
  width: 150px;
  height: 150px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 5rem;
  border: 2px solid ${colors.black};
  outline: 2px solid ${p => p.color};
  outline-offset: 4px;
  overflow: hidden;
`;

const UserName = styled.div`
  font-weight: 600;
  font-size: 1.5rem;
`;

const Role = styled.div`
  color: ${colors.gray7};
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3em;
`;

const Capitalized = styled.div`
  text-transform: capitalize;
  font-weight: 600;
  color: ${colors.red9};
`;

const Address = styled.div`
  color: ${colors.gray7};
`;

const StatusBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-top: 5px;
`;

const Status = styled.div`
  border-radius: 4px;
  padding: 5px 0;
  color: ${colors.blue7};
  font-weight: 500;
  width: 200px;
  position: relative;
  z-index: 2;
`;

const Deactivate = styled.div<{ color: string }>`
  border-radius: 4px;
  padding: 6px 0;
  background: ${p => p.color};
  color: ${colors.white};
  font-weight: 500;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LinkCard = styled.div<{ color: string }>`
  flex-direction: column;
  gap: 5px;
  background: ${p => p.color};
  border-radius: 10px;
  border: 3px solid ${colors.niceBlue};
  width: 392px;
  margin-top: 2px;
  z-index: 1;
`;

const LinkItem = styled.div`
  padding: 8px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.black};
  &:last-child {
    border: none;
  }
`;

const LinkTopic = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const LinkUrl = styled.div``;

const DetailCard = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  background: ${p => p.color};
  border-radius: 10px;
  border: 2px solid ${colors.black};
  padding: 20px;
  border-left: 25px solid ${colors.black};
  position: relative;
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    left: 2px;
    top: 0;
    height: 100%;
    width: 4px;
    background: ${colors.niceBlue};
  }
`;

const DetailItem = styled.div<{ color: string }>`
  padding: 11px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.gray4};
  font-size: 1.1rem;
  z-index: 1;
  &:last-child {
    border: none;
  }
  .edit {
    color: ${p => p.color};
  }
  .disabled {
    opacity: 0.2;
  }
  .eye {
    cursor: pointer;
    color: ${p => p.color};
  }
  .atSign {
    color: ${p => p.color};
  }
`;

const DetailUrl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  gap: 20px;
  font-weight: 500;
`;

const DetailTopic = styled.div`
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DetailsLeft = styled.div`
  width: 150px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;

const DetailsRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.niceBlue};
`;

const TwoColumnRow = styled.div`
  display: grid;
  grid-template-columns: minmax(0, auto);
  gap: 15px;
  @media ${devices.min4K} {
    grid-template-columns: auto 1fr;
  }
`;

const DetailItemSp = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const FormBtn = styled.div`
  width: 200px;
  padding-top: 10px;
`;

const FormElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 250px;
  position: relative;
`;

const MiniFormElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 150px;
  position: relative;
`;

const TwinShield = styled.div<{ color: string }>`
  align-items: center;
  cursor: pointer;
  color: ${colors.black};
  font-weight: bolder;
  font-weight: 900;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  position: relative;
  line-height: 1.2em;
  color: ${colors.black};
  letter-spacing: 1px;
  &:first-letter {
    font-size: 1.3em;
    font-style: italic;
    color: ${p => p.color};
    text-shadow: none;
  }
  display: none;
  @media ${devices.min4K} {
    display: block;
  }
`;

const Sri = styled.div`
  border: 1px solid ${colors.black};
  height: 38px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

const FooterCtr = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 10px 60px;
  background: ${p => p.color};
  border-radius: 10px;
  border: 2px solid ${colors.black};
  border-left: 25px solid ${colors.black};
  position: relative;
  gap: 50px;
  flex-direction: column;
  @media ${devices.min4K} {
    flex-direction: row;
  }
  &::after {
    content: '';
    position: absolute;
    left: 2px;
    top: 0;
    height: 100%;
    width: 4px;
    background: ${colors.niceBlue};
  }
`;

const FooterLeft = styled.div``;

const FooterRight = styled.div<{ color: string }>`
  svg {
    height: 150px;
    width: 200px;
  }
  .Ani1 {
    fill: ${p => p.color} !important;
    opacity: 1 !important;
  }
`;

const WelcomeMessage1 = styled.div`
  font-weight: 600;
  font-size: 1.2rem;
`;
const WelcomeMessage2 = styled.div`
  font-weight: 600;
  font-size: 1.2rem;
`;

const WelcomeMessage3 = styled.div`
  font-weight: 400;
  font-size: 1rem;
`;

const ProfileUpdateCtr = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  row-gap: 12px;
  column-gap: 10px;
`;

const NumberCtr = styled.div``;

const ProgressTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  .circleArrow {
    width: 18px;
    height: 18px;
  }
`;

const ProgressBar = styled.div<{ percentage: number; color: string }>`
  width: 200px;
  height: 10px;
  border-radius: 100px;
  background: ${colors.white};
  position: relative;
  overflow: hidden;
  border: 1px solid ${colors.black};
  &::after {
    content: '';
    width: ${p => p.percentage}%;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    background: ${p => p.color};
  }
`;

const ToolTip = styled.div`
  position: absolute;
  left: 50%;
  bottom: -2px;
  width: max-content;
  transform: translate(-50%, 100%);
  background: ${colors.red9};
  opacity: 0.9;
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-size: 12px;
  padding: 2px 8px;
  white-space: pre-wrap;
`;

const RadioGroup = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 4px 0;
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

const CameraIcon = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 24px;
  height: 24px;
  .camera {
    width: 24px;
    height: 24px;
  }
`;

const WaveArea = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  transform: scaleX(-1);
  filter: FlipH;
  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const WaveAreaUpsideDown = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transform: rotate(-180deg) scaleX(-1);
  filter: FlipH;
  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
