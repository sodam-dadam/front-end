import { useLocation } from 'react-router-dom';
import NavListContent from './NavListContent';
import NavListItemMenu from './NavListItemMenu';
import { INavListDataType } from './NavListType';
import { useEffect, useState } from 'react';
import { getNavList } from '../../api/navList';

function Template() {
  const currentUrl = useLocation();
  const [currentList, setCurrentList] = useState<INavListDataType | null>(null);

  const [listData, setListData] = useState<INavListDataType[] | undefined>();
  useEffect(() => {
    const listFn = async () => {
      const data = await getNavList();
      setListData(data);
    };
    listFn();
  }, []);

  useEffect(() => {
    if (listData) {
      const ListUrl = listData.map((item) => {
        return currentUrl.pathname.includes(item.url);
      });
      setCurrentList(listData[ListUrl.indexOf(true)]);
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
