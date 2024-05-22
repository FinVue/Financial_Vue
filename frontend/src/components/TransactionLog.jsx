import TransactionCategory from "./TransactionCategory";

TransactionCategory;

function TransactionLog({children}) {
  return (
    <article className="px-6 flex-col flex gap-3 py-4">
      <p className="text-body text-white py-4">
        Last 10 Transactions &gt;{" "}
        <span className="text-body underline font-bold">View All</span>
      </p>
      {children}
    </article>
  );
}

export default TransactionLog;
