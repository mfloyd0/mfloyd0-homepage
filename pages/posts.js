import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'


import thumbscomingsoon from '../public/images/contents/coming-soon.jpg'


const Posts = () => (
    <Layout title="Posts">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Recent Posts
        </Heading>
  
        <Section delay={0.1}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              title="Blog Coming Soon!!!"
              thumbnail={thumbscomingsoon}
            />
            <GridItem
              title="Coming Later!!!!"
              thumbnail={thumbscomingsoon}
            />
          </SimpleGrid>
        </Section>
  


      </Container>
    </Layout>
  )
  
  export default Posts