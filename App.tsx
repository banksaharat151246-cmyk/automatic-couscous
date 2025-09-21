import CalBMI from "./components/CalBMI";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 via-blue-50 to-purple-100">
      <h1 className="text-3xl font-extrabold mb-6 text-gray-800 drop-shadow">
        🧮 BMI Calculator
      </h1>
      <CalBMI />
    </div>
  );
}

export default App;
