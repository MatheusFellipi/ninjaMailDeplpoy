import { Box, Button, Flex, Heading, Image, List } from '@chakra-ui/react'
import { NavItem } from './navitem'

export const Header = () => {
  return (
    <Flex
      as={'header'}
      w={'100%'}
      h={'62px'}
      justify={'space-around'}
      align={'center'}
    >
      <Flex w={'155px'} h={'52px'} align={'center'}>
        <Box width={84} height={42} mt={'12px'}>
          <Image src="/icon/ninjamail.svg" alt="ninjamail" />
        </Box>
        <Heading
          fontSize="22px"
          lineHeight={'26px'}
          fontStyle={'normal'}
          fontFamily={'text'}
          h={'25px'}
          fontWeight={'black'}
          ml={'-10px'}
        >
          NinjaMail
        </Heading>
      </Flex>

      <Flex justify={'center'} align={'center'}>
        <Box as="nav">
          <Flex
            as={List}
            hidden={false}
            fontFamily={'text'}
            fontWeight={800}
            fontSize={{ lg: '17px', md: '11px' }}
            lineHeight={{ lg: '20px', md: '13px' }}
            sx={{
              '@media (max-width: 789px)': {
                display: 'none',
              },
            }}
          >
            <NavItem pr={0.5} ml={{ lg: '38px', md: '36px' }} name="FEATURES" />
            <NavItem pr={3} ml={{ lg: '38px', md: '36px' }} name="PRICING" />
            <NavItem pr={1} ml={{ lg: '38px', md: '36px' }} name="SERVICES" />
            <NavItem pr={0.3} ml={{ lg: '38px', md: '36px' }} name="PARTNERS" />
          </Flex>
        </Box>
        <Button
          ml={{ lg: '31px', md: '20px ' }}
          lineHeight={'13px'}
          fontSize="11px"
          fontFamily={'text'}
          colorScheme={'green'}
          borderRadius={0}
          color={'white'}
          fontWeight={'extrabold'}
        >
          SIGN UP FREE
        </Button>
      </Flex>
    </Flex>
  )
}
