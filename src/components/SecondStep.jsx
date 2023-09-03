import { Box, Button, TextField } from "@mui/material";
import { useContext } from "react";
import { multiStepContext } from "../hooks/StepContext";
import { csvDataContext } from "../App";

export default function SecondStep() {
  const { setStep, submitData, userData, setUserData } = useContext(multiStepContext);

  const { values, findMax, findMin } = useContext(csvDataContext);

  return (
    <div>
      {/* First Step Input Fields */}
      <div className="first_step_input_disabled">
      <div>
      <div>
        <TextField
          label='Project Name'
          value={userData.projectname}
          onChange={e => setUserData({...userData, 'projectname': e.target.value})}
          margin='normal'
          variant='outlined'
          color='secondary'
          disabled
        />
      </div>
      <div>
        <TextField
          label='Project Description'
          value={userData.projectdescription}
          onChange={e => setUserData({...userData, 'projectdescription': e.target.value})}
          margin='normal'
          variant='outlined'
          color='secondary'
          disabled
        />
      </div>
      </div>

      <div>
      <div>
        <TextField
          value={userData.client}
          onChange={e => setUserData({...userData, 'client': e.target.value})}
          label='Client'
          margin='normal'
          variant='outlined'
          color='secondary'
          disabled
        />
      </div>
      <div>
        <TextField
          label='Contractor'
          value={userData.contractor}
          onChange={e => setUserData({...userData, 'contractor': e.target.value})}
          margin='normal'
          variant='outlined'
          color='secondary'
          disabled
        />
      </div>
      </div>
      </div>


      {/* Second Step Input Fields */}

      <div className="second_step_input">

      <div className="all_min_max">
      <div>
        <TextField
          className="all_input"
          label='Max X'
          InputLabelProps={ values.length && {  shrink: true }}
          type='number'
          value={values.length ? findMax(1) : userData.max_X}
          onChange={e => setUserData({...userData, 'max_X': e.target.value})}
          margin='normal'
          variant='outlined'
          color='secondary'
          // disabled={values.length}
        />
      </div>
      <div>
        <TextField
          className="all_input"
          label='Min X'
          InputLabelProps={ values.length && {  shrink: true }}
          type='number'
          value={values.length ? findMin(1) : userData.min_X}
          onChange={e => setUserData({...userData, 'min_X': e.target.value})}
          margin='normal'
          variant='outlined'
          color='secondary'
        />
      </div>
      </div>

      <div className="all_min_max">
      <div>
        <TextField
          className="all_input"
          label='Max Y'
          InputLabelProps={ values.length && {  shrink: true }}
          type='number'
          value={values.length ? findMax(2) : userData.max_Y}
          onChange={e => setUserData({...userData, 'max_Y': e.target.value})}
          margin='normal'
          variant='outlined'
          color='secondary'
        />
      </div>
      <div>
        <TextField
          className="all_input"
          label='Min Y'
          InputLabelProps={ values.length && {  shrink: true }}
          type='number'
          value={values.length ? findMin(2) : userData.min_Y}
          onChange={e => setUserData({...userData, 'min_Y': e.target.value})}
          margin='normal'
          variant='outlined'
          color='secondary'
        />
      </div>
      </div>

      <div className="all_min_max">
      <div>
        <TextField
          className="all_input"
          label='Max Z'
          InputLabelProps={ values.length && {  shrink: true }}
          type='number'
          value={values.length ? findMax(3) : userData.max_Z}
          onChange={e => setUserData({...userData, 'max_Z': e.target.value})}
          margin='normal'
          variant='outlined'
          color='secondary'
        />
      </div>
      <div>
        <TextField
          className="all_input"
          label='Min Z'
          InputLabelProps={ values.length && {  shrink: true }}
          type='number'
          value={values.length ? findMin(3) : userData.min_Z}
          onChange={e => setUserData({...userData, 'min_Z': e.target.value})}
          margin='normal'
          variant='outlined'
          color='secondary'
        />
      </div>
      </div>

      <div className="second_button_div">
        <div>
          <Box my={2} display='flex' justifyContent='center'>
            <Button onClick={() => setStep(1)} variant='contained' color='primary'>
              Previous
            </Button>
          </Box>
        </div>
        <div>
          <Box my={2} display='flex' justifyContent='center'>
            <Button onClick={submitData} variant='contained' color='secondary'>
              Submit
            </Button>
          </Box>
        </div>
      </div>
    </div>
    </div>


  )
}