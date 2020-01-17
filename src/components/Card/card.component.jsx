import React from 'react';
import './card.styles.css';

export const Card = (props) =>
    (
        <div className='card-container'>
            <img alt="monster-pic" src={`https://robohash.org/${props.monster.id}.png?size=180x180`} />
            <h2>{props.monster.username}</h2>
            <small>{props.monster.company.catchPhrase}</small>
            <a href={`mailto:${props.monster.email}`} >
                {props.monster.email}
            </a>
        </div>
    );
