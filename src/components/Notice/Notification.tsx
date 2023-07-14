import { useState } from 'react';
import { useGetNoticeQuery } from './query/getNoticeQuery';

function Notification() {
  const [pageNumber, setPageNumber] = useState<number>(0);
  const data = useGetNoticeQuery({ pageNumber: pageNumber });
  const changePage = (index: number) => {
    setPageNumber(index);
  };
  const [showPopup, setShowPopup] = useState(false);
  const [adminId, setAdminId] = useState('');
  const [adminPassword, setPassword] = useState('');
  const [isIncorrectCredentials, setIsIncorrectCredentials] = useState(false);

  const adminCredentials = {
    id: '1',
    password: '1',
  };

  const authenticateAdmin = () => {
    if (adminId === adminCredentials.id && adminPassword === adminCredentials.password) {
      setIsIncorrectCredentials(false);
      window.location.href = '/Bulletin/1';
    } else {
      setIsIncorrectCredentials(true);
    }
  };
  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setIsIncorrectCredentials(false);
  };

  return (
    <div>
      <div className="w-[100%] h-80 overflow-hidden mb-12 mmd:mb-6 mmd:h-40">
        <img src="../../../public/images/sodaInfoImg.jpg" alt="초록색 나무 이미지" className="mt-12 mmd:mt-6" />
      </div>

      <table className="w-full mt-12 mb-6 text-sm text-left text-gray-500 dark:text-gray-400 mmd:my-5 mmd:text-xs">
        <thead className="text-base text-gray-700 bg-gray-100 mmd:text-sm">
          <tr>
            <th scope="col" className="px-4 py-3 mxl:px-2 mxl:py-2">
              번호
            </th>
            <th scope="col" className="px-4 py-3 mxl:px-2 mxl:py-2">
              제목
            </th>
            <th scope="col" className="px-4 py-3 mxl:px-2 mxl:py-2">
              글쓴이
            </th>
            <th scope="col" className="px-4 py-3 mxl:px-2 mxl:py-2">
              날짜
            </th>
            <th scope="col" className="px-4 py-3 mxl:px-2 mxl:py-2">
              조회
            </th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.data?.noticePost.map((item) => (
              <tr className="text-sm text-black bg-white border-b mmd:text-xs" key={item.noticeId}>
                <td className="px-4 py-3 mxl:px-2 mxl:py-2">{item.number}</td>
                <td className="px-4 py-3 font-medium border whitespace-nowrap mxl:px-2 mxl:py-2">{item.title}</td>
                <td className="px-4 py-3 border mxl:px-2 mxl:py-2">{item.writer}</td>
                <td className="px-4 py-3 border mxl:px-2 mxl:py-2">{item.noticeDate}</td>
                <td className="px-4 py-3 mxl:px-2 mxl:py-2">{item.view}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="flex justify-center w-full gap-2 mmd:gap-1 ">
        {data.data &&
          Array.from({ length: data.data.totalPageCount }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => changePage(index)}
              className="flex items-center px-3 py-1 text-sm font-medium text-gray-900 transition-colors bg-white border rounded select-none mmd:px-2 hover:border-blue-600 hover:bg-blue-600 hover:text-white mmd:text-xs">
              {index + 1}
            </button>
          ))}
      </div>
      <div className="flex justify-end mb-10 mmd:mb-5">
        <button className="px-3 py-1 text-sm bg-gray-200 rounded mmd:px-2 mmd:text-xs" onClick={openPopup}>
          작성
        </button>
      </div>

      {
        /* 팝업창 */
        showPopup && (
          <div className="fixed top-0 left-0 z-10 flex items-center justify-center w-full h-full">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
            <div className="z-20 w-[50%] p-8 bg-white rounded md:w-[35%] max-w-xs	mmd:p-5">
              <div className="flex justify-between mb-4 text-sm mmd:text-xs ">
                <div>관리자만 공지 작성이 가능합니다.</div>
                <button onClick={closePopup} className="float-right text-sm text-red-600 mmd:text-xs">
                  X
                </button>
              </div>
              <input
                type="text"
                placeholder="아이디"
                className="w-full p-2 mb-2 text-sm border border-gray-300 mmd:text-xs"
                onChange={(e) => setAdminId(e.target.value)}
              />
              <input
                type="password"
                placeholder="비밀번호"
                className="w-full p-2 mb-2 text-sm border border-gray-300 mmd:text-xs"
                onChange={(e) => setPassword(e.target.value)}
              />
              {isIncorrectCredentials && (
                <p className="mb-2 text-sm text-red-500 mmd:text-xs">아이디와 비밀번호를 확인하세요.</p>
              )}
              <button onClick={authenticateAdmin} className="px-3 py-1 mt-2 text-sm bg-gray-300 mmd:text-xs">
                확인
              </button>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default Notification;
