
import React from 'react';
import { Task, ViewState } from '../types';
import Navigation from '../components/Navigation';

interface Props {
  tasks: Task[];
  navigate: (view: ViewState) => void;
}

const Stats: React.FC<Props> = ({ tasks, navigate }) => {
  const completedCount = tasks.filter(t => t.status === 'done').length;
  const totalCount = tasks.length;
  const completionRate = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="min-h-screen pb-32 bg-background-dark text-white">
      <header className="sticky top-0 z-50 bg-background-dark/80 backdrop-blur-md px-6 pt-12 pb-4 flex items-center justify-between">
        <button onClick={() => navigate('dashboard')} className="w-10 h-10 flex items-center justify-center rounded-full bg-surface">
          <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
        </button>
        <h1 className="text-xl font-extrabold tracking-tight">Productivity Stats</h1>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface">
          <span className="material-symbols-outlined text-2xl">calendar_month</span>
        </button>
      </header>

      <main className="px-5 space-y-6 pt-4">
        <section className="flex gap-4 overflow-x-auto no-scrollbar py-2">
          <div className="min-w-[140px] flex-1 bg-surface p-5 rounded-xl border border-slate-800 flex flex-col gap-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Tasks</span>
            <span className="text-2xl font-extrabold">{totalCount}</span>
            <span className="text-xs font-semibold text-primary flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">trending_up</span> +12%
            </span>
          </div>
          <div className="min-w-[140px] flex-1 bg-surface p-5 rounded-xl border border-slate-800 flex flex-col gap-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Completion</span>
            <span className="text-2xl font-extrabold">{completionRate}%</span>
            <span className="text-xs font-semibold text-rose-500 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">trending_down</span> -2%
            </span>
          </div>
        </section>

        <section className="bg-surface rounded-xl p-6 border border-slate-800">
          <div className="flex justify-between items-end mb-6">
            <div>
              <h2 className="text-lg font-bold">Weekly Trend</h2>
              <p className="text-sm text-slate-400">Tasks completed per day</p>
            </div>
            <div className="text-right">
              <span className="text-3xl font-black text-primary">42</span>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">This Week</p>
            </div>
          </div>
          <div className="relative h-40 w-full mt-4 flex items-end justify-between px-2">
            {[30, 50, 40, 70, 60, 90, 80].map((h, i) => (
              <div key={i} className="w-6 bg-primary/20 rounded-t-lg relative group">
                <div 
                  className="w-full bg-primary rounded-t-lg transition-all duration-500" 
                  style={{ height: `${h}%` }}
                ></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-[11px] font-bold text-slate-500 uppercase">
            <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
          </div>
        </section>

        <div className="grid grid-cols-2 gap-4">
          <section className="bg-surface rounded-xl p-5 flex flex-col items-center border border-slate-800">
            <h3 className="text-sm font-bold w-full mb-4">Category Mix</h3>
            <div className="size-24 rounded-full border-8 border-primary/20 border-t-primary border-l-gold relative flex items-center justify-center">
              <span className="text-[10px] font-black text-slate-400">WORK</span>
            </div>
            <div className="mt-4 space-y-1.5 w-full">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase">
                <div className="size-2 rounded-full bg-primary"></div> <span>Work 60%</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase text-slate-400">
                <div className="size-2 rounded-full bg-gold"></div> <span>Health 25%</span>
              </div>
            </div>
          </section>

          <section className="bg-surface rounded-xl p-5 border border-slate-800">
            <h3 className="text-sm font-bold mb-4">Badges</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="aspect-square rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-3xl fill">military_tech</span>
              </div>
              <div className="aspect-square rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-gold text-3xl fill">workspace_premium</span>
              </div>
              <div className="aspect-square rounded-lg bg-white/5 border border-dashed border-white/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-slate-600 text-2xl">lock</span>
              </div>
            </div>
            <p className="text-[10px] font-medium text-slate-500 mt-4 text-center">2/12 Earned</p>
          </section>
        </div>
      </main>

      <Navigation currentView="stats" navigate={navigate} />
    </div>
  );
};

export default Stats;
