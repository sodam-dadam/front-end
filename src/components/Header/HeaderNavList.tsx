import { Link } from 'react-router-dom';
import { INavListDataType } from '../NavList/NavListType';

function HeaderNavList({ headerList }: { headerList: INavListDataType }) {
  return (
    <li className=" mlg:text-sm basis-1/5">
      <Link
        className="flex justify-center transition duration-500 ease-in-out pr-auto pl-auto hover:text-blue-800"
        to={`${headerList.url}/1`}>
        {headerList.listName}
      </Link>
    </li>
  );
}

export default HeaderNavList;
