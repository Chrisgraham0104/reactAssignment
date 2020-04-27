import Head from 'next/head'
import Wrapper from './Wrapper'
//import Nav from 'components/Nav'
//import Footer from 'components/Footer'

export default ({ children, title = 'Assignment' }) => (
  <Wrapper>
    <Head>
      <title>{ title }</title>
    </Head>
   

    <main>
      { children }
    </main>

    
  </Wrapper>
)
