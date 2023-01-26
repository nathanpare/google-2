import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Header from '../components/Header';
import Response from '../Response';
import SearchResults from '../components/SearchResults';


const api_key = process.env.API_KEY;
const context_key = process.env.CONTEXT_KEY;

const Search = ({ results }) => {
  const router = useRouter();

  console.log(results);
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <SearchResults results={results} />
      
    </div>
  )
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = true;
  const startIndex = context.query.start || "0";

  const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${api_key}&cx=${context_key}&q=${context.query.term}&start=${startIndex}`).then((res) => res.json());

  // AFTER the server has rendered... pass the results to the client

  return {
    props: {
      results: data,
    }
  }
}
