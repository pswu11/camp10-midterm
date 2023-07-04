import React, { useState, useEffect } from 'react';
import Woman from '../assets/woman1.jpg'

const App = () => {
    const [people, setPosts] = useState([]);

    const getData = () => {
        var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
  
      fetch("http://localhost:3030/people", requestOptions)
        .then((response) => response.json())
        .then((result) => setPosts(result))
        .catch((error) => console.log("error", error));
    };
  
    useEffect(() => {
      getData();
    }, []);


export type CastCrewProps = {
    name?: string;
    image?: string;
};

export default function CastCrewFunction({ name = 'Human Person', image = Woman }: CastCrewProps) {
    const initial = name.charAt(0).toUpperCase();

    return (
        <header className="flex flex-row gap-5 m-2">
            <div className="h-14 w-14 rounded-full bg-dark-light flex items-center justify-center text-white">
                    {image ? (
                    <img className="h-full w-full rounded-sm" src={image} alt={name} />
                    ) : (
                        initial
                    )}
            </div>
            <div className='flex flex-col justify-center'>

                {people}
                <h2>
                    Actor Name{}
                </h2>
                <h4 className='text-m text-white-dimmed'>
                    Character
                    <span>{people.}</span>
                </h4>
            </div>
        </header>
    );
}
