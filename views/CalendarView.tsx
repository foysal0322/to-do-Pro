
import React from 'react';
import { Task, ViewState } from '../types';
import Navigation from '../components/Navigation';

interface Props {
  tasks: Task[];
  navigate: (view: ViewState) => void;
  onEditTask: (id: string) => void;
}

const CalendarView: React.FC<Props> = ({ tasks, navigate, onEditTask }) => {
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dates = [
    { day: 1, dots: 1 }, { day: 2, dots: 0 }, { day: 3, dots: 1 }, { day: 4, dots: 0 },
    { day: 5, dots: 1, active: true }, { day: 6, dots: 0 }, { day: 7, dots: 2 },
    { day: 8, dots: 0 }, { day: 9, dots: 0 }, { day: 10, dots: 0 }, { day: 11, dots: 0 }
  ];

  return (
    <div className="min-h-screen bg-background-dark text-white flex flex-col">
      <header className="sticky top-0 z-50 bg-background-dark/80 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold">October</h1>
          <span className="text-slate-400">2024</span>
          <span className="material-symbols-outlined text-primary text-sm">expand_more</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full hover:bg-slate-800"><span className="material-symbols-outlined">search</span></button>
          <button className="bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-bold">Today</button>
        </div>
      </header>

      <main className="pb-32">
        <section className="px-4 py-4">
          <div className="bg-surface rounded-xl p-4 border border-slate-800">
            <div className="grid grid-cols-7 mb-2">
              {weekDays.map(w => <p key={w} className="text-[11px] font-bold text-slate-500 uppercase text-center">{w}</p>)}
            </div>
            <div className="grid grid-cols-7 gap-y-2">
              <div className="h-10"></div><div className="h-10"></div><div className="h-10"></div>
              {dates.map(d => (
                <button key={d.day} className={`h-10 flex flex-col items-center justify-center rounded-lg ${d.active ? 'bg-primary text-white shadow-lg shadow-primary/30' : ''}`}>
                  <span className={`text-sm ${d.active ? 'font-bold' : 'font-medium'}`}>{d.day}</span>
                  {d.dots > 0 && <div className={`size-1 rounded-full mt-0.5 ${d.active ? 'bg-white/60' : 'bg-primary'}`}></div>}
                </button>
              ))}
            </div>
            <div className="flex justify-center mt-3 pt-2 border-t border-slate-700/50">
              <div className="w-8 h-1 bg-slate-700 rounded-full"></div>
            </div>
          </div>
        </section>

        <div className="px-4 py-2 flex items-center justify-between">
          <h2 className="text-lg font-bold">Monday, Oct 24</h2>
          <p className="text-slate-500 text-sm">3 tasks remaining</p>
        </div>

        <div className="px-4 space-y-4">
          <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest pt-2">Morning</p>
          {tasks.filter(t => t.status !== 'done').map(task => (
            <div 
              key={task.id} 
              onClick={() => onEditTask(task.id)}
              className="flex items-start gap-4 bg-surface p-4 rounded-xl border border-slate-800 group hover:translate-x-1 transition-transform cursor-pointer"
            >
              <div className="mt-1 size-6 rounded-full border-2 border-primary flex items-center justify-center"></div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-base leading-tight">{task.title}</h3>
                  <span className="material-symbols-outlined text-slate-400 text-lg">more_horiz</span>
                </div>
                <div className="flex items-center gap-3 mt-1.5">
                  <div className="flex items-center text-slate-400 text-xs gap-1">
                    <span className="material-symbols-outlined text-sm">schedule</span> 09:30 AM
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-blue-500"></span>
                    <span className="text-xs text-slate-400">{task.category}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="flex flex-col items-center justify-center py-8 opacity-40">
            <span className="material-symbols-outlined text-4xl mb-2">bedtime</span>
            <p className="text-sm font-medium">Clear evening ahead</p>
          </div>
        </div>
      </main>

      <Navigation currentView="calendar" navigate={navigate} />
    </div>
  );
};

export default CalendarView;
