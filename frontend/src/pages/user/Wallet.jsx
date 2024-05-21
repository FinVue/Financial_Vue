import Features from "../../components/Features"
import Greet from "../../components/Greet"

function Wallet() {

  return (
    <section className="bg-zinc-900 min-h-screen py-4">
      <Greet name="John Doe"/>
      <Features/>
      <article className="px-6 py-4">
        <p className="text-body text-white py-4">All transactions</p>
      </article>
    </section>
  )
}

export default Wallet
