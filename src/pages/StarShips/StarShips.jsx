import './StarShips.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllStarships } from '../../../services/sw-api'

const StarShips = () => {

  const [starShipList, setStarShipList] = useState([])

  useEffect(() => {
    const fetchStarShipList = async () => { 
      const starShipInfo = await getAllStarships()
      setStarShipList(starShipInfo.results)
    }
    fetchStarShipList()
  },[])

  if (!starShipList.length) return <h1>Loading Spooky Space Ships</h1>

  return (
    <>
      <h2>STAR WARS STARSHIPS</h2>
      <div className='starships-div'>
        {starShipList.map((starShip, idx) =>
        <button key={idx} >
          <Link 
            to={`/${starShip.name}`}
            className='starships-link'
          >
            {starShip.name}
          </Link>
        </button>
        )}
      </div>
    </>
  )
}

export default StarShips