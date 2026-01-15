
import React, { useEffect, useState } from 'react';
import { Task, ViewState } from '../types';
import Navigation from '../components/Navigation';
import { getProductivityInsight } from '../services/geminiService';

interface Props {
  tasks: Task[];
  user: any;
  navigate: (view: ViewState) => void;
  onEditTask: (id: string | null) => void;
}

const Dashboard: React.FC<Props> = ({ tasks, user, navigate, onEditTask }) => {
  const [insight, setInsight] = useState<string>('Generating AI insight...');
  const todayTasks = tasks.filter(t => t.dueDate === '2024-05-24');
  const doneTasks = todayTasks.filter(t => t.status === 'done').length;
  const totalToday = todayTasks.length;
  const progressPercent = totalToday > 0 ? (doneTasks / totalToday) * 100 : 0;
  
  const circumference = 2 * Math.PI * 36;
  const offset = circumference - (progressPercent / 100) * circumference;

  useEffect(() => {
    getProductivityInsight(tasks).then(setInsight);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen pb-32 flex flex-col">
      <header className="sticky top-0 z-20 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-6 pt-12 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div 
            className="size-10 rounded-full bg-cover bg-center border-2 border-primary" 
            style={{ backgroundImage: `url("${user.avatar}")` }}
          />
          <div>
            <p className="text-xs font-medium text-slate-500">Monday, May 24</p>
            <h1 className="text-xl font-extrabold tracking-tight">Good Morning, {user.name.split(' ')[0]}</h1>
          </div>
        </div>
        <button className="relative p-2 rounded-full hover:bg-slate-800 transition-colors">
          <span className="material-symbols-outlined text-2xl">notifications</span>
          <span className="absolute top-2 right-2 size-2 bg-accent-alt rounded-full border-2 border-background-dark"></span>
        </button>
      </header>

      <main className="px-6 flex-1 space-y-6">
        <div className="mt-4 p-5 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-between relative overflow-hidden">
          <div className="z-10">
            <h3 className="text-lg font-bold leading-tight">Your daily goal</h3>
            <p className="text-sm text-slate-400 mt-1">{Math.round(progressPercent)}% completed</p>
            <div className="mt-4 flex -space-x-2">
              <div className="size-6 rounded-full bg-primary/30 flex items-center justify-center text-[10px] font-bold">{doneTasks}</div>
              <div className="size-6 rounded-full bg-surface border border-background-dark flex items-center justify-center text-[10px] font-bold">{totalToday}</div>
            </div>
            <p className="mt-2 text-xs font-medium text-primary">{totalToday - doneTasks} tasks left for today</p>
          </div>
          <div className="relative flex items-center justify-center">
            <svg className="size-24">
              <circle className="text-primary/10" cx="48" cy="48" r="36" fill="transparent" stroke="currentColor" strokeWidth="8"></circle>
              <circle 
                className="text-primary progress-ring-circle" 
                cx="48" cy="48" r="36" fill="transparent" 
                stroke="currentColor" strokeWidth="8"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
              ></circle>
            </svg>
            <span className="absolute text-sm font-bold">{doneTasks}/{totalToday}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div onClick={() => navigate('categories')} className="p-4 rounded-xl bg-surface border border-slate-800 flex flex-col gap-4 cursor-pointer">
            <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">light_mode</span>
            </div>
            <div>
              <h2 className="text-base font-bold">My Day</h2>
              <p className="text-xs text-slate-500">{todayTasks.length} tasks</p>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-surface border border-slate-800 flex flex-col gap-4">
            <div className="size-10 rounded-lg bg-accent-alt/20 flex items-center justify-center text-accent-alt">
              <span className="material-symbols-outlined">star</span>
            </div>
            <div>
              <h2 className="text-base font-bold">Important</h2>
              <p className="text-xs text-slate-500">2 tasks</p>
            </div>
          </div>
          <div onClick={() => navigate('calendar')} className="col-span-2 p-4 rounded-xl bg-surface border border-slate-800 flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="size-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-500">
                <span className="material-symbols-outlined">calendar_month</span>
              </div>
              <div>
                <h2 className="text-base font-bold">Planned</h2>
                <p className="text-xs text-slate-500">5 upcoming tasks</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-slate-400">chevron_right</span>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex gap-3 items-center">
          <div className="size-10 rounded-lg bg-primary flex items-center justify-center text-white shrink-0">
            <span className="material-symbols-outlined">auto_awesome</span>
          </div>
          <div>
            <p className="text-xs font-bold text-primary uppercase tracking-wider">Smart Insight</p>
            <p className="text-xs font-medium text-slate-400">{insight}</p>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold">Recent Tasks</h3>
            <button onClick={() => navigate('categories')} className="text-sm font-semibold text-primary">See all</button>
          </div>
          <div className="space-y-3">
            {tasks.slice(0, 4).map(task => (
              <div 
                key={task.id} 
                onClick={() => onEditTask(task.id)}
                className="flex items-center gap-4 bg-surface px-4 py-3 rounded-xl border border-slate-800 cursor-pointer"
              >
                <div className="size-6 border-2 border-slate-600 rounded flex items-center justify-center">
                  {task.status === 'done' && <span className="material-symbols-outlined text-primary text-sm font-bold">check</span>}
                </div>
                <div className="flex-1">
                  <p className={`text-sm font-bold leading-none mb-1 ${task.status === 'done' ? 'line-through text-slate-500' : ''}`}>
                    {task.title}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                      task.category === 'Work' ? 'bg-primary/10 text-primary' : 'bg-blue-500/10 text-blue-500'
                    }`}>
                      {task.category}
                    </span>
                    {task.status === 'overdue' && (
                      <span className="text-[10px] text-accent-alt font-bold flex items-center">
                        <span className="material-symbols-outlined text-[12px] mr-1">priority_high</span> Overdue
                      </span>
                    )}
                  </div>
                </div>
                <span className="material-symbols-outlined text-slate-400 text-xl">
                  {task.status === 'overdue' ? 'flag' : 'more_vert'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>

      <button 
        onClick={() => onEditTask(null)}
        className="fixed bottom-24 right-6 size-14 bg-primary text-white rounded-full shadow-lg shadow-primary/40 flex items-center justify-center z-30 transition-transform active:scale-90"
      >
        <span className="material-symbols-outlined text-3xl font-bold">add</span>
      </button>

      <Navigation currentView="dashboard" navigate={navigate} />
    </div>
  );
};

export default Dashboard;
