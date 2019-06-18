import React from 'react';

const Loader = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.message}</div>
        </div>
    );
};

/*
the defaultProps property will allow us to set up default
and customized props for times when props are not defined in a component
*/
Loader.defaultProps = {
    message: "Loading..."
};

export default Loader;