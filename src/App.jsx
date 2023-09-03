import "./App.css";
import { createContext, useState } from "react";
import CSVSelector from "./components/CSVSelector";
import MultiStepForm from "./components/MultiStepForm";
import Papa from "papaparse";

export const csvDataContext = createContext();

function App() {
  const [parsedData, setParsedData] = useState([]);

  // state to store table Column name
  const [tableRows, setTableRows] = useState([]);

  // state to store the values
  const [values, setValues] = useState([]);

  const changeHandler = e => {
    // Passing file data (e.target.files[0]) to parse using Papa.parse
    Papa.parse(e.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray = [];
        const valuesArray = [];

        // Iterating data to get column name and their values
        results.data.map(datum => {
          rowsArray.push(Object.keys(datum));
          valuesArray.push(Object.values(datum));
        });

        // Parsed Data Response in array format
        setParsedData(results.data);

        // Filtered Column Names
        setTableRows(rowsArray[0]);

        // Filtered Values
        setValues(valuesArray);
      },
    });
  };

  // console.log(values);

  const findMax = index => {
    const company = values.map(value => parseFloat(value[index]));
    const maxValue = Math.max(...company);
    return maxValue;
  }

  const findMin = index => {
    const company = values.map(value => parseFloat(value[index]));
    const minValue = Math.min(...company);
    return minValue;
  }

  return (
    <csvDataContext.Provider value={{ values, tableRows, changeHandler, findMax, findMin }}>
      <CSVSelector />
      <MultiStepForm />
    </csvDataContext.Provider>
  );
}

export default App;