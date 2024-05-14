import React, { useState } from 'react';
import SearchInput from '../components/Molecules/SearchInput';
import data from '../json/media.json';

const Visuals = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showImages, setShowImages] = useState(true);
  const [showVideos, setShowVideos] = useState(true);

  const filteredData = data.filter(item => {
    const matchesType = (showImages && item.type === 'image') || (showVideos && item.type === 'video');
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <SearchInput setSearchTerm={setSearchTerm} />
        <div>
          <label className="inline-flex items-center mx-2">
            <input type="checkbox" checked={showImages} onChange={() => setShowImages(!showImages)} className="form-checkbox" />
            <span className="ml-2">صور</span>
          </label>
          <label className="inline-flex items-center mx-2">
            <input type="checkbox" checked={showVideos} onChange={() => setShowVideos(!showVideos)} className="form-checkbox" />
            <span className="ml-2">فيديو</span>
          </label>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {filteredData.map((item) => (
          <div key={item.id} className="border rounded-lg overflow-hidden">
            {item.type === 'video' ? (
              <video controls className="w-full">
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={item.src} alt={item.title} className="w-full h-auto" />
            )}
            <div className="p-2">
              <h5 className="text-lg">{item.title}</h5>
              <p className="text-sm text-gray-500">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Visuals