import { Members } from "@/types/member"
import { useEffect, useState } from "react"

const useRandomTeam = () => {
  const [members, setmembers] = useState<Members[]>([])
  useEffect(() => {
    // Fetch API data by axios or fetch()
    const fetchData = async () => {
      const response = await fetch("https://randomuser.me/api/?results=6")
      const { results } = await response.json()
      setmembers(results)
    }

    fetchData()
  }, [])
  return { members }
}
export default useRandomTeam
