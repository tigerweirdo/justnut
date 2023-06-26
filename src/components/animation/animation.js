import React, { useEffect, useState } from 'react';
import './animation.css';
import Lottie from "lottie-react";
import squirrel from "../../assets/squirrel.json"

const Animation = () => {
    const initialSize = window.innerWidth * 0.2;
    const [lottieSize, setLottieSize] = useState(initialSize);
    const [state, setState] = useState({position: -initialSize, direction: 1, waiting: false});

    const resizeListener = () => {
        const newSize = window.innerWidth * 0.1;
        setLottieSize(newSize);
        setState(prevState => ({...prevState, position: -newSize}));
    };

    useEffect(() => {
        window.addEventListener('resize', resizeListener);
        return () => window.removeEventListener('resize', resizeListener);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if(state.waiting) return;
            let newPosition = state.position + state.direction * 1;
            if (newPosition > window.innerWidth - lottieSize/2 && state.direction === 1) { // lottieSize/2 ekledik
                setState({...state, waiting: true});
                setTimeout(() => {
                    setState({position: window.innerWidth - lottieSize/2, direction: -1, waiting: false}); // lottieSize/2 ekledik
                }, Math.random() * 2000 + 1000);
            } else if (newPosition < -lottieSize/2 && state.direction === -1) { // lottieSize/2 ekledik
                setState({...state, waiting: true});
                setTimeout(() => {
                    setState({position: -lottieSize/2, direction: 1, waiting: false}); // lottieSize/2 ekledik
                }, Math.random() * 2000 + 1000);
            } else {
                setState({...state, position: newPosition});
            }
        }, 2);
        return () => {
            clearInterval(interval);
        };
    }, [state, lottieSize]);

    return (
        <div className="animation-container">
            <div 
                className="squirrel" 
                style={{ 
                    position: "absolute",
                    left: `${state.position}px`,
                    transform: `scaleX(${state.direction})`,
                    width: `${lottieSize}px` // pixel cinsinden belirtildi
                }}
            >
                <Lottie animationData={squirrel} style={{ width: '100%', height: 'auto' }} />
            </div>
        </div>
    );
};

export default Animation;
