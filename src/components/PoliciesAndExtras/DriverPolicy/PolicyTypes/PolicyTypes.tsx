import { useState } from 'react'

import './policy-types.css'

interface PolicyTypesProps {

}

const PolicyTypes: React.FC<PolicyTypesProps> = () => {
  const [policyType, setPolicyType] = useState<string>('comprehensive everyday plus')


  interface PolicyTypesInterface {
    icon: string
    type: string
    monthlyRate: number
    quarterlyRate: number
    annualRate: number
    famPlanDiscount?: true
    cover: string
    bgCol: string
  }

  const policyTypes: PolicyTypesInterface[] = [
    {
      icon: '/images/comprehensive-icon.png',
      type: 'comprehensive everyday plus',
      monthlyRate: 37,
      quarterlyRate: 110,
      annualRate: 405,
      famPlanDiscount: true,
      cover: 'Covers you for accidents, theft, fire, vandalism and storm damage.',
      bgCol: '#1078CE'
    },
    {
      icon: '/images/property-damage-icon.png',
      type: 'third party property damage',
      monthlyRate: 37,
      quarterlyRate: 110,
      annualRate: 405,
      cover: 'Covers you for vandalism and storm damage.',
      bgCol: '#57A3E2'
    },
    {
      icon: '/images/fire-and-theft-icon.png',
      type: 'third party fire and theft',
      monthlyRate: 37,
      quarterlyRate: 110,
      annualRate: 405,
      cover: 'Covers you for theft and fire damage.',
      bgCol: '#A7C3DA'
    },
    {
      icon: '/images/circle-plus-white.png',
      type: 'mechanical breakdown',
      monthlyRate: 37,
      quarterlyRate: 110,
      annualRate: 405,
      cover: 'Covers you for mechanical breakdowns.',
      bgCol: '#A5BBCE'
    },
  ]

  const getAccentCol = () => {
    switch (policyType) {
      case 'comprehensive everyday plus': return '#1078CE'
      case 'third party property damage': return '#57A3E2'
      case 'third party fire and theft': return '#A7C3DA'
      case 'mechanical breakdown': return '#A5BBCE'
      default: return '#1078CE'
    }
  }

  return (
    <div className="policy-types">
      <div className="policy-type-options">
        {policyTypes.map((pt: PolicyTypesInterface, i: number) => (
          <div key={i} className="policy-type-option" style={{ backgroundColor: pt.bgCol }}>
            <img src={pt.icon} alt={`${pt.type} icon`} />
            <p>{pt.type}</p>
          </div>
        ))}
      </div>
      <div className='pt-bg-accent' style={{ backgroundColor: getAccentCol() }}></div>
    </div>
  )
}

export default PolicyTypes