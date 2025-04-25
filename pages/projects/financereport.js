import {
    Container,
    Badge,
    Link,
    List,
    ListItem
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Project = () => (
    <Layout title="Finance Report">
      <Container>
        <Title>
          Finance Report Program <Badge>2025</Badge>
        </Title>
        <P>
        In this program you will be prompted to select your bank statement for the previous month and after doing so a template
        will be made and then the data from the bank statement will be inseted in the proper cells. There will be an excel
        export at the end that the will have a report of last months transactions grouped and calculated by income, income, bill, debt and variables.
        </P>
        <P>
        The budget template I used came from <Link href="https://www.youtube.com/watch?v=yfJPK6T0KkA">this youtube video. </Link>
        I just did it all programmatically along with the calculations and the data insertion.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows</span>
          </ListItem>

          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, Excel</span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/mfloyd0/Finance-Report" target="_blank" rel="noopener noreferrer">
            https://github.com/mfloyd0/Finance-Report
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>          
        </List>


      <WorkImage src="/images/projects/Budget_Template.png" alt="exceltemp" />
      <WorkImage src="/images/projects/Budget_Filled.png" alt="templatefilled" />

        </Container>
  </Layout>
)

export default Project