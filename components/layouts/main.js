import Head from 'next/head'
import Navbar from '../navbar'
import NoSsr from '../no-ssr.js'
import { Box, Container } from '@chakra-ui/react'
import VoxelBot from '../voxel-Bot.js'

const Main = ({ children, router }) => {
    return (
      <Box as="main" pb={8}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" href="/icons8-workstation-101.png" type="image/x-icon" />
          <title>Marquise - Homepage</title>
        </Head>

        <Navbar path={router.asPath} />

        <Container maxW="container.md" pt={14}>
        <NoSsr>
        <VoxelBot />
        {children}
        </NoSsr>
      </Container>

      </Box>
       )
    }

    export default Main