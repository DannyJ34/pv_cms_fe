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

const Signin = () => {

    const [value, setValue] = useState("");
    const [signInMaintainStatus, setSignInMaintainStatus] = useState(false);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSignInMaintainStatusChange = (event) => {
        setSignInMaintainStatus(event.target.checked);
    };

    // const underlineLink = styled(Link)
    //     color: blue;


    useEffect(() => {
        console.log("value: " + value)
    }, [value])

    useEffect(() => {
        console.log("signInMaintainStatus: " + signInMaintainStatus)
    }, [signInMaintainStatus])

    useEffect(() => {
        // get signInMaintainStatus
    }, [])

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
                <Button variant="contained" disabled>
                    로그인
                </Button>
                <FormGroup>
                    <FormControlLabel onChange={handleSignInMaintainStatusChange} checked={signInMaintainStatus} control={<Checkbox />} label="로그인 상태 유지" />
                </FormGroup>
                <CardActions>
                    <Link href="https://member.daum.net/find/id.do?action=home" underline="always">
                        {'아이디 찾기'}
                    </Link>
                    <Link href="https://member.daum.net/find/password.do?action=daumid-check" underline="always">
                        {'비밀번호 찾기'}
                    </Link>
                    <Link href="https://member.nexon.com/join/join.aspx" underline="always">
                        {'회원가입'}
                    </Link>

                    {/* style component  */}
                    {/* <div>
                            <body>
                                <h1 style="color:blue; text-decoration: underline;">
                                    아이디 찾기
                                </h1>
                            </body> 
                    </div> */}

                </CardActions>
            </Card>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="이메일" variant="outlined" value={value} onChange={handleChange} />
            </Box>
        </>
    )
};

export default Signin;



