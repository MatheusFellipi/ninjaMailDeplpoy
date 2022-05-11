import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
} from '@chakra-ui/react'

export const Footer = () => {
  return (
    <Box as="footer">
      <Flex
        flexDirection={{ lg: 'row', md: 'row', sm: 'column' }}
        mb={{ lg: '56.14px', md: '37.72px', sm: '11.72px' }}
      >
        <Flex
          w={{ lg: '197.39px', md: '127.03px' }}
          h={{ lg: '60.23px', md: '37.27px' }}
          align={'center'}
          mt={{ lg: '82px', md: '47px', sm: '47px' }}
          ml={{ lg: '431px', md: '63px', sm: '17px' }}
        >
          <Box width={92} height={45} mt={'12px'}>
            <Image src="/icon/ninjamail.svg" alt="ninjamail" />
          </Box>

          <Heading
            fontSize={{ lg: '26px', md: '16px', sm: '16px' }}
            lineHeight={{ lg: '31px', md: '19px', sm: '19px' }}
            h={{ lg: '31px', md: '19px', sm: '19px' }}
            w={{ lg: '121px', md: '75px', sm: '75px' }}
            fontStyle={'normal'}
            fontFamily={'text'}
            fontWeight={'black'}
            ml={{ lg: '-30px', md: '-40px', sm: '-40px' }}
            pt={{ sm: '2px' }}
          >
            NinjaMail
          </Heading>
        </Flex>

        <Flex
          mt={{ lg: '79px', md: '51px', sm: '3.73px' }}
          ml={{ lg: '168px', md: '81.97px', sm: '17px' }}
          fontWeight={'bold'}
          fontFamily={'text'}
          fontSize={{ lg: '19px', md: '"12px"', sm: '12px' }}
          lineHeight={'14px'}
          flexDirection={'row'}
        >
          <Flex
            mr={{ lg: '56px', md: '13px', sm: '0px' }}
            h={{ lg: '199.86px', md: '130.28px' }}
            sx={{
              '@media (max-width: 767px)': {
                flexDirection: 'column',
              },
            }}
          >
            <List mr={{ lg: '58px', md: '39px', sm: '0px' }} spacing={1}>
              <ListItem mb={'0.5rem'}>Features</ListItem>
              <ListItem mb={'0.5rem'}>Pricing</ListItem>
              <ListItem mb={'0.5rem'}>Services</ListItem>
              <ListItem mb={'0.5rem'}>Partners</ListItem>
            </List>

            <List spacing={1} w={'120px'}>
              <ListItem mb={'0.5rem'}>About Us</ListItem>
              <ListItem mb={'0.5rem'}>Tutorials</ListItem>
              <ListItem mb={'0.5rem'}>Resources</ListItem>
              <ListItem mb={'0.5rem'}>Help Center</ListItem>
              <ListItem mb={'0.5rem'}>Templates</ListItem>
              <ListItem mb={'0.5rem'}>Case Studies</ListItem>
            </List>
          </Flex>

          <Flex
            sx={{
              '@media (max-width: 767px)': {
                flexDirection: 'column',
              },
            }}
          >
            <List mr={{ lg: '58px', md: '39px', sm: '0px' }} spacing={1}>
              <ListItem mb={'0.5rem'}>Medium</ListItem>
              <ListItem mb={'0.5rem'}>Twitter</ListItem>
              <ListItem mb={'0.5rem'}>Facebook</ListItem>
              <ListItem mb={'0.5rem'}>Instagram</ListItem>
              <ListItem mb={'0.5rem'}>LinkedIn</ListItem>
            </List>
            <List spacing={1} w={{ lg: '166px', md: '166px' }}>
              <ListItem mb={'0.5rem'}>Contact Us</ListItem>
              <ListItem mb={'0.5rem'}>Slack</ListItem>
              <ListItem mb={'0.5rem'}>Jobs</ListItem>
            </List>
          </Flex>
        </Flex>
      </Flex>

      <Center>
        <Divider
          colorScheme="#DBDBDB"
          w={{ lg: '1088px', md: '711px', sm: '286px' }}
          h={{ lg: '2px', md: '1px', sm: '1px' }}
          orientation="horizontal"
        />
      </Center>

      <Flex
        mt={{ lg: '39px', md: '25px', sm: '22px' }}
        flexDirection={{ lg: 'row', md: 'row', sm: 'column' }}
        justify={'center'}
        align={'cemter'}
      >
        <Box
          as="p"
          ml={'17px'}
          mr={{ lg: '98px', md: '93px', sm: '0' }}
          fontSize={{ lg: '15px', md: '9px', sm: '9px' }}
          lineHeight={'18px'}
          fontFamily={'text'}
          fontWeight={700}
          maxW={{ lg: '565px', md: '338px', sm: '186px' }}
        >
          NinjaMail is a sample project for Quest AI. © 2019 Quest AI, All
          rights reserved.
        </Box>

        <Box
          as="p"
          ml={'17px'}
          fontSize={{ lg: '15px', md: '9px', sm: '9px' }}
          mt={{ lg: '0', md: '0', sm: '14px' }}
          mr={{ lg: '30px', md: '35px', sm: '0' }}
          lineHeight={'18px'}
          fontFamily={'text'}
          fontWeight={700}
          maxW={'186px'}
        >
          Terms & Conditions
        </Box>
        <Box
          as="p"
          ml={'17px'}
          mb={{ lg: '39px', md: '30px', sm: '51px' }}
          fontSize={{ lg: '15px', md: '9px', sm: '9px' }}
          lineHeight={'19px'}
          fontFamily={'text'}
          fontWeight={700}
          maxW={'186px'}
        >
          Privacy Policy
        </Box>
      </Flex>
    </Box>
  )
}
