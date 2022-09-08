import DriverPolicy from "./DriverPolicy/DriverPolicy"
import FamilyPlanQuote from "./FamilyPlanQuote/FamilyPlanQuote"

import './policies-and-extras.css'

interface Props {

}

const PoliciesAndExtras: React.FC<Props> = () => {
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

  const familyDetails: DriverDetails[] = [
    {
      name: 'Jack',
      insurance: {
        type: 'comprehensive everyday plus',
        amount: 4000,
        excess: 1000
      },
      addOns: ['mechanical breakdown'],
      car: {
        make: 'toyota',
        model: 'prius',
        year: 2021
      },
      additionalDrivers: 1
    },
    {
      name: 'Jill',
      insurance: {
        type: 'third party fire & theft',
        amount: 1000,
        excess: 100
      },
      addOns: [],
      car: {
        make: 'honda',
        model: 'civic',
        year: 2000
      },
      additionalDrivers: 0
    }
  ]

  return (
    <div>
      {
        familyDetails.map((driver: DriverDetails, i: number) => (
          <DriverPolicy key={i} name={driver.name} />
        ))
      }
      <FamilyPlanQuote familyDetails={familyDetails} />
      <div id="send-quote-container">
        <div id="quote-desc">
          <img src="/images/mail-icon.png" alt="Envelope" />
          <p>Want a personal copy? Enter your email address and we will send you your quote (optional)</p>
        </div>
        <div id="quote-inputs">
          <input type="text" placeholder="Enter your email address" />
          <div id="send-quote-btn"><p>Send quote</p></div>
        </div>
      </div>
      <div id="insurance-nav-btns">
        <div className="insurance-nav-btn">
          <p>Previous</p>
        </div>
        <div className="insurance-nav-btn solid">
          <p>Go to Purchase</p>
        </div>
      </div>
    </div>
  )
}

export default PoliciesAndExtras