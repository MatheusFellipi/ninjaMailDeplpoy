import { Box, Image, BoxProps } from '@chakra-ui/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface IThumbProps extends BoxProps {
  description: string
  href: string
  img: string
}

export const Thumb = ({ description, href, img, ...rest }: IThumbProps) => {
  const [link, setLink] = useState('#')

  useEffect(() => {
    if (href === undefined) {
      setLink('#')
    } else {
      setLink(href)
    }
  }, [href])

  return (
    <Box
      w={{ lg: '320px', md: '209.29px', sm: '209.29px' }}
      h={{ lg: '449px', md: '290.16px', sm: '290.16px' }}
      borderWidth="1px"
      shadow={'lg'}
      bgColor={'white'}
      {...rest}
    >
      <Image src={`/img/${img}.png`} alt="thumb.png" />

      <Box px={'14px'} mt={'16px'}>
        <Box
          as="p"
          fontSize={'12px'}
          lineHeight={'16px'}
          fontFamily={'text'}
          fontWeight={500}
        >
          {description}
        </Box>
        <Link href={link}>
          <Box
            as={'a'}
            fontSize={'12px'}
            lineHeight={'14px'}
            fontFamily={'text'}
            fontWeight={800}
            color="#4BA87D"
          >
            Learn More &gt;
          </Box>
        </Link>
      </Box>
    </Box>
  )
}
