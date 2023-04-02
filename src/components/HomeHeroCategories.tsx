import Image from "next/image"

import { Grid, GridItem } from "@chakra-ui/react"

import { slugify } from "@/utils/slugify";
import { CenteredLabel } from "./CenteredLabel"

import { Category } from "@/interfaces/Categories";

type Props = {
  categories: Category[]
}

export const HomeHeroCategories = ({categories}: Props) => {
  return (
    <Grid
      gap={{
        base: '.5rem',
        md: '30px'
      }}
      templateRows={{
        base: '130px 154px 130px',
        md: '200px 260px'
      }}
      templateColumns={{
        base: '1fr 1fr',
        md: '540px 255px 255px'
      }}
      templateAreas={{
        base: `
          'cat1 cat1'
          'cat2 cat3'
          'cat4 cat4'
        `,
        md: `
          'cat1 cat2 cat3'
          'cat1 cat4 cat4'
        `
      }}
    >
      {categories.map((cat, id) => {
        const slug = slugify(cat)
        const imageUrl = `/pic-category-${slug}.jpg`

        return (
          <GridItem 
            key={id}
            w='100%'
            h='100%'
            position='relative'
            gridArea={`cat${id + 1}`}
            fontSize={{
              base: '0.85rem',
              md: '1rem'
            }}
          >
            <Image src={imageUrl} alt='' fill={true} />
            <CenteredLabel>{cat}</CenteredLabel>
          </GridItem>
        )
      })}
    </Grid>
  )
}
