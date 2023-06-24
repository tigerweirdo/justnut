import React, { useEffect, useState } from 'react';
import './animation.css';
import Lottie from "lottie-react";
import squirrel from "../../assets/squirrel.json"

const Animation = () => {
    const lottieSize = 250;
    const [state, setState] = useState({position: -lottieSize, direction: 1, waiting: false});

    useEffect(() => {
        const interval = setInterval(() => {
            if(state.waiting) return;
            let newPosition = state.position + state.direction * 1;
            if (newPosition > window.innerWidth - lottieSize && state.direction === 1) {
                setState({...state, waiting: true});
                setTimeout(() => {
                    setState({position: window.innerWidth - lottieSize, direction: -1, waiting: false});
                }, Math.random() * 2000 + 1000);
            } else if (newPosition < -lottieSize && state.direction === -1) {
                setState({...state, waiting: true});
                setTimeout(() => {
                    setState({position: -lottieSize, direction: 1, waiting: false});
                }, Math.random() * 2000 + 1000);
            } else {
                setState({...state, position: newPosition});
            }
        }, 2);
        return () => {
            clearInterval(interval);
        };
    }, [state]);

    return (
        <div className="animation-container">
            <div 
                className="squirrel" 
                style={{ 
                    position: "absolute",
                    left: `${state.position}px`,
                    transform: `scaleX(${state.direction})`
                }}
            >
                <Lottie animationData={squirrel} />
            </div>
        </div>
    );
};

export default Animation;
