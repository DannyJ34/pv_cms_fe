import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import AssessmentIcon from '@mui/icons-material/Assessment';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import styled from "styled-components";
import pvPath from '../asset/image/PV.png';

const Home = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [secondaryOpen, setSecondaryOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    const handleSecondaryClick = () => {
        setSecondaryOpen(!secondaryOpen);
    };
    // const handleClickToSI = () => {
    //     navigate('/signin')
    // }

    useEffect(() => {
        console.log("This is Home")
    }, [])

    return (
        <HomeDiv>
            <CompanyDiv>
                <CompanyLogoDiv>
                    <img src={pvPath} />
                </CompanyLogoDiv>
                <CompanyNameDiv>
                    Portvalue
                </CompanyNameDiv>

            </CompanyDiv>
            <NavigationDiv>
                <List
                    sx={{ width: '100%', maxWidth: 310, bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="workspace"
                    subheader={
                        <ListSubheader component="div" id="workspace">
                            워크스페이스
                        </ListSubheader>
                    }
                >
                    <ListItemButton
                        sx={{ pb: "14px" }}
                    >
                        <AssessmentIcon
                            sx={{
                                color: "#327BFF",
                                mr: "14px"
                            }}
                        />
                        <ListItemText
                            primary="대시보드"
                            sx={{ mb: "0px" }}
                        />
                    </ListItemButton>

                    <ListItemButton
                        onClick={handleClick}
                        sx={{ color: "#327BFF" }}

                    >
                        <AccessibilityNewIcon
                            sx={{
                                color: "#327BFF",
                                mr: "14px"
                            }}
                        />
                        <ListItemText
                            primary="SBBG"
                            sx={{
                                mb: "0px",
                                color: "#000000"
                            }}
                        />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton
                                sx={{ pl: "54px" }}>
                                <ListItemText
                                    primary="수익"
                                    sx={{ mb: "0px" }}
                                />
                            </ListItemButton>

                            <ListItemButton
                                onClick={handleSecondaryClick}
                                sx={{ color: "#327BFF" }}
                            >
                                <ListItemText
                                    primary="크롤링 컴포넌트"
                                    sx={{
                                        pl: "40px",
                                        mb: "0px",
                                        color: "#000000"
                                    }}
                                />
                                {secondaryOpen ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Collapse in={secondaryOpen} timeout="auto" unmountOnExit >
                                <List component="div" disablePadding>
                                    <ListItemButton
                                        sx={{ pl: "88px" }}>
                                        <ListItemText
                                            primary="마이프로틴 인기상품"
                                            sx={{ mb: "0px" }}
                                        />
                                    </ListItemButton>
                                    <ListItemButton
                                        sx={{ pl: "88px" }}>
                                        <ListItemText
                                            primary="마이프로틴 할인코드"
                                            sx={{
                                                mb: "0px",
                                                pb: "14px"
                                            }}
                                        />
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </List>
                    </Collapse>
                    <ListItemButton>
                        <FastfoodIcon
                            sx={{
                                color: "#327BFF",
                                mr: "14px"
                            }}
                        />
                        <ListItemText
                            primary="매니저 관리"
                            sx={{
                                mb: "0px"
                            }}
                        />
                    </ListItemButton>
                </List>
            </NavigationDiv>
        </HomeDiv>
    )
};

const HomeDiv = styled.div`

`;



const CompanyDiv = styled.div`
    display: flex;
    width: 100%;
    max-width: 310px;
    background-Color: blue
`;

const CompanyLogoDiv = styled.div`

`;

const CompanyNameDiv = styled.div`

`;

const NavigationDiv = styled.div`

`;



export default Home;
