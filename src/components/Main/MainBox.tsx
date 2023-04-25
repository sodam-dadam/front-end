import { IMainCardType, IMainBoxType } from './MainType';
import MainCard from './MainCard';

function MainBox({ data, name }: IMainBoxType) {
  return (
    <div
      className={`w-full max-w-5xl text-white ${name === '심리 상담' ? 'bg-[#4575CA]' : 'bg-[#45ACCA]'} mb-10 h-full `}>
      <div className="w-full mt-4 text-lg font-bold text-center">{name}</div>
      <div className="flex w-full flex-nowrap">
        {data.map((item: IMainCardType) => (
          <MainCard title={item.title} content={item.content} img={item.img} />
        ))}
      </div>
    </div>
  );
}

export default MainBox;
