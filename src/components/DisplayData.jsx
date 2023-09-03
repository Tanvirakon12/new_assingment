import { useContext } from "react";
import { multiStepContext } from "../hooks/StepContext";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export default function DisplayData() {
  const { finalData } = useContext(multiStepContext);
  return (
    <div>
      <TableContainer style={{display: 'flex', justifyContent: 'center'}}>
        <Table border='1' style={{width: '70%'}}>
          <TableHead>
            <TableRow style={{backgroundColor: 'violet'}}>
              <TableCell>Project Name</TableCell>
              <TableCell>Project Description</TableCell>
              <TableCell>Client</TableCell>
              <TableCell>Contractor</TableCell>
              <TableCell>Project Name 2</TableCell>
              <TableCell>Project Description 2</TableCell>
              <TableCell>Client 2</TableCell>
              <TableCell>Contractor 2</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {
              finalData.map(datum => (
                <TableRow key={datum.client}>
                  <TableCell>{datum.projectname}</TableCell>
                  <TableCell>{datum.projectdescription}</TableCell>
                  <TableCell>{datum.client}</TableCell>
                  <TableCell>{datum.contractor}</TableCell>
                  <TableCell>{datum.projectname2}</TableCell>
                  <TableCell>{datum.projectdescription2}</TableCell>
                  <TableCell>{datum.client2}</TableCell>
                  <TableCell>{datum.contractor2}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}