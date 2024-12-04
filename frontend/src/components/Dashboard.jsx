import { useSelector } from "react-redux";

function Dashboard() {
  const { products } = useSelector((state) => state.product);
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col">
        <div className="p-6 bg-gray-100 flex-1 overflow-auto">
          <h1 className="text-3xl font-bold text-indigo-700">Dashboard</h1>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold">Total Products</h3>
              <p className="mt-2 text-gray-600"></p>
            </div>
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold">Total Users</h3>
              <p className="mt-2 text-gray-600"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
