
import React from 'react';
import { Task, ViewState, Category } from '../types';
import Navigation from '../components/Navigation';

interface Props {
  tasks: Task[];
  navigate: (view: ViewState) => void;
}

const Categories: React.FC<Props> = ({ tasks, navigate }) => {
  const categoryList: { name: Category; icon: string; color: string; count: number; progress: number }[] = [
    { name: 'Work', icon: 'work', color: 'teal', count: 12, progress: 60 },
    { name: 'Personal', icon: 'person', color: 'orange', count: 5, progress: 20 },
    { name: 'Fitness', icon: 'fitness_center', color: 'rose', count: 3, progress: 80 },
    { name: 'Shopping', icon: 'shopping_bag', color: 'blue', count: 8, progress: 0 },
    { name: 'Study', icon: 'menu_book', color: 'indigo', count: 15, progress: 45 },
  ];

  return (
    <div className="min-h-screen bg-background-dark text-white flex flex-col">
      <header className="sticky top-0 z-10 px-6 pt-12 pb-6 bg-background-dark/80 backdrop-blur-md flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Categories</h1>
          <p className="text-sm text-slate-400 mt-1">{categoryList.length} Projects active</p>
        </div>
        <button onClick={() => navigate('settings')} className="size-11 flex items-center justify-center rounded-full bg-surface border border-white/5">
          <span className="material-symbols-outlined">settings</span>
        </button>
      </header>

      <main className="flex-1 px-6 pb-32">
        <div className="grid grid-cols-2 gap-4">
          {categoryList.map(cat => (
            <div key={cat.name} className="relative flex flex-col p-5 bg-surface rounded-xl border border-white/5">
              <div className={`mb-4 size-10 flex items-center justify-center rounded-lg bg-${cat.color}-500/10 text-${cat.color}-500`}>
                <span className="material-symbols-outlined">{cat.icon}</span>
              </div>
              <h3 className="text-lg font-bold">{cat.name}</h3>
              <p className="text-xs text-slate-400 mt-1">{cat.count} tasks</p>
              <div className="mt-6 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-primary`} 
                  style={{ width: `${cat.progress}%` }}
                />
              </div>
              <span className="absolute top-5 right-5 text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                {cat.progress}%
              </span>
            </div>
          ))}
          <button className="flex flex-col items-center justify-center p-5 rounded-xl border-2 border-dashed border-slate-700 hover:bg-white/5 transition-colors gap-2 min-h-[160px]">
            <div className="size-12 rounded-full bg-white/5 flex items-center justify-center text-slate-500">
              <span className="material-symbols-outlined">add</span>
            </div>
            <span className="text-sm font-bold text-slate-400">Add New</span>
          </button>
        </div>
      </main>

      <Navigation currentView="categories" navigate={navigate} />
    </div>
  );
};

export default Categories;
