import { useEffect, useState } from 'react';
import Template from './Template';
import { ICounselingType } from './CounselingType';
import { getAdolescentsParents } from '../../api/adolescentsParents';

function AdolescentsParents() {
  const [adolescentsParentsData, setAdolescentsParentsData] = useState<ICounselingType | undefined>();
  useEffect(() => {
    const apFn = async () => {
      const data = await getAdolescentsParents();
      setAdolescentsParentsData(data);
    };
    apFn();
  }, []);
  return <>{adolescentsParentsData && <Template data={adolescentsParentsData} />}</>;
}

export default AdolescentsParents;
