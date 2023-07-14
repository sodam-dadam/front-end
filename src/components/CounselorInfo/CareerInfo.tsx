import { ICareerType } from './CounselorInfoType';

function CareerInfo({ item }: { item: ICareerType }) {
  return (
    <div className="mt-8 border-2">
      <div className="flex gap-6 py-6 pl-6 mmd:p-6 mmd:gap-4 mmd:pl-2">
        <div className="flex flex-col justify-center ml-6 border-r-2 basis-2/5 mmd:pr-1 mmd:ml-0">
          <img src="../../../public/images/centerImg1.jpeg" alt="" className="w-[70%] mmd:w-[90%]" />
          <p className="mt-6 text-base text-blue-800 mmd:text-sm whitespace-nowrap mmd:mt-4">{item.name}</p>
          <p className="mt-1 text-sm mmd:text-xs whitespace-nowrap ">{item.role}</p>
        </div>
        <div className="truncate basis-3/5">
          {item.careerList.map((item, index) => {
            return (
              <p className="mb-3 overflow-hidden text-sm truncate mmd:text-xs mmd:mb-1" key={index}>
                • {item}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default CareerInfo;
