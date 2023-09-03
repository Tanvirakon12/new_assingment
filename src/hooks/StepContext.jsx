import { createContext, useState } from "react";
import App from "../App";

export const multiStepContext = createContext();

export default function StepContext() {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);

  function submitData(e) {
    e.preventDefault();
    setFinalData(prevFinalData => [...prevFinalData, userData]);
    setUserData('');
    setStep(1);
  }

  return (
    <multiStepContext.Provider value={{ step, setStep, userData, setUserData, finalData, setFinalData, submitData }}>
      <App />
    </multiStepContext.Provider>
  )
}