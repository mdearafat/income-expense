import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4">
      <Link
        to="/income"
        className="px-4 py-2 w-64 text-center text-white font-bold bg-blue-500 rounded hover:bg-blue-700"
      >
        Income
      </Link>
      <Link
        to="/expense"
        className="px-4 py-2 w-64 text-center text-white font-bold bg-red-500 rounded hover:bg-red-700"
      >
        Expense
      </Link>
    </div>
  );
}
export default HomePage;
