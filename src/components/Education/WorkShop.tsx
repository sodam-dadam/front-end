import { useEffect, useState } from 'react';
import { ICounselingType } from '../Counseling/CounselingType';
import Template from '../Counseling/Template';
import { getWorkShop } from '../../api/workShop';

function WorkShop() {
  const [workShopData, setWorkShopData] = useState<ICounselingType | undefined>();
  useEffect(() => {
    const wSFn = async () => {
      const data = await getWorkShop();
      setWorkShopData(data);
    };
    wSFn();
  }, []);
  return <>{workShopData && <Template data={workShopData} />}</>;
}

export default WorkShop;
