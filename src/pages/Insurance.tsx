import { useState } from 'react'

import { Header } from '../components/Header/Header'
import PoliciesAndExtras from '../components/PoliciesAndExtras/PoliciesAndExtras'
import './insurance.css'

interface StepInterface {
  name: string,
  isActive: boolean,
  isComplete: boolean
}

interface StepOptionProps {
  step: StepInterface,
  setIsActive: React.Dispatch<React.SetStateAction<string>>
}

const FormStepOption: React.FC<StepOptionProps> = ({ step, setIsActive }) => {

  const handleOptionClick: React.MouseEventHandler<HTMLDivElement> = () => setIsActive(step.name)

  return (
    <div id={`form-step-option`} className={
      `${step.isActive ? 'active' : null}
      ${step.isComplete && !step.isActive ? 'complete' : null}`
    }
      onClick={handleOptionClick}
    >
      <h2>{step.name}</h2>
      {(step.isComplete && !step.isActive) && <img src="images/tick-box.png" alt="Completed checkbox" />}
    </div>
  )
}

const Insurance: React.FC = () => {
  const [isActive, setIsActive] = useState<string>('drivers')
  const [isComplete, setIsComplete] = useState<string[]>([])

  const steps: StepInterface[] = [
    {
      name: 'drivers',
      isActive: isActive === 'drivers',
      isComplete: isComplete.includes('drivers')
    },
    {
      name: 'cars',
      isActive: isActive === 'cars',
      isComplete: isComplete.includes('cars')
    },
    {
      name: 'policies & extras',
      isActive: isActive === 'policies & extras',
      isComplete: isComplete.includes('policies & extras')
    }
  ]

  return (
    <>
      <Header />
      <div id='insurance-container'>
        <div id="form-step-options">
          {steps.map((step: StepInterface, i: number) => {
            return <FormStepOption key={i} step={step} setIsActive={setIsActive} />
          })}
        </div>
        {isActive === 'policies & extras' && <PoliciesAndExtras />}
      </div>
    </>
  )
}

export default Insurance