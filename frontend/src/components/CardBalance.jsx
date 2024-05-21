

function CardBalance({balanceTtl, incomeVal, ExpenseVal}) {
  return (
    <article className="mx-6 px-4 bg-gradient-to-r from-secondary to-secondary-2 rounded-[20px] grid-rows-3 p-6 flex flex-col gap-3">
        <p className="text-body font-bold text-zinc-900 text-center">Total Balance</p>
        <h2 className="text-zinc-900 text-heading-2 font-bold tracking-f-small text-center">₱ {balanceTtl}</h2>
        <div className="grid grid-cols-2 gap-2 items-center justify-center">
          <div className="flex justify-center items-center gap-2">
            <div className="bg-zinc-900 rounded-full min-w-5 min-h-5 flex justify-center items-center">
              <i className="text-body text-center text-white fa-solid fa-caret-up"></i>
            </div>
            <div className="w-[100px]">
              <p className="text-small font-medium">Income</p>
              <p className="text-small font-bold">₱ {incomeVal}</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <div className="bg-zinc-900 rounded-full min-w-5 min-h-5 flex justify-center items-center">
              <i className="text-body text-center text-white fa-solid fa-caret-down"></i>
            </div>
            <div className="w-[100px]">
              <p className="text-small font-medium">Expense</p>
              <p className="text-small font-bold">₱ {ExpenseVal}</p>
            </div>
          </div>
        </div>
      </article>
  )
}

export default CardBalance

