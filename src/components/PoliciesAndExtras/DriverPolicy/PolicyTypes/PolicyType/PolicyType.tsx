import './policy-type.css'

interface PolicyTypesInterface {
  icon: string
  type: string
  monthlyRate: number
  quarterlyRate: number
  annualRate: number
  famPlanDiscount?: boolean
  mostPopular?: boolean
  cover: string
  bgCol: string
}

interface Props {
  policyType: PolicyTypesInterface,
  driverIndex: number
  setFamilyDetails: any
  familyDetails: any
}

const PolicyType: React.FC<Props> = ({ policyType, driverIndex, setFamilyDetails, familyDetails }) => {
  const {
    type,
    monthlyRate,
    quarterlyRate,
    annualRate,
    famPlanDiscount,
    mostPopular,
    cover
  } = policyType

  const handlePolicySelect = () => {
    familyDetails[driverIndex].insurance.type = type
    setFamilyDetails([...familyDetails])
  }

  return (
    <div className="policy-type">
      {mostPopular && <img src='images/most-popular.png' alt='Most popular banner'/>}
      <h1>{type}</h1>
      <div className="horizontal-rule"></div>
      <p className="monthly-rate">
        <span>${monthlyRate}</span> per month
      </p>
      <p className='quarter-and-annual'>or ${quarterlyRate} per quarter</p>
      <p className='quarter-and-annual'>or ${annualRate} per year</p>
      {famPlanDiscount &&
        <div className="fam-plan-discount">
          <img src="/images/green-tick.png" alt="Tick" />
          <p>includes your 5% Family Plan discount</p>
        </div>
      }
      <p className="cover">{cover}</p>
      <div className="select-policy-btn" onClick={handlePolicySelect}>Select</div>
    </div>
  )
}

export default PolicyType