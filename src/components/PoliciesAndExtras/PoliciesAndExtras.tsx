import DriverPolicy from "./DriverPolicy/DriverPolicy"
import FamilyPlanQuote from "./FamilyPlanQuote/FamilyPlanQuote"

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
          <DriverPolicy name={driver.name} />
        ))
      }
      <FamilyPlanQuote familyDetails={familyDetails} />
    </div>
  )
}

export default PoliciesAndExtras