import { Header } from '../components/Header/Header'
import './insurance.css'

interface StepInterface {
  name: string,
  isActive: boolean,
  isComplete: boolean
}

interface StepOptionProps {
  step: StepInterface,
}

const FormStepOption: React.FC<StepOptionProps> = ({ step }) => {

  return (
    <div id={`form-step-option`} className={
      `${step.isActive ? 'active' : null}
      ${step.isComplete && !step.isActive ? 'complete' : null}`
    }>
      <h2>{step.name}</h2>
      {step.isComplete && <img src="images/tick-box.png" alt="Completed checkbox" />}
    </div>
  )
}

const Insurance: React.FC = () => {
  const steps: StepInterface[] = [
    {
      name: 'drivers',
      isActive: false,
      isComplete: true
    },
    {
      name: 'cars',
      isActive: true,
      isComplete: false
    },
    {
      name: 'polices & extras',
      isActive: false,
      isComplete: false
    }
  ]

  return (
    <>
      <Header />
      <div id='insurance-container'>
        <div id="form-step-options">
          {steps.map((step: StepInterface, i: number) => {
            return <FormStepOption key={i} step={step} />
          })}
        </div>
      </div>
    </>
  )
}

export default Insurance