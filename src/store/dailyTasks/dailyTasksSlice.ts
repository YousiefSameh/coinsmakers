import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Task {
  id: number;
  title: string;
  description: string;
  reward: number;
  isCompleted: boolean;
  timeLeft?: string;
  progress?: number;
  requiredProgress?: number;
}

interface DailyTasksState {
  isOpen: boolean;
  tasks: Task[];
  totalProgress: number;
  totalTasks: number;
}

const initialState: DailyTasksState = {
  isOpen: false,
  totalProgress: 0,
  totalTasks: 0,
  tasks: [
    {
      id: 1,
      title: 'Daily Login',
      description: 'Login to your account to claim your daily reward',
      reward: 50,
      isCompleted: true,
    },
    {
      id: 2,
      title: 'Complete Trades',
      description: 'Make at least 3 trades today',
      reward: 100,
      isCompleted: false,
      progress: 1,
      requiredProgress: 3,
      timeLeft: '23:45:12',
    },
    {
      id: 3,
      title: 'Share Success',
      description: 'Share your trading success on social media',
      reward: 75,
      isCompleted: false,
    },
    {
      id: 4,
      title: 'Refer Friends',
      description: 'Invite friends to join and earn rewards',
      reward: 200,
      isCompleted: false,
      progress: 0,
      requiredProgress: 3,
    },
    {
      id: 5,
      title: 'Complete Profile',
      description: 'Fill in all your profile information',
      reward: 150,
      isCompleted: false,
      progress: 2,
      requiredProgress: 5,
    }
  ],
};

const dailyTasksSlice = createSlice({
  name: 'dailyTasks',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
    openSidebar: (state) => {
      state.isOpen = true;
    },
    closeSidebar: (state) => {
      state.isOpen = false;
    },
    completeTask: (state, action: PayloadAction<number>) => {
      const task = state.tasks.find(t => t.id === action.payload);
      if (task) {
        task.isCompleted = true;
        state.totalProgress++;
      }
    },
    updateTaskProgress: (state, action: PayloadAction<{ taskId: number; progress: number }>) => {
      const task = state.tasks.find(t => t.id === action.payload.taskId);
      if (task && task.requiredProgress) {
        task.progress = Math.min(action.payload.progress, task.requiredProgress);
        if (task.progress === task.requiredProgress) {
          task.isCompleted = true;
          state.totalProgress++;
        }
      }
    },
    resetDailyTasks: (state) => {
      state.tasks.forEach(task => {
        task.isCompleted = false;
        if (task.progress !== undefined) {
          task.progress = 0;
        }
      });
      state.totalProgress = 0;
    }
  },
});

export const {
  toggleSidebar,
  openSidebar,
  closeSidebar,
  completeTask,
  updateTaskProgress,
  resetDailyTasks,
} = dailyTasksSlice.actions;

export default dailyTasksSlice.reducer;
