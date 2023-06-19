import { useEffect, useState } from 'react';
import { ICounselingType } from '../Counseling/CounselingType';
import Template from '../Counseling/Template';
import { getBookReading } from '../../api/bookReading';

function BookReading() {
  const [bookReadingData, setBookReadingData] = useState<ICounselingType | undefined>();
  useEffect(() => {
    const bRFn = async () => {
      const data = await getBookReading();
      setBookReadingData(data);
    };
    bRFn();
  }, []);
  return <>{bookReadingData && <Template data={bookReadingData} />}</>;
}

export default BookReading;
