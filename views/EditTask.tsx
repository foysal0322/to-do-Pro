
import React, { useState } from 'react';
import { Task, Category, Priority, TaskStatus } from '../types';

interface Props {
  task?: Task;
  onSave: (task: Task) => void;
  onCancel: () => void;
}

const EditTask: React.FC<Props> = ({ task, onSave, onCancel }) => {
  const [title, setTitle] = useState(task?.title || '');
  const [category, setCategory] = useState<Category>(task?.category || 'Work');
  const [notes, setNotes] = useState(task?.notes || '');
  const [subTasks, setSubTasks] = useState(task?.subTasks || []);

  const handleSave = () => {
    if (!title) return;
    const newTask: Task = {
      id: task?.id || Math.random().toString(36).substr(2, 9),
      title,
      category,
      status: task?.status || 'todo',
      priority: task?.priority || 'medium',
      dueDate: task?.dueDate || '2024-05-24',
      subTasks,
      notes,
    };
    onSave(newTask);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background-dark text-white">
      <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-4 bg-background-dark/80 backdrop-blur-md">
        <button onClick={onCancel} className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-800">
          <span className="material-symbols-outlined text-slate-400">close</span>
        </button>
        <h2 className="text-lg font-bold">Edit Task</h2>
        <button 
          onClick={handleSave}
          className="px-5 py-2 bg-primary text-white rounded-full font-bold text-sm"
        >
          Save
        </button>
      </header>

      <main className="flex-1 px-4 pb-10 space-y-6 overflow-y-auto no-scrollbar">
        <div className="mt-2">
          <label className="block">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block px-1">Task Title</span>
            <textarea 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-transparent border-none p-0 text-3xl font-bold placeholder:text-slate-700 focus:ring-0 resize-none min-h-[80px]" 
              placeholder="What needs to be done?"
            />
          </label>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
          <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-surface px-4 border border-slate-800">
            <span className="material-symbols-outlined text-primary text-[20px]">calendar_today</span>
            <p className="text-sm font-semibold">Today, 5:00 PM</p>
          </div>
          <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-surface px-4 border border-slate-800">
            <span className="material-symbols-outlined text-slate-500 text-[20px]">notifications</span>
            <p className="text-sm font-semibold">15m before</p>
          </div>
          <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-danger/10 px-4 border border-danger/20">
            <span className="material-symbols-outlined text-danger text-[20px]">flag</span>
            <p className="text-danger text-sm font-bold">High Priority</p>
          </div>
        </div>

        <section className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">Sub-tasks</h3>
            <button className="text-primary text-xs font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">add</span> Add Item
            </button>
          </div>
          <div className="space-y-2">
            {subTasks.map(st => (
              <div key={st.id} className="flex items-center gap-3 p-4 bg-surface rounded-xl border border-slate-800">
                <div className={`size-6 rounded-md border-2 flex items-center justify-center ${st.isDone ? 'bg-primary/10 border-primary' : 'border-slate-600'}`}>
                  {st.isDone && <span className="material-symbols-outlined text-primary text-sm font-bold">check</span>}
                </div>
                <span className={`text-sm font-medium ${st.isDone ? 'line-through text-slate-400' : ''}`}>{st.title}</span>
              </div>
            ))}
            <div className="flex items-center gap-3 p-4 bg-surface rounded-xl border border-slate-800">
              <div className="size-6 rounded-md border-2 border-slate-600"></div>
              <input className="flex-1 bg-transparent border-none p-0 text-sm focus:ring-0 placeholder:text-slate-400" placeholder="New sub-task..." type="text"/>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 px-1">Notes</h3>
          <textarea 
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full min-h-[140px] rounded-xl bg-surface border border-slate-800 p-4 text-sm leading-relaxed focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-slate-400" 
            placeholder="Add more details, links, or context..."
          />
        </section>

        <div className="pt-6 flex justify-center pb-20">
          <button className="flex items-center gap-2 text-danger font-bold text-sm py-3 px-6 hover:bg-danger/10 rounded-full">
            <span className="material-symbols-outlined text-[18px]">delete</span>
            Delete Task
          </button>
        </div>
      </main>
    </div>
  );
};

export default EditTask;
