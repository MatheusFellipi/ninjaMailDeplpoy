import { Box, Heading } from '@chakra-ui/react'

interface ICaseStudyProps {
  description: string
  name: string
}

export const CaseStudy = ({ description, name }: ICaseStudyProps) => {
  const caseStudyStyles = {
    display: 'flex',
    alignItems: 'start',
    flexDirection: 'column',
    justifyContent: 'end',
    textAlign: 'center',
    color: 'white',
    fontSize: '20px',
    background: `url(/img/${name}.png) center/cover no-repeat`,
  }

  return (
    <Box
      sx={caseStudyStyles}
      w={{ lg: '341px ', md: '223px', sm: '223px' }}
      h={{ lg: '239px ', md: '157px', sm: '157px' }}
    >
      <Heading
        lineHeight={'26px'}
        fontSize={'22px'}
        fontFamily={'text'}
        fontWeight={900}
        ml={17.06}
      >
        {name}
      </Heading>
      <Heading
        mb={4.66}
        ml={17.06}
        lineHeight={'14px'}
        fontSize={'12px'}
        fontFamily={'text'}
        fontWeight={700}
      >
        {description}
      </Heading>
    </Box>
  )
}
