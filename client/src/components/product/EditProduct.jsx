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
  
  import {useEffect, useState} from 'react';
  import axios from "axios";
  import Navbar from '../navbar/Navbar';
  import { useNavigate, useParams } from "react-router-dom";
  
  
  
  export default function EditProduct() {
  
    const [name, setName] = useState("")
    const [image , setImage ] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [recipe, setRecipe] = useState([])

    const  { id } = useParams();
  
    const navigate = useNavigate();
    
    const token = localStorage.getItem('token')
    const token1 = token ? JSON.parse(token) : navigate('/signin')
    console.log(token1)

    useEffect(() => {
        getData();
        
    }, [])

    const baseUrl = `https://trikara-recipes-ervices.onrender.com`;


    const getData = () => {

        const config = {
            headers: { Authorization: `Bearer${token}` }
          };

            axios.get(`${baseUrl}/recipe/${id}`, config).then((res) => {
                setRecipe(res.data);
            }).catch(err => {
          alert(err.message)
          })
    }
  
  
  
    const submitForm = async(el) => {
      el.preventDefault()
    const response = await axios.patch(`${baseUrl}/recipe/:id`,{
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
            <Heading fontSize={'2xl'}>Edit Recipe</Heading>
            
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
               Edit Recipe 
              </Button>
            </Stack>
          </Stack>
        </Flex>
  
        <Flex flex={1}>
          <Image
          mt={2}
          mb={2}
            alt={'Login Image'}
            objectFit={'cover'}
            src={recipe?.avatar_url}
          />
        </Flex>
      </Stack>
      </div>
    );
  }
  
  
  
