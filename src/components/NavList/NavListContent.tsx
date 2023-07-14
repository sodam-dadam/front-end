import ReservationInfo from '../CenterInfo/ReservationInfo';
import SodaIntroduction from '../CenterInfo/SodaIntroduction';
import NavListCurrentLocation from './NavListCurrentLocation';
import SodaWayToCome from '../CenterInfo/SodaWayToCome';
import { useParams } from 'react-router-dom';
import Notification from '../Notice/Notification';
import Inquiry from '../Notice/Inquiry';
import Event from '../Notice/Event';
import MainCounselor from '../CounselorInfo/MainCounselor';
import SubCounselor from '../CounselorInfo/SubCounselor';
import Personal from '../Counseling/Personal';
import Group from '../Counseling/Group';
import PsychologicalTest from '../Counseling/PsychologicalTest';
import Couple from '../Counseling/Couple';
import AdolescentsParents from '../Counseling/AdolescentsParents';
import BookReading from '../Education/BookReading';
import WorkShop from '../Education/WorkShop';
import CounselingEducation from '../Education/CounselingEducation';
import CreateNotice from '../Bulletin/CreateNotice';
import CreateEvent from '../Bulletin/CreateEvent';

function NavListContent({ itemData, listName }: { itemData: Array<string>; listName: string }) {
  const { id } = useParams<{ id: string }>();
  return (
    <div className="flex flex-col w-[100%]">
      <div className="flex justify-between pb-4 border-b-2">
        <div className="text-lg mmd:text-base">{itemData[Number(id) - 1]}</div>
        <NavListCurrentLocation />
      </div>
      {listName === '센터 안내' && id === '1' && <SodaIntroduction />}
      {listName === '센터 안내' && id === '2' && <ReservationInfo />}
      {listName === '센터 안내' && id === '3' && <SodaWayToCome />}
      {listName === '상담전문가 소개' && id === '1' && <MainCounselor />}
      {listName === '상담전문가 소개' && id === '2' && <SubCounselor />}
      {listName === '심리상담' && id === '1' && <Personal />}
      {listName === '심리상담' && id === '2' && <Group />}
      {listName === '심리상담' && id === '3' && <PsychologicalTest />}
      {listName === '심리상담' && id === '4' && <AdolescentsParents />}
      {listName === '심리상담' && id === '5' && <Couple />}
      {listName === '심리교육' && id === '1' && <WorkShop />}
      {listName === '심리교육' && id === '2' && <CounselingEducation />}
      {listName === '심리교육' && id === '3' && <BookReading />}
      {listName === '공지 ・ 문의' && id === '1' && <Notification />}
      {listName === '공지 ・ 문의' && id === '2' && <Event />}
      {listName === '공지 ・ 문의' && id === '3' && <Inquiry />}
      {listName === '게시글 작성' && id === '1' && <CreateNotice />}
      {listName === '게시글 작성' && id === '2' && <CreateEvent />}
    </div>
  );
}

export default NavListContent;
