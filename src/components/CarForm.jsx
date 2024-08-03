import { useDispatch, useSelector } from "react-redux"
import { changeName, changeCost } from "../store"
const CarForm = () => {
  const dispatch = useDispatch()

  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    }
  })
  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value))
  }

  const handleCostChange = (event) => {
    const costInput = parseInt(event.target.value) || 0
    dispatch(changeCost(costInput))
  }
  return (
    <>
      <div>
        <form>
          <label htmlFor="">Car</label>
          <div>
            <input type="text" value={name} onChange={handleNameChange} />
          </div>
          <div>
            <label htmlFor="">Cost</label>
            <input
              type="number"
              value={cost || ""}
              onChange={handleCostChange}
            />
          </div>
        </form>
      </div>
    </>
  )
}

export default CarForm
