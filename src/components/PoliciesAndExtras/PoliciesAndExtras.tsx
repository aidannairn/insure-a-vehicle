import DriverPolicy from "./DriverPolicy/DriverPolicy"

interface Props {

}

const PoliciesAndExtras: React.FC<Props> = () => {
  return (
    <div>
      <DriverPolicy name="Jack" />
      <DriverPolicy name="Jill" />
    </div>
  )
}

export default PoliciesAndExtras