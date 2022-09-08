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

  const getMonthlyRate = (policyType: string) => {
    switch (policyType) {
      case 'comprehensive everyday plus': return 37
      case 'third party property damage': return 28
      case 'third party fire & theft': return 25
      default: return 0
    }
  }

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
      <div id="payment-plans">
        <div className="header">
          <p>Payment Plans</p>
          <p>Calculated with your 5% Family Plan discount</p>
        </div>
        <div className="driver-policy-plans">
        {
          familyDetails.map((driver: DriverDetails, i: number) => (
            <div className="driver-policy-plan">
              <div className="name-and-rate">
                <p>{driver.name}'s Policy</p>
                <p>${getMonthlyRate(driver.insurance.type)}/month</p>
              </div>
              <p>({driver.insurance.type})</p>
            </div>
          ))
        }
        </div>
        <div className="payment-plan-total">
          <p>Total Amount</p>
          <p>$/month</p>
        </div>
        <p>Quote Reference Number: F0002967</p>
      </div>
    </div>
  )
}

export default FamilyPlanQuote