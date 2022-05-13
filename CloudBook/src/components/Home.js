
import Notes from "./Notes"

export const Home = (props) => {
const {showAlert} = props
  return (
    <div>
      <Notes showAlert={showAlert} />
    </div >

  )
}
