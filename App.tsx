
import React, { useState, useEffect, useCallback } from 'react';
import { ViewState, Task, AppState } from './types';
import Onboarding from './views/Onboarding';
import Auth from './views/Auth';
import Dashboard from './views/Dashboard';
import CalendarView from './views/CalendarView';
import Stats from './views/Stats';
import Search from './views/Search';
import Settings from './views/Settings';
import Categories from './views/Categories';
import EditTask from './views/EditTask';

const INITIAL_TASKS: Task[] = [
  {
    id: '1',
    title: 'Review Design System',
    category: 'Work',
    status: 'todo',
    priority: 'high',
    dueDate: '2024-05-24',
    subTasks: [
      { id: '1-1', title: 'Audit current colors', isDone: true },
      { id: '1-2', title: 'Update spacing tokens', isDone: false },
    ],
  },
  {
    id: '2',
    title: 'Buy groceries for dinner',
    category: 'Shopping',
    status: 'done',
    priority: 'medium',
    dueDate: '2024-05-23',
    subTasks: [],
  },
  {
    id: '3',
    title: 'Finalize Q4 Strategy',
    category: 'Work',
    status: 'overdue',
    priority: 'high',
    dueDate: '2024-05-22',
    dueTime: '10:00 AM',
    subTasks: [],
  },
  {
    id: '4',
    title: 'Morning Workout',
    category: 'Health',
    status: 'todo',
    priority: 'medium',
    dueDate: '2024-05-24',
    subTasks: [],
  }
];

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    currentView: 'onboarding',
    tasks: INITIAL_TASKS,
    user: {
      name: 'Alex Johnson',
      email: 'alex.j@example.com',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC63WdjnGf11nhEH_E_bzoG94SPiqcmtGsRFT2Cc-hjZig0fcKm9wtxDEJrHVpqSlKIiy4iqrcBvkeOKMp9VhNMVrUqV3UnZ8BG329P7xoktiEs6tYhe4BSKb38SRMpjYBmyKb_q7WbJQKdAfvaLKEwbM5wnYLdXzLK766SWiVLnAX7CH7LumdouZtutYnQVh2lXeCLdr2hX5jGeyGHvnsqP5WJdkWC504eTJVl2wv0OjxwLooSKbeJE9DkmY43ywxAzDUltNAJxEA',
    },
    editingTaskId: null,
  });

  const navigate = (view: ViewState) => {
    setState(prev => ({ ...prev, currentView: view }));
  };

  const openEditTask = (taskId: string | null) => {
    setState(prev => ({ 
      ...prev, 
      editingTaskId: taskId,
      currentView: 'edit-task' 
    }));
  };

  const handleSaveTask = (updatedTask: Task) => {
    setState(prev => {
      const existing = prev.tasks.find(t => t.id === updatedTask.id);
      const newTasks = existing 
        ? prev.tasks.map(t => t.id === updatedTask.id ? updatedTask : t)
        : [...prev.tasks, updatedTask];
      
      return {
        ...prev,
        tasks: newTasks,
        currentView: 'dashboard',
        editingTaskId: null
      };
    });
  };

  const renderView = () => {
    switch (state.currentView) {
      case 'onboarding':
        return <Onboarding onComplete={() => navigate('auth')} />;
      case 'auth':
        return <Auth onLogin={() => navigate('dashboard')} />;
      case 'dashboard':
        return <Dashboard 
          tasks={state.tasks} 
          user={state.user} 
          navigate={navigate} 
          onEditTask={openEditTask}
        />;
      case 'calendar':
        return <CalendarView tasks={state.tasks} navigate={navigate} onEditTask={openEditTask} />;
      case 'stats':
        return <Stats tasks={state.tasks} navigate={navigate} />;
      case 'search':
        return <Search tasks={state.tasks} navigate={navigate} onEditTask={openEditTask} />;
      case 'settings':
        return <Settings user={state.user} navigate={navigate} onLogout={() => navigate('auth')} />;
      case 'categories':
        return <Categories tasks={state.tasks} navigate={navigate} />;
      case 'edit-task':
        return (
          <EditTask 
            task={state.tasks.find(t => t.id === state.editingTaskId)} 
            onSave={handleSaveTask}
            onCancel={() => navigate('dashboard')}
          />
        );
      default:
        return <Dashboard tasks={state.tasks} user={state.user} navigate={navigate} onEditTask={openEditTask} />;
    }
  };

  return (
    <div className="max-w-md mx-auto min-h-screen relative overflow-hidden bg-background-light dark:bg-background-dark shadow-2xl">
      {renderView()}
    </div>
  );
};

export default App;
