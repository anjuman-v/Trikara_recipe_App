import {
    Avatar,
    Box,
    chakra,
    Flex,
    Icon,
    useColorModeValue,
    Badge,
    Button,
    Center,
    Heading,
    Image,
    Link,
    Stack,
    Text,
   
  } from '@chakra-ui/react';
  import Navbar from '../navbar/Navbar'

  export default function AdminTemplate(){

    return(
        <>
        <Navbar />
        <Box mt={'1vh'} ml={'2rem'} mr={'2rem'} p={'0'}>
            <Flex>
                {/* for graph */}
                <Box border={'2px solid green'} h={'20rem'} w={'50%'} backgroundColor={'cyan.100'} mr={'2rem'}>

                </Box>

                {/*  */}
                <Box border={'2px solid black'} h={'auto'} w={'50%'}>
                <Flex
                mb={'3rem'}
                boxShadow={'lg'}
                maxW={'640px'}
                direction={{ base: 'column-reverse', md: 'row' }}
                width={'full'}
                rounded={'xl'}
                p={5}
                justifyContent={'space-between'}
                position={'relative'}
                bg={useColorModeValue('white', 'gray.800')}>
                    <Flex
                    direction={'column'}
                    textAlign={'left'}
                    justifyContent={'space-between'}>
                    <chakra.p
                    fontFamily={'Inter'}
                    fontWeight={'medium'}
                    fontSize={'15px'}
                    pb={4}>
                    {'I am so pleased with this product. EEZY is both attractive and highly adaptable. Without EEZY, we would have gone bankrupt by now. Thank you for creating this product!'}
                    </chakra.p>
                    <chakra.p fontFamily={'Work Sans'} fontWeight={'bold'} fontSize={14}>
                    {'Zoya Motki'}
                    <chakra.span
                        fontFamily={'Inter'}
                        fontWeight={'medium'}
                        color={'gray.500'}>
                        {' '}
                        - {'pagl'}
                    </chakra.span>
                    </chakra.p>
                </Flex>
                <Avatar
                    src={'https://acorn-react-classic-dashboard.coloredstrategies.com/img/product/small/product-2.webp'}
                    height={'120px'}
                    width={'120px'}
                    alignSelf={'center'}
                    m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}
                />
    
                </Flex>


                {/*  */}

                <Flex
                mb={'3rem'}
                boxShadow={'lg'}
                maxW={'640px'}
                direction={{ base: 'column-reverse', md: 'row' }}
                width={'full'}
                rounded={'xl'}
                p={5}
                justifyContent={'space-between'}
                position={'relative'}
                bg={useColorModeValue('white', 'gray.800')}
               >
                    <Flex
                    direction={'column'}
                    textAlign={'left'}
                    justifyContent={'space-between'}>
                    <chakra.p
                    fontFamily={'Inter'}
                    fontWeight={'medium'}
                    fontSize={'15px'}
                    pb={4}>
                    {'I am so pleased with this product. EEZY is both attractive and highly adaptable. Without EEZY, we would have gone bankrupt by now. Thank you for creating this product!'}
                    </chakra.p>
                    <chakra.p fontFamily={'Work Sans'} fontWeight={'bold'} fontSize={14}>
                    {'Zoya Motki'}
                    <chakra.span
                        fontFamily={'Inter'}
                        fontWeight={'medium'}
                        color={'gray.500'}>
                        {' '}
                        - {'pagl'}
                    </chakra.span>
                    </chakra.p>
                </Flex>
                <Avatar
                    src={'https://acorn-react-classic-dashboard.coloredstrategies.com/img/product/small/product-3.webp'}
                    height={'120px'}
                    width={'120px'}
                    alignSelf={'center'}
                    m={{ base: '0 0 20px 0', md: '0 0 0 50px' }}
                />
    
                </Flex>


                {/*  */}
                <Flex
                mb={'3rem'}
                boxShadow={'lg'}
                maxW={'640px'}
                direction={{ base: 'column-reverse', md: 'row' }}
                width={'full'}
                rounded={'xl'}
                p={5}
                justifyContent={'space-between'}
                position={'relative'}
                bg={useColorModeValue('white', 'gray.800')}
               >
                    <Flex
                    direction={'column'}
                    textAlign={'left'}
                    justifyContent={'space-between'}>
                    <chakra.p
                    fontFamily={'Inter'}
                    fontWeight={'medium'}
                    fontSize={'15px'}
                    pb={4}>
                    {'I am so pleased with this product. EEZY is both attractive and highly adaptable. Without EEZY, we would have gone bankrupt by now. Thank you for creating this product!'}
                    </chakra.p>
                    <chakra.p fontFamily={'Work Sans'} fontWeight={'bold'} fontSize={14}>
                    {'Zoya Motki'}
                    <chakra.span
                        fontFamily={'Inter'}
                        fontWeight={'medium'}
                        color={'gray.500'}>
                        {' '}
                        - {'pagl'}
                    </chakra.span>
                    </chakra.p>
                </Flex>
                <Avatar
                    src={'https://acorn-react-classic-dashboard.coloredstrategies.com/img/product/small/product-8.webp'}
                    height={'120px'}
                    width={'120px'}
                    alignSelf={'center'}
                    m={{ base: '0 0 20px 0', md: '0 0 0 50px' }}
                />
    
                </Flex>


                {/*  */}
                
                </Box>
            </Flex>
        </Box>

        {/*  */}
        {/*  */}
        {/* 3rd section */}
      <Flex mt={'4rem'} justifyContent={'space-around'} mb={'1rem'}>
      <Box
        role={'group'}
        p={6}
        maxW={'360px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
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
            backgroundImage: `https://acorn-react-classic-dashboard.coloredstrategies.com/img/product/small/product-10.webp`,
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
            height={250}
            width={400}
            objectFit={'cover'}
            src={'https://acorn-react-classic-dashboard.coloredstrategies.com/img/product/small/product-10.webp'}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            Nice Testi Food
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              $57
            </Text>
            <Text textDecoration={'line-through'} color={'gray.600'}>
              $199
            </Text>
          </Stack>
        </Stack>
      </Box>

      {/*  */}
      <Box
        role={'group'}
        p={6}
        maxW={'360px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
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
            backgroundImage: `https://acorn-react-classic-dashboard.coloredstrategies.com/img/product/small/product-10.webp`,
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
            height={250}
            width={400}
            objectFit={'cover'}
            src={'https://www.maggi.co.uk/sites/default/files/styles/maggi_desktop_image_style/public/NUK1265%20maggi%20Recipes%20banner%201500x700px%20opt2A.jpg?h=4f5b30f1&itok=DcsF1RwA'}
          />
        </Box>
        <Stack pt={10} align={'center'}>
         
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            Nice Testi Food
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              $57
            </Text>
            <Text textDecoration={'line-through'} color={'gray.600'}>
              $199
            </Text>
          </Stack>
        </Stack>
      </Box>
      {/*  */}
      <Box
        role={'group'}
        p={6}
        maxW={'360px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
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
            backgroundImage: `https://acorn-react-classic-dashboard.coloredstrategies.com/img/product/small/product-10.webp`,
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
            height={250}
            width={400}
            objectFit={'cover'}
            src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9mHKFACMcEWLAHaaZKBhtqUek_RQvzp6L9w&usqp=CAU'}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            Nice Testi Food
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              $57
            </Text>
            <Text textDecoration={'line-through'} color={'gray.600'}>
              $199
            </Text>
          </Stack>
        </Stack>
      </Box>
      </Flex>


        </>
    )
  }