
import { CryptosContext , contextType } from "../context/CryptoContext";
import { useContext  ,ChangeEvent} from "react";
function FilterBar() {
  const { setPayment , setSearch , payment} = useContext<contextType>(CryptosContext)
  const selectHandler = (event:ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    setPayment(value)
    console.log(payment)
  }
  const searchHandler = (event:ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setSearch(value)
    console.log(value)

  }
  return (
    <>
    <div className="flex items-center justify-around	 w-1/2 p-2 bg-slate-700 shadow-md rounded-xl mt-8 rtl">
        <select name="payment" id="payment" onChange={selectHandler} className="bg-slate-700 text-slate-300 border rounded-lg p-2 border-slate-900">
            <option value="TMN">تومان</option>
            <option value="USDT">دلار</option>
            <option value="BTC">بیت کوین</option>
        </select>


        <input onChange={searchHandler} type="text" placeholder="جستجو..." className="p-2 bg-transparent border border-slate-900 rounded-lg focus:border-slate-500 focus:ring-slate-500 text-right text-slate-300"></input>
    </div>
    </>
  )
}

export default FilterBar