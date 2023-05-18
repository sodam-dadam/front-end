import MainBox from './MainBox';
import TopCarousel from './TopCarousel';
import BottomCarousel from './BottomCarousel';
import { useEffect, useState } from 'react';
import { getMainData } from '../../api/main';
import { IMainResponseType } from './MainType';

function Template() {
  const [mainData, setMainData] = useState<IMainResponseType | undefined>();
  useEffect(() => {
    const mainFn = async () => {
      const data = await getMainData();
      setMainData(data);
    };
    mainFn();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <TopCarousel />
      {mainData && (
        <>
          <MainBox data={mainData.consulting} name={'심리 상담'} />
          <MainBox data={mainData.education} name={'심리 교육'} />
        </>
      )}

      <BottomCarousel />
    </div>
  );
}

export default Template;
