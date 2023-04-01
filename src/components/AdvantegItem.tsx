import Image from "next/image"
import { Grid, GridItem, Text } from "@chakra-ui/react"

type Props = {
  icon: string;
  title: string;
  content: string;
}

export const AdvantegItem = ({icon, title, content}: Props) => {
  return (
    <Grid
      gap='1rem'
      alignItems='center'
      gridTemplateColumns='40px 1fr'
    >
      <GridItem>
        <Image src={icon} alt='' width={40} height={40} />
      </GridItem>
      <GridItem>
        <Text
          fontSize='xs'
          fontWeight='bold'
          textTransform='uppercase'
        >
          {title}
        </Text>
        <Text fontSize='xs'>{content}</Text>
      </GridItem>
    </Grid>
  )
}
