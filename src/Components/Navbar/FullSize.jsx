import { Box, Button, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { apiCallLoggedOut } from '../../Redux/Login/Action'
import { useNavigate } from 'react-router-dom'
const FullSize = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const {loggedIn, auth} = useSelector((store)=> store.login);
    return (
        <Flex
        // display="flex"
        >
            <Link to='/'>
                <Button mr={3} variant="ghost"
                    colorScheme="teal"
                >
                    Home
                </Button>
            </Link>
            {
                !loggedIn ?
                <Link to='/signin'>
                <Button mr={3} variant="ghost"
                    colorScheme="teal"
                >
                    Sign in
                </Button>
                </Link> : null
            }
            {
                !loggedIn ? 
                <Link to='/login'>
                <Button mr={3} variant="ghost"
                    colorScheme="teal"
                >
                    Login
                </Button>
                </Link> :
                <Button
                mr={3} variant="ghost"
                colorScheme="teal"
                onClick={()=>{
                    dispatch(apiCallLoggedOut())
                    navigate('/')
                }}
                >
                    Log out
                </Button>
            }
            {
                auth === 'Permission granted for all' || auth === 'Permission granted for add house' ?
                <Link to='/listing/create'>
                <Button mr={3} variant="ghost"
                    colorScheme="teal"
                >
                    Add House
                </Button>
                </Link> : null
            }
        </Flex>
    )
}

export default FullSize