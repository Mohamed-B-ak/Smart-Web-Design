import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Calculator } from "lucide-react";

const plans = [
  { minutes: 120, annualPrice: 100, monthlyPrice: 127, extraMinRate: 0.75 },
  { minutes: 700, annualPrice: 385, monthlyPrice: 485, extraMinRate: 0.6 },
  { minutes: 1700, annualPrice: 745, monthlyPrice: 935, extraMinRate: 0.35 },
  { minutes: 3500, annualPrice: 1330, monthlyPrice: 1570, extraMinRate: 0.35 },
];

function getBestPlan(totalMinutes: number) {
  if (totalMinutes <= 120) return 0;
  if (totalMinutes <= 700) return 1;
  if (totalMinutes <= 1700) return 2;
  return 3;
}

export default function SavingsCalculator() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";

  const [monthlyCalls, setMonthlyCalls] = useState(1000);
  const [avgDuration, setAvgDuration] = useState(3);
  const [employeeSalary, setEmployeeSalary] = useState(5000);

  const totalMinutes = monthlyCalls * avgDuration;
  const bestPlanIdx = getBestPlan(totalMinutes);
  const plan = plans[bestPlanIdx];

  const sondosCost = plan.annualPrice;
  const employeesNeeded = Math.ceil(totalMinutes / 9600);
  const employeeCost = employeeSalary * employeesNeeded;
  const savings = employeeCost - sondosCost;

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label mb-4 block">
            <Calculator className="h-4 w-4" />
            {isAr ? "حاسبة التوفير" : "Savings Calculator"}
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-[#1a0a2e]">
            {isAr ? "احسب توفيرك مع سندس AI" : "Calculate Your Savings"}
          </h2>
        </div>

        <div className="bg-white rounded-2xl border border-[rgba(90,24,154,0.06)] p-8">
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div>
              <label className="block text-sm font-semibold mb-3">
                {isAr ? "عدد المكالمات الشهرية" : "Monthly Calls"}
              </label>
              <input
                type="range"
                min={100}
                max={10000}
                step={100}
                value={monthlyCalls}
                onChange={(e) => setMonthlyCalls(Number(e.target.value))}
                className="w-full accent-[#5a189a]"
              />
              <div className="text-center font-bold text-[#5a189a] mt-2">
                {monthlyCalls.toLocaleString()}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3">
                {isAr ? "مدة المكالمة" : "Duration"}
              </label>
              <input
                type="range"
                min={1}
                max={10}
                value={avgDuration}
                onChange={(e) => setAvgDuration(Number(e.target.value))}
                className="w-full accent-[#5a189a]"
              />
              <div className="text-center font-bold text-[#5a189a] mt-2">
                {avgDuration}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3">
                {isAr ? "راتب الموظف" : "Employee Salary"}
              </label>
              <input
                type="range"
                min={3000}
                max={10000}
                step={500}
                value={employeeSalary}
                onChange={(e) => setEmployeeSalary(Number(e.target.value))}
                className="w-full accent-[#5a189a]"
              />
              <div className="text-center font-bold text-[#5a189a] mt-2">
                {employeeSalary.toLocaleString()}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[rgba(90,24,154,0.05)] rounded-xl p-6 text-center">
              <p className="text-sm">{isAr ? "تكلفة سندس" : "Sondos Cost"}</p>
              <p className="text-3xl font-bold text-[#5a189a]">
                {Math.round(sondosCost)}
              </p>
            </div>

            <div className="bg-[rgba(239,68,68,0.05)] rounded-xl p-6 text-center">
              <p className="text-sm">
                {isAr ? "تكلفة الموظف" : "Employee Cost"}
              </p>
              <p className="text-3xl font-bold text-red-500">{employeeCost}</p>
            </div>

            <div className="bg-[rgba(0,214,143,0.08)] rounded-xl p-6 text-center">
              <p className="text-sm">{isAr ? "التوفير" : "Savings"}</p>
              <p className="text-3xl font-bold text-[#00d68f]">
                {Math.max(0, Math.round(savings))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
