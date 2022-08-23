import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Link,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    
  } from '@chakra-ui/icons';
  
  export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box className='Navbar'>
        <Flex
          bg={useColorModeValue('black', 'white')}
          color={useColorModeValue('white', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('white', 'black')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('white', 'white')}>
              Logo
            </Text>
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
             
            </Flex>
          </Flex>
              
  
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
              <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={600}
              variant={'link'}
              href={'#'}
              color={'white'}>
             Product
            </Button>
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={600}
              variant={'link'}
              href={'#'}
              color={'white'}>
              About
            </Button>
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={600}
              variant={'link'}
              href={'#'}
              color={'white'}
              >  
             Cart
            </Button>
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={600}
              variant={'link'}
              href={'/login'}
              color={'white'}
              >  
              Login
            </Button>
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={600}
              variant={'link'}
              href={'/signup'}
              color={'white'}
              
              >  
              Signup
            </Button>
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          
        </Collapse>
      </Box>
    );
  }
  
  
   
  
  
  