import { useState } from "react";
function IncomePage({ balance, setBalance }) {
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const handleIncome = () => {
    setBalance(balance + Number(income));
    setTransactions((prevTransactions) => [income, ...prevTransactions]);
    setIncome(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Income</h2>
      <input
        type="number"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        className="mb-2 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none"
      />
      <button
        onClick={handleIncome}
        className="mb-4 px-4 py-2 font-bold text-white bg-green-400 rounded hover:bg-green-700"
      >
        Add Income
      </button>
      <div className="w-full max-w-md">
        <h3 className="text-lg font-semibold mb-2">Recent transactions:</h3>
        <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
          {transactions.map((transaction, index) => (
            <li key={index} className="p-4 text-green-400">
              +${Number(transaction)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default IncomePage;
