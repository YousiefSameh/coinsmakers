import SpecialHeading from '@components/shared/SpecialHeading'
import { useAppSelector } from '@store/hooks'
import { useEffect, useState } from 'react'
import { FaCashRegister, FaChartPie, FaClock, FaLock } from 'react-icons/fa'
import { MdAccountBalanceWallet } from 'react-icons/md'
import { PiCoinVerticalFill } from 'react-icons/pi'

const BalanceHistoryTable = () => {
  const { cashouts } = useAppSelector(state => state.cashout);
  const [ cashoutTotal, setCashoutTotal ] = useState<number>(0);
  const handleCalculateAmountOfCashouts = () => {
    if (!cashouts || cashouts.length === 0) {
      setCashoutTotal(0);
    }
    setCashoutTotal(cashouts.reduce((total, cashout) => total + Number(cashout.amount), 0));
  }
  const [ DateString, setDateString ] = useState("");
  useEffect(() => {
    const date = new Date();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    setDateString(date.getFullYear() + "-" + days[date.getDay()] + "-" + date.getMonth() );
    handleCalculateAmountOfCashouts();
  }, [cashouts])
  return (
    <section className="p-6 md:p-0">
      <SpecialHeading title="Balance Now" icon={<MdAccountBalanceWallet  />} />
      <div className="content mt-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        <div className="my-card bg-secondary-color rounded-lg shadow-md flex flex-col gap-5 py-1">
          <div className="my-card-body bg-blue-dark h-full py-4 flex items-center justify-evenly">
            <FaChartPie className="text-4xl text-white" />
            <div className="card-footer flex flex-col gap-1">
              <h3 className="text-lg font-semibold">Total Balance</h3>
              <p className="font-bold flex items-center gap-1 text-sm">0.00 <PiCoinVerticalFill className='text-yellow-400' /></p>
              <p className="text-[10px] text-gray-500">Last updated: {DateString}</p>
            </div>
          </div>
        </div>
        <div className="my-card bg-sky-400 rounded-lg shadow-md flex flex-col gap-5 py-1">
          <div className="my-card-body bg-blue-dark h-full py-4 flex items-center justify-evenly">
            <FaCashRegister className="text-4xl text-white" />
            <div className="card-footer flex flex-col gap-1">
              <h3 className="text-lg font-semibold">Paid Balance</h3>
              <p className="font-bold flex items-center gap-1 text-sm">0.00 <PiCoinVerticalFill className='text-yellow-400' /></p>
              <p className="text-[10px] text-gray-500">Last updated: {DateString}</p>
            </div>
          </div>
        </div>
        <div className="my-card bg-orange-400 rounded-lg shadow-md flex flex-col gap-5 py-1">
          <div className="my-card-body bg-blue-dark h-full py-4 flex items-center justify-evenly">
            <FaClock className="text-4xl text-white" />
            <div className="card-footer flex flex-col gap-1">
              <h3 className="text-lg font-semibold">Pending Balance</h3>
              <p className="font-bold flex items-center gap-1 text-sm">{cashoutTotal}.00 <PiCoinVerticalFill className='text-yellow-400' /></p>
              <p className="text-[10px] text-gray-500">Last updated: {DateString}</p>
            </div>
          </div>
        </div>
        <div className="my-card bg-red-400 rounded-lg shadow-md flex flex-col gap-5 py-1">
          <div className="my-card-body bg-blue-dark h-full py-4 flex items-center justify-evenly">
            <FaLock className="text-4xl text-white" />
            <div className="card-footer flex flex-col gap-1">
              <h3 className="text-lg font-semibold">Rejected Balance</h3>
              <p className="font-bold flex items-center gap-1 text-sm">0.00 <PiCoinVerticalFill className='text-yellow-400' /></p>
              <p className="text-[10px] text-gray-500">Last updated: {DateString}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BalanceHistoryTable