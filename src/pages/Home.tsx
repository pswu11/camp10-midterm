import { useLoaderData } from "react-router-dom"
import { SearchInput } from "../components/SearchInput"
import Movieslider from "../components/utils/Movieslider"

export function Home() {
  const movies = useLoaderData()
  console.log(movies)
  
  return (
    <>
      <SearchInput />
      <Movieslider />
    </>
  )
}
