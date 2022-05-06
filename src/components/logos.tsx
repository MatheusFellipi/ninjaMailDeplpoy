import { Image, ImageProps } from '@chakra-ui/react'

interface ILogosProps extends ImageProps {
  alt: string
  img: string
}

export const Logos = ({ alt, img, ...rest }: ILogosProps) => {
  return <Image src={`/icon/${img}.svg`} alt={alt} {...rest} />
}
