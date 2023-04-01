import Image from "next/image"

import { Grid, GridItem, GridItemProps } from "@chakra-ui/react"

import { slugify } from "@/utils/slugify";
import { CenteredLabel } from "./CenteredLabel"

import { Category } from "@/interfaces/Categories";

type Props = {
  categories: Category[]
}

export const HomeHeroCategories = ({categories}: Props) => {
  return (
    <Grid
      gap='30px'
      templateRows='200px 260px'
      templateColumns='540px 255px 255px'
    >
      {categories.map((cat, id) => {
        const slug = slugify(cat)
        const imageUrl = `/pic-category-${slug}.jpg`

        let props: GridItemProps = {
          w: '100%',
          h: '100%',
          position: 'relative'
        }

        if (id === 0) props.rowSpan = 2

        if (id === categories.length - 1) props.colSpan = 2

        return (
          <GridItem key={id} {...props}>
            <Image src={imageUrl} alt='' fill={true} />
            <CenteredLabel>{cat}</CenteredLabel>
          </GridItem>
        )
      })}
    </Grid>
  )
}
