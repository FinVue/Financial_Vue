

function Greet({name}) {
  return (
    <article className="px-6 py-8 w-full flex justify-between items-center">
        <h1 className="text-heading-3 leading-tight font-medium text-white">Good morning,<br/><span className="text-secondary text-heading-3 font-bold">{name}</span></h1>
        <img className=" w-10 h-10 object-cover rounded-full" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="A portrait of a woman taken by Aiony Haust from Unplash"/>
      </article>
  )
}

export default Greet
