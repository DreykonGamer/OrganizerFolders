
import React from 'react';
import { Search, Mic, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const SearchBar = ({ searchQuery, onSearchChange }: SearchBarProps) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input
          type="text"
          placeholder="Busque por 'fotos de maquiagem', 'jogos de futebol', 'minha família'..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 pr-12 h-12 text-base bg-white/80 border-gray-200 focus:border-blue-400 focus:ring-blue-400"
        />
        <Button
          variant="ghost"
          size="sm"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          <Mic className="w-4 h-4" />
        </Button>
      </div>
      
      <Button
        variant="outline"
        className="h-12 px-4 bg-white/80 border-gray-200 hover:bg-gray-50"
      >
        <Filter className="w-4 h-4 mr-2" />
        Filtros
      </Button>
    </div>
  );
};
