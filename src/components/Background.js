import { Parallax } from 'react-parallax';
import Bugatti from '../images/bugatti.jpg'
import React from 'react';

const Bugati = () => (
    <Parallax className='Background' bgImage={Bugatti} strength={800}>
    </Parallax>
);

export default Bugati;