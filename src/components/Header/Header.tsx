import { Link } from 'react-router-dom';
import HeaderNavList from './HeaderNavList';
import { useEffect, useState } from 'react';
import { INavListDataType } from '../NavList/NavListType';
import { getNavList } from '../../api/navList';

function Header() {
  const [menuVisible, setMenuVisible] = useState(false);
  const handleMouseEnter = () => {
    setMenuVisible(true);
  };
  const handleMouseLeave = () => {
    setMenuVisible(false);
  };
  // const [listData, setListData] = useState<INavListDataType[] | undefined>();
  // useEffect(() => {
  //   const listFn = async () => {
  //     const data = await getNavList();
  //     setListData(data);
  //   };
  //   listFn();
  // }, []);

  const listData = [
    {
      url: '/CenterInfo',
      listName: '센터 안내',
      listItem: ['소담다담 소개', '상담예약 안내', '오시는 길'],
      listImg: '../../../public/images/centerInfoImg.png',
      listImgAlt: '두사람이 손을 잡고 있는 따뜻한 이미지',
    },
    {
      url: '/CounselorInfo',
      listName: '상담전문가 소개',
      listItem: ['상담심리전문가'],
      listImg: '../../../public/images/centerInfoImg.png',
      listImgAlt: '두사람이 손을 잡고 있는 따뜻한 이미지',
    },
    {
      url: '/Counseling',
      listName: '심리상담',
      listItem: ['개인상담', '집단상담', '심리검사', '청소년 • 부모상담', '부부 • 커플상담'],
      listImg: '../../../public/images/centerInfoImg.png',
      listImgAlt: '두사람이 손을 잡고 있는 따뜻한 이미지',
    },
    {
      url: '/Education',
      listName: '심리교육',
      listItem: ['특강 및 워크숍', '상담자 교육', '북리딩 세미나'],
      listImg: '../../../public/images/centerInfoImg.png',
      listImgAlt: '두사람이 손을 잡고 있는 따뜻한 이미지',
    },
    {
      url: '/Notice',
      listName: '공지 ・ 문의',
      listItem: ['교육/워크숍 공지', '이벤트', '문의'],
      listImg: '../../../public/images/centerInfoImg.png',
      listImgAlt: '두사람이 손을 잡고 있는 따뜻한 이미지',
    },
    {
      url: '/Bulletin',
      listName: '게시글 작성',
      listItem: ['공지글 작성', '이벤트 작성'],
      listImg: '../../../public/images/centerInfoImg.png',
      listImgAlt: '두사람이 손을 잡고 있는 따뜻한 이미지',
    },
  ];

  return (
    <>
      {listData && (
        <header className="sticky top-[-57px] bg-white z-10 mlg:top-[-46px]">
          <div className="flex justify-center mt-4 mb-4 mlg:mt-2 mlg:mb-2">
            <Link to={'/'} className="inline-flex flex-row flex-nowrap">
              <img
                src="../../public/images/sodaLogo.jpeg"
                alt="소담다담 로고"
                className="w-10 h-10 mr-4 mlg:w-8 mlg:h-8 mlg:mr-2"
              />
              <div className="flex flex-col items-center justify-center">
                <div className="flex">
                  <p className="mr-2 font-bold text-blue-900 mlg:text-sm">소담다담</p>
                  <p className="font-semibold text-gray-500 mlg:text-sm">심리상담센터</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mlg:text-xs">SODA COUNSELING CENTER</p>
                </div>
              </div>
            </Link>
          </div>
          <ul
            className="pt-2 pb-2 border-t border-b mlg:pt-1 mlg:pb-1"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <div className="relative flex max-w-screen-xl ml-auto mr-auto ">
              {listData.slice(0, 5).map((item, index) => (
                <HeaderNavList headerList={item} key={index} />
              ))}
            </div>
            <div
              className={`absolute w-full mt-2 bg-blue-500 mlg:mt-1 ${
                menuVisible ? 'h-40 mlg:h-32' : 'h-0'
              } transition-height duration-[400ms] ease-in-out overflow-hidden z-10`}>
              <div className="flex max-w-screen-xl ml-auto mr-auto">
                {listData.slice(0, 5).map((item, index) => {
                  return (
                    <div className="inset-x-0 z-20 flex flex-col h-0 gap-2 mt-3 basis-1/5 mlg:mt-2" key={index}>
                      {item.listItem.slice(0, 5).map((listName, index) => {
                        return (
                          <Link
                            to={`${item.url}/${index + 1}`}
                            key={index}
                            className="flex justify-center ml-auto mr-auto text-sm font-normal text-white transition duration-300 ease-in-out hover:text-blue-900 hover:border-b mlg:text-xs">
                            {listName}
                          </Link>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </ul>
        </header>
      )}
    </>
  );
}

export default Header;
