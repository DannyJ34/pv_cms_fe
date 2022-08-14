import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
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
    const [showPasswordValue, setShowPasswordValue] = useState({ showPassword: false });
    //const [showPassword, setShowPassword] = useState(false);
    const [birthdate, setBirthdate] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [disabled, setDisabled] = useState(true);

    const handleClickToHome = () => {
        navigate('/home')
    };

    const [errFromEmail, setErrFromEmail] = useState(false);
    const [errFromConfirmPassword, setErrFromConfirmPassword] = useState("");
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

    const handleShowPassword = () => {
        setShowPasswordValue({
            showPassword: !showPasswordValue.showPassword
        });
    };

    // //const handleShowPassword = () => {
    //     setShowPassword({
    //         showPassword: !showPassword
    //     });
    // }; 이렇게 객체가 되는 경우를 방지하는 방법이 또 무엇이 있는지?

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleBirthdateChange = (event) => {
        setBirthdate(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const signUpInfoSummit = () => {


        if (confirmPassword !== password)
            setErrFromConfirmPassword("비밀번호가 일치하지 않습니다.")
        else
            setErrFromConfirmPassword("");
        //공백이 아니면 true라는 점을 기반으로 코드를 짠 경우.

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
        if (managerName !== "" &&
            email !== "" &&
            password !== "" &&
            confirmPassword !== "" &&
            birthdate !== "" &&
            phoneNumber !== ""
        )
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
                    label="이메일"
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
                <FormControl
                    variant="outlined"
                    required
                    sx={{
                        width: "376px",
                        ml: "16px",
                        mb: "12px"
                    }}
                >
                    <InputLabel htmlFor="outlined-adornment-password">비밀번호</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPasswordValue.showPassword ? 'text' : 'password'}
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPasswordValue.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="비밀번호"
                    />
                </FormControl>
                <FormControl
                    variant="outlined"
                    required
                    error={errFromConfirmPassword}
                    helperText={errFromConfirmPassword ? "비밀번호가 일치하지 않습니다." : ""}
                    sx={{
                        width: "376px",
                        ml: "16px",
                        mb: "12px"
                    }}
                >
                    <InputLabel htmlFor="outlined-adornment-password">비밀번호 확인</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPasswordValue.showPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        aria-describedby="outlined-helper-text"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPasswordValue.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }

                        label="비밀번호 확인"
                    />
                    <FormHelperText
                        id="outlined-helper-text"
                    >
                        {errFromConfirmPassword}
                    </FormHelperText>
                </FormControl>
                <TextField
                    id="outlined-basic"
                    label="생년월일(8자리)"
                    name="birthdate"
                    variant="outlined"
                    required
                    // type="number"
                    //     type number와 maxlength는 같이 사용 못 함 (참고 링크: https://cofs.tistory.com/215)
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
                    type="tel"
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



