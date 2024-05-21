import { useState } from "react";

function Income() {
  const [formData, setFormData] = useState({
    amount: "",
    category: "Personal",
    date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="bg-zinc-900 min-h-screen py-4">
      <article className="p-6">
        <div className="returnBtn bg-secondary">
          <i className="fa-solid fa-arrow-left text-black"></i>
        </div>
      </article>
      <article className="p-6">
        <h3 className="text-heading-3 tracking-f-small font-bold text-white">
          Add <span className="text-secondary">Income</span>
        </h3>
        <form onSubmit={handleSubmit} className=" flex flex-col gap-5">
          <div className="grid gap-1">
            <label className="primary-label" htmlFor="amount">
              Amount <span className="text-secondary">*</span>
            </label>
            <div className="relative">
              <input
                className="primary-input pl-8 text-white"
                name="amount"
                type="number"
                placeholder="0"
                value={formData.amount}
                onChange={(e) =>
                  setFormData({ ...formData, amount: e.target.value })
                }
                required
              />
              <p className="absolute left-2 top-2 text-white">₱</p>
            </div>
          </div>
          <div className="grid gap-1">
            <label className="primary-label" htmlFor="category">
              Category <span className="text-secondary">*</span>
            </label>
            <select
              className="primary-input text-white"
              name="category"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              required
            >
              <option value="Personal">Personal 🧍</option>
              <option value="Business">Business 💼</option>
              <option value="Gifts">Gifts 🎁</option>
              <option value="Loan">Loan 💸</option>
              <option value="Others">Others 🗂️</option>
            </select>
          </div>
          <div className="grid gap-1">
            <label className="primary-label" htmlFor="date">
              Date <span className="text-secondary">*</span>
            </label>
            <input
              className="primary-input text-white"
              name="date"
              type="date"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              required
            />
          </div>
          <button type="submit" className="primary-btn w-full">
            ADD INCOME 💸
          </button>
        </form>
      </article>
    </section>
  );
}

export default Income;
