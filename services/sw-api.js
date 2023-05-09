const BASE_URL = "https://swapi.dev/api/"

export async function getAllStarships() {
  const res = await fetch(`${BASE_URL}/starships`)
  return res.json()
}

export async function getStarShip(starShipId) {
  const res = await fetch(`${BASE_URL}/starships/${starShipId}`)
  console.log("EEEEEEEEEEEEEEEE",starShipId)
  return res.json()
}