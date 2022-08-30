import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

export default function Login() {
  

  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  //console.log(email)
  const navigate = useNavigate()

  const token = JSON.parse(localStorage.getItem('token'))

  const submitForm = ()=>{
    const user = ({
     
      email: email,
      password: password,
    });


    
    signUp(user)
    async function signUp(user) {
      
      const res = await axios.post(`https://trikararestapi.herokuapp.com/signin`, user)
      const response = res.data;
      if(response.status === 'success') {
        localStorage.setItem("token", JSON.stringify(res.data.token))
        localStorage.setItem("user_email", JSON.stringify(res.data.user.email))

      }else{
        alert('Please Provide Unique credential')
      }
      alert('Login Succcess')
      navigate('/')
    }

  }

  const logout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user_email");
      alert("Logout Success!");
      navigate("/");
  }

  return (
    <div>
    <Navbar />
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={(e) => {setEmail(e.target.value)}}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" onChange={(e) => {setPassword(e.target.value)}} />
            </FormControl>
              <Button
            
              onClick={submitForm}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
              {token ? <Button
            
              onClick={logout}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign out
              </Button>  : ""}
          </Stack>
        </Box>
      </Stack>
    </Flex>
      
    </div>
  );
}