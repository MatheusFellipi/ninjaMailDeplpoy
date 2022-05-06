import { Box, ListItem, ListItemProps } from '@chakra-ui/react'

interface INavItem extends ListItemProps {
  name: string
}

export const NavItem = ({ name, ...rest }: INavItem) => {
  return (
    <ListItem
      position={'relative'}
      maxW={{ lg: '105px', md: '95px' }}
      textAlign={'center'}
      p={'auto'}
      {...rest}
    >
      {name}
      <Box
        w={{ lg: '110px', md: '71px' }}
        h={'3px'}
        position="absolute"
        bgColor={'#4BA87D'}
        right={'-1px'}
      ></Box>
    </ListItem>
  )
}
