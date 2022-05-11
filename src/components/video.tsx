import { Box, Button, Flex, Heading } from '@chakra-ui/react'

export const Video = () => {
  const basicBoxStyles = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    background: 'url(/img/VIDEO.png) center/cover no-repeat',
  }

  return (
    <Flex
      w={{ lg: '944px', md: '616px ', sm: '304px' }}
      h={{ lg: '531px', md: '347px ', sm: '171px' }}
      flexWrap="wrap"
      justifyContent="space-evenly"
    >
      <Box sx={basicBoxStyles} w={'100%'}>
        <Heading
          lineHeight={{ lg: '80px', md: '51px', sm: '29px' }}
          fontSize={{ lg: '60px', md: '38px', sm: '22px' }}
          fontFamily={'heading'}
          w={{ lg: '656px', md: '415px', sm: '241px' }}
          h={{ lg: '80px', md: '51px', sm: '29px' }}
        >
          Reach More Customers
        </Heading>

        <Button
          w={{ lg: '200px', md: '132px', sm: '65px' }}
          h={{ lg: '65px  ', md: '42px', sm: '21px' }}
          fontSize={{ lg: '21px', md: '13px', sm: '6px' }}
          lineHeight={{ lg: '25px', md: '15px', sm: '7px' }}
          mt={{ lg: '80px', md: '41.56px', sm: '20.58px' }}
          color={'green'}
          bgColor={'white'}
          borderRadius={0}
          fontStyle={'normal'}
          fontFamily={'text'}
          fontWeight={'black'}
        >
          LEARN HOW
        </Button>
      </Box>
    </Flex>
  )
}
