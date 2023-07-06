import React from 'react'

function Movieslider() {
    return (
    <>
        <div className='flex flex-row gap-8 container-snap snap-x snap-mandatory h-screen overflow-scroll w-full'>
            <div className='snap-center w-2/5 -h-[228px] shrink-0 round'>
                <img className='rounded-lg' src="https://www.themoviedb.org/t/p/w1280/bkxiUK9SWKFuN3HJUx7BDWi9fHo.jpg" alt="moviepicture" />
            </div>
            <div className='snap-center w-2/5 h-[228px] shrink-0'>
                <img className='rounded-lg' src="https://www.themoviedb.org/t/p/w1280/D1YIS8ljrSxCZvru88OVTgIjid.jpg" alt="moviepicture" />
            </div>
            <div className='snap-center w-2/5 h-[228px] shrink-0'>
                <img className='rounded-lg' src="https://www.themoviedb.org/t/p/w1280/xFGCrTYQh97MuKbOx8AgKko4ycV.jpg" alt="moviepicture" />
            </div>
            <div className='snap-center w-2/5 h-[228px] shrink-0'>
                <img className='rounded-lg' src="https://www.themoviedb.org/t/p/w1280/xFGCrTYQh97MuKbOx8AgKko4ycV.jpg" alt="moviepicture" />
            </div>
            <div className='snap-center w-2/5 h-[228px] shrink-0'>
                <img className='rounded-lg' src="https://www.themoviedb.org/t/p/w1280/xFGCrTYQh97MuKbOx8AgKko4ycV.jpg" alt="moviepicture" />
            </div>
            <div className='snap-center w-2/5 h-[228px] shrink-0'>
                <img className='rounded-lg' src="https://www.themoviedb.org/t/p/w1280/xFGCrTYQh97MuKbOx8AgKko4ycV.jpg" alt="moviepicture" />
            </div>
            <div className='snap-center w-2/5 h-[228px] shrink-0'>
                <img className='rounded-lg' src="https://www.themoviedb.org/t/p/w1280/xFGCrTYQh97MuKbOx8AgKko4ycV.jpg" alt="moviepicture" />
            </div>
        </div>
    </>
    )
}
export default Movieslider;