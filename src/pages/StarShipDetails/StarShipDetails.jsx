import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { getStarShip } from "../../../services/sw-api"
import './StarShipDetails.css'

const StarShipDetails = () => {

  const [starShipDetails, setStarShipDetails] = useState({})

  const { starShipId } = useParams()

  useEffect(() => {
    const fetchDetails = async () => {
      const starShipData = await getStarShip(starShipId)
      setStarShipDetails(starShipData)
    }
    fetchDetails()
  }, [starShipId])

  return (
    <>
    <div className="detail-card">
      <h3>NAME: {starShipId.toUpperCase()} </h3>
      <h3>MODEL: </h3>
      <Link to={'/'}>RETURN</Link>
    </div>
    </>
  )
}

export default StarShipDetails