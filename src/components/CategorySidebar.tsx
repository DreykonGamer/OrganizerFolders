
import React from 'react';
import { 
  Home, Users, Briefcase, ShoppingBag, Gamepad2, MapPin, 
  Frame, Video, Utensils, FileText, Camera, Heart, Leaf,
  Calendar, Smartphone, MessageCircle, Star, Lock, Archive,
  Building, Sofa, Store, Megaphone, HardHat, Clapperboard,
  Trophy, Crown, Rss, PawPrint, TreePine, PartyPopper, 
  Pizza, Printer, Laugh, ScanLine
} from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = [
  { name: 'Todas', icon: Home, count: 2847 },
  { name: 'Família', icon: Users, count: 245 },
  { name: 'Negócios', icon: Briefcase, count: 134 },
  { name: 'Produtos', icon: ShoppingBag, count: 187 },
  { name: 'Jogos', icon: Gamepad2, count: 89 },
  { name: 'Games', icon: Trophy, count: 76 },
  { name: 'Lugares', icon: MapPin, count: 156 },
  { name: 'Quadros', icon: Frame, count: 67 },
  { name: 'Produtora', icon: Clapperboard, count: 43 },
  { name: 'Móveis', icon: Sofa, count: 92 },
  { name: 'Lojas', icon: Store, count: 78 },
  { name: 'Marketing', icon: Megaphone, count: 112 },
  { name: 'Vídeos', icon: Video, count: 234 },
  { name: 'Fotos Casa', icon: Home, count: 145 },
  { name: 'Fotos Sala', icon: Sofa, count: 89 },
  { name: 'Fotos Varanda', icon: TreePine, count: 34 },
  { name: 'Fotos Cozinha', icon: Utensils, count: 67 },
  { name: 'Fotos Banheiro', icon: HardHat, count: 23 },
  { name: 'Fotos Piscina', icon: MapPin, count: 45 },
  { name: 'Fotos Área de Serviço', icon: HardHat, count: 19 },
  { name: 'Agência', icon: Building, count: 56 },
  { name: 'Fotos Projetos', icon: FileText, count: 123 },
  { name: 'Filmmaker', icon: Video, count: 87 },
  { name: 'Story Maker', icon: Frame, count: 94 },
  { name: 'CEO', icon: Crown, count: 34 },
  { name: 'Social Media', icon: Rss, count: 178 },
  { name: 'Influencer', icon: Star, count: 156 },
  { name: 'Pets', icon: PawPrint, count: 134 },
  { name: 'Natureza', icon: Leaf, count: 98 },
  { name: 'Eventos', icon: PartyPopper, count: 67 },
  { name: 'Comidas', icon: Pizza, count: 145 },
  { name: 'Documentos', icon: FileText, count: 89 },
  { name: 'Prints', icon: Printer, count: 234 },
  { name: 'Memes', icon: Laugh, count: 167 },
  { name: 'Selfies', icon: Camera, count: 289 },
  { name: 'Capturas de tela', icon: ScanLine, count: 198 },
  { name: 'Favoritos', icon: Heart, count: 78 },
  { name: 'Privado', icon: Lock, count: 23 },
];

interface CategorySidebarProps {
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

export const CategorySidebar = ({ selectedCategory, onCategorySelect }: CategorySidebarProps) => {
  return (
    <div className="w-80 bg-white/70 backdrop-blur-sm border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Categorias IA</h2>
        <p className="text-sm text-gray-500">Organizadas automaticamente</p>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-1">
        {categories.map((category) => {
          const Icon = category.icon;
          const isSelected = selectedCategory === category.name;
          
          return (
            <button
              key={category.name}
              onClick={() => onCategorySelect(category.name)}
              className={cn(
                "w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200",
                isSelected
                  ? "bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 shadow-sm"
                  : "hover:bg-gray-50 border border-transparent"
              )}
            >
              <div className="flex items-center space-x-3">
                <div className={cn(
                  "flex items-center justify-center w-8 h-8 rounded-lg",
                  isSelected
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                    : "bg-gray-100 text-gray-600"
                )}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className={cn(
                  "font-medium text-sm",
                  isSelected ? "text-blue-700" : "text-gray-700"
                )}>
                  {category.name}
                </span>
              </div>
              
              <span className={cn(
                "text-xs px-2 py-1 rounded-full",
                isSelected
                  ? "bg-blue-100 text-blue-700"
                  : "bg-gray-100 text-gray-500"
              )}>
                {category.count}
              </span>
            </button>
          );
        })}
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <button className="w-full flex items-center justify-center space-x-2 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg">
          <Archive className="w-4 h-4" />
          <span className="font-medium">Reorganizar Tudo</span>
        </button>
      </div>
    </div>
  );
};
