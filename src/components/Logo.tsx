import React from 'react';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="text-right">
        <img 
          src="/jk9-logo.png" 
          alt="JK9 Logo" 
          className="h-12 w-auto"
        />
        <div className="text-xs mt-1">
          <div className="text-right font-arabic">المركز الوطني الأردني للكلاب البوليسية</div>
          <div>Jordan National K9 Center</div>
        </div>
      </div>
    </div>
  );
};