import { 
    Container, 
    Stack,
    FormControl,
    FormLabel,
    Input,
    Button,
    Select,
    useToast,
    InputGroup,
    InputRightElement
} from '@chakra-ui/react'
import axios from 'axios';
import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
const Signin = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const toast = useToast();
    const handleSubmit = (e)=>{
        e.preventDefault();
        let obj = {
            firstName : document.getElementById('firstName').value,
            lastName : document.getElementById('lastName').value,
            email : document.getElementById('email').value,
            password : document.getElementById('password').value,
        }
        axios.post('http://localhost:2200/user/post', obj)
        .then((res)=>{
            toast({
                description : "your new account is created successfully",
                status : 'success',
                duration : 1000,
                message : 'Account Created'
            })
            navigate('/login');
        }).catch((err)=>{
            toast({
                status : 'error',
                duration : 1000,
                message : err.message,
            })
        })
            document.getElementById('firstName').value = null
            document.getElementById('lastName').value = null
            document.getElementById('email').value = null
            document.getElementById('password').value = null
    }
  return (
    <Container>
        <Stack p={4} boxShadow="lg">
            <form onSubmit={handleSubmit}> 
                <Stack mt={5} direction={['column', 'row']}>
                    <FormControl>
                        <FormLabel htmlFor='firstName'>Enter first name</FormLabel>
                        <Input id='firstName' type='text' placeholder='First name' required={true}/>
                    </FormControl> 
                    <FormControl>
                        <FormLabel htmlFor='lastName'>Enter last name</FormLabel>
                        <Input id='lastName' type='text' placeholder='Last name'  required={true}/>
                    </FormControl> 
                </Stack>
                <FormControl mt={5}>
                    <FormLabel htmlFor='email'>Enter email</FormLabel>
                    <Input id='email' type='email' placeholder='E-mail'  required={true}/>
                </FormControl> 
                <FormControl mt={4}>
                <FormLabel htmlFor='password'>Password</FormLabel>
                <InputGroup>
                    <Input id='password' type={show ? 'text' : 'password'} />
                    <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' variant="ghost" onClick={()=> setShow(!show)}>
                    {show ? 'Hide' : 'Show'}
                    </Button>
                    </InputRightElement>
                </InputGroup>
                </FormControl>
                <Button type='submit' w="full" mt={4} variant='solid' colorScheme="teal" p={4}>
                    Submit
                </Button>
            </form>
        </Stack>
    </Container>
  )
}

export default Signin