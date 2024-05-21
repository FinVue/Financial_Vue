import { useState } from "react";

function EmergencyFund() {
  const [formData, setFormData] = useState({
    monthlySalary: "",
    monthsCount: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="min-h-screen bg-gradient-to-r from-secondary to-secondary-2">
      <article className="p-6 flex flex-col gap-8">
        <div className="returnBtn">
          <i className="fa-solid fa-arrow-left text-white"></i>
        </div>
        <div>
          <p className="text-small font-semibold">
            Recommended emergency fund:
          </p>
          <div className="relative flex">
            <p className="text-heading-2 font-bold">₱</p>
            <h3 className="text-heading-2 font-bold pl-5 break-words overflow-auto">
              2000
            </h3>
          </div>
        </div>
      </article>
      <article className="bg-zinc-900 py-16 w-full h-[calc(50vh+300px)] lg:h-[calc(50vh+500px)] px-6 rounded-t-[30px] flex flex-col gap-4">
        <h2 className="text-heading-3 font-bold text-white tracking-f-small py-5">
          Emergency<span className="text-secondary"> Fund</span>
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid gap-1">
            <label className="primary-label" htmlFor="amount">
              MONTHLY SALARY <span className="text-secondary">*</span>
            </label>
            <div className="relative">
              <input
                className="primary-input pl-8 text-white"
                name="amount"
                type="number"
                min="0"
                value={formData.monthlySalary}
                onChange={(e) => setFormData({...formData, monthlySalary: e.target.value})}
                required
              />
              <p className="absolute left-2 top-2 text-white">₱</p>
            </div>
          </div>
          <div className="grid gap-1">
            <label className="primary-label" htmlFor="month">
              Number Of Months <span className="text-secondary">*</span>
            </label>
            <input
              className="primary-input text-white"
              type="number"
              placeholder="Number months you wish to cover"
              min="1"
              value={formData.monthsCount}
              onChange={(e) => setFormData({...formData, monthsCount: e.target.value})}
              required
            />
          </div>
          <button type="submit" className="primary-btn">
            Calculate
          </button>
        </form>
      </article>
    </section>
  );
}

export default EmergencyFund;
