function TransactionCategory({ emoji, category, date, value = 0 }) {
  const isIncome =
    category == "Personal" ||
    category == "Business" ||
    category == "Gifts" ||
    category == "Loan" ||
    category == "Others";
  const isExpense =
    category == "Food" ||
    category == "Shopping" ||
    category == "Transport" ||
    category == "Home Expense" ||
    category == "Bills & Others";

  let categoryColor;

  switch (category) {
    case "Personal":
      categoryColor = "bg-personal";
      break;
    case "Business":
      categoryColor = "bg-business";
      break;
    case "Gifts":
      categoryColor = "bg-gifts";
      break;
    case "Loan":
      categoryColor = "bg-loan";
      break;
    case "Others":
      categoryColor = "bg-other-exp";
      break;
    case "Food":
      categoryColor = "bg-food";
      break;
    case "Shopping":
      categoryColor = "bg-shopping";
      break;
    case "Transport":
      categoryColor = "bg-transport";
      break;
    case "Home Expense":
      categoryColor = "bg-home";
      break;
    case "Bills & Others":
      categoryColor = "bg-other-inc";
      break;
    default:
      categoryColor = "bg-zinc-700";
      break;
  }

  return (
    <div className="bg-zinc-800 grid grid-cols-4 p-4 w-full min-h-[60px] h-3/4 rounded-xl lg:grid-cols-10">
      <div
        className={`${categoryColor} w-12 h-12 rounded-lg p-2 grid self-center`}
      >
        <p className="text-center grid self-center justify-self-center">
          {emoji}
        </p>
      </div>
      <div className="grid col-span-2 lg:col-span-8 items-center">
        <p className="text-white text-small text-left">{category}</p>
        <p className="text-zinc-500 text-pre-title md:text-small text-left">
          {date}
        </p>
      </div>
      <p
        className={
          (isIncome ? "text-secondary" : "text-red-500") +
          " font-bold text-pre-title xs:text-body text-right items-center grid"
        }
      >
        {isIncome && `+ ₱ ${value}`}
        {isExpense && `- ₱ ${value}`}
      </p>
    </div>
  );
}

export default TransactionCategory;
