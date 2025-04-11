export type OrderCategory = 'all' | 'games' | 'install' | 'sweepstake' | 'free';

export interface Order {
  id: string;
  title: string;
  provider: string;
  price: number;
  image: string;
  category: OrderCategory;
  platform: 'android' | 'ios' | 'web';
  isAvailable: boolean;
}
