import React from 'react';

const DefaultLayout = (props) => {
    return(
        <>
            <h1 className="text-xl bg-red-700">Default Layout</h1>
            {props.children}
        </>
    );
};

export default DefaultLayout;