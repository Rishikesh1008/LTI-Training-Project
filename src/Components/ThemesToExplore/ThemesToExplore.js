import React from 'react'
import Beach from '../Beach/Beach'
import Historical from '../Historical/Historical'
import WildLife from '../WildLife/WildLife'
import './ThemesToExplore.css'

function ThemesToExplore() {
    return (
        <div>
            <h1 className="heading">Beach</h1>
            <p className="tagline">Sky above sand below peace within</p>
            <Beach></Beach>
            <h1 className="heading">Historical</h1>
            <p className="tagline">Meet Our True Treasure</p>
            <Historical></Historical>
            <h1 className="heading">WildLife</h1>
            <p className="tagline">Listen the voices which you will Love</p>
            <WildLife></WildLife>
        </div>
    )
}

export default ThemesToExplore
