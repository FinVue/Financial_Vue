import CardTax from "../../components/CardTax";
import ProjectedTax from "../../components/ProjectedTax";
import { useState } from "react";

function TaxCalculator() {
  const sssLogo =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Social_Security_System_%28SSS%29.svg/1200px-Social_Security_System_%28SSS%29.svg.png";
  const gsisLogo =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJyQ4xNGBl_tP0kbuD-M_gUMjQnjGEkYx9wG9BYiTI4g&s";
  const philhealthLogo =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQimgONmrOviyRl-QecZPDKLx_8boMfkWG0rRGfhuM0BQ&s";
  const taxLogo =
    "https://w7.pngwing.com/pngs/41/420/png-transparent-emoji-money-bag-sticker-take-the-money-cash-emoji-domain-money.png";

  const [formData, setFormData] = useState({
    monthlySalary: "",
    isSssMember: "",
    isGsisMember: "",
    isPhilHealthMember: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <section className="min-h-screen bg-gradient-to-r from-secondary to-secondary-2">
      <ProjectedTax taxedSalary={5000} />
      <article className="bg-zinc-900 py-16 w-full h-[calc(60vh+900px)] lg:h-[calc(50vh+700px)] px-6 rounded-t-[30px] flex flex-col gap-4">
        <h2 className="text-heading-3 font-bold text-white tracking-f-small py-5">
          Calculate<span className="text-secondary"> Tax</span>
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
                min={0}
                placeholder="0"
                value={formData.monthlySalary}
                onChange={(e) =>
                  setFormData({ ...formData, monthlySalary: e.target.value })
                }
                required
              />
              <p className="absolute left-2 top-2 text-white">₱</p>
            </div>
          </div>
          <div className="grid gap-2">
            <label className="primary-label">
              SSS Membership Status <span className="text-secondary">*</span>
            </label>
            <div className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-2">
              <div className="flex-row-reverse flex items-center gap-4">
                <input
                  type="radio"
                  id="not-member"
                  name="sss-membership"
                  value="Not Member"
                  className="hidden peer"
                  onChange={(e) =>
                    setFormData({ ...formData, isSssMember: e.target.value })
                  }
                  required
                />
                <label
                  className="primary-label font-semibold text-white p-4 w-full bg-zinc-900 rounded-md text-center uppercase border border-zinc-700 peer-checked:bg-zinc-800 duration-300"
                  htmlFor="not-member"
                >
                  Not Member
                </label>
              </div>
              <div className="flex-row-reverse flex items-center gap-4">
                <input
                  type="radio"
                  id="household"
                  name="sss-membership"
                  value="Household"
                  onChange={(e) =>
                    setFormData({ ...formData, isSssMember: e.target.value })
                  }
                  className="hidden peer"
                  required
                />
                <label
                  className="primary-label font-semibold text-white p-4 w-full bg-zinc-900 rounded-md text-center uppercase border border-zinc-700 peer-checked:bg-zinc-800 duration-300"
                  htmlFor="household"
                >
                  Household
                </label>
              </div>
              <div className="flex-row-reverse flex items-center gap-4">
                <input
                  type="radio"
                  id="employee"
                  name="sss-membership"
                  value="Employee"
                  onChange={(e) =>
                    setFormData({ ...formData, isSssMember: e.target.value })
                  }
                  className="hidden peer"
                  required
                />
                <label
                  className="primary-label font-semibold text-white p-4 w-full bg-zinc-900 rounded-md text-center uppercase border border-zinc-700 peer-checked:bg-zinc-800 duration-300"
                  htmlFor="employee"
                >
                  Employee
                </label>
              </div>
            </div>
          </div>
          <div className="grid gap-2">
            <label className="primary-label">
              GSIS Membership Status <span className="text-secondary">*</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex-row-reverse flex items-center">
                <input
                  type="radio"
                  id="gsis-not-member"
                  name="gsis-membership"
                  className="hidden peer"
                  value="Not Member"
                  onChange={(e) =>
                    setFormData({ ...formData, isGsisMember: e.target.value })
                  }
                  required
                />
                <label
                  className="primary-label font-semibold text-white p-4 w-full bg-zinc-900 rounded-md text-center uppercase border border-zinc-700 peer-checked:bg-zinc-800 duration-300"
                  htmlFor="gsis-not-member"
                >
                  Not Member
                </label>
              </div>
              <div className="flex-row-reverse flex items-center">
                <input
                  type="radio"
                  id="gsis-member"
                  name="gsis-membership"
                  value="GSIS Member"
                  onChange={(e) =>
                    setFormData({ ...formData, isGsisMember: e.target.value })
                  }
                  className="hidden peer"
                  required
                />
                <label
                  className="primary-label font-semibold text-white p-4 w-full bg-zinc-900 rounded-md text-center uppercase border border-zinc-700 peer-checked:bg-zinc-800 duration-300"
                  htmlFor="gsis-member"
                >
                  I&apos;m a Member
                </label>
              </div>
            </div>
          </div>
          <div className="grid gap-2">
            <label className="primary-label">
              PhilHealth Membership Status{" "}
              <span className="text-secondary">*</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex-row-reverse flex items-center">
                <input
                  type="radio"
                  id="philhealth-not-member"
                  name="philhealth-membership"
                  className="hidden peer"
                  value="Not Member"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      isPhilHealthMember: e.target.value,
                    })
                  }
                  required
                />
                <label
                  className="primary-label font-semibold text-white p-4 w-full bg-zinc-900 rounded-md text-center uppercase border border-zinc-700 peer-checked:bg-zinc-800 duration-300"
                  htmlFor="philhealth-not-member"
                >
                  Not Member
                </label>
              </div>
              <div className="flex-row-reverse flex items-center">
                <input
                  type="radio"
                  id="philhealth-member"
                  name="philhealth-membership"
                  value="Philhealth Member"
                  className="hidden peer"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      isPhilHealthMember: e.target.value,
                    })
                  }
                  required
                />
                <label
                  className="primary-label font-semibold text-white p-4 w-full bg-zinc-900 rounded-md text-center uppercase border border-zinc-700 peer-checked:bg-zinc-800 duration-300"
                  htmlFor="philhealth-member"
                >
                  I&apos;m a Member
                </label>
              </div>
            </div>
          </div>
          <button type="submit" className="primary-btn">
            Calculate
          </button>
        </form>
        <div className="flex flex-col gap-2">
          <CardTax recipient="SSS" img={sssLogo} />
          <CardTax recipient="GSIS" img={gsisLogo} />
          <CardTax recipient="PhilHealth" img={philhealthLogo} />
          <CardTax recipient="Total Accumulated Tax" img={taxLogo} />
        </div>
      </article>
    </section>
  );
}

export default TaxCalculator;
