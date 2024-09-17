export default function Button({ setCounter, label, operation }) {
    const handleClick = () => {
      if (operation === "increase") {
        setCounter((prev) => prev + 1);
      } else {
        setCounter((prev) => prev - 1);
      }
    };
  
    return (
      <>
        <button onClick={handleClick}>{label}</button>
      </>
    );
  }
  