import React from 'react';

// import GoogleChart from './GoogleChart';

const PlayerCard = (props) => {
    return (
        <>
        {props.playerData.map(player => {
            return (
            <div key={player.id} className='card-container'>
            <h2>{player.name}</h2>
            <h4>Country: {player.country}</h4>
            <h5># of Searches: {player.searches}</h5>
            {/* <GoogleChart searches={player.searches} /> */}
            </div>
            )
        })}
        </>
    )
}

export default PlayerCard;