export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start Adding some items to your list</em>
      </p>
    );
  }
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percentage =
    numPackedItems !== 0 ? Math.round((numPackedItems / numItems) * 100) : 0;
  console.log();
  return (
    <footer className="stats">
      <em>
        {" "}
        {percentage === 100
          ? "You got everything! Ready to go!"
          : `You have ${numItems} items on your list, and you have already packed${" "}
        ${numPackedItems} (${percentage}%)`}
        ;
      </em>
    </footer>
  );
}
