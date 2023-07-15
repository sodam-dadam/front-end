import { ICounselingType } from '../components/Counseling/CounselingType';
import instance from './core';

export const getPersonal = async () => {
  try {
    const response = await instance.get<ICounselingType>('/counseling/personal');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
