import Head from 'next/head'
import { useRouter } from 'next/router';
import Header from '../components/Header'
import SearchResults from '../components/SearchResults';
import { API_KEY, CONTEXT_KEY } from '../key';
import Response from '../Response';

function Search({results}) {
    const router = useRouter()
    console.log(results)
    return (
        <div>
          <Head>
              <title>{router.query.term} - Google Search</title>
          </Head>
          <Header />
            
          {/* Search result */}
          <SearchResults results={results} />
        </div>
    )
}

export default Search

export async function getServerSideProps(context){
    const useDummyData = false;

    const data = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}`)
    .then(res => res.json())

    // After the SERVER rendered... pass the result to the client

    return{
        props: {
            results : data
        }
    }
}
