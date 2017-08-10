import React from 'react';
import Photo from './photo';

export default()=>{
    "use strict";
    const photoArray = [
        {id: 1, description:'This is my cat'},
        {id: 2, description:'This is my dog'},
        {id: 3, description:'This is my horse'},
        {id: 4, description:'This is my donkey'},
        {id: 5, description:'This is my monkey'}
        ];

    const photoList = photoArray.map((photo)=>{
        return <Photo key={photo.id} description={photo.description}/>;
    });
    return(
        <div>
            {photoList}
        </div>
    );
}