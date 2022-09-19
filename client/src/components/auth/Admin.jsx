import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
} from '@chakra-ui/react';

import {useState} from 'react';
import axios from "axios";
import Navbar from '../navbar/Navbar';
import { useNavigate } from "react-router-dom";



export default function Admin() {

  const [name, setName] = useState("")
  const [image , setImage ] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")

  const navigate = useNavigate();
  
  const token = localStorage.getItem('token')
  const token1 = token ? JSON.parse(token) : navigate('/signin')
  console.log(token1)

  const baseUrl = `https://trikararecipeapi.herokuapp.com/`;


  const submitForm = async(el) => {
    el.preventDefault()
  const res1 = await axios.post(`${baseUrl}recipe`,{
    name: name,
    price: price,
    avatar_url : image,
    description : description,
  })
  .then((res) =>{
    
    alert("Success")
    navigate('/')
  }).catch(err => {
    alert(err.message)
    
  })
  }



  return (
    <div>
      <Navbar />
     
    
    <Stack minH={'10vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={0} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Add Recipe More</Heading>
          
          <FormControl id="name">
            <FormLabel>Recipe Name</FormLabel>
            <Input type="text" onChange={(e) => {setName(e.target.value)}}/>
          </FormControl>

          {/* sdfgh */}

          <FormControl id="recipe">
            <FormLabel>Recipe Image</FormLabel>
            <Input type="text" onChange={(e) => {setImage(e.target.value)}}/>
          </FormControl>

           {/* sdfgh */}

           <FormControl id="price">
            <FormLabel>Price</FormLabel>
            <Input type="text" onChange={(e) => {setPrice(e.target.value)}} />
          </FormControl>

          {/* sdfgh */}
          <FormControl id="dec">
            <FormLabel>Description</FormLabel>
            <Input type="text" onChange={(e) => {setDescription(e.target.value)}}/>
          </FormControl>
          
          <Stack spacing={6}>
            
            <Button colorScheme={'blue'} variant={'solid'} onClick={submitForm}>
             Add More Recipe 
            </Button>
          </Stack>
        </Stack>
      </Flex>

      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://www.pinkvilla.com/imageresize/cover-image_5_8.jpg?width=752&format=webp&t=pvorg'
          }
        />
      </Flex>
    </Stack>
    </div>
  );
}

//https://trikararestapi.herokuapp.com/recipes
//https://trikararestapi.herokuapp.com/recipes