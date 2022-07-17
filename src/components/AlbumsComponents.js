import React, {useEffect, useState} from 'react';

import AlbumComponents from "./AlbumComponents";
import {MyContext} from "../index";

const AlbumsComponents = () => {
    const [albums,setAlbums] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(value => value.json())
            .then(value => {
                setAlbums([...value])
            })
    },[])
    return (
        <div>
            <h1>albums</h1>
            {albums.map(albums => <AlbumComponents albums={albums} key={albums.id}/>)}
            <MyContext.Consumer>
                {
                    (value)=>{
                        console.log(value)
                    }
                }
            </MyContext.Consumer>
        </div>
    );
};

export default AlbumsComponents;