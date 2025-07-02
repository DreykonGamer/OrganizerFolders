
import React from 'react';
import { X, ChevronLeft, ChevronRight, Download, Share, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Photo {
  id: string;
  name: string;
  url: string;
  category: string;
  date: string;
}

interface PhotoViewerProps {
  photo: Photo;
  photos: Photo[];
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  onDelete: (photoId: string) => void;
}

export const PhotoViewer = ({ photo, photos, onClose, onNext, onPrevious, onDelete }: PhotoViewerProps) => {
  const currentIndex = photos.findIndex(p => p.id === photo.id);
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === photos.length - 1;

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
        <div className="text-white">
          <h3 className="text-lg font-semibold">{photo.name}</h3>
          <p className="text-sm text-gray-300">{photo.category} • {photo.date}</p>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
            <Download className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
            <Share className="w-4 h-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-red-400 hover:bg-red-600/20"
            onClick={() => onDelete(photo.id)}
          >
            <Trash2 className="w-4 h-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-white hover:bg-white/20"
            onClick={onClose}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-center w-full h-full px-16">
        <Button
          variant="ghost"
          size="lg"
          className="absolute left-4 text-white hover:bg-white/20 disabled:opacity-30"
          onClick={onPrevious}
          disabled={isFirst}
        >
          <ChevronLeft className="w-8 h-8" />
        </Button>

        <img
          src={photo.url}
          alt={photo.name}
          className="max-w-full max-h-full object-contain"
        />

        <Button
          variant="ghost"
          size="lg"
          className="absolute right-4 text-white hover:bg-white/20 disabled:opacity-30"
          onClick={onNext}
          disabled={isLast}
        >
          <ChevronRight className="w-8 h-8" />
        </Button>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
        {currentIndex + 1} de {photos.length}
      </div>
    </div>
  );
};
