import { useState } from 'react'

import PolicyTypes from './PolicyTypes/PolicyTypes'
import './driver-policy.css'

interface DriverPolicyProps {
  name: string
}

const DriverPolicy: React.FC<DriverPolicyProps> = ({ name }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true)

  const handleArrowClick = () => setIsExpanded(!isExpanded)

  const excessAmounts: number[] = [100, 400, 500, 1000, 2000]

  return (
    <div className="driver-policy">
      <div className="driver">
        <h1>Select {name}'s Policy</h1>
        <img className={`${isExpanded ? null : 'collapsed'}`} src="/images/circle-arrow-white.png" alt="Arrow" onClick={handleArrowClick} />
      </div>
      {isExpanded && 
        <div className="policy">
          <p>Which policy would you like {name} to be covered with?</p>
          <PolicyTypes />
          <p>How much would you like to insure {name}'s car for?</p>
          <input className="insurance-amount" type="text" placeholder="Enter amount (up to $4,000)" />
          <p>How much would you like {name}'s policy excess to be?</p>
          <div className="excess-amounts">
            {excessAmounts.map((amount: number, i: number) => 
              <div key={i} className='excess-amount'>
                <p>${amount}</p>
              </div>
            )}
          </div>
        </div>
      }
    </div>
  )
}

export default DriverPolicy