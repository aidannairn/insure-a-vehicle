import './driver-policy.css'

interface DriverPolicyProps {
  name: string
}

const DriverPolicy: React.FC<DriverPolicyProps> = ({ name }) => {
  return (
    <div className="driver-policy">
      <div className="driver">
        <h1>Select {name}'s Policy</h1>
        <img src="/images/circle-arrow-white.png" alt="Arrow" />
      </div>
      <div className="policy">
      </div>
    </div>
  )
}

export default DriverPolicy