import { ICenterInfoListDataType } from '../../pages/CenterInfoPage/CenterInfoType';
import NavListContent from './NavListContent';
import NavListItemMenu from './NavListItemMenu';

const centerInfoListData: ICenterInfoListDataType = {
  listName: '센터 안내',
  listItem: ['소담다담 소개', '상담예약 안내', '오시는 길'],
  listImg: '../../../public/images/centerInfoImg.png',
  listImgAlt: '두사람이 손을 잡고 있는 따뜻한 이미지',
};

// 추후에 헤더에서 클릭시 상태 변화 이벤트에 의해 변하게 수정해야함
// url 에 따라 데이터 요청해서 사용하면 될듯
const currentList = centerInfoListData;

function Template() {
  return (
    <div className="flex flex-col">
      <img src={currentList.listImg} alt={currentList.listImgAlt} />
      <div className="flex gap-[5%] ml-[12%] mr-[12%] mt-[5%] mxl:flex-col">
        <NavListItemMenu listName={currentList.listName} listItem={currentList.listItem} />
        <NavListContent itemData={currentList.listItem} />
      </div>
    </div>
  );
}

export default Template;
