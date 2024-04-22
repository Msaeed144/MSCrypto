import React, { useContext, useEffect, useState } from "react";
import { CryptosContext, contextType, stateI, SymbolObject } from "../context/CryptoContext";
import { Audio } from 'react-loader-spinner';

import TableRow from "./TableRow";

function searchCryptos(cryptos: SymbolObject[], searchTerm: string): SymbolObject[] {
  const filteredCryptos = cryptos.filter(item => {
    return (
      item.faBaseAsset.toLowerCase().includes(searchTerm.toLowerCase()) ||  
      item.enBaseAsset.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.symbol.toLowerCase().includes(searchTerm.toLowerCase()) 
    );
  });

  return filteredCryptos;
}

const Table: React.FC = () => {
  const { cryptos, payment, search } = useContext<contextType>(CryptosContext);
  const [selectC, setSelectC] = useState<stateI>(undefined);

  useEffect(() => {
    if (cryptos) {
      const selectedPayment = cryptos.filter(item => item.quoteAsset === payment);
      if (search) {
        const searchedCryptos = searchCryptos(selectedPayment, search);
        setSelectC(searchedCryptos);
      } else {
        setSelectC(selectedPayment);
      }
    }
  }, [cryptos, payment, search]);

  return (
    <div className="flex justify-center items-center">
      {selectC ? (
        <div className="flex min-h-screen justify-center">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-slate-700 shadow-md rounded-xl mt-8 rtl">
              <thead>
                <tr className="bg-blue-gray-100 text-white ">
                  <th className="py-3 px-4 text-right">نام ارز</th>
                  <th className="py-3 px-4 text-center">قیمت ارز</th>
                  <th className="py-3 px-4 text-right">تغییرات روز اخیر</th>
                  <th className="py-3 px-4 text-right">حجم معاملات</th>
                  <th className="py-3 px-4 text-right">تغییرات هفتگی</th>
                </tr>
              </thead>
              <tbody className="text-blue-gray-900">
                {selectC.map(item => <TableRow key={item.symbol} cryptos={item} />)}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="mt-12">
          <Audio height="80" width="80" color="white" ariaLabel="loading" />
        </div>
      )}
    </div>
  );
};

export default Table;
