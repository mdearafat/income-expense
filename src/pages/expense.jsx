import { useState } from "react";
function ExpensePage({ balance, setBalance }) {
  const [expense, setExpense] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const handleExpense = () => {
    setBalance(balance - Number(expense));
    setTransactions((prevTransactions) => [expense, ...prevTransactions]);
    setExpense(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Expense</h2>
      <input
        type="number"
        value={expense}
        onChange={(e) => setExpense(e.target.value)}
        className="mb-2 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none"
      />
      <button
        onClick={handleExpense}
        className="mb-4 px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
      >
        Add Expense
      </button>
      <div className="w-full max-w-md">
        <h3 className="text-lg font-semibold mb-2">Recent transactions:</h3>
        <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
          {transactions.map((transaction, index) => (
            <li key={index} className="p-4 text-red-500">
              -{Number(transaction)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExpensePage;
