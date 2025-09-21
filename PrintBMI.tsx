import { useState, useEffect } from "react";

interface PrintBMIProps {
  bmi: number;
}

function PrintBMI({ bmi }: PrintBMIProps) {
  const [result, setResult] = useState<string>("");

  useEffect(() => {
    if (bmi < 18.5) {
      setResult("ผอมเกินไป (Underweight)");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setResult("รูปร่างสมสัดส่วน (Normal)");
    } else if (bmi >= 25 && bmi <= 29.9) {
      setResult("คุณเริ่มอ้วนแล้วนะ (Overweight)");
    } else if (bmi > 30) {
      setResult("อ้วนเกินไป กรุณาลดน้ำหนัก (Obese)");
    }
  }, [bmi]);

  return (
    <div className="bg-gradient-to-r from-green-100 via-blue-50 to-purple-100 rounded-xl p-4 shadow-inner">
      <p className="text-lg font-semibold text-gray-800">BMI ของคุณคือ: {bmi}</p>
      <p className="mt-2 text-indigo-700 font-bold">{result}</p>
    </div>
  );
}

export default PrintBMI;
