import React from 'react';
import { NumDisplay } from './minesweeper.style';
import img0 from 'assets/img/digits/0.png';
import img1 from 'assets/img/digits/1.png';
import img2 from 'assets/img/digits/2.png';
import img3 from 'assets/img/digits/3.png';
import img4 from 'assets/img/digits/4.png';
import img5 from 'assets/img/digits/5.png';
import img6 from 'assets/img/digits/6.png';
import img7 from 'assets/img/digits/7.png';
import img8 from 'assets/img/digits/8.png';
import img9 from 'assets/img/digits/9.png';

interface NumberDisplayProps {
    value: number;
}
const images = {
    img0,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
} as const;

export const NumberDisplay: React.FC<NumberDisplayProps> = ({ value }) => {
    const number =
        value < 0
            ? `-${Math.abs(value).toString().padStart(2, '0')}`
            : value.toString().padStart(3, '0');
    console.log(number[0]);
    return (
        <NumDisplay>
            <img src={`digits/${number[0]}.png`} width={'18px'} />
            <img src={`digits/${number[1]}.png`} width={'18px'} />
            <img src={`digits/${number[2]}.png`} width={'18px'} />
        </NumDisplay>
    );
};
