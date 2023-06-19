import { ICounselingType } from '../components/Counseling/CounselingType';
import instance from './core';

export const getBookReading = async () => {
  try {
    const response = await instance.get<ICounselingType>('/education/bookReading');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
