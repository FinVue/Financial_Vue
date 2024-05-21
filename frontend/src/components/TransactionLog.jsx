import TransactionCategory from "./TransactionCategory";

TransactionCategory;

function TransactionLog() {
  return (
    <article className="px-6 py-4">
      <p className="text-body text-white py-4">
        Last 10 Transactions &gt;{" "}
        <span className="text-body underline font-bold">View All</span>
      </p>
      <div className="flex flex-col gap-2">
        <TransactionCategory />
      </div>
    </article>
  );
}

export default TransactionLog;
