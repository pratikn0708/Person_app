import React, { Component } from 'react';
// import Radium from 'radium'; 
import styled from 'styled-components';
import Aux from '../../../hoc/Auxiliary'
import './Person.css';
import AuthContext from '../../../context/auth-context';

const StyleDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

@media (min-width:500px){
    width: 450px;
}`;

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    };

    static contextType = AuthContext;

    componentDidMount() {
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    };

    render() {
        console.log('[Person.js] rendering...');
        return (
            // <div className="Person" style={style}>
            <Aux>
                <StyleDiv>
                    {this.context.authenticated ? <p>Authenticated</p> : <p>Please Log In</p>}
                    < p onClick={this.props.click} > I'm {this.props.name} and I am {this.props.age} years old!</p>
                    < p > {this.props.children}</p >
                    <input type="text"
                        ref={this.inputElementRef}
                        onChange={this.props.changed}
                        value={this.props.name} />
                </StyleDiv>
            </Aux>
        );
    };
}

// export default Radium(person);
export default Person;