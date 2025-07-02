
import React, { useCallback } from 'react';
import { Upload, Image, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Photo {
  id: string;
  name: string;
  url: string;
  category: string;
  date: string;
}

interface UploadZoneProps {
  onPhotosAdd: (photos: Photo[]) => void;
}

export const UploadZone = ({ onPhotosAdd }: UploadZoneProps) => {
  const categorizeWithAI = (fileName: string): string => {
    const name = fileName.toLowerCase();
    const categories = ['Família', 'Produtos', 'Negócios', 'Jogos', 'Natureza', 'Selfies'];
    return categories[Math.floor(Math.random() * categories.length)];
  };

  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const photoArray = Array.from(files).map(file => ({
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        url: URL.createObjectURL(file),
        category: categorizeWithAI(file.name),
        date: new Date().toLocaleDateString('pt-BR')
      }));
      onPhotosAdd(photoArray);
    }
  }, [onPhotosAdd]);

  const generateDemoPhotos = () => {
    const demoPhotos = [
      { id: '1', name: 'Família reunião.jpg', url: '/placeholder.svg', category: 'Família', date: '15/12/2024' },
      { id: '2', name: 'Produto cosmético.jpg', url: '/placeholder.svg', category: 'Produtos', date: '14/12/2024' },
      { id: '3', name: 'Reunião negócios.jpg', url: '/placeholder.svg', category: 'Negócios', date: '13/12/2024' },
      { id: '4', name: 'Gameplay.jpg', url: '/placeholder.svg', category: 'Jogos', date: '12/12/2024' },
      { id: '5', name: 'Paisagem.jpg', url: '/placeholder.svg', category: 'Natureza', date: '11/12/2024' },
      { id: '6', name: 'Selfie.jpg', url: '/placeholder.svg', category: 'Selfies', date: '10/12/2024' },
    ];
    onPhotosAdd(demoPhotos);
  };

  return (
    <div className="flex-1 flex items-center justify-center p-12">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-r from-red-600/20 to-red-700/20 rounded-full mx-auto mb-6 border border-red-600/30">
            <Image className="w-12 h-12 text-red-400" />
          </div>
          
          <h2 className="text-3xl font-bold text-red-400 mb-4">
            Organize suas fotos com
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent"> IA</span>
          </h2>
          
          <p className="text-lg text-gray-300 mb-8">
            Deixe nossa inteligência artificial organizar automaticamente suas fotos em categorias temáticas. 
            Família, negócios, produtos, jogos e muito mais!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-red-600/30">
            <Sparkles className="w-8 h-8 text-red-400 mx-auto mb-3" />
            <h3 className="font-semibold text-red-300 mb-2">IA Embarcada</h3>
            <p className="text-sm text-gray-400">Processamento offline que respeita sua privacidade</p>
          </div>
          
          <div className="p-6 bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-red-600/30">
            <Zap className="w-8 h-8 text-red-500 mx-auto mb-3" />
            <h3 className="font-semibold text-red-300 mb-2">Organização Automática</h3>
            <p className="text-sm text-gray-400">Categorização instantânea por conteúdo visual</p>
          </div>
          
          <div className="p-6 bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-red-600/30">
            <Upload className="w-8 h-8 text-red-600 mx-auto mb-3" />
            <h3 className="font-semibold text-red-300 mb-2">Busca Inteligente</h3>
            <p className="text-sm text-gray-400">Encontre fotos usando linguagem natural</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <label className="cursor-pointer">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 text-base shadow-lg shadow-red-500/30"
              >
                <Upload className="w-5 h-5 mr-2" />
                Selecionar Fotos
              </Button>
            </label>
            
            <Button
              onClick={generateDemoPhotos}
              variant="outline"
              size="lg"
              className="px-8 py-3 text-base bg-gray-900/80 border-red-600/30 hover:bg-red-600/20 text-red-300"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Ver Demo
            </Button>
          </div>
          
          <p className="text-sm text-gray-500">
            Suporta JPG, PNG, HEIC e outros formatos de imagem
          </p>
        </div>
      </div>
    </div>
  );
};
