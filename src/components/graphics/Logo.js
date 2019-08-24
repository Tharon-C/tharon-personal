import React from 'react';
import LogoBlue from "../../assets/logo-blue.svg"

export default (props) => {
        const style = {
            sun: {
                width: props.size,
                height: props.size,
                marginRight: "28px",
            },
        };

        return (
            <img alt="Tharon Carlson" src={  LogoBlue } style={ style.sun } />
        );
    }
