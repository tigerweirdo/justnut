import React, { useEffect, useState } from 'react';
import Lottie from "lottie-react";
import squirrel from "../../assets/squirrel.json"
import './animation.css';

const Animation = () => {
    const initialSize = 100;
    const [state, setState] = useState({
        position: -initialSize,
        direction: 1,
        waiting: false,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setState(prevState => {
                if (prevState.waiting) return prevState;
    
                let newPosition = prevState.position + prevState.direction * 5;
    
                if (newPosition > document.documentElement.clientWidth && prevState.direction === 1) {
                    setTimeout(() => {
                        setState({
                            position: -initialSize,
                            direction: 1,
                            waiting: false,
                        });
                    }, Math.random() * 2000 + 1000);
                    return {...prevState, waiting: true};
                } 
                
                if (newPosition < -initialSize && prevState.direction === -1) {
                    setTimeout(() => {
                        setState({
                            position: document.documentElement.clientWidth,
                            direction: -1,
                            waiting: false,
                        });
                    }, Math.random() * 2000 + 1000);
                    return {...prevState, waiting: true};
                }
    
                return {...prevState, position: newPosition};
            });
        }, 20);
    
        return () => clearInterval(interval);
    }, [initialSize]);
    
    return (
        <div className="animation-container">
            <div 
                className="squirrel" 
                style={{ 
                    position: "absolute",
                    transform: `translateX(${state.position}px) scaleX(${state.direction})`,
                    width: `${initialSize}px`,
                    height: 'auto'
                }}
            >
                <Lottie animationData={squirrel} />
            </div>
        </div>
    );
};

export default Animation;
