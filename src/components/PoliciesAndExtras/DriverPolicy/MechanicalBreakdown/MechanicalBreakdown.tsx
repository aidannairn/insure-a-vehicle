import './mechanical-breakdown.css'

const MechanicalBreakdown: React.FC = () => {
  interface MbBenefit {
    icon: string
    text: string
  }

  const mbBenefits: MbBenefit[] = [
    {
      icon: 'images/online-support-icon.png',
      text: 'AA Roadside Assistance & 24/7 Breakdown Assistance'
    },
    {
      icon: 'images/truck-icon.png',
      text: 'Towing Services Included'
    },
    {
      icon: 'images/spanner-icon.png',
      text: 'Parts & Labour Coverage'
    },
    {
      icon: 'images/house-icon.png',
      text: 'Accomodation & Rental Costs for out-of-town breakdowns'
    }
  ]


  return (
    <div className="mechanical-breakdown">
      <p>Want to be fully insured? </p>
      <p>Add out Mechanical Breakdown Insurance to your can insurance plan.</p>
      <div className="mb-benefits">
        {
          mbBenefits.map((benefit: MbBenefit, i: number) => (
            <div key={i} className='mb-benefit'>
              <div className="mb-circle">
                <img src={benefit.icon} alt={benefit.icon} />
              </div>
              <p>{benefit.text}</p>
            </div>
          ))
        }
      </div>
      <div className="add-mb-btn">
        <img src="images/circle-plus-white.png" alt="Add" />
        <p>Add Mechanical Breakdown Insurance</p>
      </div>
    </div>
  )
}

export default MechanicalBreakdown