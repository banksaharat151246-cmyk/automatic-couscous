import { useState } from "react";
import PrintBMI from "./PrintBMI";

function CalBMI() {
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [BMIValue, setBMIValue] = useState<number | null>(null);
  const [error, setError] = useState<string>("");

  const handleCalculate = () => {
    if (!height || !weight) {
      setError("⚠️ กรุณากรอกความสูงและน้ำหนักให้ครบ");
      setBMIValue(null);
      return;
    }

    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
      setError("❌ ข้อมูลไม่ถูกต้อง กรุณากรอกใหม่");
      setBMIValue(null);
      return;
    }

    const bmi = w / ((h / 100) * (h / 100));
    setBMIValue(parseFloat(bmi.toFixed(2)));
    setError("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200 p-4">
      <div
        className="
          bg-white p-6 rounded-2xl shadow-2xl
          w-full sm:w-96 md:w-[28rem] lg:w-[32rem]
          transition-transform hover:scale-105
        "
      >
        <h1 className="text-2xl font-bold text-center text-indigo-700 mb-6">
          BMI Calculator
        </h1>

        {/* Input Height */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Height (cm):
          </label>
          <input
            type="number"
            inputMode="decimal"
            pattern="[0-9]*"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="เช่น 170"
            className="w-full px-3 py-2 border rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        {/* Input Weight */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">
            Weight (kg):
          </label>
          <input
            type="number"
            inputMode="decimal"
            pattern="[0-9]*"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="เช่น 65"
            className="w-full px-3 py-2 border rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        {/* Button */}
        <button
          onClick={handleCalculate}
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white font-bold py-2 rounded-lg shadow-md transition"
        >
          Calculate
        </button>

        {/* Result */}
        <div className="mt-6 text-center">
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {BMIValue !== null && !error && (
            <div className="mt-4">
              <PrintBMI bmi={BMIValue}></PrintBMI>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CalBMI;
