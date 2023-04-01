import Link from "next/link"
import Image from "next/image"
import { Box, Flex } from "@chakra-ui/react"


export const Header = () => {
  return (
    <Flex
      w='100%'
      as='header'
      alignItems='center'
      justifyContent='space-between'
      border='solid 2px'
      borderColor='gray.100'
    >
      <Box margin='1rem 0'>
        <Image src='/logo.svg' alt='' width={100} height={100} />
      </Box>
      <nav>
        <Flex as='ul' listStyleType='none' gap='2rem'>
          <li><Link href='#'>About Us</Link></li>
          <li><Link href='#'>Woman</Link></li>
          <li><Link href='#'>Men</Link></li>
          <li><Link href='#'>Beatuy</Link></li>
          <li><Link href='#'>Accesories</Link></li>
          <li><Link href='#'>Blog</Link></li>
          <li><Link href='#'>Contact</Link></li>
        </Flex>
      </nav>

      <div className="commerce-menu">
        <Flex as='ul' listStyleType='none' gap='1.5rem'>
          <Link href='#'><Image src='/ico-search.svg' alt='' width={24} height={24} /></Link>
          <Link href='#'><Image src='/ico-globe.svg' alt='' width={24} height={24} /></Link>
          <Link href='#'><Image src='/ico-user.svg' alt='' width={24} height={24} /></Link>
          <Link href='#'><Image src='/ico-cart.svg' alt='' width={24} height={24} /></Link>            
        </Flex>
      </div>
    </Flex>
  )
}
