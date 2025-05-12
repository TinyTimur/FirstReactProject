import "./button.css";


export default function Button({ children, onClick, className, disabled }) {


  
  return (
    <button
      disabled={disabled}
      className={`button ${className}`}
      type="button"
      onClick={onClick}
      onDoubleClick={() => {
        console.log("DoubleClickDetected");
      }}
    >
      {" "}
      {children}
    </button>
  );
}
