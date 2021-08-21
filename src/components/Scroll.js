import React from "react";

const Scroll = (props) => {
    return (
        // we can include style with double brackets {{}}!
        <div style={{overflowY: 'scroll', height: '500px', padding: '10px'}}>
            {/*see that we have to render it's children*/}
            {props.children}
        </div>
    );
};

export default Scroll;