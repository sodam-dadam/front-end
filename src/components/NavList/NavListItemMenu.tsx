import { Link, useParams } from 'react-router-dom';
import { INavListItemMenuType } from '../CenterInfo/CenterInfoType';

function NavListItemMenu({ listName, listItem, url }: INavListItemMenuType) {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="flex flex-col mmd:flex-row mmd:mb-6">
      <div className="w-40 py-6 text-base text-center text-white bg-blue-800 whitespace-nowrap mmd:text-xs mmd:py-2 mmd:px-2 mmd:w-16">
        {listName}
      </div>
      <div className="flex flex-col mmd:flex-row mmd:w-[100%] mmd:justify-around mmd:border-r mmd:border-t mmd:border-b">
        {listItem.map((list, index) => {
          return (
            <Link
              className={`${
                Number(id) === index + 1 ? 'md:bg-gray-100 text-blue-800' : 'bg-inherit'
              } py-3 pl-6 text-sm text-left transition duration-500 ease-in-out border-b mmd:py-2 mmd:text-center mmd:pl-0 mmd:border-b-0 md:hover:bg-gray-100 hover:text-blue-800 mmd:text-xs`}
              key={list}
              to={`${url}/${index + 1}`}>
              {list}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default NavListItemMenu;
