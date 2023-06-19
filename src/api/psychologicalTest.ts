import { ICounselingType } from '../components/Counseling/CounselingType';
import instance from './core';

export const getPsychologicalTest = async () => {
  try {
    const response = await instance.get<ICounselingType>('/counseling/psychologicalTest');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
