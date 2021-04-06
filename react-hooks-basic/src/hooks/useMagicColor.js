import React, { useEffect, useRef, useState } from 'react';

function randomColor(currentColor) {
    const COLOR_LIST = ['red', 'green', 'yellow'];
    // random 0 --> 2
    const currentIndex = COLOR_LIST.indexOf(currentColor);
    let newIndex = currentIndex;
    // sử dụng vòng lặp khi nào 2 biến bằng nhau thì render lại
    while (currentIndex === newIndex) {
        newIndex = Math.trunc(Math.random() * 3);
    }
    return COLOR_LIST[newIndex];
}

function useMagicColor(props) {
    const [color, setColor] = useState('transparent');
    const colorRef = useRef('transparent');

    // Change color every 1 second
    useEffect(() => {
        const colorInterval = setInterval(() => {
            //console.log('First color: ', color);
            //console.log('Change color: ', colorRef.current);
            const newColor = randomColor(colorRef.current);
            setColor(newColor);

            colorRef.current = newColor;
        }, 1000);

        return () => {
            clearInterval(colorInterval);
        }
    }, [])

    return color;
}

export default useMagicColor;