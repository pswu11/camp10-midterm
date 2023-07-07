import { useLoaderData } from "react-router-dom"
import { SearchInput } from "../components/SearchInput"
import Movieslider from "../components/Movieslider"
import { UpcomingMovie } from "../types/api"




export function Home() {
  const movies = useLoaderData() as  UpcomingMovie[] 
  console.log(movies)
  
  return (
    <>
    <SearchInput />
    <Movieslider upcoming={movies}/>
    </>
  )
}
