import Greet from "../../components/Greet";
import CardBalance from "../../components/CardBalance";
import TransactionLog from "../../components/TransactionLog";
import TransactionCategory from "../../components/TransactionCategory";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

function Dashboard() {
  const {user} = useContext(UserContext);
  const [userData, setUserData] = useState(null);
  const [transactionsData, setTransactionsData] = useState([
    {
      id: 1,
      category: "Business",
      date: "12/06/1997",
      value: 300,
    },
    {
      id: 2,
      category: "Food",
      date: "10/02/1997",
      value: 348,
    },
    {
      id: 3,
      category: "Home Expense",
      date: "10/02/1997",
      value: 627,
    },
    {
      id: 5,
      category: "Home Expense",
      date: "06/02/2023",
      value: 627,
    },
    {
      id: 4,
      category: "Loan",
      date: "10/02/1997",
      value: 256,
    }
  ]);

  const name = "John Doe";
  const cardDetails = {
    balanceTtl: 500,
    incomeVal: 4000,
    expenseVal: 300,
  };

  return (
    <section className="bg-zinc-900 min-h-screen py-4">
      <Greet name={name} />
      <CardBalance
        balanceTtl={cardDetails.balanceTtl}
        incomeVal={cardDetails.incomeVal}
        ExpenseVal={cardDetails.expenseVal}
      />
      <TransactionLog>
        <div className="flex flex-col gap-2">
          {
          transactionsData
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((transaction) => {
            return (<TransactionCategory key={transaction.id} category={transaction.category} date={transaction.date} value={transaction.value}/>);
          })
          }
        </div>
      </TransactionLog>
    </section>
  );
}

export default Dashboard;
