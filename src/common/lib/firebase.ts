import {
  TAllMeetDataResponse,
  TFilteredModalDataResponse,
  TFMeet,
  TMeetDataResponse,
  TSingleMeetDataResponse,
  TUser,
  TUserAvailabilityStatus,
  TUserCategory,
  TUserResponse,
} from '@ts/common';
import { getApp, initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  limit,
  query,
  setDoc,
  updateDoc,
  where,
  writeBatch,
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const createFirebaseApp = (config = {}) => {
  try {
    return getApp();
  } catch (error) {
    return initializeApp(config);
  }
};

const app = createFirebaseApp({
  apiKey: process.env.API_KEY, // for auth
  authDomain: process.env.AUTH_DOMAIN, // for auth
  projectId: process.env.PROJECT_ID, // for auth
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
});

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const initUser = {
  displayName: null,
  email: null,
  photoURL: null,
  type: null,
  uid: null,
  username: null,
  pass: null,
};

export const getAllUsers = async (): Promise<TUser[]> => {
  const snapshot = await getDocs(collection(db, 'users'));
  const usersData = snapshot.docs.map(userDoc => {
    const { displayName, email, photoURL, type, uid, username } = userDoc.data();
    return {
      displayName: displayName || null,
      email: email || null,
      photoURL: photoURL || null,
      type: type || null,
      uid: uid || null,
      username: username || null,
      pass: null,
    };
  });
  return usersData;
};

export const getUserWithUsername = async (username: string): Promise<TUser[]> => {
  const q = query(collection(db, 'users'), where('username', '==', username));
  const snapshot = await getDocs(q);
  const userData = snapshot.docs.map(userDoc => {
    const { displayName, email, photoURL, type, uid } = userDoc.data();
    return {
      displayName: displayName || null,
      email: email || null,
      photoURL: photoURL || null,
      type: type || null,
      uid: uid || null,
      username: username || null,
      pass: null,
    };
  });
  return userData;
};

export const getUserWithUserId = async (_uid: string): Promise<TUserResponse> => {
  try {
    const q = query(collection(db, 'users'), where('uid', '==', _uid), limit(1));
    const snapshot = await getDocs(q);
    const userData = snapshot.docs.map(userDoc => {
      const { displayName, email, photoURL, type, username } = userDoc.data();
      return {
        displayName: displayName || null,
        email: email || null,
        photoURL: photoURL || null,
        type: type || null,
        uid: _uid || null,
        username: username || null,
        pass: null,
      };
    });
    if (userData.length > 0) {
      return {
        data: userData[0],
        errorMsg: null,
        errorCode: 0,
      };
    }
  } catch (error) {
    return {
      data: {
        ...initUser,
      },
      errorMsg: 'Something went wrong',
      errorCode: 1,
    };
  }
  return {
    data: {
      ...initUser,
    },
    errorMsg: 'User has to register to the system',
    errorCode: 2,
  };
};

export const registerUser = async (user: TUser): Promise<boolean> => {
  try {
    const usersDoc = doc(db, `users/${user.uid}`);
    const usernamesDoc = doc(db, `usernames/${user.username}`);
    const batch = writeBatch(db);
    batch.set(usersDoc, {
      username: user.username,
      photoURL: user.photoURL,
      displayName: user.displayName,
      email: user.email,
      uid: user.uid,
      pass: user.pass,
    });
    batch.set(usernamesDoc, { uid: user.uid });
    await batch.commit();
    return true;
  } catch (error) {
    return false;
  }
};

export const updateUserType = async (_uid: string, type: TUserCategory): Promise<boolean> => {
  try {
    const usersDoc = doc(db, `users/${_uid}`);
    await updateDoc(usersDoc, {
      type,
    });
    return true;
  } catch (error) {
    return false;
  }
};

export const checkUserName = async (username: string): Promise<TUserAvailabilityStatus> => {
  try {
    const docRef = doc(db, `usernames/${username}`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return 'yes'; // already available
    }
    return 'no'; // not available
  } catch (error) {
    return 'error';
  }
};

export const signInWithGoogle = async (): Promise<boolean> => {
  try {
    await signInWithPopup(auth, new GoogleAuthProvider());
    return true;
  } catch (error) {
    return false;
  }
};

export const signOutWithGoogle = async (): Promise<boolean> => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    return false;
  }
};

