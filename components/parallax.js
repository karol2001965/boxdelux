import React from 'react'
import { Parallax } from 'react-parallax';
import '../styles/parallax.scss'


function parallax() {
    return (
        <div className="container_parallax">
                <Parallax
                    bgImage={require('../../src/tlo3.jpg')}
                    // blur={{ min: -15, max: 15 }}
                    bgImageAlt="tlo"
                    strength={500}>
                    <div className="parallax"></div>
                </Parallax>

            </div>
    )
}

export default parallax
