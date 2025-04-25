import NextLink from 'next/link'
import {
    Link,
    Container,
    Heading,
    Box,
    SimpleGrid,
    Button,
    List,
    ListItem,
    Image,
    useColorModeValue
  } from '@chakra-ui/react'
  import { ChevronRightIcon } from '@chakra-ui/icons'
  import Paragraph from '../components/paragraph'
  import Section from '../components/section'
  import Layout from '../components/layouts/article'
  import { IoLogoTwitter, IoLogoGithub } from 'react-icons/io5'
  import { GridItem } from '../components/grid-item'

const Page = () => {
    return (
        <Layout>
       <Container>
        <Box borderRadius="lg" mb={6} p={3} textAlign="center" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}  css={{ backdropFilter: 'blur(10px)' }}>
            Hello, I&apos;m a Programmer!
        </Box>

        <Box display={{ md: 'flex' }}>
            <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
                    Marquise
                </Heading>
                <p>Software Developer (  Programmer  )</p>
            </Box>
        </Box>
       
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
            <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/413834817_7072511902807285_8356798000901991816_n.jpg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
          </Box>

          <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          A Little About Me
        </Heading>
        <Paragraph>I am a skilled programmer with experience in developing and maintaining software applications using languages like C#, Python, and SQL. 
          I have experience writing clean, efficient code and working on small-scale projects to develop my skills. 
          I am eager to learn and grow, continuously improving my coding abilities by exploring new technologies and best practices. 
          Look out for future projects to be posted soon!</Paragraph>
          <Box align="center" my={4}>
          <Button 
            as={NextLink}
            href="/projects"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
        </Section >

        <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          
        </Heading>
      </Section>



      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Social Links
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/mfloyd0" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @mfloyd0
              </Button>
            </Link>
          </ListItem>
        </List>

      </Section>

       </Container>
       </Layout>
    )
}

export default Page