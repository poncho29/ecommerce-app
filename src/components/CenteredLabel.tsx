import { Box, Flex } from "@chakra-ui/react"

type Props= {
  children: React.ReactNode
}

export const CenteredLabel = ({children}: Props) => {
  return (
    <Flex
      height='100%'
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <Box
        zIndex='1'
        bgColor='white'
        fontWeight='bold'
        width='fit-content'
        position='relative'
        padding='1rem 1.5rem'
        borderRadius='0.25rem'
        textTransform='uppercase'
      >
        {children}
      </Box>
    </Flex>
  )
}