import React from 'react';
import '../index.css';

const Card = ({name, email}) => {
    return (
        <div className={'card bg-hot-pink dib br3 pa3 ma2 grow shadow-5'}>
            <img src = {`https://robohash.org/${name}`}  alt={`dave's robot`} width={'200'}
                height={'200'}/>
            <div align={'center'}>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;