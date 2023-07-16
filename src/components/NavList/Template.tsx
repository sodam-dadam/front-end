import { useLocation } from 'react-router-dom';
import NavListContent from './NavListContent';
import NavListItemMenu from './NavListItemMenu';
import { useEffect, useState } from 'react';
import { getMainData } from '../../api/main';
import { IMainResponseType, INavlistType } from '../Main/MainType';

function Template() {
  const currentUrl = useLocation();
  const [currentList, setCurrentList] = useState<INavlistType | null>(null);
  const [listData, setListData] = useState<IMainResponseType | undefined>();
  useEffect(() => {
    const mainFn = async () => {
      const data = await getMainData();
      setListData(data);
    };
    mainFn();
  }, []);

  useEffect(() => {
    if (listData) {
      const ListUrl = listData.navlist.map((item) => {
        return currentUrl.pathname.includes(item.url);
      });
      setCurrentList(listData.navlist[ListUrl.indexOf(true)]);
    }
  }, [currentUrl, listData]);

  return (
    <>
      {currentList ? (
        <div className="flex flex-col">
          <img src={currentList.listImg} alt={currentList.listImgAlt} />
          <div className="flex gap-[5%] mx-[12%] mt-[5%] mmd:flex-col max-w-6xl">
            <NavListItemMenu listName={currentList.listName} listItem={currentList.listItem} url={currentList.url} />
            <NavListContent itemData={currentList.listItem} listName={currentList.listName} />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Template;
