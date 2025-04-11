import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id: string;
  name: string;
  avatar: string;
  coins: number;
}

export interface Message {
  id: string;
  text: string;
  user: User;
  timestamp: string;
  type: 'text' | 'task_complete' | 'reward';
}

interface ChatState {
  isOpen: boolean;
  messages: Message[];
  onlineUsers: User[];
}

const mockUsers: User[] = [
  { id: '1', name: 'Alice', avatar: '👩', coins: 1500 },
  { id: '2', name: 'Bob', avatar: '👨', coins: 2000 },
  { id: '3', name: 'Charlie', avatar: '🧑', coins: 1800 }
];

const initialState: ChatState = {
  isOpen: false,
  messages: [
    {
      id: '1',
      text: 'Welcome to the Community Chat! Share your achievements and help each other complete tasks.',
      user: mockUsers[0],
      timestamp: new Date().toISOString(),
      type: 'text'
    },
    {
      id: '2',
      text: '🎉 Just completed all daily tasks and earned 500 coins!',
      user: mockUsers[1],
      timestamp: new Date().toISOString(),
      type: 'task_complete'
    },
    {
      id: '3',
      text: 'Has anyone tried the new survey tasks? They give good rewards!',
      user: mockUsers[2],
      timestamp: new Date().toISOString(),
      type: 'text'
    }
  ],
  onlineUsers: mockUsers
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    toggleChat: (state) => {
      state.isOpen = !state.isOpen;
    },
    addMessage: (state, action: PayloadAction<Omit<Message, 'id' | 'timestamp'>>) => {
      state.messages.push({
        ...action.payload,
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
      });
    },
    updateOnlineUsers: (state, action: PayloadAction<User[]>) => {
      state.onlineUsers = action.payload;
    },
  },
});

export const { toggleChat, addMessage, updateOnlineUsers } = chatSlice.actions;
export default chatSlice.reducer;
