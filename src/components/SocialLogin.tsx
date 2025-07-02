
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger 
} from '@/components/ui/dialog';

interface SocialLoginProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (provider: string) => void;
}

export const SocialLogin = ({ isOpen, onClose, onLogin }: SocialLoginProps) => {
  const socialProviders = [
    {
      name: 'Google',
      icon: '🔍',
      color: 'bg-red-600 hover:bg-red-700',
      provider: 'google'
    },
    {
      name: 'Apple',
      icon: '🍎',
      color: 'bg-gray-800 hover:bg-gray-900',
      provider: 'apple'
    },
    {
      name: 'GitHub',
      icon: '⚡',
      color: 'bg-gray-700 hover:bg-gray-800',
      provider: 'github'
    },
    {
      name: 'Microsoft',
      icon: '🟢',
      color: 'bg-blue-600 hover:bg-blue-700',
      provider: 'microsoft'
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-900 border-red-600/30">
        <DialogHeader>
          <DialogTitle className="text-red-400 text-xl text-center">
            Conectar Conta
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 p-4">
          <p className="text-gray-300 text-center text-sm">
            Sincronize suas fotos de qualquer dispositivo
          </p>
          
          {socialProviders.map((provider) => (
            <Button
              key={provider.provider}
              onClick={() => onLogin(provider.provider)}
              className={`w-full ${provider.color} text-white flex items-center justify-center space-x-3 h-12`}
            >
              <span className="text-xl">{provider.icon}</span>
              <span>Conectar com {provider.name}</span>
            </Button>
          ))}
          
          <div className="pt-4 border-t border-gray-700">
            <p className="text-xs text-gray-500 text-center">
              Suas fotos ficam seguras e privadas. Apenas você tem acesso.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
