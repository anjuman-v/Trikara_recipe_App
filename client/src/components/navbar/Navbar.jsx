import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import './Navbar.css';


export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user_Email = JSON.parse(localStorage.getItem('user_email'))
  return (
    <>
      <Box bg={useColorModeValue('black', 'black')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}
        bg={useColorModeValue('black', 'black')}
        >
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={12} alignItems={'right'}
          
          style={{ width: "100%"}}>
            <Box 
            fontSize={20}
            fontWeight={600}
            color={'white'}
            style={{ padding:"3px 15px"}}
            ><Link to="/">Trikara</Link></Box>
            <HStack
              as={'nav'}
              alignItems={'right'}
              color={'white'}
              spacing={6}
              fontSize={20}
              fontWeight={600}
              display={{ base: 'none', md: 'flex' }}
              style={{ width: "100%", paddingLeft:"50%"}}
              >
                <Link to="/" className='nav-Link'>Products</Link>
                <Link to="/" className='nav-Link'>About</Link>
                {user_Email === "admin@gmail.com" ? <Link to="admin" className='nav-Link'>Admin</Link> : ""}
                <Link to="/" className='nav-Link'>Cart</Link>
                <Link to="/signin" className='nav-Link'>Login</Link>
                <Link to="/signup" className='nav-Link'>Signup</Link>
            </HStack>
          </HStack>
        
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} 
            spacing={4}
            color={'white'}
            fontSize={20}
            fontWeight={600}
            >
                <Link to="/" className='nav-Link'>Products</Link>
                <Link to="/" className='nav-Link'>About</Link>
                {user_Email === "admin@gmail.com" ? <Link to="admin" className='nav-Link'>Admin</Link> : ""}
                <Link to="/" className='nav-Link'>Cart</Link>
                <Link to="/signin" className='nav-Link'>Login</Link>
                <Link to="/signup" className='nav-Link'>Signup</Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
  
  
  