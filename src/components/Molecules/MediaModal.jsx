import React from 'react';
import image from '../../assets/images/amin6.png';
import sampleVideo from '../../assets/video/sample-video.mp4';
const MediaModal = ({ isOpen, close, media, download }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 px-4">
      <div className="bg-transparent p-4 rounded-lg max-w-3xl w-full">
        <div className='flex items-center justify-between absolute top-[10%] max-w-[750px] w-full'>
          <a href={image} download className="bg-black text-white p-2 rounded-lg">تحميل</a>
          <p className='text-white text-2xl text-center'>{media.title}</p>
          <button onClick={close} className="text-white text-xl bg-black max-w-[35px] w-full rounded-lg">X</button>
        </div>
        {media.type === 'video' ? (
          <video controls className="w-full">
            <source src={sampleVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={image} alt={media.title} className="w-full h-auto" />
        )}
        <div className="mt-8">
          <p className='text-white text-center text-2xl'>{media.date}</p>
        </div>
      </div>
    </div>
  );
};
export default MediaModal;
