import Greet from "../../components/Greet"
import CardBalance from "../../components/CardBalance"
import TransactionLog from "../../components/TransactionLog"

function Dashboard() {
  const name = "John Doe"
  const cardDetails = {
    balanceTtl: 500,
    incomeVal: 4000,
    expenseVal: 300,
  }
  
  return (
    <section className="bg-zinc-900 min-h-screen py-4">
      <Greet name={name}/>
      <CardBalance balanceTtl={cardDetails.balanceTtl} incomeVal={cardDetails.incomeVal} ExpenseVal={cardDetails.expenseVal}/>
      <TransactionLog/>
    </section>

  )
}

export default Dashboard
