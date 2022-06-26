import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import styled from "styled-components";

const Signin = () => {

    const [value, setValue] = useState("");
    const [signInMaintainStatus, setSignInMaintainStatus] = useState(false);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

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
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        Sign in
                    </Typography>
                    <Typography variant="body4" color="text.secondary">
                        PortValue에 오신걸 환영합니다🎉
                    </Typography>
                </CardContent>
                <TextField id="outlined-basic" label="이메일" variant="outlined" />
                <TextField id="outlined-basic" label="비밀번호" variant="outlined" />

                {/* 로그인 버튼 : 아이디, 비밀번호 모두 입력될 시 로그인 버튼 활성화 */}

                <Button variant="contained" disabled={false} fullWidth={true} >
                    로그인
                </Button>
                <FormGroup>
                    <FormControlLabel
                        onChange={handleSignInMaintainStatusChange}
                        checked={signInMaintainStatus}
                        control={<Checkbox />}
                        label="로그인 상태 유지" />
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

                {/* <CardActions>
                    <Link href="https://member.daum.net/find/id.do?action=home" underline="always">
                        {'아이디 찾기'}
                    </Link>
                    <Link href="https://member.daum.net/find/password.do?action=daumid-check" underline="always">
                        {'비밀번호 찾기'}
                    </Link>
                    <Link href="https://member.nexon.com/join/join.aspx" underline="always">
                        {'회원가입'}
                    </Link>

                </CardActions> */}
            </Card>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >

            </Box>
        </>
    )
};

const SignInHelpDiv = styled.div`
    display: flex;
    justify-content: space-between;
    color: blue;
    text-decoration: underline;
`;

const SignInFindDiv = styled.div`
    display: flex;  
    justify-content: space-between;
`;

const SignInHelpCssDiv = styled.div`
    margin-right: ${props => props.marginRight !== undefined ? props.marginRight : "0px"};
`;

export default Signin;



