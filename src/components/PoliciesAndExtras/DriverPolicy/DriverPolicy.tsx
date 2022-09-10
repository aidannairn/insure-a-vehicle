import { useState } from 'react'

import PolicyTypes from './PolicyTypes/PolicyTypes'
import './driver-policy.css'
import MechanicalBreakdown from './MechanicalBreakdown/MechanicalBreakdown'

interface DriverPolicyProps {
  name: string
  driverIndex: number
  setFamilyDetails: any
  familyDetails: any
}

const DriverPolicy: React.FC<DriverPolicyProps> = ({ name, driverIndex, setFamilyDetails, familyDetails }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  const [excess, setExcess] = useState(100)

  const handleArrowClick = () => setIsExpanded(!isExpanded)

  const excessAmounts: number[] = [100, 400, 500, 1000, 2000]

  const handleExcessClick = (amount: number) => setExcess(amount)

  return (
    <div className="driver-policy">
      <div className="driver">
        <h1>Select {name}'s Policy</h1>
        <img className={`${isExpanded ? null : 'collapsed'}`} src="/images/circle-arrow-white.png" alt="Arrow" onClick={handleArrowClick} />
      </div>
      {isExpanded && 
        <div className="policy">
          <p>Which policy would you like {name} to be covered with?</p>
          <PolicyTypes driverIndex={driverIndex} setFamilyDetails={setFamilyDetails} familyDetails={familyDetails} />
          <div className="insurance-amount">
            <p>How much would you like to insure {name}'s car for?</p>
            <input type="number" placeholder="(max $4,000)" />
          </div>
          <p>How much would you like {name}'s policy excess to be?</p>
          <div className="excess-amounts">
            {excessAmounts.map((amount: number, i: number) => 
              <div key={i} className={`excess-amount ${amount === excess ? 'active' : null}`} onClick={() => handleExcessClick(amount)} >
                <p>${amount}</p>
              </div>
            )}
          </div>
          <MechanicalBreakdown />
        </div>
      }
    </div>
  )
}

export default DriverPolicy