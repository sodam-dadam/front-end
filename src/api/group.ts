import { ICounselingType } from '../components/Counseling/CounselingType';
import instance from './core';

export const getGroup = async () => {
  try {
    const response = await instance.get<ICounselingType>('/counseling/group');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
