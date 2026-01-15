
import React from 'react';
import { ViewState } from '../types';
import Navigation from '../components/Navigation';

interface Props {
  user: any;
  navigate: (view: ViewState) => void;
  onLogout: () => void;
}

const Settings: React.FC<Props> = ({ user, navigate, onLogout }) => {
  return (
    <div className="min-h-screen bg-background-dark text-white flex flex-col">
      <header className="sticky top-0 z-50 bg-background-dark/80 backdrop-blur-md px-4 py-4 flex items-center justify-between">
        <button onClick={() => navigate('dashboard')} className="size-10 flex items-center justify-center rounded-full hover:bg-white/10">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h2 className="text-lg font-bold">Settings</h2>
        <div className="w-10"></div>
      </header>

      <main className="flex-1 px-4 space-y-6 pt-4 pb-32">
        <div className="bg-surface rounded-xl p-4 flex items-center justify-between border border-white/5">
          <div className="flex items-center gap-4">
            <div 
              className="size-16 rounded-full border-2 border-primary bg-cover bg-center"
              style={{ backgroundImage: `url("${user.avatar}")` }}
            />
            <div>
              <p className="text-lg font-bold">{user.name}</p>
              <p className="text-slate-400 text-sm">{user.email}</p>
            </div>
          </div>
          <button className="text-primary text-sm font-semibold">Edit</button>
        </div>

        <div>
          <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest px-1 pb-3">Notifications</h3>
          <div className="bg-surface rounded-xl border border-white/5 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined">notifications_active</span>
                </div>
                <div>
                  <p className="text-sm font-semibold">Daily Reminders</p>
                  <p className="text-xs text-slate-400">Stay on top of your tasks</p>
                </div>
              </div>
              <div className="w-10 h-5 bg-primary rounded-full relative flex items-center px-1">
                <div className="size-3 bg-white rounded-full ml-auto"></div>
              </div>
            </div>
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-blue-500/20 text-blue-500 flex items-center justify-center">
                  <span className="material-symbols-outlined">volume_up</span>
                </div>
                <div>
                  <p className="text-sm font-semibold">Sound Effects</p>
                  <p className="text-xs text-slate-400">Audio cues for completions</p>
                </div>
              </div>
              <div className="w-10 h-5 bg-slate-700 rounded-full relative flex items-center px-1">
                <div className="size-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest px-1 pb-3">Appearance</h3>
          <div className="bg-surface rounded-xl p-2 border border-white/5">
            <div className="grid grid-cols-3 gap-1 bg-white/5 p-1 rounded-lg text-xs font-bold">
              <button className="py-2 rounded-md">Light</button>
              <button className="py-2 bg-primary text-white rounded-md shadow-lg">Dark</button>
              <button className="py-2 rounded-md">System</button>
            </div>
          </div>
        </div>

        <button 
          onClick={onLogout}
          className="w-full bg-primary py-4 rounded-xl text-white font-bold shadow-lg shadow-primary/20 transition-transform active:scale-[0.98] flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined">logout</span>
          Log Out
        </button>

        <div className="flex flex-col items-center gap-1 opacity-50">
          <p className="text-xs">TaskFlow v2.4.0</p>
          <p className="text-[10px] uppercase tracking-[0.2em]">Designed with focus</p>
        </div>
      </main>

      <Navigation currentView="settings" navigate={navigate} />
    </div>
  );
};

export default Settings;
