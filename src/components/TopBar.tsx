import Link from "next/link"
import Image from "next/image"
import { Flex } from "@chakra-ui/react"

export const TopBar = () => {
  return (
    <Flex
      p='2'
      w='100%'
      bg='black'
      fontSize='xs'
      color='white'
      alignItems='center'
      justifyContent='space-between'
    >
      {/* Contact Menu  */}
      <Flex as='ul' gap='1.5rem'>
        <Flex as={Link} href='#' alignItems='center' gap='.5rem'>
          <Image src='/ico-top-phone.svg' alt='' width={16} height={16} />
          +38 (050) 34 567
        </Flex>
        <Flex as={Link} href='#' alignItems='center' gap='.5rem'>
          <Image src='/ico-top-location.svg' alt='' width={16} height={16} />
          Ukraine, Kyiv, Khreshchatk 1
        </Flex>
        <Flex as={Link} href='#' alignItems='center' gap='.5rem'>
          <Image src='/ico-top-clock.svg' alt='' width={16} height={16} />
          All week 24/7
        </Flex>
      </Flex>

      {/* Social Menu  */}
      <Flex as='ul' gap='1rem'>      
        <Link href='#'>
          <Image src='/ico-social-facebook.svg' alt='' width={24} height={24} />
        </Link>              
        <Link href='#'>
          <Image src='/ico-social-instagram.svg' alt='' width={24} height={24} />
        </Link>              
        <Link href='#'>
          <Image src='/ico-social-twitter.svg' alt='' width={24} height={24} />
        </Link>              
        <Link href='#'>
          <Image src='/ico-social-pinterest.svg' alt='' width={24} height={24} />
        </Link>        
      </Flex>
    </Flex>
  )
}
