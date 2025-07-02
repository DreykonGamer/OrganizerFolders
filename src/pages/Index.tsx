
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { GalleryView } from '@/components/GalleryView';
import { CategorySidebar } from '@/components/CategorySidebar';
import { SearchBar } from '@/components/SearchBar';
import { UploadZone } from '@/components/UploadZone';
import { PhotoViewer } from '@/components/PhotoViewer';
import { SocialLogin } from '@/components/SocialLogin';
import { ImageUploader } from '@/components/ImageUploader';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [searchQuery, setSearchQuery] = useState('');
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showUploader, setShowUploader] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handlePhotoNavigation = (direction) => {
    if (!selectedPhoto) return;
    
    const currentIndex = photos.findIndex(p => p.id === selectedPhoto.id);
    if (direction === 'next' && currentIndex < photos.length - 1) {
      setSelectedPhoto(photos[currentIndex + 1]);
    } else if (direction === 'prev' && currentIndex > 0) {
      setSelectedPhoto(photos[currentIndex - 1]);
    }
  };

  const handlePhotoDelete = (photoId) => {
    setPhotos(photos.filter(p => p.id !== photoId));
    setSelectedPhoto(null);
  };

  const handleLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  const handleFileUpload = (files) => {
    const newPhotos = files.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      url: URL.createObjectURL(file),
      category: 'Todas', // A IA categorizaria automaticamente
      date: new Date().toLocaleDateString()
    }));
    setPhotos([...photos, ...newPhotos]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <Header 
        onLoginClick={() => setShowLogin(true)}
        onUploadClick={() => setShowUploader(true)}
        isLoggedIn={isLoggedIn}
      />
      
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
                onPhotoClick={handlePhotoClick}
              />
            )}
          </div>
        </div>
      </div>

      {selectedPhoto && (
        <PhotoViewer
          photo={selectedPhoto}
          photos={photos}
          onClose={() => setSelectedPhoto(null)}
          onNext={() => handlePhotoNavigation('next')}
          onPrevious={() => handlePhotoNavigation('prev')}
          onDelete={handlePhotoDelete}
        />
      )}

      <SocialLogin
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        onLogin={handleLogin}
      />

      <ImageUploader
        isOpen={showUploader}
        onClose={() => setShowUploader(false)}
        onUpload={handleFileUpload}
      />
    </div>
  );
};

export default Index;
