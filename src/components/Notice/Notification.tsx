const data = [
  {
    number: 1,
    title: '첫번째 공지입니다.',
    writer: '운영자',
    date: '2023-06-01',
    views: 19,
  },
  {
    number: 1,
    title: '첫번째 공지입니다.',
    writer: '운영자',
    date: '2023-06-01',
    views: 19,
  },
  {
    number: 1,
    title: '첫번째 공지입니다.',
    writer: '운영자',
    date: '2023-06-01',
    views: 19,
  },
  {
    number: 1,
    title: '첫번째 공지입니다.',
    writer: '운영자',
    date: '2023-06-01',
    views: 19,
  },
  {
    number: 1,
    title: '첫번째 공지입니다.',
    writer: '운영자',
    date: '2023-06-01',
    views: 19,
  },
  {
    number: 1,
    title: '첫번째 공지입니다.',
    writer: '운영자',
    date: '2023-06-01',
    views: 19,
  },
  {
    number: 1,
    title: '첫번째 공지입니다.',
    writer: '운영자',
    date: '2023-06-01',
    views: 19,
  },
  {
    number: 1,
    title: '첫번째 공지입니다.',
    writer: '운영자',
    date: '2023-06-01',
    views: 19,
  },
];

function Notification() {
  return (
    <div>
      <div className="w-[100%] h-96 overflow-hidden mb-12 mmd:mb-6">
        <img src="../../../public/images/sodaInfoImg.jpg" alt="초록색 나무 이미지" className="mt-12 mmd:mt-6" />
      </div>

      <table className="w-full my-10 text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3">
              번호
            </th>
            <th scope="col" className="px-6 py-3">
              제목
            </th>
            <th scope="col" className="px-6 py-3">
              글쓴이
            </th>
            <th scope="col" className="px-6 py-3">
              날짜
            </th>
            <th scope="col" className="px-6 py-3">
              조회
            </th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item) => (
              <tr className="text-black bg-white border-b" key={item.number}>
                <td className="px-6 py-4">{item.number}</td>
                <td className="px-6 py-4 font-medium border whitespace-nowrap">{item.title}</td>
                <td className="px-6 py-4 border">{item.writer}</td>
                <td className="px-6 py-4 border">{item.date}</td>
                <td className="px-6 py-4">{item.views}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Notification;
