import { ICounselingType } from '../components/Counseling/CounselingType';
import instance from './core';

export const getAdolescentsParents = async () => {
  try {
    const response = await instance.get<ICounselingType>('/counseling/adolescentsParents');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