// 🔥 Meeting Data -->

export const addSingleMeeting = async (
  _uid: string,
  _interactive: boolean,
  _tracking: boolean,
  _smartQa: boolean,
  _authenticate: boolean,
  _classId: string
): Promise<TMeetDataResponse> => {
  try {
    const docRef = await addDoc(collection(db, 'meetings'), {
      authenticate: _authenticate,
      interactive: _interactive,
      classId: _classId,
      smartQa: _smartQa,
      tracking: _tracking,
      uid: _uid,
    });
    return {
      data: {
        uid: _uid,
        meetId: docRef.id,
      },
      errorMsg: null,
      errorCode: 0,
    };
  } catch (error) {
    return {
      data: {
        uid: null,
        meetId: null,
      },
      errorMsg: 'Something went wrong',
      errorCode: 1,
    };
  }
};

export const getAllMeetings = async (): Promise<TAllMeetDataResponse> => {
  try {
    const querySnapshot = await getDocs(collection(db, 'meetings'));
    const tempArr: TFMeet[] = [];
    querySnapshot.forEach(docItem => {
      tempArr.push({
        meetingId: docItem.id,
        authenticate: docItem.data().authenticate,
        interactive: docItem.data().interactive,
        classId: docItem.data().classId,
        smartQa: docItem.data().smartQa,
        tracking: docItem.data().tracking,
        uid: docItem.data().uid,
      });
    });
    return {
      data: tempArr,
      errorMsg: null,
      errorCode: 0,
    };
  } catch (error) {
    return {
      data: [],
      errorMsg: 'Something went wrong',
      errorCode: 1,
    };
  }
};

export const getSingleMeetingWithID = async (_meetingId: string): Promise<TSingleMeetDataResponse> => {
  try {
    const docRef = doc(db, `meetings/${_meetingId}`);
    const docSnap = await getDoc(docRef);
    const tempArr = docSnap.data() as TFMeet;
    return {
      data: {
        meetingId: _meetingId,
        authenticate: tempArr.authenticate,
        interactive: tempArr.interactive,
        classId: tempArr.classId,
        smartQa: tempArr.smartQa,
        tracking: tempArr.tracking,
        uid: tempArr.uid,
      },
      errorMsg: null,
      errorCode: 0,
    };
  } catch (error) {
    return {
      data: null,
      errorMsg: 'Something went wrong',
      errorCode: 1,
    };
  }
};

export const deleteMeeting = async (meetId: string): Promise<boolean> => {
  try {
    await deleteDoc(doc(db, 'meetings', meetId));
    return true;
  } catch (error) {
    return false;
  }
};

// 🔥 Model Data -->
export const getFilteredModelData = async (_keyword: string): Promise<TFilteredModalDataResponse> => {
  try {
    let q = query(collection(db, 'models'));
    if (_keyword.trim().length > 0) {
      q = query(collection(db, 'models'), where('keywords', 'array-contains', _keyword.toLocaleLowerCase()));
    }
    const snapshot = await getDocs(q);
    const modelData = snapshot.docs.map(modelDoc => {
      const { category, description, imageUrl, keywords, modalId, modalName, price, ratings } = modelDoc.data();
      return {
        description: description || '',
        imageUrl: imageUrl || '',
        modalId: modalId || '',
        modalName: modalName || '',
        price: price || '$0.00',
        ratings: ratings || 0,
        keywords: keywords || [],
        category: category || '',
      };
    });
    if (modelData.length > 0) {
      return {
        data: modelData,
        errorMsg: null,
        errorCode: 0,
      };
    }
    return {
      data: [],
      errorMsg: 'No Data',
      errorCode: 2,
    };
  } catch (error) {
    return {
      data: [],
      errorMsg: 'Something Went Wrong',
      errorCode: 1,
    };
  }
};

