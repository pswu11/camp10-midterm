export type Genre = {
    id: number,
    name: string
}

export type UpcomingMovie = {
    id: number
    title: string
    backdrop_path: string
    poster_path: string
    genre_ids: number[]
    overview: string
    release_date: string
    vote_average: number
}

export type Movie = {
    runtime: number
} & UpcomingMovie

export type UpcomingMovies = UpcomingMovie[]

export type Person = {
    id: number
    name: string
    known_for_department: string
    profile_path: string
}

export type Cast = Person[]
export type Crew = Person[]

export type Credits = {
    id: number
    cast: Cast
    crew: Crew
}