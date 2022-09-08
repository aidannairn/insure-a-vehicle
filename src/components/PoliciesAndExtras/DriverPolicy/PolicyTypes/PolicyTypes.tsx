import { useState } from 'react'

import PolicyType from './PolicyType/PolicyType'
import policyTypesData from './policy-types-data'
import './policy-types.css'

interface Props {
  driverIndex: number
  setFamilyDetails: any
  familyDetails: any
}

const PolicyTypes: React.FC<Props> = ({ driverIndex, setFamilyDetails, familyDetails }) => {
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

  const policyTypes: PolicyTypesInterface[] = policyTypesData

  const [policyIndex, setPolicyIndex] = useState(0)
  const [policyType, setPolicyType] = useState<PolicyTypesInterface>(policyTypes[0])

  const getAccentCol = () => {
    switch (policyType.type) {
      case 'comprehensive everyday plus': return '#1078CE'
      case 'third party property damage': return '#57A3E2'
      case 'third party fire & theft': return '#A7C3DA'
      case 'mechanical breakdown': return '#A5BBCE'
      default: return '#1078CE'
    }
  }

  const handlePolicyOptionClick = (i: number) => {
    setPolicyIndex(i)
    setPolicyType(policyTypes[policyIndex])
  }

  return (
    <div className="policy-types">
      <div className="policy-type-options">
        {policyTypes.map((pt: PolicyTypesInterface, i: number) => (
          <div key={i} className="policy-type-option" style={{ backgroundColor: pt.bgCol }} onClick={() => handlePolicyOptionClick(i)}>
            <img src={pt.icon} alt={`${pt.type} icon`} />
            <p>{pt.type}</p>
          </div>
        ))}
      </div>
      <div className='pt-bg-accent' style={{ backgroundColor: getAccentCol() }} />
      <PolicyType policyType={policyType} driverIndex={driverIndex} setFamilyDetails={setFamilyDetails} familyDetails={familyDetails} />
      <div className='check-policy'>
        <a className="check-policy" href="#">Check Policy</a>
      </div>
    </div>
  )
}

export default PolicyTypes