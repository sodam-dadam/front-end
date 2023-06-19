import ReservationBtn from '../ReservationBtn/ReservationBtn';
import { ICounselingType } from './CounselingType';

function Template({ data }: { data: ICounselingType }) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-4 mt-32 mxl:mt-20">
        {data.mainText.map((item, index) => {
          return (
            <p className="ml-auto mr-auto text-4xl font-medium mxl:text-2xl" key={index}>
              {item}
            </p>
          );
        })}
      </div>
      <div className="flex flex-col gap-2 mt-32 mxl:mt-20">
        {data.subText_1.map((item, index) => {
          return (
            <p className="ml-auto mr-auto text-3xl text-blue-800 mxl:text-xl" key={index}>
              {item}
            </p>
          );
        })}
      </div>
      <div
        className="w-[80%] h-80 mt-32 ml-auto mr-auto bg-cover bg-center mxl:mt-20"
        style={{ backgroundImage: `url(${data.img_1})` }}></div>
      <div className="flex flex-col gap-2 mt-40 mxl:mt-28">
        {data.subText_2.map((item, index) => {
          return (
            <p className="ml-auto mr-auto text-2xl mxl:text-xl" key={index}>
              {item}
            </p>
          );
        })}
      </div>
      <div
        className="w-[80%] h-80 mt-40 ml-auto mr-auto bg-cover bg-center mb-28 mxl:mt-28 mxl:mb-8"
        style={{ backgroundImage: `url(${data.img_2})` }}></div>
      <ReservationBtn />
    </div>
  );
}
export default Template;
