
import React, { useCallback, useState } from 'react';
import { Upload, Camera, Folder, Link, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle 
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

interface ImageUploaderProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (files: File[]) => void;
}

export const ImageUploader = ({ isOpen, onClose, onUpload }: ImageUploaderProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [urlInput, setUrlInput] = useState('');

  const handleFiles = useCallback((files: FileList | null) => {
    if (files) {
      const fileArray = Array.from(files).filter(file => 
        file.type.startsWith('image/')
      );
      onUpload(fileArray);
      onClose();
    }
  }, [onUpload, onClose]);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    handleFiles(e.dataTransfer.files);
  }, [handleFiles]);

  const handleUrlUpload = () => {
    if (urlInput.trim()) {
      // Simular upload de URL - em produção, você faria download da imagem
      console.log('Uploading from URL:', urlInput);
      setUrlInput('');
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-900 border-red-600/30 max-w-md">
        <DialogHeader>
          <DialogTitle className="text-red-400 text-xl text-center">
            Adicionar Imagens
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 p-4">
          {/* Drag & Drop Area */}
          <div
            className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
              dragActive 
                ? 'border-red-500 bg-red-600/10' 
                : 'border-gray-600 hover:border-red-600/50'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <Upload className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <p className="text-gray-300 mb-2">Arraste suas fotos aqui</p>
            <p className="text-sm text-gray-500">ou clique para selecionar</p>
            
            <label className="cursor-pointer">
              <input
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                onChange={(e) => handleFiles(e.target.files)}
              />
              <Button className="mt-4 bg-red-600 hover:bg-red-700">
                <Folder className="w-4 h-4 mr-2" />
                Selecionar Arquivos
              </Button>
            </label>
          </div>

          {/* Camera Capture */}
          <Button 
            className="w-full bg-gray-800 hover:bg-gray-700 border border-gray-600"
            onClick={() => {
              // Em produção, abriria a câmera
              console.log('Opening camera...');
            }}
          >
            <Camera className="w-4 h-4 mr-2" />
            Tirar Foto
          </Button>

          {/* URL Input */}
          <div className="space-y-2">
            <div className="flex space-x-2">
              <Input
                placeholder="Cole uma URL da imagem..."
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                className="bg-gray-800 border-gray-600 text-gray-200"
              />
              <Button
                onClick={handleUrlUpload}
                disabled={!urlInput.trim()}
                className="bg-red-600 hover:bg-red-700"
              >
                <Link className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="text-xs text-gray-500 text-center">
            Suporta JPG, PNG, GIF, WEBP e outros formatos
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
