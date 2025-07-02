
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
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-400 w-5 h-5" />
        <Input
          type="text"
          placeholder="IA detecta: 'fotos família', 'produtos moda', 'comida italiana'..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 pr-12 h-12 text-base bg-gray-900/80 border-red-600/30 focus:border-red-500 focus:ring-red-500/30 text-gray-200 placeholder-gray-500"
        />
        <Button
          variant="ghost"
          size="sm"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-400 hover:text-red-300 hover:bg-red-600/20"
        >
          <Mic className="w-4 h-4" />
        </Button>
      </div>
      
      <Button
        variant="outline"
        className="h-12 px-4 bg-gray-900/80 border-red-600/30 hover:bg-red-600/20 text-gray-300 hover:text-red-300"
      >
        <Filter className="w-4 h-4 mr-2" />
        Filtros IA
      </Button>
    </div>
  );
};
