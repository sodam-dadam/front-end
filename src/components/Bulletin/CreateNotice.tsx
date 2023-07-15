import React, { useState } from 'react';

function CreateNotice() {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [files, setFiles] = useState<File[]>([]);
  const [imgFiles, setImgFiles] = useState<File[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const noticeData = {
      title: title,
      content: content,
      files: files,
      imgFiles: imgFiles,
    };
    console.log('noticeData = ', noticeData);
    // 여기에 submit 데이터 백에 전달해야함

    setTitle('');
    setContent('');
    setFiles([]);
    setImgFiles([]);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const uploadedFiles = Array.from(event.target.files);
      setFiles((prev) => [...prev, ...uploadedFiles]);
    }
  };

  const removeFile = (indexToRemove: number) => {
    setFiles(files.filter((_, index) => index !== indexToRemove));
  };

  const handleImgFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const uploadedImgFiles = Array.from(event.target.files);
      setImgFiles((prev) => [...prev, ...uploadedImgFiles]);
    }
  };

  const removeImgFile = (indexToRemove: number) => {
    setImgFiles(files.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="mt-12">
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">제목</label>
        <input
          type="text"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label className="block mb-2">내용</label>
        <textarea
          className="w-full h-48 p-2 mb-4 border border-gray-300 rounded"
          value={content}
          onChange={(e) => setContent(e.target.value)}></textarea>
        <div className="flex gap-4">
          <label className="block mb-2">이미지 파일 업로드</label>
          <div className="text-red-600">(게시판에 보여지는 이미지)</div>
        </div>
        <input
          type="file"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          multiple
          onChange={handleImgFileChange}
        />

        {/* 업로드한 이미지 파일 목록 */}
        <div className="mb-4">
          {imgFiles.map((imgFile, index) => (
            <div key={index} className="flex items-center mb-2">
              <span>{imgFile.name}</span>
              <button
                type="button"
                className="ml-2 text-red-600 hover:text-red-800"
                onClick={() => removeImgFile(index)}>
                x
              </button>
            </div>
          ))}
        </div>

        <label className="block mb-2">파일 업로드</label>
        <input
          type="file"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          multiple
          onChange={handleFileChange}
        />

        {/* 업로드한 파일 목록 */}
        <div className="mb-4">
          {files.map((file, index) => (
            <div key={index} className="flex items-center mb-2">
              <span>{file.name}</span>
              <button type="button" className="ml-2 text-red-600 hover:text-red-800" onClick={() => removeFile(index)}>
                x
              </button>
            </div>
          ))}
        </div>

        <button type="submit" className="px-6 py-2 mb-12 font-semibold text-white bg-blue-800 rounded">
          작성하기
        </button>
      </form>
    </div>
  );
}

export default CreateNotice;
