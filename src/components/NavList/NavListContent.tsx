import ReservationInfo from '../CenterInfo/ReservationInfo';
import SodaIntroduction from '../CenterInfo/SodaIntroduction';
import NavListCurrentLocation from './NavListCurrentLocation';
import SodaWayToCome from '../CenterInfo/SodaWayToCome';
import { useParams } from 'react-router-dom';

function NavListContent({ itemData }: { itemData: Array<string> }) {
  const { id } = useParams<{ id: string }>();
  return (
    <div className="flex flex-col w-[100%]">
      <div className="flex justify-between pb-4 border-b-2">
        <div className="xl:text-3xl mxl:text-2xl">{itemData[Number(id) - 1]}</div>
        <NavListCurrentLocation />
      </div>
      {/* 1,2,3 다른 페이지 데이터 받을시 수정 필요 */}
      {id === '1' && <SodaIntroduction />}
      {id === '2' && <ReservationInfo />}
      {id === '3' && <SodaWayToCome />}
    </div>
  );
}

export default NavListContent;
