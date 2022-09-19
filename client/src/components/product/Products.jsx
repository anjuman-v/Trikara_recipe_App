
import React, { useEffect, useState } from 'react'
import {
    Box, 
    Flex,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button,
  } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {fetchData, deleteData} from '../../Redux/actions'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import '../navbar/Navbar.css'
import Navbar from '../navbar/Navbar';

function Products() {
    const [products, setProduct] = useState([]);
     const dispatch = useDispatch() 

     const navigate = useNavigate();

  
   
  
      const {recipeObj, loading} = useSelector((store) => store)
   
      useEffect(() =>{
        
        dispatch(fetchData('https://trikararecipeapi.herokuapp.com/recipes'))
    }, [])
    const handleDelete = (id) => {
      let url = `https://trikararecipeapi.herokuapp.com/recipe/${id}`
      dispatch(deleteData(url))
  }


    // return loading ? (
    //   <> 
    //   <Navbar />
    //   <div className='spinner_div'>
    //   <Box>
    //   <CircularProgress isIndeterminate color='#2a323d' />
    //   </Box>
    //   </div>
    //   </>
    //   ) : 
    return(
      <>
    <Navbar />
    <Box>
    <Stack display={{md:'flex'}} flexDirection={{md:"row"}}>
    <Box>
       
    </Box>
    <Box> 
        <Heading as='h3' style={{textAlign:"center"}}>Products</Heading>
        <Flex flexWrap="wrap" justifyContent="space-around">
            {recipeObj?.map(el => {
                return (
            
                      <Center py={12} key={el._id}  >
                    <Box
                      role={'group'}
                      p={6}
                      maxW={'330px'}
                      w={'full'}
                      // bg={useColorModeValue('white', 'gray.800')}
                      boxShadow={'2xl'}
                      rounded={'lg'}
                      pos={'relative'}
                      zIndex={1}>
                      <Box
                        rounded={'lg'}
                        mt={-12}
                        pos={'relative'}
                        height={'230px'}
                        _after={{
                          transition: 'all .3s ease',
                          content: '""',
                          w: 'full',
                          h: 'full',
                          pos: 'absolute',
                          top: 5,
                          left: 0,
                          backgroundImage: `url(${el.avatar_url})`,
                          filter: 'blur(15px)',
                          zIndex: -1,
                        }}
                        _groupHover={{
                          _after: {
                            filter: 'blur(20px)',
                          },
                        }}>
                            <Image
                        rounded={'lg'}
                        height={230}
                        width={282}
                        objectFit={'cntain'}
                        src={el.avatar_url}
                      />
                    </Box>
                    <Stack pt={10} align={'center'}>
                      
                      <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                      {el.name}
                      </Heading>
                      <Stack direction={'row'} align={'center'}>
                        <Text fontWeight={800} fontSize={'xl'}>
                        {el.price}
                        </Text>
                        <Text textDecoration={'line-through'} color={'gray.600'}>
                        ₹199
                        </Text>
                      </Stack>
                        <Flex gap={3}>
                        <Button 
                        bg={'black'}
                        color={'white'}
                        onClick={() => {handleDelete(el._id)}}
                        >Remove</Button>
                        <Button 
                        bg={'black'}
                        color={'white'}
                        
                        > <Link to={`/recipe/${el._id}`}>Edit</Link></Button>
                        </Flex>
                    </Stack>
                  </Box>
                </Center>
                   
          
                );
            })}
        </Flex>
        
    </Box>
    </Stack>
</Box>
</>
      
  )
}

// function ProductSimple({image, title, price, id}) {

//   const dispatch = useDispatch() 
//   function deleteItems(id) {
//     dispatch(deleteData(`https://trikararestapi.herokuapp.com/recipe/${id}`))
//   }
//     return (
//       <Center py={12}>
//         <Box
//           role={'group'}
//           p={6}
//           maxW={'330px'}
//           w={'full'}
//           bg={useColorModeValue('white', 'gray.800')}
//           boxShadow={'2xl'}
//           rounded={'lg'}
//           pos={'relative'}
//           zIndex={1}>
//           <Box
//             rounded={'lg'}
//             mt={-12}
//             pos={'relative'}
//             height={'230px'}
//             _after={{
//               transition: 'all .3s ease',
//               content: '""',
//               w: 'full',
//               h: 'full',
//               pos: 'absolute',
//               top: 5,
//               left: 0,
//               backgroundImage: `url(${image})`,
//               filter: 'blur(15px)',
//               zIndex: -1,
//             }}
//             _groupHover={{
//               _after: {
//                 filter: 'blur(20px)',
//               },
//             }}>
//                  <Image
//             rounded={'lg'}
//             height={230}
//             width={282}
//             objectFit={'cntain'}
//             src={image}
//           />
//         </Box>
//         <Stack pt={10} align={'center'}>
          
//           <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
//            {title}
//           </Heading>
//           <Stack direction={'row'} align={'center'}>
//             <Text fontWeight={800} fontSize={'xl'}>
//             {price}
//             </Text>
//             <Text textDecoration={'line-through'} color={'gray.600'}>
//             ₹199
//             </Text>
//            </Stack>
//             <Button 
//             bg={'black'}
//             color={'white'}
//             // onClick={deleteItems(id)}
//             >remove</Button>
//         </Stack>
//       </Box>
//     </Center>
   
    
//   );
// }

export default Products