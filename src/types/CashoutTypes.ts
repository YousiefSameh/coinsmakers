import { TLoading } from "./general";

interface CashoutState {
  cashouts: ICashout[];
  cashout: ICashout | null;
  loading: TLoading;
  error: string | null;
}

interface ICashout {
  date: string;
  amount: number;
  method: string;
  paymentDetails: string;
  status: 'pending' | 'completed' | 'failed';
}

export { type ICashout, type CashoutState };