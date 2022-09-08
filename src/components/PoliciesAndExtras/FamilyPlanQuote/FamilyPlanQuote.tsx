import './family-plan-quote.css'
import FamilyMemberPolicy from './FamilyMemberPolicy/FamilyMemberPolicy'

interface Insurance {
  type: string
  amount: number
  excess: number
}

interface Car {
  make: string
  model: string
  year: number
}

interface DriverDetails {
  name: string
  insurance: Insurance,
  addOns: string[],
  car: Car
  additionalDrivers: number
}

interface FamilyPlanQuoteProps {
  familyDetails: DriverDetails[]
}

const FamilyPlanQuote: React.FC<FamilyPlanQuoteProps> = ({ familyDetails }) => {

  

  return (
    <div id="family-plan-quote">
      <div id="header">
        <h1>Your Family Plan Quote</h1>
      </div>
      <div id="family-policies">
        {
          familyDetails.map((driver: DriverDetails, i: number) => (
            <FamilyMemberPolicy key={i} driver={driver} />
          ))
        }
      </div>
    </div>
  )
}

export default FamilyPlanQuote