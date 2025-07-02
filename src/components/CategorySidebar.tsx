
import React from 'react';
import { 
  Home, Users, Briefcase, ShoppingBag, Gamepad2, MapPin, 
  Frame, Video, Utensils, FileText, Camera, Heart, Leaf,
  Calendar, Smartphone, MessageCircle, Star, Lock, Archive
} from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = [
  { name: 'Todas', icon: Home, count: 847 },
  { name: 'Família', icon: Users, count: 156 },
  { name: 'Negócios', icon: Briefcase, count: 89 },
  { name: 'Produtos', icon: ShoppingBag, count: 234 },
  { name: 'Jogos', icon: Gamepad2, count: 67 },
  { name: 'Lugares', icon: MapPin, count: 123 },
  { name: 'Quadros', icon: Frame, count: 45 },
  { name: 'Vídeos', icon: Video, count: 78 },
  { name: 'Comidas', icon: Utensils, count: 92 },
  { name: 'Documentos', icon: FileText, count: 34 },
  { name: 'Selfies', icon: Camera, count: 145 },
  { name: 'Pets', icon: Heart, count: 89 },
  { name: 'Natureza', icon: Leaf, count: 67 },
  { name: 'Eventos', icon: Calendar, count: 23 },
  { name: 'Prints', icon: Smartphone, count: 156 },
  { name: 'Memes', icon: MessageCircle, count: 234 },
  { name: 'Favoritos', icon: Star, count: 45 },
  { name: 'Privado', icon: Lock, count: 12 },
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
                  "font-medium",
                  isSelected ? "text-blue-700" : "text-gray-700"
                )}>
                  {category.name}
                </span>
              </div>
              
              <span className={cn(
                "text-sm px-2 py-1 rounded-full",
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
