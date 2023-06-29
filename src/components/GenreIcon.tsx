
type GenreIconProps = {
  icon:string;
  genre:string;
}

const updateGenreIcon = () => {
  return null
}

export function GenreIcon({icon, genre}:GenreIconProps) {  
  return (
    <>
    <div className="rounded-md flex items-center justify-center h-14 w-14 bg-dark-light " onClick={updateGenreIcon}> {icon}
    </div>
    <p className="text-dark-light" > lorem {genre} </p>
    </>
  )
}

