import React, { useState } from 'react';
import SearchInput from '../components/Molecules/SearchInput';
import CustomCheckbox from '../components/Atoms/CustomCheckbox';
import MediaModal from '../components/Molecules/MediaModal';
import media from '../json/media.json';
import notFound from '../assets/images/notFound.svg'
import image1 from '../assets/images/amin1.png';
import sampleVideo from '../assets/video/sample-video.mp4';
const GalleryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showImages, setShowImages] = useState(true);
  const [showVideos, setShowVideos] = useState(true);
  const [filterSubType, setFilterSubType] = useState('الكل');
  const [selectedMedia, setSelectedMedia] = useState(null);


  const filteredData = media.filter(item => {
    const matchesType = (showImages && item.type === 'image') || (showVideos && item.type === 'video');
    const matchesSubType = filterSubType === 'الكل' || item.subType === filterSubType;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSubType && matchesSearch;
  });
  const filterTypes = [
    { label: "الكل", value: "الكل" },
    { label: "استقبال", value: "استقبال" },
    { label: "اجتماعات", value: "اجتماعات" },
    { label: "السفارات", value: "السفارات" },
    { label: "صور شخصية", value: "صور شخصية" },
    { label: "زيارة", value: "زيارة" }
  ];
  return (
    <div className="py-6">
      <div className='shadow-cardShadow rounded-xl p-6'>
        <div className="flex justify-between items-center mb-4 gap-2">
          <div className='flex items-center gap-4 border-b border-gray-300'>
            {filterTypes.map(filter => (
              <button key={filter.value} onClick={() => setFilterSubType(filter.value)}
                className={`px-4 py-2 font-semibold ${filterSubType === filter.value ? 'text-[#2E357D] border-b-2 border-[#2E357D]' : 'text-gray-400'}`}>
                {filter.label}
              </button>
            ))}
          </div>
          <SearchInput setSearchTerm={setSearchTerm} />
          <div className='flex items-center gap-2'>
            <CustomCheckbox
              label="صور"
              checked={showImages}
              onChange={() => setShowImages(!showImages)}
            />
            <CustomCheckbox
              label="فيديو"
              checked={showVideos}
              onChange={() => setShowVideos(!showVideos)}
            />
          </div>

        </div>


        {filteredData.length === 0 ? (
          <div className="max-w-[200px] mx-auto">
            <img src={notFound} alt="not found" className="w-full block" />
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-4">
            {filteredData.map((item) => (
              <div key={item.id} className="border rounded-lg overflow-hidden cursor-pointer" onClick={() => setSelectedMedia(item)}>
                {item.type === 'video' ? (
                  <video controls className="w-full">
                    <source src={sampleVideo} type="video/mp4" />
                  </video>
                ) : (
                  <img src={image1} alt={item.title} className="w-full h-auto" />
                )}
                <div className="p-2">
                  <h5 className="text-lg">{item.title}</h5>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        <MediaModal isOpen={!!selectedMedia} close={() => setSelectedMedia(null)} media={selectedMedia} />
      </div>
    </div>
  );
};

export default GalleryPage;
