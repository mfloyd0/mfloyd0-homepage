import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'


import thumbcomingsoon from '../public/images/contents/coming-soon.jpg'
import thumbfirstblog from '../public/images/contents/first_blog_thumbnail.jpeg'


const Posts = () => (
    <Layout title="Posts">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Recent Posts
        </Heading>
  
        <Section delay={0.1}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              title="My First Blog as a Developer Building and Learning Things"
              thumbnail={thumbfirstblog}
              href="https://blog.mfloyd0.com/my-first-blog-as-a-developer-building-and-learning-things"
              target="_blank" 
              rel="noopener noreferrer"
            />
            <GridItem
              title="Coming Later!!!!"
              thumbnail={thumbcomingsoon}
            />
          </SimpleGrid>
        </Section>
  


      </Container>
    </Layout>
  )
  
  export default Posts
