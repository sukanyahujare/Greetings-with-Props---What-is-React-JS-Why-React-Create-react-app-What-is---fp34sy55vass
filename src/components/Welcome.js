// write code for Welcome component here
import React from 'react';

const Welcome = ({name}) => {
    let sayHi = `Hey ${name}!`;
    let greetMessage = `Welcome to Newton School.`;
    return (
        <>
            <h1>{sayHi}</h1>
            <h2>{greetMessage}</h2>
        </>
    );
};

export default Welcome;
