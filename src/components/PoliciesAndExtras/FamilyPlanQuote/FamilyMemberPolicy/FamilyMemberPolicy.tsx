import './family-member-policy.css'

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

interface Props {
  driver: DriverDetails
  policyTypes: PolicyTypesInterface[]
}

const FamilyMemberPolicy: React.FC<Props> = ({ driver, policyTypes }) => {
  const {
    name,
    insurance,
    addOns,
    car,
    additionalDrivers
  } = driver

  const { type, amount, excess } = insurance

  const { make, model, year } = car

  const getPolicyIcon = (policyType: string) => {
    const matchedPolicy = policyTypes.filter(policy => policy.type === policyType)
    return matchedPolicy[0].icon
  }

  const getCol = (policyType: string) => {
    const matchedPolicy = policyTypes.filter(policy => policy.type === policyType)
    return matchedPolicy[0].bgCol
  }

  return (
    <div className="family-member-policy">
      <p>{name}'s Policy</p>
      <div className="icon-and-type-container" style={{backgroundColor: getCol(type)}}>
        <img src={getPolicyIcon(type)} alt="Policy" />
        <p>{type}</p>
      </div>
      <p>{make} {model} {year}</p>
      <p><b>Main Driver:</b> {name}</p>
      <p><b>{additionalDrivers ? `+ ${additionalDrivers} Additional Drivers (under 25)` : 'No Additional Drivers'}</b></p>
      <p><b>Add-ons</b>: {
        addOns.length ? addOns.map((addOn: string, i: number) => (
          <span key={i}>{addOn}</span>
        )) : <span><a className='select-add-on' href='#'>Select Add-on</a></span>
      }</p>
    </div>
  )
}

export default FamilyMemberPolicy