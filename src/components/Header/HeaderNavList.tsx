import { Link } from 'react-router-dom';
import { IListType } from './HeaderType';

function HeaderNavList({ headerList, menuVisible }: { headerList: IListType; menuVisible: boolean }) {
  return (
    <li className="relative text-xl font-medium mxl:text-base basis-3/12">
      <Link
        className="flex justify-center transition duration-500 ease-in-out pr-auto pl-auto hover:text-blue-800"
        to={`${headerList.link}/1`}>
        {headerList.name}
      </Link>
      <div>
        <div className={`absolute inset-x-0 z-20 flex flex-col h-0 gap-2 mt-6 max-w-7xl ${menuVisible || 'hidden'}`}>
          {headerList.list.map((list, index) => {
            return (
              <Link
                to={`${headerList.link}/${index + 1}`}
                key={index}
                className="p-1 ml-auto mr-auto text-lg font-normal text-white hover:text-blue-700 hover:border-b hover:text-xl mxl:hover:text-lg mxl:text-base">
                {list}
              </Link>
            );
          })}
        </div>
      </div>
    </li>
  );
}

export default HeaderNavList;
