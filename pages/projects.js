import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'



import thumbExcel from '../public/images/projects/Excel_Python1.jpg'
import thumbPythonSelenium from '../public/images/projects/Web-scraping-with-Selenium--Python.png'


const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
      Projects
      </Heading>

<SimpleGrid columns={[1, 1, 2]} gap={6}>
        {/* Orginal Works */}
        <Section>
          <WorkGridItem
            id="financereport"
            title="Finance Report Program"
            thumbnail={thumbExcel}
          >
            Python Program that exports an excel budget sheet.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="item-availability-text-alert"
            title="Item Availability Text Alert Program"
            thumbnail={thumbPythonSelenium}
          >
            Simple python program that checks a website like target and sends a text if the item is Available to purchase.
          </WorkGridItem>
        </Section>

        {/* ********************** */}
        
        </SimpleGrid>



    </Container>
    </Layout>
)



export default Projects