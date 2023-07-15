import { ICounselorInfoType } from '../components/CounselorInfo/CounselorInfoType';
import instance from './core';

export const getMainCounselor = async () => {
  try {
    const response = await instance.get<ICounselorInfoType>('/counselorInfo');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
