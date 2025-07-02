
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { GalleryView } from '@/components/GalleryView';
import { CategorySidebar } from '@/components/CategorySidebar';
import { SearchBar } from '@/components/SearchBar';
import { UploadZone } from '@/components/UploadZone';
import { PhotoViewer } from '@/components/PhotoViewer';
import { SocialLogin } from '@/components/SocialLogin';
import { ImageUploader } from '@/components/ImageUploader';

interface Photo {
  id: string;
  name: string;
  url: string;
  category: string;
  date: string;
}

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [searchQuery, setSearchQuery] = useState('');
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showUploader, setShowUploader] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Função para categorizar automaticamente usando IA (simulada)
  const categorizeWithAI = (fileName: string): string => {
    const name = fileName.toLowerCase();
    
    // Palavras-chave para categorização automática
    const categoryKeywords = {
      'Família': ['família', 'family', 'parentes', 'pais', 'filhos', 'irmãos', 'casamento', 'aniversário'],
      'Negócios': ['negócios', 'business', 'trabalho', 'escritório', 'reunião', 'apresentação', 'empresa'],
      'Produtos': ['produto', 'item', 'loja', 'venda', 'compra', 'shopping'],
      'Jogos': ['jogo', 'game', 'gaming', 'videogame', 'console', 'pc', 'gameplay'],
      'Natureza': ['natureza', 'nature', 'planta', 'árvore', 'flor', 'paisagem', 'praia', 'montanha'],
      'Comidas': ['comida', 'food', 'restaurante', 'pizza', 'hambúrguer', 'café', 'almoço', 'jantar'],
      'Pets': ['pet', 'cachorro', 'gato', 'animal', 'dog', 'cat'],
      'Selfies': ['selfie', 'autorretrato', 'eu', 'rosto'],
      'Capturas de tela': ['screenshot', 'print', 'captura', 'tela'],
      'Eventos': ['evento', 'festa', 'celebração', 'formatura', 'show'],
      'Móveis': ['móvel', 'casa', 'decoração', 'sala', 'quarto', 'cozinha'],
      'Documentos': ['documento', 'pdf', 'contrato', 'papel', 'receita']
    };

    for (const [category, keywords] of Object.entries(categoryKeywords)) {
      if (keywords.some(keyword => name.includes(keyword))) {
        return category;
      }
    }

    return 'Todas';
  };

  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const handlePhotoNavigation = (direction: 'next' | 'prev') => {
    if (!selectedPhoto) return;
    
    const currentIndex = photos.findIndex(p => p.id === selectedPhoto.id);
    if (direction === 'next' && currentIndex < photos.length - 1) {
      setSelectedPhoto(photos[currentIndex + 1]);
    } else if (direction === 'prev' && currentIndex > 0) {
      setSelectedPhoto(photos[currentIndex - 1]);
    }
  };

  const handlePhotoDelete = (photoId: string) => {
    setPhotos(photos.filter(p => p.id !== photoId));
    if (selectedPhoto?.id === photoId) {
      setSelectedPhoto(null);
    }
  };

  const handleMovePhoto = (photoId: string, newCategory: string) => {
    setPhotos(photos.map(photo => 
      photo.id === photoId 
        ? { ...photo, category: newCategory }
        : photo
    ));
  };

  const handleFavoritePhoto = (photoId: string) => {
    setPhotos(photos.map(photo => 
      photo.id === photoId 
        ? { ...photo, category: 'Favoritos' }
        : photo
    ));
  };

  const handleLogin = (provider: string) => {
    console.log(`Fazendo login com ${provider}`);
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  const handleFileUpload = (files: File[]) => {
    const newPhotos = files.map(file => {
      const category = categorizeWithAI(file.name);
      return {
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        url: URL.createObjectURL(file),
        category: category,
        date: new Date().toLocaleDateString('pt-BR')
      };
    });
    setPhotos([...photos, ...newPhotos]);
    console.log(`${newPhotos.length} fotos adicionadas e categorizadas automaticamente pela IA`);
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
          <div className="p-6 border-b border-red-600/30 bg-black/40 backdrop-blur-sm">
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
                onMovePhoto={handleMovePhoto}
                onDeletePhoto={handlePhotoDelete}
                onFavoritePhoto={handleFavoritePhoto}
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
