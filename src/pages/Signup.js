import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import styled from "styled-components";


const Signup = () => {
    const navigate = useNavigate();

    const [managerName, setManagerName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [birthdate, setBirthdate] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [disabled, setDisabled] = useState(true);

    const handleClickToHome = () => {
        navigate('/home')
    };

    const [errFromEmail, setErrFromEmail] = useState(false);
    const [errFromConfirmPassword, setErrFromConfirmPassword] = useState(false);
    const [errFromBirthdate, setErrFromBirthdate] = useState(false);
    const [errFromPhoneNumber, setErrFromPhoneNumber] = useState(false);

    const handleManagerNameChange = (event) => {
        setManagerName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleShowPassword = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleBirthdateChange = (event) => {
        setBirthdate(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const signUpInfoSummit = () => {
        console.log("email: " + email)
        console.log("password: " + password)
        console.log("errFromBirthdate: " + errFromBirthdate)
        console.log("birthdate.length: " + birthdate.length)
        console.log("errFromPhoneNumber: " + errFromPhoneNumber)
        console.log("phoneNumber.length: " + phoneNumber.length)


        if (confirmPassword !== password)
            setErrFromConfirmPassword(true)
        else
            setErrFromConfirmPassword(false);

        if (birthdate.length !== 8)
            setErrFromBirthdate(true)
        else
            setErrFromBirthdate(false);

        if (phoneNumber.length !== 11)
            setErrFromPhoneNumber(true)
        else
            setErrFromPhoneNumber(false);

        // TODO: 서버로부터 Signup에 대한 이메일 중복확인을 받아야함
    }

    useEffect(() => {
        if (managerName !== "" && email !== "" && password !== "" && confirmPassword !== "" && birthdate !== "" && phoneNumber !== "")
            setDisabled(false)
        else
            setDisabled(true)
    }, [managerName, email, password, confirmPassword, birthdate, phoneNumber])

    return (
        <CardPositionDiv>
            <Card sx={{ maxWidth: 408 }}>
                <CardContent>
                    <Typography
                        gutterBottom variant="h5"
                        component="div"
                        sx={{ mb: "0px" }}
                    >
                        회원가입
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
                    label="이름"
                    name="name"
                    variant="outlined"
                    type="text"
                    required
                    type="string"
                    value={managerName}
                    onChange={handleManagerNameChange}
                    sx={{
                        width: "376px",
                        ml: "16px",
                        mb: "12px"
                    }}
                />
                <TextField
                    id="outlined-basic"
                    label="이메일(ex. abc@naver.com)"
                    name="email"
                    variant="outlined"
                    required
                    value={email}
                    onChange={handleEmailChange}
                    error={errFromEmail}
                    helperText={errFromEmail ? "이미 등록된 이메일이 존재합니다." : ""}
                    sx={{
                        width: "376px",
                        ml: "16px",
                        mb: "12px"
                    }}
                />
                {/* <FormControl
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    label="비밀번호"
                    name="password"
                    variant="outlined"
                    required
                    value={password}
                    onChange={handlePasswordChange}
                    sx={{
                        width: "376px",
                        ml: "16px",
                        mb: "16px"
                    }}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleShowPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                /> */}
                <TextField
                    id="outlined-basic"
                    label="비밀번호"
                    name="password"
                    variant="outlined"
                    required
                    value={password}
                    onChange={handlePasswordChange}
                    sx={{
                        width: "376px",
                        ml: "16px",
                        mb: "16px"
                    }}
                />
                <TextField
                    id="outlined-basic"
                    label="비밀번호 확인"
                    name="confirmPassword"
                    variant="outlined"
                    required
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    error={errFromConfirmPassword}
                    helperText={errFromConfirmPassword ? "비밀번호가 일치하지 않습니다." : ""}
                    sx={{
                        width: "376px",
                        ml: "16px",
                        mb: "16px"
                    }}
                />
                <TextField
                    id="outlined-basic"
                    label="생년월일(8자리)"
                    name="birthdate"
                    variant="outlined"
                    required
                    value={birthdate}
                    onChange={handleBirthdateChange}
                    error={errFromBirthdate}
                    helperText={errFromBirthdate ? "생년월일 형식이 올바르지 않습니다." : ""}
                    inputProps={{
                        inputMode: 'numeric',
                        pattern: '[0-9]*',
                        maxLength: 8
                    }}
                    sx={{
                        width: "376px",
                        ml: "16px",
                        mb: "16px"
                    }}
                />
                <TextField
                    id="outlined-basic"
                    label="휴대폰 번호(- 제외)"
                    name="PhoneNumber"
                    variant="outlined"
                    required
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    error={errFromPhoneNumber}
                    helperText={errFromPhoneNumber ? "휴대폰 번호 형식이 올바르지 않습니다." : ""}
                    inputProps={{
                        inputMode: 'numeric',
                        pattern: '[0-9]*',
                        maxLength: 11
                    }}
                    sx={{
                        width: "376px",
                        ml: "16px",
                        mb: "16px"
                    }}
                />

                <Button
                    variant="contained"
                    onClick={() => signUpInfoSummit()}
                    // 회원가입 버튼 클릭 시 Dashboard로 넘어가지게 설정. onClick={handleClickToHome}
                    disabled={disabled}
                    sx={{
                        width: "376px",
                        height: "40px",
                        ml: "16px",
                        mb: "16px"
                    }}
                >
                    회원가입
                </Button>
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

export default Signup;



