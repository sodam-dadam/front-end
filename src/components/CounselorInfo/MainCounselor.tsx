import { useEffect, useState } from 'react';
import Template from './Template';
import { ICounselorInfoType } from './CounselorInfoType';
import { getMainCounselor } from '../../api/mainCounselor';

function MainCounselor() {
  const [mainCounselorData, setMainCounselorData] = useState<ICounselorInfoType | undefined>();
  useEffect(() => {
    const mainCFn = async () => {
      const data = await getMainCounselor();
      setMainCounselorData(data);
    };
    mainCFn();
  }, []);

  return <>{mainCounselorData && <Template counselorData={mainCounselorData} />}</>;
}
export default MainCounselor;
