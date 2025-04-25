import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid,
    UnorderedList,
    Heading,
    Center
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="Item Availability Text Alert">
      <Container>
        <Title>
        Item Availability Text Alert Program <Badge>2025</Badge>
        </Title>
        <P>
        This program checks sites like BestBuy and Target for item availability. If available, then you will be notified by text.
        The links for the items will be queried through MySQL, that way you can add as many links as you like. The phone number to text is also 
        a field in the database, that way if a friend wants to be alerted about an item you can do that.
        </P>
        <P>
        This is just the first version since I plan to configure it to more sites like Amazon, Walmart and Newegg. Target and BestBuy were just my test sites to get 
        it up and running and learn how to find elements on a webpage.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows</span>
          </ListItem>

          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, MySQL, Selenium</span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/mfloyd0/Item-Availability-and-Text-Alert-" target="_blank" rel="noopener noreferrer">
            https://github.com/mfloyd0/Item-Availability-and-Text-Alert-
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>          
        </List>



        </Container>
  </Layout>
)

export default Work