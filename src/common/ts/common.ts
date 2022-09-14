// 🧨🧨🧨 Error Data -->
// 0 = no error
// 1 = server error
// 2 = no data

export interface IOptions {
  readonly label?: string;
  readonly value?: string | null;
}

export type TTab = 'quantity' | 'size' | 'upload' | 'cart' | 'type';
export type TFigure = 'figure1' | 'figure2' | 'figure3' | 'figure4' | 'figure5' | 'figure6';
export type TCurrency = 'dollar' | 'euro';
export type TPaperSize = 'paperA4' | 'paperA3' | 'paperA2' | 'paperA1';
export type TType = 'hi_featured' | 'low_featured';
export type TOrientation = 'portrait' | 'landscape';
export type TOrientationObj = {
  key: TOrientation;
  value: string;
};

export type TLessFeatures = 'no_features' | 'eyebrows' | 'eyebrows_smile';
export type TLessFeaturesObj = {
  key: TLessFeatures;
  value: string;
};
export type TMscObj = {
  orientation: TOrientationObj[] | null;
  features: TLessFeaturesObj[] | null;
};

export type TPackageObj = {
  now: number;
  prev: number;
  imgUrl: string[];
  desc: string[];
  iconUrl: JSX.Element | null;
  key: string;
};
export interface ICommonPackageObj {
  [key: string]: TPackageObj;
}

// 🧨🧨🧨 Common Data -->
export type TInputValue = string | number | null;

export type TMenuItem = 'arts' | 'orders' | 'analytics' | 'support' | 'settings' | 'market' | 'users' | 'profile';

export type TUserTypes = 'admin' | 'artist' | 'manager';

export type TMenuItemArr = {
  name: TMenuItem;
  icon: string;
}[];

export type TBasicData = null | string;

// 🧨🧨🧨 Object animation -->
export type TNumberArr = [number, number, number, number];

export type TLandmarks = [number, number, number];

export type THand = [
  annotations: {
    indexFinger: TNumberArr[];
    middleFinger: TNumberArr[];
    palmBase: TNumberArr[];
    pinky: TNumberArr[];
    ringFinger: TNumberArr[];
    thumb: TNumberArr[];
  },
  boundingBox: {
    bottomRight: [number, number];
    topLeft: [number, number];
  },
  handInViewConfidence: number,
  landmarks: TLandmarks
];

// 🧨🧨🧨 Firebase -->

// 🔥🔥🔥 Other -->
export type TUserAvailabilityStatus = 'yes' | 'no' | 'error';

// 🔥🔥🔥 Users -->
export type TUserCategory = 'admin' | 'tutor' | 'pro' | 'student' | null;

export type TUser = {
  displayName: TBasicData;
  email: TBasicData;
  photoURL: TBasicData;
  type: TUserCategory;
  uid: TBasicData;
  username: TBasicData;
  pass: TBasicData;
};

export type TUserResponse = {
  data: TUser;
  errorMsg: string | null;
  errorCode: number;
};

// 🔥🔥🔥 Meets -->

export type TMeetingSettings = {
  session: string;
  authenticate: string;
  interactive: string;
  class: string;
  smartQa: string;
  tracking: string;
  uid: string;
};

export type TMeetDataResponse = {
  data: {
    uid: string | null;
    meetId: string | null;
  };
  errorMsg: string | null;
  errorCode: number;
};

export type TFMeet = {
  meetingId: string;
  authenticate: boolean;
  interactive: boolean;
  classId: string;
  smartQa: boolean;
  tracking: boolean;
  uid: string;
};

export type TAllMeetDataResponse = {
  data: TFMeet[] | [];
  errorMsg: string | null;
  errorCode: number;
};

export type TSingleMeetDataResponse = {
  data: TFMeet | null;
  errorMsg: string | null;
  errorCode: number;
};

// 🔥🔥🔥 Modals -->
export type TModalData = {
  description: string;
  imageUrl: string;
  modalId: string;
  modalName: string;
  price: string;
  ratings: number;
  keywords: string[];
  category: string;
};

export type TFilteredModalDataResponse = {
  data: TModalData[];
  errorMsg: string | null;
  errorCode: number;
};
