const safetyTips = [
  "Don't pay in advance, including for delivery, Meet the seller at a safe public place, On delivery, check that the item delivered is what was inspected.",
  ,
  "Inspect the item and ensure it’s exactly what you want.",
  "Only pay when you’re satisfied",
];
const SafetyTips = () => {
  return (
    <div className="dark:text-white text-center">
      <h3 className="text-base"> Safety tips</h3>
      <ul className="text-xs text-fgrey text-left">
        {safetyTips.map((tip) => (
          <li key={tip} className="my-1">
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SafetyTips;
