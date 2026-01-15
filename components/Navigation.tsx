
import React from 'react';
import { ViewState } from '../types';

interface Props {
  currentView: ViewState;
  navigate: (view: ViewState) => void;
}

const Navigation: React.FC<Props> = ({ currentView, navigate }) => {
  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
    { id: 'calendar', label: 'Calendar', icon: 'calendar_month' },
    { id: 'categories', label: 'Lists', icon: 'grid_view' },
    { id: 'settings', label: 'Settings', icon: 'settings' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-background-dark border-t border-slate-800 z-40 pb-8 pt-2">
      <div className="flex items-center justify-around h-16">
        {tabs.map(tab => (
          <button 
            key={tab.id}
            onClick={() => navigate(tab.id as ViewState)}
            className={`flex flex-col items-center justify-center gap-1 transition-colors ${
              currentView === tab.id ? 'text-primary' : 'text-slate-400'
            }`}
          >
            <span className={`material-symbols-outlined ${currentView === tab.id ? 'fill' : ''}`}>
              {tab.icon}
            </span>
            <span className="text-[10px] font-bold">{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
