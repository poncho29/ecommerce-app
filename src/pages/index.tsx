import Head from 'next/head'
import { Heading } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Header } from '@/components/Header'
import { GetServerSidePropsContext } from 'next'

type Product = {
  id: number;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
  rating: {
    count: number;
    rate: number;
  }
}

type Category = "electronics" | "jewelery" | "men's clothing" | "women's clothing";

type Props = {
  products: Product[];
  categories: Category;
}

export default function Home({ products, categories }: Props) {
  return (
    <>
      <Head>
        <title>Ecommerce Project</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
       
      </main>
    </>
  )
}

export async function getServerSideProps(contex: GetServerSidePropsContext) {
  const products = await fetch('https://fakestoreapi.com/products').then(res => res.json())
  const categories = fetch('https://fakestoreapi.com/products/categories').then(res=>res.json())

  return {
    props: {
      products,
      categories
    }
  }
}