import { useEffect, useState } from 'react';
import Template from './Template';
import { ICounselingType } from './CounselingType';
import { getCouple } from '../../api/couple';

function Couple() {
  const [coupleData, setCoupleData] = useState<ICounselingType | undefined>();
  useEffect(() => {
    const coupleFn = async () => {
      const data = await getCouple();
      setCoupleData(data);
    };
    coupleFn();
  }, []);
  return <>{coupleData && <Template data={coupleData} />}</>;
}

export default Couple;
