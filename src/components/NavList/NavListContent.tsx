import ReservationInfo from '../CenterInfo/ReservationInfo';
import SodaIntroduction from '../CenterInfo/SodaIntroduction';
import NavListCurrentLocation from './NavListCurrentLocation';
import SodaWayToCome from '../CenterInfo/SodaWayToCome';

function NavListContent({ itemData }: { itemData: string }) {
  return (
    <div className="flex flex-col w-[100%]">
      <div className="flex justify-between pb-4 border-b-2">
        <div className="xl:text-3xl mxl:text-2xl">{itemData}</div>
        <NavListCurrentLocation />
      </div>

      {itemData === '소담다담 소개' && <SodaIntroduction />}
      {itemData === '상담예약 안내' && <ReservationInfo />}
      {itemData === '오시는 길' && <SodaWayToCome />}
    </div>
  );
}

export default NavListContent;
