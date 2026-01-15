
export type Priority = 'low' | 'medium' | 'high';
export type TaskStatus = 'todo' | 'done' | 'overdue';
export type Category = 'Work' | 'Personal' | 'Health' | 'Study' | 'Shopping' | 'Fitness';

export interface SubTask {
  id: string;
  title: string;
  isDone: boolean;
}

export interface Task {
  id: string;
  title: string;
  category: Category;
  status: TaskStatus;
  priority: Priority;
  dueDate: string;
  dueTime?: string;
  subTasks: SubTask[];
  notes?: string;
  attachments?: string[];
}

export type ViewState = 'onboarding' | 'auth' | 'dashboard' | 'calendar' | 'stats' | 'search' | 'settings' | 'categories' | 'edit-task';

export interface AppState {
  currentView: ViewState;
  tasks: Task[];
  user: {
    name: string;
    email: string;
    avatar: string;
  };
  editingTaskId: string | null;
}
