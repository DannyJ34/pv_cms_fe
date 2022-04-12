import React, { useEffect, useState } from 'react';

const NotFound = () => {

    useEffect(() => {
        console.log("This is NotFound")
    }, [])

    return (
        <div>
            이건 NotFound 페이지임
        </div>
    )
};

export default NotFound;