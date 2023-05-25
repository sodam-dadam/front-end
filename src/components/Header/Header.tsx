import { Link } from 'react-router-dom';
import HeaderNavList from './HeaderNavList';
import { IHeaderType } from './HeaderType';
import { useState } from 'react';

const headerListData: IHeaderType = {
  headerList: [
    {
      name: '센터안내',
      list: ['소담다담 소개', '상담예약 안내', '오시는 길'],
      link: '/CenterInfo',
    },
    {
      name: '상담전문가 소개',
      list: ['상담심리전문가', '전임 상담원'],
      link: '/CounselingInfo',
    },
    {
      name: '프로그램 소개',
      list: ['개인상담', '심리 검사', '상담자 교육'],
      link: '/ProgramInfo',
    },
    {
      name: '공지 ・ 문의',
      list: ['교육/워크숍 공지', '이벤트', '문의'],
      link: '/Notice',
    },
  ],
};

function Header() {
  const [menuVisible, setMenuVisible] = useState(false);
  const handleMouseEnter = () => {
    setMenuVisible(true);
  };
  const handleMouseLeave = () => {
    setMenuVisible(false);
  };
  return (
    <header>
      <div className="flex justify-center mt-4 mb-4">
        <Link to={'/'} className="inline-flex flex-row flex-nowrap">
          <img src="../../public/images/sodaLogo.jpeg" alt="소담다담 로고" className="mr-4 w-14 h-14" />
          <div className="flex flex-col items-center justify-center">
            <div className="flex">
              <p className="mr-2 text-2xl font-bold text-blue-900 mxl:text-xl">소담다담</p>
              <p className="text-2xl font-semibold text-gray-500 mxl:text-xl">심리상담센터</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mxl:text-xs">SODA COUNSELING CENTER</p>
            </div>
          </div>
        </Link>
      </div>
      <ul
        className="pt-2 pb-2 border-t border-b border-stone-950 mb-14"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <div className="relative flex ml-auto mr-auto max-w-7xl">
          {headerListData.headerList.map((item, index) => (
            <HeaderNavList headerList={item} key={index} menuVisible={menuVisible} />
          ))}
        </div>
        <div
          className={`absolute w-full mt-2 bg-blue-500 ${
            menuVisible ? 'h-40' : 'h-0'
          } transition-height duration-[400ms] ease-in-out overflow-hidden z-10`}></div>
      </ul>
    </header>
  );
}

export default Header;
