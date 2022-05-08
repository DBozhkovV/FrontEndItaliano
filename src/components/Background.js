import { Parallax } from 'react-parallax';
import Bugatti from '../images/bugatti.jpg'
import React from 'react';
import Cars from './Cars';

const Bugati = () => (
    <Parallax className='Background' bgImage={Bugatti} strength={800}>
        <Cars/>
    </Parallax>
);

export default Bugati;