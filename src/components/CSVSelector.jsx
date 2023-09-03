import { useContext } from "react";
// import Papa from "papaparse";
import { csvDataContext } from "../App";

export default function CSVSelector() {
  const { values, tableRows, changeHandler, findMax, findMin } = useContext(csvDataContext);

  // console.log(values);
  // console.log(tableRows);
  // State to store parsed data
  /* const [parsedData, setParsedData] = useState([]);

  //State to store table Column name
  const [tableRows, setTableRows] = useState([]);

  //State to store the values
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
  } */

  /* const x = values.map(value => parseFloat(value[1]));
  console.log(x);

  const max_X = Math.max(...x);
  console.log(max_X); */

  return (
    <div>
      {/* File Uploader */}
      <input
        className="tanvir"
        type="file"
        name="file"
        onChange={changeHandler}
        accept=".csv"
        style={{ display: "block", margin: "10px auto" }}
      />
      <br />
      <br />
      {/* Table */}
      <table>
        <thead>
          <tr>
            {tableRows.map((rows, index) => {
              return <th key={index}>{rows}</th>;
            })}
          </tr>
        </thead>

        <tbody>
          {
            values.map((value, index) => {
              // console.log(value.slice(0,5))
              return (
                <tr key={index}>
                  {
                    value.map((val, i) => {
                      // console.log(val.slice(0,5))
                      return <td key={i}>{val}</td>
                    })
                  }
                </tr>
              );
            }).slice(0, 10)
          }
        </tbody>

      </table>

      {
        values.length ? (
          <>
            <div style={{marginTop: '16px'}}>
              <h4>
                Maximum value of x: <span style={{color: 'blue'}}>{findMax(1)}</span>
              </h4>
              <h4>
                Minimum value of x: <span style={{color: 'blue'}}>{findMin(1)}</span>
              </h4>
            </div>
            <div style={{marginTop: '16px'}}>
              <h4>
                Maximum value of y: <span style={{color: 'darkblue'}}>{findMax(2)}</span>
              </h4>
              <h4>
                Minimum value of y: <span style={{color: 'darkblue'}}>{findMin(2)}</span>
              </h4>
            </div>
            <div style={{marginTop: '16px'}}>
              <h4>
                Maximum value of z: <span style={{color: 'purple'}}>{findMax(3)}</span>
              </h4>
              <h4>
                Minimum value of z: <span style={{color: 'purple'}}>{findMin(3)}</span>
              </h4>
            </div>
          </>
        ) : null
      }
    </div>
  )
}