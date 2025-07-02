
import React from 'react';
import { Settings, User, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  return (
    <header className="h-20 bg-black/90 backdrop-blur-md border-b border-red-600/30 flex items-center justify-between px-6 shadow-2xl">
      <div className="flex items-center space-x-4">
        <div className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-br from-red-600 via-red-500 to-red-700 rounded-xl shadow-lg">
          <div className="speed-animation">
            <Zap className="w-7 h-7 text-white" />
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-400 rounded-full animate-pulse"></div>
        </div>
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
            OrganizerFast
          </h1>
          <p className="text-sm text-gray-400">IA organiza automaticamente suas fotos</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-red-600/20">
          <Settings className="w-4 h-4 mr-2" />
          Configurações
        </Button>
        <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-red-600/20">
          <User className="w-4 h-4 mr-2" />
          Perfil
        </Button>
      </div>
    </header>
  );
};
