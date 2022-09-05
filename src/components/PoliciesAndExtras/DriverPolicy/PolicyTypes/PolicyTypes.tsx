interface PolicyTypesProps {

}

const PolicyTypes: React.FC<PolicyTypesProps> = () => {
  interface PolicyTypesInterface {
    icon: string
    type: string
    monthlyRate: number
    quarterlyRate: number
    annualRate: number,
    famPlanDiscount?: true,
    cover: string
  }

  const policyTypes: PolicyTypesInterface[] = [
    {
      icon: '/images/comprehensive-icon.png',
      type: 'comprehensive everyday plus',
      monthlyRate: 37,
      quarterlyRate: 110,
      annualRate: 405,
      famPlanDiscount: true,
      cover: 'Covers you for accidents, theft, fire, vandalism and storm damage.'
    },
    {
      icon: '/images/property-damage-icon.png',
      type: 'third party property damage',
      monthlyRate: 37,
      quarterlyRate: 110,
      annualRate: 405,
      cover: 'Covers you for vandalism and storm damage.'
    },
    {
      icon: '/images/fire-and-theft.png',
      type: 'third party fire and theft',
      monthlyRate: 37,
      quarterlyRate: 110,
      annualRate: 405,
      cover: 'Covers you for theft and fire damage.'
    },
    {
      icon: '/images/circle-plus-white.png',
      type: 'mechanical breakdown',
      monthlyRate: 37,
      quarterlyRate: 110,
      annualRate: 405,
      cover: 'Covers you for mechanical breakdowns.'
    },
  ]

  return (
    <div className="policy-types">
      
    </div>
  )
}

export default PolicyTypes