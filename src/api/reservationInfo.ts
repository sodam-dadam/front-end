import { IReservationInfoType } from '../components/CenterInfo/CenterInfoType';
import instance from './core';

export const getReservationInfo = async () => {
  try {
    const response = await instance.get<IReservationInfoType>('/centerinfo/reservationInfo');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
