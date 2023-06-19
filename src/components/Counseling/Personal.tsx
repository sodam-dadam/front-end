import { useEffect, useState } from 'react';
import Template from './Template';
import { getPersonal } from '../../api/personal';
import { ICounselingType } from './CounselingType';

function Personal() {
  const [personalData, setPersonalData] = useState<ICounselingType | undefined>();
  useEffect(() => {
    const personalFn = async () => {
      const data = await getPersonal();
      setPersonalData(data);
    };
    personalFn();
  }, []);
  return <>{personalData && <Template data={personalData} />}</>;
}

export default Personal;
