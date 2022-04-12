import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    function handleClickToSI() {
        navigate('/signin')
    }

    useEffect(() => {
        console.log("This is Home")
    }, [])

    return (
        <div >
            <h1>이건 홈페이지임</h1>
            <button onClick={handleClickToSI}>로그인 하기</button>
        </div>
    )
};

export default Home;