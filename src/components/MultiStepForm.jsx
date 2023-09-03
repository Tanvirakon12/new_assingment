import { Step, StepLabel, Stepper } from '@mui/material'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import { useContext } from 'react'
import { multiStepContext } from '../hooks/StepContext'
import DisplayData from './DisplayData'

export default function MultiStepForm() {
  const {step, finalData} = useContext(multiStepContext);

  const showStep = step => {
    switch (step) {
      case 1:
        return <FirstStep />
      case 2:
        return <SecondStep />
    }
  }
  return (
    <div className='form'>
      <div className="form-header">
        <div className="center-stepper">
          <Stepper style={{width: '18%'}} activeStep={step - 1}>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
        </div>
        {showStep(step)}

        {finalData.length ? <DisplayData /> : null}
      </div>
      
    </div>
  )
}
