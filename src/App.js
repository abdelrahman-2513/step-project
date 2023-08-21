import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsopen] = useState(true)

  function handlerPrevious() {
    if (step > 1)
      setStep((step) => step - 1);
  }
  function handlerNext() {
    if (step < 3)
      setStep((step) => step + 1);
  }

  return (<>
    <button className="close" onClick={() => setIsopen((isOpen) => !isOpen)}>&times;</button>
    {isOpen && (<div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>
      <p className="message">{`Step:${step} ${messages[step - 1]}`}</p>

      <div className="buttons">
        <button style={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={handlerPrevious}>Previous</button>
        <button style={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={handlerNext}>Next</button>
      </div>
    </div>)}
  </>)
}
