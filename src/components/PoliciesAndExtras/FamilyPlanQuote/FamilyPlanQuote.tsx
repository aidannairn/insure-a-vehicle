import { useEffect, useState } from 'react'

import './family-plan-quote.css'

import policyTypesData from '../DriverPolicy/PolicyTypes/policy-types-data'
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
  const [familyTotal, setFamilyTotal] = useState<number>(0)

  useEffect(() => {
    let initialValue = 0
    const policiesTotal = familyDetails.reduce((prevVal, currDriver) => {
      const matchedPolicy = policyTypes.filter(policy => policy.type === currDriver.insurance.type)
      return prevVal + matchedPolicy[0].monthlyRate
    }, initialValue)
    setFamilyTotal(policiesTotal)
  }, [])
  

  interface PolicyTypesInterface {
    icon: string
    type: string
    monthlyRate: number
    quarterlyRate: number
    annualRate: number
    famPlanDiscount?: boolean
    cover: string
    bgCol: string
  }

  const policyTypes: PolicyTypesInterface[] = policyTypesData

  const getMonthlyRate = (policyType: string) => {
    const matchedPolicy = policyTypes.filter(policy => policy.type === policyType)
    return matchedPolicy[0].monthlyRate
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
            <div key={i} className="driver-policy-plan">
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
          <p>${familyTotal}/month</p>
        </div>
        <p>Quote Reference Number: F0002967</p>
      </div>
    </div>
  )
}

export default FamilyPlanQuote