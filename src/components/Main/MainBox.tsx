import { IMainCardType, IMainBoxType } from './MainType';
import MainCard from './MainCard';

function MainBox({ data, name }: IMainBoxType) {
  return (
    <div className={`w-full mb-10 h-full max-w-6xl mlg:w-[95%]`}>
      <div className="text-xl font-semibold text-center mlg:text-lg">
        <span className="pb-2 border-b-2 border-gray-400">{name}</span>
      </div>
      <div className={`flex w-full mt-12 flex-nowrap mlg:mt-7 ${name === '심리 상담' ? 'gap-1' : 'gap-16 mlg:gap-12'}`}>
        {data.map((item: IMainCardType) => (
          <MainCard title={item.title} content={item.content} img={item.img} name={name} />
        ))}
      </div>
    </div>
  );
}

export default MainBox;
