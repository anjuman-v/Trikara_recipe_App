import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';



export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  const [name , setName] = useState("");
  const [phone , setPhone] = useState(0);
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  console.log(name)
  const navigate = useNavigate()

  const submitForm = ()=>{
    const user = ({
      name : name,
      phone : phone,
      email: email,
      password: password,
    });

    
    signUp(user)
    async function signUp(user) {
      
      const res = await axios.post(`https://trikararecipeapi.herokuapp.com/signup`, user)
      const response = res.data;
      if(response.status === 'success') {

      }else{
        alert('Please Provide Unique credential')
      }
      alert('please signin now')
      navigate('/signin')
    }

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
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input type="text"  onChange={(e) => {setName(e.target.value)}}/>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Phone</FormLabel>
                  <Input type="text" onChange={(e) => {setPhone(e.target.value)}}/>
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={(e) => {setEmail(e.target.value)}}/>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} onChange={(e) => {setPassword(e.target.value)}}/>
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                onClick={submitForm}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                  
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <a href="/signin">Login</a>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </div>
  );
}