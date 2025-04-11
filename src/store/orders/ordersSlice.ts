import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Order, OrderCategory } from '@customTypes/order.types';

interface OrdersState {
  items: Order[];
  selectedCategory: OrderCategory;
  loading: boolean;
  error: string | null;
}

const mockOrders: Order[] = [
  {
    id: '1',
    title: 'Alibaba.com',
    provider: 'Farly',
    price: 200,
    image: 'https://cdn.farly.io/img_apps/alibaba/icone.png',
    category: 'install',
    platform: 'android',
    isAvailable: true,
  },
  {
    id: '2',
    title: 'Candy Crush',
    provider: 'King',
    price: 150,
    image: 'https://cdn.farly.io/img_apps/candy/icon.png',
    category: 'games',
    platform: 'android',
    isAvailable: true,
  },
  {
    id: '3',
    title: 'Survey Master',
    provider: 'SurveyPro',
    price: 0,
    image: 'https://cdn.farly.io/img_apps/survey/icon.png',
    category: 'free',
    platform: 'web',
    isAvailable: true,
  },
  {
    id: '4',
    title: 'Lucky Spin',
    provider: 'LuckyWin',
    price: 300,
    image: 'https://cdn.farly.io/img_apps/lucky/icon.png',
    category: 'sweepstake',
    platform: 'ios',
    isAvailable: true,
  },
];

const initialState: OrdersState = {
  items: mockOrders,
  selectedCategory: 'all',
  loading: false,
  error: null,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<OrderCategory>) => {
      state.selectedCategory = action.payload;
    },
    setOrders: (state, action: PayloadAction<Order[]>) => {
      state.items = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setCategory, setOrders, setLoading, setError } = ordersSlice.actions;
export default ordersSlice.reducer;
