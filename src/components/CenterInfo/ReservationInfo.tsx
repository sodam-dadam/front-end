import { useEffect, useState } from 'react';
import { IReservationInfoType } from './CenterInfoType';
import CounselingTimeTableTd from './CounselingTimeTableTd';
import CounselingTimeTableTh from './CounselingTimeTableTh';
import ReservationProcedure from './ReservationProcedure';
import { getReservationInfo } from '../../api/reservationInfo';
import ReservationBtn from '../ReservationBtn/ReservationBtn';

function ReservationInfo() {
  const [reservationInfoData, setReservationInfoData] = useState<IReservationInfoType | undefined>();
  useEffect(() => {
    const rsvFn = async () => {
      const data = await getReservationInfo();
      setReservationInfoData(data);
    };
    rsvFn();
  }, []);
  return (
    <>
      {reservationInfoData && (
        <div className="flex flex-col">
          <div className="mt-8 mb-8 text-xl mmd:text-lg mmd:mt-4 mmd:mb-4">◦ 예약 절차</div>
          {reservationInfoData.reservation.map((item, index) => {
            return <ReservationProcedure procedureData={item} key={index} />;
          })}
          <div className="mb-4 text-lg mmd:text-base mmd:mb-4">◦ SODA 상담시간</div>
          <table className="mb-4 border-2">
            <thead>
              <tr className="bg-gray-50">
                {reservationInfoData.counselingTime.map((item, index) => {
                  return <CounselingTimeTableTh thText={item.name} key={index} />;
                })}
              </tr>
            </thead>
            <tbody>
              <tr>
                {reservationInfoData.counselingTime.map((item, index) => {
                  return <CounselingTimeTableTd tdText={item.time} key={index} />;
                })}
              </tr>
            </tbody>
          </table>
          <ReservationBtn />
        </div>
      )}
    </>
  );
}
export default ReservationInfo;
