
import React from 'react';
import { Sparkles, Settings, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  return (
    <header className="h-20 bg-white/90 backdrop-blur-md border-b border-gray-200 flex items-center justify-between px-6 shadow-sm">
      <div className="flex items-center space-x-3">
        <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            OrganizerFast
          </h1>
          <p className="text-sm text-gray-500">Sua galeria organizada por inteligência</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-800">
          <Settings className="w-4 h-4 mr-2" />
          Configurações
        </Button>
        <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-800">
          <User className="w-4 h-4 mr-2" />
          Perfil
        </Button>
      </div>
    </header>
  );
};
