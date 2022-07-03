import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import styled from "styled-components";

const Signin = () => {

    const [value, setValue] = useState("");
    const [signInMaintainStatus, setSignInMaintainStatus] = useState(false);

    const handleSignInMaintainStatusChange = (event) => {
        setSignInMaintainStatus(event.target.checked);
    };

    useEffect(() => {
        console.log("value: " + value)
    }, [value])

    useEffect(() => {
        console.log("signInMaintainStatus: " + signInMaintainStatus)
    }, [signInMaintainStatus])

    return (
        <CardPositionDiv>
            <Card sx={{ maxWidth: 408 }} >
                <CardContent>
                    <Typography
                        gutterBottom variant="h5"
                        component="div"
                        style={{ marginBottom: "0px" }}
                    >
                        Sign in
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        style={{ marginBottom: "10px" }}
                    >
                        PortValue에 오신걸 환영합니다🎉
                    </Typography>
                </CardContent>

                <TextField
                    id="outlined-basic"
                    label="이메일"
                    variant="outlined"
                    style={{
                        width: "376px",
                        marginLeft: "16px",
                        marginBottom: "12px"
                    }}
                />
                <TextField
                    id="outlined-basic"
                    label="비밀번호"
                    variant="outlined"
                    style={{
                        width: "376px",
                        marginLeft: "16px",
                        marginBottom: "16px"
                    }}
                />

                {/* 로그인 버튼 : 아이디, 비밀번호 모두 입력될 시 로그인 버튼 활성화 */}

                <Button
                    variant="contained"
                    disabled={true}
                    style={{
                        width: "376px",
                        height: "40px",
                        marginLeft: "16px",
                        marginBottom: "4px"
                    }}
                >
                    로그인
                </Button>
                <FormGroup>
                    <FormControlLabel
                        onChange={handleSignInMaintainStatusChange}
                        checked={signInMaintainStatus}
                        control={<Checkbox />}
                        label="로그인 상태 유지"
                        style={{
                            marginLeft: "6px",
                        }}
                    />
                </FormGroup>

                <SignInHelpDiv>
                    <SignInFindDiv>
                        <SignInHelpCssDiv marginRight="10px">
                            아이디 찾기
                        </SignInHelpCssDiv>
                        <SignInHelpCssDiv>
                            비밀번호 찾기
                        </SignInHelpCssDiv>
                    </SignInFindDiv>
                    <SignInHelpCssDiv>
                        회원가입
                    </SignInHelpCssDiv>
                </SignInHelpDiv>

            </Card>
        </CardPositionDiv>
    )
};

const CardPositionDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 160px;
    // align-items: center; 안되는 이유가 뭘까??
    
`;

const SignInHelpDiv = styled.div`
    display: flex;
    justify-content: space-between;
    color: #1976D2;
    text-decoration: underline;
    font-size: 14px;    
    line-height: 143%;
    max-width: 376px;
    margin: 0 auto;
    margin-bottom: 16px;
`;

const SignInFindDiv = styled.div`
    display: flex;  
    justify-content: space-between;
`;

const SignInHelpCssDiv = styled.div`
    margin-right: ${props => props.marginRight !== undefined ? props.marginRight : "0px"};
`;


export default Signin;



