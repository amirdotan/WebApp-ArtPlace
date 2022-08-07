import * as React from 'react';
import { useState, useEffect, useLayoutEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import data from '../data/db.json'
import { Link } from 'react-router-dom';
import { useNavigate, useLocation} from 'react-router-dom';
import { async } from '@firebase/util';
import { db, storage } from '../firebase';
import { getAuth } from 'firebase/auth';
import Chip from '@mui/material/Chip';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import PortfolioPresenter from '../components/PorfolioPresenter'
import AddPortfolioPresenter from '../components/AddPortfolioPresenter';
import { getDownloadURL, ref } from 'firebase/storage';
import '../styles/AddPortfolio.css'
import getUserData from '../components/GetUserData';
import DeletePost from '../components/DeletePost';
import { CopyToClipboard } from "react-copy-to-clipboard";
import '../styles/AddPortfolio.css'



export default function Profile() {
    const [expanded, setExpanded] = React.useState(false);
    const { state } = useLocation();
    const requesedUser = state?.profileId ?? "UCbr6vDmqpZ5YNiwFHfRdF8hzs43";

    const [profileDb, setProfileDb] = useState([]);

    const [portfolio_link, setPorfolioLink] = useState(false);
    const [portfolioPics, setPortfolioPics] = useState([]);

    const navigate = useNavigate();
    const [firstName, setFirstName] = useState(" ");
    const [email, setEmail] = useState("No given contact email :(");
    const [users, setUsers] = useState([])

    useEffect(() => {
        const loadUsers = async () => {

            const tempUsers = await getUserData();
            setUsers(tempUsers);
        }

        loadUsers()
    }, [])

    useLayoutEffect(() => {
        async function getData() {
            const data = await updatePortfolioPics(users)
        }
        getData()
    }, [users])

    useEffect(() => {
        if (profileDb?.portfolio) {
            setPorfolioLink(true)
        }
    }, [portfolioPics])


    const downloadImgRef = async (user) => {
        var tempList = []
        for (var i = 0; i < 6; ++i) {
            const imgRef = await ref(storage, `${user.uportfolio[i]}`)

            await getDownloadURL(imgRef)
                .then((url) => {
                    if (i == 0) {
                    }
                    tempList.push(url)
                })
                .catch((error) => console.log(error))
        }
        return tempList
    }
    const updatePortfolioPics = async (users) => {
        users.forEach(async (user) => {
            if (user.uid == requesedUser) {
                setProfileDb(user)
                setEmail(user?.email ?? "No given contact email :(")
                if (user?.uportfolio && user?.uportfolio != []) {
                    const tempList = await downloadImgRef(user)
                    setPortfolioPics(tempList)
                    return user.uportfolio
                }


            }
        })
    }

    useEffect(() => {
        const getUserData1 = async () => {
                    users.forEach((user) => {
                        if (user.uid == requesedUser) {
                            setFirstName(user.first_name)
                        }
                    })
        };
        getUserData1();
    }, [users])


    return (
        <>
            <Card variant="outlined" color="primary" sx={{ position: 'static' }}>
                <Button onClick={() => navigate(-1)} color="primary" sx={{ display: 'flex', flexdirection: 'row', justifyContent: 'right', right: '-80%' }}>Return</Button>
                <CardHeader textAlign="center" sx={{ display: 'flex', 'text-align': 'left', float: 'left' }}
                    avatar={
                        <Avatar sx={{ bgcolor: 'primary' }} aria-label="recipe">
                            {firstName[0]}
                        </Avatar>
                    }
                    title={(profileDb?.first_name ?? "") + " " + (profileDb?.last_name ?? "")}
                    subheader={profileDb?.field ?? ""}
                />
            </Card>


            <Stack direction="row" spacing={3} sx={{ margin: 2 }}>
                {profileDb.skills?.map((skill) => (<Chip label={skill} color="primary" />))}
            </Stack>

            <PortfolioPresenter portfolio_link={portfolio_link}>
                <ImageList sx={{ width: '100%', height: '100%' }} cols={2} rowHeight={164} variant="quilted">
                    {portfolioPics.map((item) => (
                        <ImageListItem key={item} >
                            <img
                                src={`${item}?w=248&fit=crop&auto=format&object-fit=cover`}
                                srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </PortfolioPresenter>

            <AddPortfolioPresenter portfolio_link={portfolio_link}>

                <Card sx={{ maxWidth: 345 }} className="addportfoliocard">
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            Hey There :)
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Unfortunately this user hasn't uploaded a portfolio yet
                            But don't hesitate to contact them directly !
                        </Typography>
                    </CardContent>
                    {/* <CopyToClipboard

                        text={email}
                        onCopy={() => alert("Copied")}>
                        <Button variant="outlined" size="medium" >
                            copy Email
                        </Button>
                    </CopyToClipboard> */}
                </Card>
            </AddPortfolioPresenter>
            <CopyToClipboard
                text={email}
                onCopy={() => alert("Copied")}>
                <Button variant="outlined" size="medium" >
                    copy Email
                </Button>
            </CopyToClipboard>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </>
    );
}


