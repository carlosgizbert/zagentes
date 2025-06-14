'use client';

import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export function WhatsAppButton({ children, className, size = 'default' }: WhatsAppButtonProps) {
  const handleWhatsAppRedirect = () => {
    const phoneNumber = '5513982211658';
    const message =
      'Olá! Gostaria de saber mais sobre os funcionarios virtuais da Z Agentes.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppRedirect}
      size={size}
      className={className}
    >
      <MessageCircle className='h-4 w-4 mr-2' />
      {children}
    </Button>
  );
} 