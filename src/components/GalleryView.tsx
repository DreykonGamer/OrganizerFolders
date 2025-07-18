
import React, { useMemo } from 'react';
import { MoreHorizontal, Move, Trash2, Star, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface Photo {
  id: string;
  name: string;
  url: string;
  category: string;
  date: string;
}

interface GalleryViewProps {
  photos: Photo[];
  selectedCategory: string;
  searchQuery: string;
  onPhotoClick?: (photo: Photo) => void;
  onMovePhoto?: (photoId: string, newCategory: string) => void;
  onDeletePhoto?: (photoId: string) => void;
  onFavoritePhoto?: (photoId: string) => void;
}

const categories = [
  'Todas', 'Família', 'Negócios', 'Produtos', 'Jogos', 'Games', 'Lugares', 
  'Quadros', 'Produtora', 'Móveis', 'Lojas', 'Marketing', 'Vídeos', 
  'Fotos Casa', 'Fotos Sala', 'Fotos Varanda', 'Fotos Cozinha', 
  'Fotos Banheiro', 'Fotos Piscina', 'Fotos Área de Serviço', 'Agência',
  'Fotos Projetos', 'Filmmaker', 'Story Maker', 'CEO', 'Social Media',
  'Influencer', 'Pets', 'Natureza', 'Eventos', 'Comidas', 'Documentos',
  'Prints', 'Memes', 'Selfies', 'Capturas de tela', 'Favoritos', 'Privado'
];

export const GalleryView = ({ 
  photos, 
  selectedCategory, 
  searchQuery, 
  onPhotoClick,
  onMovePhoto,
  onDeletePhoto,
  onFavoritePhoto
}: GalleryViewProps) => {
  const filteredPhotos = useMemo(() => {
    let filtered = photos;
    
    if (selectedCategory !== 'Todas') {
      filtered = filtered.filter(photo => photo.category === selectedCategory);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(photo => 
        photo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        photo.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return filtered;
  }, [photos, selectedCategory, searchQuery]);

  const handleMovePhoto = (photoId: string, newCategory: string) => {
    if (onMovePhoto) {
      onMovePhoto(photoId, newCategory);
    }
  };

  const handleDeletePhoto = (photoId: string) => {
    if (onDeletePhoto) {
      onDeletePhoto(photoId);
    }
  };

  const handleFavoritePhoto = (photoId: string) => {
    if (onFavoritePhoto) {
      onFavoritePhoto(photoId);
    }
  };

  return (
    <div className="flex-1 overflow-y-auto p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-red-400">
            {selectedCategory}
          </h2>
          <p className="text-gray-400">
            {filteredPhotos.length} {filteredPhotos.length === 1 ? 'foto' : 'fotos'} 
            {searchQuery && ` encontradas para "${searchQuery}"`}
          </p>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="border-red-600/30 text-red-400 hover:bg-red-600/20">
            Selecionar Todas
          </Button>
          <Button variant="outline" size="sm" className="border-red-600/30 text-red-400 hover:bg-red-600/20">
            Visualização
          </Button>
        </div>
      </div>

      {filteredPhotos.length === 0 ? (
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="w-8 h-8 text-red-400" />
            </div>
            <h3 className="text-lg font-medium text-red-300 mb-2">Nenhuma foto encontrada</h3>
            <p className="text-gray-400">
              {searchQuery 
                ? `Não encontramos fotos para "${searchQuery}"`
                : `Não há fotos na categoria "${selectedCategory}"`
              }
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group relative aspect-square bg-gray-800 rounded-xl overflow-hidden border border-red-600/30 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-200 cursor-pointer"
              onClick={() => onPhotoClick?.(photo)}
            >
              <img
                src={photo.url}
                alt={photo.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder.svg';
                }}
              />
              
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-200" />
              
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="w-8 h-8 p-0 bg-gray-900/90 hover:bg-gray-800 border border-red-600/30"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <MoreHorizontal className="w-4 h-4 text-red-400" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-gray-900 border-red-600/30">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <DropdownMenuItem className="text-gray-300 hover:bg-red-600/20 hover:text-red-300">
                          <Move className="w-4 h-4 mr-2" />
                          Mover para...
                        </DropdownMenuItem>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent side="left" className="bg-gray-900 border-red-600/30 max-h-64 overflow-y-auto">
                        {categories.filter(cat => cat !== selectedCategory && cat !== 'Todas').map((category) => (
                          <DropdownMenuItem
                            key={category}
                            onClick={() => handleMovePhoto(photo.id, category)}
                            className="text-gray-300 hover:bg-red-600/20 hover:text-red-300"
                          >
                            {category}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenuItem 
                      onClick={() => handleFavoritePhoto(photo.id)}
                      className="text-gray-300 hover:bg-red-600/20 hover:text-red-300"
                    >
                      <Star className="w-4 h-4 mr-2" />
                      Favoritar
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => handleDeletePhoto(photo.id)}
                      className="text-red-400 hover:bg-red-600/20 hover:text-red-300"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Excluir
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <p className="text-white text-sm font-medium truncate">{photo.name}</p>
                <p className="text-white/80 text-xs">{photo.date}</p>
              </div>
              
              <div className="absolute top-2 left-2">
                <span className="text-xs bg-red-600/80 text-white px-2 py-1 rounded-full font-medium">
                  {photo.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
