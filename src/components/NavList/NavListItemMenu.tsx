import { Link, useParams } from 'react-router-dom';
import { INavListItemMenuType } from '../../pages/CenterInfoPage/CenterInfoType';

function NavListItemMenu({ listName, listItem }: INavListItemMenuType) {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="flex flex-col mxl:flex-row mxl:mb-10">
      <div className="pt-12 pb-12 text-2xl text-center text-white bg-blue-800 whitespace-nowrap mxl:text-base mxl:pt-2 mxl:pb-2 mxl:pr-4 mxl:pl-4 xl:w-60">
        {listName}
      </div>
      <div className="flex flex-col mxl:flex-row mxl:w-[100%] mxl:justify-around mxl:border-r mxl:border-t mxl:border-b">
        {listItem.map((list, index) => {
          return (
            <Link
              className={`${
                Number(id) === index + 1 ? 'xl:bg-gray-100 text-blue-800' : 'bg-inherit'
              } pt-4 pb-4 pl-6 text-lg text-left transition duration-500 ease-in-out border-b mxl:pt-2 mxl:pb-2 mxl:text-center mxl:pl-0 mxl:border-b-0 xl:hover:bg-gray-100 hover:text-blue-800 mmd:text-base`}
              key={list}
              to={`/CenterInfo/${index + 1}`}>
              {list}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default NavListItemMenu;
