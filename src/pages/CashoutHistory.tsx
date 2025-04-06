import BalanceHistoryTable from "@components/CashoutHistory/BalanceHistoryTable"
import PaymentHistory from "@components/CashoutHistory/PaymentHistory";

const CashoutHistory = () => {
  return (
    <>
      <BalanceHistoryTable />
      <PaymentHistory />
    </>
  )
}

export default CashoutHistory