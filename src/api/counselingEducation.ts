import { ICounselingType } from '../components/Counseling/CounselingType';
import instance from './core';

export const getCounselingEducation = async () => {
  try {
    const response = await instance.get<ICounselingType>('/education/counselingEducation');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
