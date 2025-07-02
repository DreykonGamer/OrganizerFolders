
import React from 'react';
import { 
  Home, Users, Briefcase, ShoppingBag, Gamepad2, MapPin, 
  Frame, Video, Utensils, FileText, Camera, Heart, Leaf,
  Calendar, Smartphone, MessageCircle, Star, Lock, Archive,
  Building, Sofa, Store, Megaphone, HardHat, Clapperboard,
  Trophy, Crown, Rss, PawPrint, TreePine, PartyPopper, 
  Pizza, Printer, Laugh, ScanLine, MoreHorizontal, Plus, Trash2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const categories = [
  { name: 'Todas', icon: Home, count: 2847, keywords: ['todas', 'all', 'geral'] },
  { name: 'Família', icon: Users, count: 245, keywords: ['família', 'family', 'parentes', 'pais', 'filhos', 'irmãos'] },
  { name: 'Negócios', icon: Briefcase, count: 134, keywords: ['negócios', 'business', 'trabalho', 'escritório', 'reunião'] },
  { name: 'Produtos', icon: ShoppingBag, count: 187, keywords: ['produtos', 'items', 'compras', 'loja', 'venda'] },
  { name: 'Jogos', icon: Gamepad2, count: 89, keywords: ['jogos', 'games', 'videogame', 'console', 'pc'] },
  { name: 'Games', icon: Trophy, count: 76, keywords: ['games', 'gaming', 'esports', 'competição'] },
  { name: 'Lugares', icon: MapPin, count: 156, keywords: ['lugares', 'locations', 'viagem', 'turismo', 'cidade'] },
  { name: 'Quadros', icon: Frame, count: 67, keywords: ['quadros', 'arte', 'paintings', 'decoração'] },
  { name: 'Produtora', icon: Clapperboard, count: 43, keywords: ['produtora', 'filmagem', 'cinema', 'vídeo'] },
  { name: 'Móveis', icon: Sofa, count: 92, keywords: ['móveis', 'furniture', 'casa', 'decoração'] },
  { name: 'Lojas', icon: Store, count: 78, keywords: ['lojas', 'stores', 'shopping', 'varejo'] },
  { name: 'Marketing', icon: Megaphone, count: 112, keywords: ['marketing', 'propaganda', 'anúncio', 'publicidade'] },
  { name: 'Vídeos', icon: Video, count: 234, keywords: ['vídeos', 'videos', 'filme', 'gravação'] },
  { name: 'Fotos Casa', icon: Home, count: 145, keywords: ['casa', 'home', 'residência', 'lar'] },
  { name: 'Fotos Sala', icon: Sofa, count: 89, keywords: ['sala', 'living', 'estar'] },
  { name: 'Fotos Varanda', icon: TreePine, count: 34, keywords: ['varanda', 'terraço', 'balcão'] },
  { name: 'Fotos Cozinha', icon: Utensils, count: 67, keywords: ['cozinha', 'kitchen', 'culinária'] },
  { name: 'Fotos Banheiro', icon: HardHat, count: 23, keywords: ['banheiro', 'bathroom', 'lavabo'] },
  { name: 'Fotos Piscina', icon: MapPin, count: 45, keywords: ['piscina', 'pool', 'natação'] },
  { name: 'Fotos Área de Serviço', icon: HardHat, count: 19, keywords: ['área de serviço', 'lavanderia'] },
  { name: 'Agência', icon: Building, count: 56, keywords: ['agência', 'agency', 'empresa'] },
  { name: 'Fotos Projetos', icon: FileText, count: 123, keywords: ['projetos', 'projects', 'portfolio'] },
  { name: 'Filmmaker', icon: Video, count: 87, keywords: ['filmmaker', 'cinema', 'diretor'] },
  { name: 'Story Maker', icon: Frame, count: 94, keywords: ['story', 'stories', 'instagram'] },
  { name: 'CEO', icon: Crown, count: 34, keywords: ['ceo', 'executivo', 'líder'] },
  { name: 'Social Media', icon: Rss, count: 178, keywords: ['social media', 'redes sociais', 'instagram', 'facebook'] },
  { name: 'Influencer', icon: Star, count: 156, keywords: ['influencer', 'blogger', 'creator'] },
  { name: 'Pets', icon: PawPrint, count: 134, keywords: ['pets', 'animais', 'cachorro', 'gato'] },
  { name: 'Natureza', icon: Leaf, count: 98, keywords: ['natureza', 'nature', 'plantas', 'árvores'] },
  { name: 'Eventos', icon: PartyPopper, count: 67, keywords: ['eventos', 'festa', 'celebração'] },
  { name: 'Comidas', icon: Pizza, count: 145, keywords: ['comidas', 'food', 'culinária', 'restaurante'] },
  { name: 'Documentos', icon: FileText, count: 89, keywords: ['documentos', 'papers', 'contratos'] },
  { name: 'Prints', icon: Printer, count: 234, keywords: ['prints', 'screenshot', 'captura'] },
  { name: 'Memes', icon: Laugh, count: 167, keywords: ['memes', 'engraçado', 'humor'] },
  { name: 'Selfies', icon: Camera, count: 289, keywords: ['selfies', 'selfie', 'autorretrato'] },
  { name: 'Capturas de tela', icon: ScanLine, count: 198, keywords: ['capturas', 'screenshot', 'print'] },
  { name: 'Favoritos', icon: Heart, count: 78, keywords: ['favoritos', 'favorites', 'importantes'] },
  { name: 'Privado', icon: Lock, count: 23, keywords: ['privado', 'private', 'pessoal'] },
];

interface CategorySidebarProps {
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

export const CategorySidebar = ({ selectedCategory, onCategorySelect }: CategorySidebarProps) => {
  return (
    <div className="w-80 bg-black/80 backdrop-blur-sm border-r border-red-600/30 flex flex-col">
      <div className="p-6 border-b border-red-600/30">
        <h2 className="text-lg font-semibold text-red-400 mb-2">Categorias IA</h2>
        <p className="text-sm text-gray-400">Organizadas automaticamente por palavras-chave</p>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-1">
        {categories.map((category) => {
          const Icon = category.icon;
          const isSelected = selectedCategory === category.name;
          
          return (
            <div key={category.name} className="flex items-center group">
              <button
                onClick={() => onCategorySelect(category.name)}
                className={cn(
                  "flex-1 flex items-center justify-between p-3 rounded-xl transition-all duration-200 mr-2",
                  isSelected
                    ? "bg-gradient-to-r from-red-600/30 to-red-500/20 border border-red-500/50 shadow-lg shadow-red-500/20"
                    : "hover:bg-red-600/10 border border-transparent hover:border-red-600/20"
                )}
              >
                <div className="flex items-center space-x-3">
                  <div className={cn(
                    "flex items-center justify-center w-8 h-8 rounded-lg",
                    isSelected
                      ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg"
                      : "bg-gray-800 text-gray-400 group-hover:bg-red-600/20 group-hover:text-red-400"
                  )}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className={cn(
                      "font-medium text-sm block",
                      isSelected ? "text-red-300" : "text-gray-300"
                    )}>
                      {category.name}
                    </span>
                    <span className="text-xs text-gray-500">
                      {category.keywords.slice(0, 2).join(', ')}
                    </span>
                  </div>
                </div>
                
                <span className={cn(
                  "text-xs px-2 py-1 rounded-full font-medium",
                  isSelected
                    ? "bg-red-500/30 text-red-200"
                    : "bg-gray-800 text-gray-400"
                )}>
                  {category.count}
                </span>
              </button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-8 h-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-red-400 hover:bg-red-600/20"
                  >
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-gray-900 border-red-600/30">
                  <DropdownMenuItem className="text-gray-300 hover:bg-red-600/20 hover:text-red-300">
                    <Plus className="w-4 h-4 mr-2" />
                    Adicionar à pasta
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-red-400 hover:bg-red-600/20 hover:text-red-300">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Remover pasta
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          );
        })}
      </div>
      
      <div className="p-4 border-t border-red-600/30">
        <button className="w-full flex items-center justify-center space-x-2 p-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-lg shadow-red-500/30">
          <Archive className="w-4 h-4" />
          <span className="font-medium">Reorganizar com IA</span>
        </button>
      </div>
    </div>
  );
};
