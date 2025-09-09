import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

const TopBar: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-primary text-primary-foreground py-2 px-4">
      <div className="container mx-auto flex justify-between items-center text-sm">
        <div className="flex-1">
          <span className="font-medium">{t('strapline')}</span>
        </div>
        <div className="flex items-center">
          <LanguageToggle />
        </div>
      </div>
    </div>
  );
};

export default TopBar;