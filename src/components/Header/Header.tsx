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
  const [listData, setListData] = useState<INavListDataType[] | undefined>();
  useEffect(() => {
    const listFn = async () => {
      const data = await getNavList();
      setListData(data);
    };
    listFn();
  }, []);
  return (
    <>
      {listData && (
        <header className="sticky top-[-90px] bg-white z-10">
          <div className="flex justify-center mt-8 mb-8">
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
            className="pt-4 pb-4 border-t border-b border-stone-950 mb-14 mxl:pt-2 mxl:pb-2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <div className="relative flex ml-auto mr-auto max-w-screen-2xl ">
              {listData.map((item, index) => (
                <HeaderNavList headerList={item} key={index} />
              ))}
            </div>
            <div
              className={`absolute w-full mt-4 bg-blue-500 mxl:mt-2 ${
                menuVisible ? 'h-40' : 'h-0'
              } transition-height duration-[400ms] ease-in-out overflow-hidden z-10`}>
              <div className="flex ml-auto mr-auto max-w-screen-2xl">
                {listData.map((item, index) => {
                  return (
                    <div className="inset-x-0 z-20 flex flex-col h-0 gap-2 mt-4 basis-1/5" key={index}>
                      {item.listItem.slice(0, 3).map((listName, index) => {
                        return (
                          <Link
                            to={`${item.url}/${index + 1}`}
                            key={index}
                            className="flex justify-center p-1 ml-auto mr-auto text-xl font-normal text-white transition duration-300 ease-in-out hover:text-blue-900 hover:border-b mxl:text-base">
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
