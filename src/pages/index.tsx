import Head from 'next/head'
import { GetServerSidePropsContext } from 'next'

import { Button } from '@chakra-ui/react'

import { Header } from '@/components/Header'
import { TopBar } from '@/components/TopBar'
import { HomeHeroCategories } from '@/components/HomeHeroCategories'

import { Category } from '@/interfaces/Categories'

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

type HomeProps = {
  products: Product[];
  categories: Category[];
}

export default function Home({ products, categories }: HomeProps) {
  return (
    <>
      <Head>
        <title>Ecommerce Project</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TopBar />

        <Header />

        <HomeHeroCategories categories={categories} />
       
        <Button>Hola</Button>

      </main>
    </>
  )
}

export async function getServerSideProps(contex: GetServerSidePropsContext) {
  const products = await fetch('https://fakestoreapi.com/products')
    .then(res => res.json())

  const categories = await fetch('https://fakestoreapi.com/products/categories')
    .then(res=>res.json())

  console.log(categories)

  return {
    props: {
      products,
      categories
    }
  }
}