import ReservationBtn from '../ReservationBtn/ReservationBtn';
import { ICounselingType } from './CounselingType';

function Template({ data }: { data: ICounselingType }) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-4 mt-16 mmd:mt-12">
        {data.mainText.map((item, index) => {
          return (
            <p className="ml-auto mr-auto text-xl font-medium mmd:text-lg" key={index}>
              {item}
            </p>
          );
        })}
      </div>
      <div className="flex flex-col gap-2 mt-16 mmd:mt-12">
        {data.subText_1.map((item, index) => {
          return (
            <p className="ml-auto mr-auto text-lg text-blue-800 mmd:text-base" key={index}>
              {item}
            </p>
          );
        })}
      </div>
      <div
        className="w-[80%] h-60 mt-16 ml-auto mr-auto bg-cover bg-center mmd:mt-12 max-w-lg mmd:h-40"
        style={{ backgroundImage: `url(${data.img_1})` }}></div>
      <div className="flex flex-col gap-2 mt-16 mmd:mt-12">
        {data.subText_2.map((item, index) => {
          return (
            <p className="ml-auto mr-auto text-base mmd:text-sm" key={index}>
              {item}
            </p>
          );
        })}
      </div>
      <div
        className="w-[80%] h-60 mt-16 ml-auto mr-auto bg-cover bg-center mb-16 mmd:mt-12 mmd:mb-8 max-w-lg mmd:h-40"
        style={{ backgroundImage: `url(${data.img_2})` }}></div>
      <ReservationBtn />
    </div>
  );
}
export default Template;
