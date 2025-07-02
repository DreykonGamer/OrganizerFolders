
import React, { useCallback } from 'react';
import { Upload, Image, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface UploadZoneProps {
  onPhotosAdd: (photos: any[]) => void;
}

export const UploadZone = ({ onPhotosAdd }: UploadZoneProps) => {
  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const photoArray = Array.from(files).map(file => ({
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        url: URL.createObjectURL(file),
        category: Math.random() > 0.5 ? 'Família' : 'Produtos',
        date: new Date().toLocaleDateString()
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
          <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mx-auto mb-6">
            <Image className="w-12 h-12 text-blue-600" />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Organize suas fotos com
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> IA</span>
          </h2>
          
          <p className="text-lg text-gray-600 mb-8">
            Deixe nossa inteligência artificial organizar automaticamente suas fotos em categorias temáticas. 
            Família, negócios, produtos, jogos e muito mais!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200">
            <Sparkles className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">IA Embarcada</h3>
            <p className="text-sm text-gray-600">Processamento offline que respeita sua privacidade</p>
          </div>
          
          <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200">
            <Zap className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Organização Automática</h3>
            <p className="text-sm text-gray-600">Categorização instantânea por conteúdo visual</p>
          </div>
          
          <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200">
            <Upload className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Busca Inteligente</h3>
            <p className="text-sm text-gray-600">Encontre fotos usando linguagem natural</p>
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
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-base shadow-lg"
              >
                <Upload className="w-5 h-5 mr-2" />
                Selecionar Fotos
              </Button>
            </label>
            
            <Button
              onClick={generateDemoPhotos}
              variant="outline"
              size="lg"
              className="px-8 py-3 text-base bg-white/80 border-gray-300 hover:bg-gray-50"
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
