import React from 'react';

const AlbumComponents = ({ albums}) => {
    return (
        <div>
            <span>{albums.id}</span>
            <span>{albums.title}</span>
        </div>
    );
};

export default AlbumComponents;