import CardFeatures from "./CardFeatures";

function Features() {
  return (
    <article className="px-6 py-4">
      <p className="text-body text-white py-4">Other features</p>
      <div className="flex flex-col gap-2">
        <CardFeatures bgColor={'bg-red-500'} icon={'fa-solid fa-house-fire'} featureName={"Emergency Fund"}/>
        <CardFeatures bgColor={'bg-green-500'} icon={'fa-solid fa-money-bill'} featureName={"Salary Tax Calculator"}/>
      </div>
    </article>
  );
}

export default Features;
