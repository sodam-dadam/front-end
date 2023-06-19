import { ICareerType } from './CounselorInfoType';

function CareerInfo({ item }: { item: ICareerType }) {
  return (
    <div className="mt-12 border-2">
      <div className="flex gap-16 p-10 pl-16 pr-16 mxl:pl-6 mxl:pr-6 mxl:p-6 mxl:gap-8">
        <div className="flex flex-col justify-center pr-10 border-r-2 basis-2/5 mxl:pr-0">
          <img src="../../../public/images/centerImg1.jpeg" alt="" className="w-[90%]" />
          <p className="mt-10 text-2xl text-blue-800 mxl:text-xl whitespace-nowrap ">{item.name}</p>
          <p className="mt-1 text-xl mxl:text-lg whitespace-nowrap ">{item.role}</p>
        </div>
        <div className="truncate basis-3/5">
          {item.careerList.map((item, index) => {
            return (
              <p className="mb-3 overflow-hidden text-lg truncate mxl:text-base mxl:mb-1" key={index}>
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
