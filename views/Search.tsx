
import React, { useState } from 'react';
import { Task, ViewState } from '../types';
import Navigation from '../components/Navigation';

interface Props {
  tasks: Task[];
  navigate: (view: ViewState) => void;
  onEditTask: (id: string) => void;
}

const Search: React.FC<Props> = ({ tasks, navigate, onEditTask }) => {
  const [query, setQuery] = useState('Design review');

  const filtered = tasks.filter(t => t.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="min-h-screen bg-background-dark text-white flex flex-col">
      <header className="sticky top-0 z-50 bg-background-dark/80 backdrop-blur-md">
        <div className="flex items-center p-4 pb-2 justify-between">
          <button onClick={() => navigate('dashboard')} className="size-10 flex items-center justify-center rounded-full hover:bg-white/10">
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </button>
          <h2 className="text-lg font-bold flex-1 text-center">Search</h2>
          <button onClick={() => setQuery('')} className="text-primary text-sm font-bold w-12 text-right">Clear</button>
        </div>
        <div className="px-4 py-3">
          <div className="flex h-14 w-full bg-surface rounded-xl border border-white/5 items-center px-4 gap-3 shadow-inner">
            <span className="material-symbols-outlined text-slate-400">search</span>
            <input 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent border-none focus:ring-0 text-white placeholder:text-slate-600" 
              placeholder="Search tasks, tags, or notes..."
            />
          </div>
        </div>
      </header>

      <main className="flex-1 pb-32 pt-2">
        <div className="px-4 space-y-6">
          <div>
            <h4 className="text-slate-500 text-[11px] uppercase font-extrabold tracking-widest px-2 mb-3">Status</h4>
            <div className="flex gap-3 overflow-x-auto no-scrollbar">
              <button className="h-10 rounded-xl bg-primary px-5 font-bold shadow-lg shadow-primary/20">Done</button>
              <button className="h-10 rounded-xl bg-surface px-5 border border-white/5 text-slate-300">In Progress</button>
              <button className="h-10 rounded-xl bg-surface px-5 border border-white/5 text-slate-300">Overdue</button>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-4 px-2">
              <h3 className="text-base font-extrabold">Results <span className="text-slate-400 font-normal ml-1">{filtered.length}</span></h3>
              <span className="material-symbols-outlined text-slate-400">sort</span>
            </div>
            <div className="space-y-3">
              {filtered.map(task => (
                <div 
                  key={task.id} 
                  onClick={() => onEditTask(task.id)}
                  className="bg-surface p-4 rounded-xl border border-white/5 flex items-start gap-4 active:scale-95 transition-transform"
                >
                  <div className="mt-1 size-6 rounded-md border-2 border-primary bg-primary/10 flex items-center justify-center">
                    {task.status === 'done' && <span className="material-symbols-outlined text-primary text-sm font-bold">check</span>}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-sm">{task.title}</h4>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center gap-1 text-slate-400">
                        <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                        <span className="text-[12px] font-medium">{task.dueDate}</span>
                      </div>
                      <div className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] font-bold text-slate-400 uppercase">#{task.category}</div>
                    </div>
                  </div>
                  {task.priority === 'high' && <span className="material-symbols-outlined text-primary">priority_high</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Navigation currentView="dashboard" navigate={navigate} />
    </div>
  );
};

export default Search;
