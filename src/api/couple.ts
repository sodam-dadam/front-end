import { ICounselingType } from '../components/Counseling/CounselingType';
import instance from './core';

export const getCouple = async () => {
  try {
    const response = await instance.get<ICounselingType>('/counseling/couple');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
