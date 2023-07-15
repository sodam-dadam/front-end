import { ICounselorInfoType } from '../components/CounselorInfo/CounselorInfoType';
import instance from './core';

export const getSubCounselor = async () => {
  try {
    const response = await instance.get<ICounselorInfoType>('/counselorInfo/sub');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
