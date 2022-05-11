import type { NextPage } from 'next'
import { Box, Button, Flex, Image, Input, Stack } from '@chakra-ui/react'
import { Header } from '../components/heeader'
import { Video } from '../components/video'
import { Thumb } from '../components/thumb'
import { CaseStudy } from '../components/casestudy'
import { Footer } from '../components/footer'

const Home: NextPage = () => {
  return (
    <>
      <Header />

      <Flex
        as={'section'}
        bgImage={{ md: "url('/img/bg2.png')" }}
        bgPosition={{
          lg: 'bottom -6rem right 14rem',
          md: 'bottom -23px right',
        }}
        bgRepeat="no-repeat"
        bgSize={{ lg: 'auto', md: 'cover' }}
        justify={{ md: 'center', sm: 'center' }}
        h={{ lg: '625.5px', md: '450px', sm: '324.22px' }}
      >
        <Box
          mt={'8px'}
          w={{ lg: '1088px ', md: '711px', sm: '301px' }}
          h={{ lg: '383px ', md: '250px', sm: '324.22px' }}
          position={'relative'}
        >
          <Box
            position="absolute"
            mt={{ sm: '48px' }}
            ml={{ lg: '408px', md: '266px' }}
            w={{ lg: '680px', md: '445px', sm: '300px' }}
            h={{ lg: '383px', md: '250px', sm: '169px' }}
          >
            <Image
              src="/img/photo_hero.png"
              alt="hero"
              w={{ lg: '680px', md: '445px', sm: '300px' }}
              h={{ lg: '383px', md: '250px', sm: '169px' }}
              objectFit="cover"
            />
          </Box>

          <Box
            mt={{ lg: '125px', md: '81px' }}
            ml={{ lg: '50px' }}
            position="absolute"
          >
            <Box
              as={'h1'}
              maxW={{ lg: '489px', md: '315px', sm: '277px' }}
              maxH={{ lg: '317px', md: '208px', sm: '138px' }}
              fontFamily={'heading'}
              fontWeight={'black'}
              fontSize={{ lg: '59px', md: '38px', sm: '36px' }}
              lineHeight={{ lg: '71px', md: '46px', sm: '46px' }}
            >
              Create Stunning Email Campaigns
            </Box>
            <Box
              as={'p'}
              mt={{ md: '17px', sm: '98px' }}
              fontFamily={'text'}
              fontSize={{ lg: '19px', md: '12px', sm: '14px' }}
              fontWeight={'medium'}
              lineHeight={{ lg: '26px', md: '16px', sm: '16px' }}
              maxW={{ lg: '446px', md: '282px', sm: '290px' }}
              maxH={{ lg: '52px', md: '32px', sm: '32px' }}
            >
              Create and launch email campaigns that captivate your customers in
              just a few clicks.
            </Box>

            <Flex mt={{ sm: '16px' }}>
              <Button
                borderRadius={0}
                w={{ lg: '200px', md: '131px', sm: '143px' }}
                h={{ lg: '65px', md: '42px', sm: '40.22px' }}
                mr={{ lg: '45px', md: '29px', sm: '17px' }}
                fontSize={'13px'}
                lineHeight={'15px'}
                fontWeight={'black'}
                bgColor={'#4BA87D'}
                color={'white'}
                _hover={{
                  filter: 'brightness(0.9)',
                }}
              >
                TRY NOW
              </Button>
              <Button
                borderRadius={0}
                border="4px"
                borderColor="#4BA87D"
                w={{ lg: '200px', md: '131px', sm: '143px' }}
                h={{ lg: '65px', md: '42px', sm: '40.22px' }}
                fontSize={'13px'}
                lineHeight={'15px'}
                fontWeight={'black'}
                color={'#4BA87D'}
              >
                GET A DEMO
              </Button>
            </Flex>
          </Box>
        </Box>
      </Flex>

      <Box
        bgImage={{
          lg: "url('/img/bgLG.png')",
          md: "url('/img/bgMD.png')",
          sm: "url('/img/bgSM.png')",
        }}
        bgPosition={{
          lg: 'bottom -12rem right 0.2rem',
          md: 'bottom -31rem right -53rem',
          sm: 'top -39rem right -35rem',
        }}
        bgRepeat="no-repeat"
        pt={{ lg: 20, md: 20 }}
      >
        <Flex justify={'center'} justifyContent={'center'} mt={'41.78px'}>
          <Video />
        </Flex>

        <Flex
          mt={{ lg: '98px', md: '64px', sm: '33px' }}
          justifyContent={'center'}
          p={2}
          alignItems="center"
          w={'100%'}
        >
          <Flex
            flexDirection={{ lg: 'row', md: 'row', sm: 'column' }}
            maxW={{ lg: '1098px', md: '710px', sm: '302px' }}
          >
            <Flex flexDirection={{ lg: 'row', md: 'row', sm: 'column' }}>
              <Thumb
                description="Launch campaigns but also find new customers. Our unique platform handles campaigns from start to end."
                href="#"
                img="thumb"
              />
              <Thumb
                ml={{ lg: '47px', md: '30.71px', sm: '92.71px' }}
                mt={{ lg: '88px', md: '57.84px', sm: '14.84px' }}
                mr={{ lg: '46px', md: '29px', sm: '0' }}
                description="Start building and sharing with your team today. NinjaMail is renowned for its industry leading team collaboration tools."
                href="#"
                img="thumb2"
              />
            </Flex>

            <Box
              ml={{ lg: '0', md: '0', sm: '28px ' }}
              mt={{ lg: '138px', md: '90px', sm: '14.84px' }}
            >
              <Box
                mt={'18px'}
                as="h1"
                fontFamily={'heading'}
                fontWeight={900}
                fontSize={{ lg: '44px ', md: '28px', sm: '28px' }}
                lineHeight={{ lg: '48px', md: '31px', sm: '31px' }}
                maxW={{ lg: '365px', md: '232px', sm: '232px' }}
              >
                The source for proven, engaging email campaigns
              </Box>
              <Box
                as="p"
                mt={'17px'}
                fontFamily={'text'}
                fontWeight={500}
                fontSize={{ lg: '19px ', md: '12px', sm: '12px' }}
                lineHeight={{ lg: '26px', md: '16px', sm: '16px' }}
                maxW={{ lg: '322px ', md: '232px', sm: '203px' }}
              >
                Whether you’re a startup, small business, e-commerce store, or
                want to promote your app, NinjaMail has the feature set tailored
                for your business.
              </Box>
            </Box>
          </Flex>
        </Flex>

        <Flex
          flexDirection={'column'}
          align={'center'}
          justify={'center'}
          mt={{ lg: '133px', md: '87px', sm: '80px' }}
        >
          <Flex flexDirection={{ lg: 'row', md: 'row', sm: 'column' }}>
            <Stack
              direction={{ lg: 'row', md: 'row', sm: 'column' }}
              spacing="21px"
            >
              <CaseStudy description="Member since 2012" name="Frankie" />
              <CaseStudy description="Member since 2016" name="Camile" />
              <CaseStudy description="Member since 2018" name="Elayne" />
            </Stack>
          </Flex>

          <Box
            as="h1"
            mt={{ lg: '40px', md: '25px', sm: '59px  ' }}
            maxW={{ lg: '781px', md: '544px', sm: '225px' }}
            maxH={{ lg: '126px ', md: '89px', sm: '155px' }}
            lineHeight={{ lg: '48px ', md: '38px', sm: '36px' }}
            fontSize={{ lg: '44px', md: '28px', sm: '26px' }}
            fontFamily={'heading'}
            fontWeight={'black'}
            textAlign="center"
          >
            Learn how others are reaching their audience easier than ever
            before.
          </Box>

          <Flex
            mt={{ lg: '15px', sm: '15px' }}
            justify={{ md: 'space-around', sm: 'center' }}
            align={{ md: 'start', sm: 'center' }}
            flexDirection={{ lg: 'row', md: 'row', sm: 'column' }}
            maxW={{ lg: '668px', md: '438px', sm: '223px' }}
            maxH={{ lg: '110px ', md: '70px', sm: '111px' }}
          >
            <Flex
              textAlign="center"
              flexDirection={'column'}
              alignItems={{
                lg: 'flex-start',
                md: 'flex-start',
                sm: 'center',
              }}
            >
              <Input
                type="text"
                mr={{ lg: '27px', md: '17px', sm: '0px' }}
                w={{ lg: '420px', md: '275px', sm: '223px ' }}
                h={{ lg: '65px', md: '42px', sm: '42px ' }}
                borderRadius={5}
                borderColor={'gray.600'}
                placeholder="Enter your email"
                _placeholder={{
                  color: '#000',
                }}
              />
              <Box
                as="p"
                w={{ lg: '254px', md: '157px', sm: '142px ' }}
                h={{ lg: '25px', md: '15px', sm: '14px ' }}
                fontSize={{ lg: '21px', md: '13px ', sm: '12px ' }}
                mt={{ sm: '6px' }}
                color={'green'}
              >
                Thanks! Email received
              </Box>
            </Flex>

            <Button
              mt={{ md: '0', sm: '7px' }}
              borderRadius={0}
              w={{ lg: '221px', md: '144px', sm: '144px' }}
              h={{ lg: '65px', md: '42px', sm: '42px ' }}
              fontSize={{ lg: '21px', md: '13px', sm: '13px ' }}
              lineHeight={'15px'}
              fontWeight={'black'}
              bgColor={'#62be93'}
              color={'white'}
              _hover={{
                filter: 'brightness(0.9)',
              }}
            >
              JOIN OUR LIST
            </Button>
          </Flex>
        </Flex>
      </Box>

      <Flex
        justify={'center'}
        align={'center'}
        flexDirection={'column'}
        mt={{ lg: '75px', md: '50px', sm: '54px' }}
        mb={{ lg: '146px', md: '', sm: '58px' }}
        ml={{ lg: '248px', md: '75px', sm: '20px' }}
        mr={{ lg: '248px', md: '75px', sm: '20px' }}
        textAlign="center"
      >
        <Box
          as={'h1'}
          maxW={{ lg: '426px', md: '315px', sm: '281px' }}
          maxH={{ lg: '124px', md: '208px', sm: '110px' }}
          fontSize={{ lg: '44px', md: '38px', sm: '26px' }}
          lineHeight={{ lg: '48px', md: '46px', sm: '36px' }}
          fontFamily={'heading'}
          fontWeight={'black'}
        >
          All the best brands already use us.
        </Box>

        <Flex
          mt={{ lg: '39px', md: '20px', sm: '40px' }}
          flexWrap={{ sm: 'wrap' }}
          justify={'center'}
          align={'center'}
          maxW={{ lg: '926px', md: '605px', sm: '237px' }}
        >
          <Image
            mr={{ lg: '43px', md: '32px', sm: '67px' }}
            maxW={{ lg: '85px', md: '55px', sm: '55px' }}
            maxH={{ lg: '44px', md: '29px', sm: '29px' }}
            src="/icon/dragon_eye.svg"
            alt="dragon eye vodka"
            objectFit="cover"
          />

          <Image
            mr={{ lg: '43px', md: '32px', sm: '0' }}
            maxW={{ lg: '138px', md: '91px', sm: '91px' }}
            maxH={{ lg: '22px', md: '15px', sm: '15px' }}
            src="/icon/gamecommerce.svg"
            alt="gamecommerce"
            objectFit="cover"
          />

          <Image
            mt={{ lg: '0px', md: '0px', sm: '29px' }}
            mr={{ lg: '43px', md: '33px', sm: '41px' }}
            maxW={{ lg: '160px', md: '104px', sm: '104px' }}
            maxH={{ lg: '33px', md: '22px', sm: '22px' }}
            src="/icon/last_knight.svg"
            alt="last knight"
            objectFit="cover"
          />

          <Image
            mr={{ lg: '43px', md: '24px', sm: '0' }}
            mt={{ lg: '', md: '0px', sm: '30px' }}
            maxW={{ lg: '141px', md: '92px', sm: '92px' }}
            maxH={{ lg: '48px', md: '17px', sm: '17px' }}
            src="/icon/radio.svg"
            alt="radio tree"
            objectFit="cover"
          />

          <Image
            mr={{ lg: '43px', md: '33px', sm: '0px' }}
            mt={{ lg: '0px', md: '0px', sm: '29px' }}
            maxW={{ lg: '145px', md: '94px', sm: '94px' }}
            maxH={{ lg: '48px', md: '31px', sm: '31px' }}
            src="/icon/questai.svg"
            alt="quest ai"
            objectFit="cover"
          />
        </Flex>
      </Flex>

      <Flex
        flexDirection={'column'}
        align="center"
        justify={'space-between'}
        as={'section'}
        pt={'42px'}
        pb={'59px'}
        bgColor="#4BA87D"
        h={'290px'}
        width={'100%'}
      >
        <Box
          as="h1"
          fontFamily={'heading'}
          fontSize={'42px'}
          lineHeight={'48px'}
          fontWeight={'black'}
          textAlign={'center'}
          color={'white'}
        >
          Get started today!
        </Box>
        <Button
          borderRadius={0}
          w={'131px'}
          h={'42px'}
          fontSize={'13px'}
          lineHeight={'15px'}
          fontWeight={'black'}
          color={'#4BA87D'}
        >
          PICK A PLAN
        </Button>
      </Flex>

      <Footer />
    </>
  )
}

export default Home
