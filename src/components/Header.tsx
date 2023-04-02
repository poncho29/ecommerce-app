import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Container,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const menu = [
  { title: 'About Us', href: '#' },
  { title: 'Woman', href: '#' },
  { title: 'Men', href: '#' },
  { title: 'Beatuy', href: '#' },
  { title: 'Accesories', href: '#' },
  { title: 'Blog', href: '#' },
  { title: 'Contact', href: '#' },
]

export const Header = () => {
  return (
    <Box
      w="100%"
      as="header"
      borderColor="gray.500"
      borderBottom="solid .125rem"
    >
      <Container
        size="lg"
        as={Flex}
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex margin="1rem 0" gap='.5rem'>
          <Box as='nav' display={{ md:'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
              />
              <MenuList>
                {menu.map((item, i) => {
                  return <MenuItem command="⌘T" key={i}>
                    <Link href={item.href}>{item.title}</Link>
                  </MenuItem>
                })}                
              </MenuList>
            </Menu>
          </Box>
          <Image src="/logo.svg" alt="" width={100} height={100} />
        </Flex>

        <Box as='nav' display={{ base: 'none', sm: 'flex' }}>          
          <Flex
            as="ul"
            gap="32px"
            listStyleType="none"            
          >
            {menu.map((item, i) => {
              return <li key={i}>
              <Link href={item.href}>{item.title}</Link>
            </li>
            })}
          </Flex>
        </Box>

        <div className="commerce-menu">
          <Flex as="ul" listStyleType="none" gap="24px">
            <Link href="#">
              <Image src="/ico-search.svg" alt="" width={24} height={24} />
            </Link>
            <Link href="#">
              <Image src="/ico-globe.svg" alt="" width={24} height={24} />
            </Link>
            <Link href="#">
              <Image src="/ico-user.svg" alt="" width={24} height={24} />
            </Link>
            <Link href="#">
              <Image src="/ico-cart.svg" alt="" width={24} height={24} />
            </Link>
          </Flex>
        </div>
      </Container>
    </Box>
  );
};
