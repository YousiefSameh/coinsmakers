import { createSlice } from '@reduxjs/toolkit';

interface NotificationsState {
  isOpen: boolean;
}

const initialState: NotificationsState = {
  isOpen: false,
};

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    toggleNotifications: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleNotifications } = notificationsSlice.actions;
export default notificationsSlice.reducer;
