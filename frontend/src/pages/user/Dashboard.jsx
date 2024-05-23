import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { db } from "../../../firebase";
import { doc, getDoc } from "firebase/firestore";
import Greet from "../../components/Greet";
import CardBalance from "../../components/CardBalance";
import TransactionLog from "../../components/TransactionLog";
import TransactionCategory from "../../components/TransactionCategory";

function Dashboard() {
  const { user } = useContext(UserContext);
  const [totalIncome, setTotalIncome] = useState("0");
  const [totalExpense, setTotalExpense] = useState("0");
  const [transactions, setTransactions] = useState({ income: [], expense: [] });

  useEffect(() => {
    const fetchIncomeAndExpense = async () => {
      try {
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) { 
          const userData = userDocSnap.data();
          const { income = [], expense = [] } = userData;

          const totalIncome = income.reduce(
            (acc, curr) => acc + parseFloat(curr.amount),
            0
          );

          const totalExpense = expense.reduce(
            (acc, curr) => acc + parseFloat(curr.amount),
            0
          );

          setTotalIncome(totalIncome.toFixed(2));
          setTotalExpense(totalExpense.toFixed(2));
          setTransactions({ income, expense });
        } else {
          console.error("User document does not exist.");
        }
      } catch (error) {
        console.error("Error fetching income and expense data: ", error);
      }
    };

    fetchIncomeAndExpense();
  }, [user]);

  const name = "John Doe"; // Replace with the user's actual name if needed
  const cardDetails = {
    balanceTtl: (parseFloat(totalIncome) - parseFloat(totalExpense)).toFixed(2),
    incomeVal: totalIncome,
    expenseVal: totalExpense,
  };

  // Combine and sort transactions by date, then limit to the last 10 transactions
  const allTransactions = [
    ...transactions.income.map((t) => ({ ...t, type: 'income' })),
    ...transactions.expense.map((t) => ({ ...t, type: 'expense' })),
  ];

  const sortedTransactions = allTransactions.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const last10Transactions = sortedTransactions.slice(-10).reverse();

  return (
    <section className="bg-zinc-900 min-h-screen py-4">
      <Greet name={name} />
      <CardBalance
        balanceTtl={cardDetails.balanceTtl}
        incomeVal={cardDetails.incomeVal}
        ExpenseVal={cardDetails.expenseVal}
      />
      <TransactionLog showNavigation={true}>
        {last10Transactions.map((transaction, index) => (
          <TransactionCategory
            key={index}
            category={transaction.category}
            date={transaction.date}
            value={transaction.amount}
          />
        ))}
      </TransactionLog>
    </section>
  );
}

export default Dashboard;
