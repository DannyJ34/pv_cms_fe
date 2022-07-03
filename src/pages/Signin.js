import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import styled from "styled-components";

const Signin = () => {
    const [signInMaintainStatus, setSignInMaintainStatus] = useState(false);
    const [signInButton, setSignInButton] = useState(true);

    const handleSignInMaintainStatusChange = (event) => {
        setSignInMaintainStatus(event.target.checked);
    };

    //     const handleSignInButton = (TextField.label) => {
    //     setSignInButton(signInButton = "이메일" && "비밀번호" == filled ? false : true);
    // }

    useEffect(() => {
        console.log("signInMaintainStatus: " + signInMaintainStatus)
    }, [signInMaintainStatus])

    return (
        <CardPositionDiv>
            <Card sx={{ maxWidth: 408 }}>
                <CardContent>
                    <Typography
                        gutterBottom variant="h5"
                        component="div"
                        sx={{ mb: "0px" }}
                    >
                        Sign in
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: "10px" }}
                    >
                        PortValue에 오신걸 환영합니다🎉
                    </Typography>
                </CardContent>
                <TextField
                    id="outlined-basic"
                    label="이메일"
                    variant="outlined"
                    required
                    sx={{
                        width: "376px",
                        ml: "16px",
                        mb: "12px"
                    }}
                />
                <TextField
                    id="outlined-basic"
                    label="비밀번호"
                    variant="outlined"
                    required
                    sx={{
                        width: "376px",
                        ml: "16px",
                        mb: "16px"
                    }}
                />

                {/* 로그인 버튼 : 아이디, 비밀번호 모두 입력될 시 로그인 버튼 활성화 */}

                <Button
                    variant="contained"
                    disabled={true}
                    sx={{
                        width: "376px",
                        height: "40px",
                        ml: "16px",
                        mb: "4px"
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
                        sx={{ ml: "6px" }}
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
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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



