
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { GalleryView } from '@/components/GalleryView';
import { CategorySidebar } from '@/components/CategorySidebar';
import { SearchBar } from '@/components/SearchBar';
import { UploadZone } from '@/components/UploadZone';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [searchQuery, setSearchQuery] = useState('');
  const [photos, setPhotos] = useState([]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <Header />
      
      <div className="flex h-[calc(100vh-80px)]">
        <CategorySidebar 
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />
        
        <div className="flex-1 flex flex-col">
          <div className="p-6 border-b border-gray-700 bg-black/40 backdrop-blur-sm">
            <SearchBar 
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
          </div>
          
          <div className="flex-1 overflow-hidden">
            {photos.length === 0 ? (
              <UploadZone onPhotosAdd={setPhotos} />
            ) : (
              <GalleryView 
                photos={photos}
                selectedCategory={selectedCategory}
                searchQuery={searchQuery}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
