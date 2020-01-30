import React, { useEffect, useRef } from 'react';

const Cockpit = (props) => {

    const toggleRef = useRef(null);

    // you can use useEffect more than once 
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        toggleRef.current.click();
        return () => {
            console.log('[Cockpit.js] cleanup Work in useEffect');
        };
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup Work in 2nd useEffect');
        };
    });

    // let classes=['red','bold'].join(' ');  // "red bold"
    const classes = [];
    const btnClasses = ['button'];

    if (props.showPersons) {
        btnClasses.push('red');
    }

    if (props.personsLength <= 2) {
        classes.push('red'); //classes=['red']
    }
    if (props.personsLength <= 1) {
        classes.push('bold'); //classes=['red','bold']
    }

    return (
        <div>
            <h1>Hi, I'm a React App</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button
                ref={toggleRef}
                className={btnClasses.join(' ')}
                // alt={this.state.showPersons}
                onClick={props.clicked}>Toggle Persons
          </button>
          <button className={btnClasses.join(' ')} onClick={props.login}>Log In</button>
        </div>
    );
};

export default React.memo(Cockpit);