// 🔥 Admin Functions -->
export const initModels = async (): Promise<boolean> => {
  try {
    const modalDataArray = [
      {
        modalName: 'Human Heart 1',
        keywords: ['human', 'heart'],
        modalId: '775d6629622740de8a5ed61a959c7506',
        price: '$10.00',
        description: 'The topology is clean and the textures are accurate as the real human heart.',
        ratings: 5,
        imageUrl: 'heart1.jpeg',
        category: 'Science & Technology 3D Models',
      },
      {
        modalName: 'Human Heart 2',
        keywords: ['human', 'heart'],
        modalId: '168b474fba564f688048212e99b4159d',
        price: '$8.99',
        description:
          'Reduced and optimized polygon count (from 15k to 13k) - Added yellow colored fat, which was absent in previous model - Corrected the mitral valve which has only 2 valves IRL - Corrected the morphs for smoother animation',
        ratings: 4,
        imageUrl: 'heart2.jpeg',
        category: 'Science & Technology 3D Models',
      },
      {
        modalName: 'Human Mouth',
        keywords: ['human', 'mouth'],
        modalId: 'd92cfd5873ac43299c7b64cdf9725526',
        price: '$9.00',
        description:
          'This is a hyper realistic human mouth model with real transluminescence, tongue and teeth. The product include a subdivision ready version. The 16bit high-depth displacement maps provide perfect displacement.',
        ratings: 3,
        imageUrl: 'mouth1.jpg',
        category: 'Science & Technology 3D Models',
      },
      {
        modalName: 'Human Eye 1',
        keywords: ['human', 'eye'],
        modalId: '6adbd6538cd146d484c9ad950be69aa5',
        price: '$9.00',
        description: '3D Human Eye with photorealistic 4K texture.Animated pupil contraction/dilation!',
        ratings: 4,
        imageUrl: 'eye1.jpg',
        category: 'Science & Technology 3D Models',
      },
      {
        modalName: 'Human Eye 2',
        keywords: ['human', 'eye'],
        modalId: 'dc9c88630b6c42a8b242fd6024d0697f',
        price: '$89.00',
        description:
          'The extrinsic muscles of the eye, shown here are some of the fastest contracting and most precisely controlled skeletal muscles in the human body. They work together and function as Agonist & Antagonists pairs to move the eyeball around.They are the Superior and Inferior Rectus Muscles. The Lateral and Medial Rectus Muscles and the Superior and Inferior Oblique Muscles.',
        ratings: 3,
        imageUrl: 'eye2.jpg',
        category: 'Science & Technology 3D Models',
      },
      {
        modalName: 'Human Digestive System',
        keywords: ['human', 'digestive', 'system'],
        modalId: '854775b61faa4825975180a2fc4092d7',
        price: '$9.90',
        description:
          'The human digestive system consists of the gastrointestinal tract plus the accessory organs of digestion (pancreas, liver, and gallbladder). In this system, the process of digestion has many stages, the first of which starts in the mouth. This produces a bolus which can be swallowed down the esophagus and into the stomach. Here it is mixed with gastric juice until it passes into the duodenum, where it is mixed with a number of enzymes produced by the pancreas. Gastric juice in the stomach is essential for the continuation of digestion as is the production of mucus in the stomach. This initially results in the production of chyme which when fully broken down in the small intestine is absorbed as chyle into the lymphatic system. Most of the digestion of food takes place in the small intestine. Water and some minerals are reabsorbed back into the blood in the colon of the large intestine. The waste products of digestion (faeces) are defecated from the anus via the rectum.',
        ratings: 5,
        imageUrl: 'digestive.jpg',
        category: 'Science & Technology 3D Models',
      },
      {
        modalName: 'Human Stomach',
        keywords: ['human', 'stomach'],
        modalId: '40147c529bdb42c7a2fca1fbd6529a89',
        price: '$9.00',
        description:
          'Cross Sectional Study of the Stomach. It consists of an outer longitudinal Muscle layer followed by a middle circular muscle layer and finally an inner oblique muscle layer . The mucosa has the distinctive Rugae Patterns .',
        ratings: 4,
        imageUrl: 'stomach.jpg',
        category: 'Science & Technology 3D Models',
      },
      {
        modalName: 'Human Kidney',
        keywords: ['human', 'kidney'],
        modalId: '0dea52d6f6a848ab8f2cdc3f5b3ba212',
        price: '$9.00',
        description:
          'Visualization of the cross section of the kidney . It shows the difference between the cortex and medulla. The medulla contains papillary pyramids that interact with the major and minor calyces .',
        ratings: 4,
        imageUrl: 'kidney.jpg',
        category: 'Science & Technology 3D Models',
      },
      {
        modalName: 'Human Lung',
        keywords: ['human', 'lung'],
        modalId: 'acbb5f0e16a14179ae4f63c5b6b83ad7',
        price: '$9.00',
        description:
          'For humans, the typical respiratory rate for a healthy adult at rest is 12–18 breaths per minute.The respiratory center sets the quiet respiratory rhythm at around two seconds for an inhalation and three seconds exhalation. This gives the lower of the average rate at 12 breaths per minute.',
        ratings: 4,
        imageUrl: 'lung.jpg',
        category: 'Science & Technology 3D Models',
      },
      {
        modalName: 'Human Ear',
        keywords: ['human', 'ear'],
        modalId: '4f5438fc9337454587ec4a2c30c8c42f',
        price: '$9.00',
        description:
          'Visualization of the CrossSection of the ear . Its different major parts are composed of : -Eustachian Tube -Tympanic Membrane -the Ossicles of the ear (Middle Ear) -Labyrinth (Inner ear)',
        ratings: 4,
        imageUrl: 'ear.jpg',
        category: 'Science & Technology 3D Models',
      },
      {
        modalName: 'Human Reproductive System (Female)',
        keywords: ['human', 'reproductive', 'system', 'female'],
        modalId: 'a5f8c2564be648b2aed32187d3789b5f',
        price: '$9.00',
        description:
          'The female reproductive system is made up of the internal and external sex organs that function in reproduction of new offspring. In humans, the female reproductive system is immature at birth and develops to maturity at puberty to be able to produce gametes, and to carry a foetus to full term. The internal sex organs are the vagina, uterus, Fallopian tubes, and ovaries. The vagina allows for sexual intercourse and birth, and is connected to the uterus at the cervix. The uterus or womb accommodates the embryo which develops into the foetus. The uterus also produces secretions which help the transit of sperm to the Fallopian tubes, where sperm fertilize ova (egg cells) which are produced by the ovaries. The external sex organs are also known as the genitals and these are the organs of the vulva including the labia, clitoris, and vaginal opening.',
        ratings: 4,
        imageUrl: 'female_reproductive_system.jpg',
        category: 'Science & Technology 3D Models',
      },
      {
        modalName: 'Human Reproductive System (Male)',
        keywords: ['human', 'reproductive', 'system', 'male'],
        modalId: 'b77f14ee1cf743ffbac365b045598c48',
        price: '$9.00',
        description:
          'The purpose of the organs of the male reproductive system is to perform the following functions To produce, maintain, and transport sperm (the male reproductive cells) and protective fluid (semen) To discharge sperm within the female reproductive tract during sex To produce and secrete male sex hormones responsible for maintaining the male reproductive system',
        ratings: 4,
        imageUrl: 'male_reproductive_system.jpg',
        category: 'Science & Technology 3D Models',
      },
      {
        modalName: 'Covid-19 Virus',
        keywords: ['covid-19', 'virus'],
        modalId: '5dc0c0e6f2724795a60ce7c24c190f3c',
        price: '$4.00',
        description:
          '3D model of the Covid-19 virus,based on the image “Illustration of the ultrastructure of the Covid-19 virus',
        ratings: 4,
        imageUrl: 'covid19.jpg',
        category: 'Science & Technology 3D Models',
      },
    ];
    modalDataArray.forEach(async modalData => {
      // await addDoc(collection(db, 'models'), modalData);
      await setDoc(doc(db, 'models', `${modalData.modalId}`), modalData);
    });
    return true;
  } catch (error) {
    return false;
  }
};
