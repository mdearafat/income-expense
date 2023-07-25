import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import IncomePage from "./pages/income";
import ExpensePage from "./pages/expense";

function App() {
  const [balance, setBalance] = useState(0);

  return (
    <Router>
      <div className="p-4">
        <nav className="mb-4">
          <ul className="flex gap-4">
            <li>
              <Link
                to="/income"
                className="text-green-400 hover:text-green-700"
              >
                Income
              </Link>
            </li>
            <li>
              <Link to="/expense" className="text-red-500 hover:text-red-700">
                Expense
              </Link>
            </li>
          </ul>
        </nav>

        <h1 className="text-xl font-bold">Balance: {balance}</h1>

        <Routes>
          <Route
            path="/income"
            element={<IncomePage balance={balance} setBalance={setBalance} />}
          />
          <Route
            path="/expense"
            element={<ExpensePage balance={balance} setBalance={setBalance} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
