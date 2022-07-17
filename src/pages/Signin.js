import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();

    const [signInMaintainStatus, setSignInMaintainStatus] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [errFromEmail, setErrFromEmail] = useState(false);
    const [errFromPassword, setErrFromPassword] = useState(false);

    const handleClickToSU = () => {
        navigate('/signup')
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSignInMaintainStatusChange = (event) => {
        setSignInMaintainStatus(event.target.checked);
    };

    const signInInfoSummit = () => {
        console.log(email)
        console.log(password)
        console.log(signInMaintainStatus)
        // TODO: 여기 어딘가에서 서버로부터 사인인에 대한 결과를 받아야함

        // 아이디가 없을 때
        // setErrFromEmail(true)
        // 아이디는 있는데 비밀번호가 다를 때
        // setErrFromPassword(true)
    }

    useEffect(() => {
        if (email && password !== "") {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [email, password])

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
                    name="email"
                    variant="outlined"
                    required
                    value={email}
                    onChange={handleEmailChange}
                    error={errFromEmail}
                    helperText={errFromEmail ? "등록된 계정이 없습니다. ID를 확인해주세요." : ""}
                    sx={{
                        width: "376px",
                        ml: "16px",
                        mb: "12px"
                    }}
                />
                <TextField
                    id="outlined-basic"
                    label="비밀번호"
                    name="password"
                    variant="outlined"
                    required
                    value={password}
                    onChange={handlePasswordChange}
                    error={errFromPassword}
                    helperText={errFromPassword ? "비밀번호를 확인해주세요." : ""}
                    sx={{
                        width: "376px",
                        ml: "16px",
                        mb: "16px"
                    }}
                />

                {/* 로그인 버튼 : 아이디, 비밀번호 모두 입력될 시 로그인 버튼 활성화 */}

                <Button
                    variant="contained"
                    onClick={() => signInInfoSummit()}
                    disabled={disabled}
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
                    <SignInHelpCssDiv onClick={handleClickToSU}>
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



