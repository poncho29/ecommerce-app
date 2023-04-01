import { Flex } from "@chakra-ui/react"
import { AdvantegItem } from "./AdvantegItem"

export const AdvantegSection = () => {
  return (
    <Flex justifyContent='space-between' margin='2rem 0'>
      <AdvantegItem
        icon='/ico-truck.svg'
        title='Free Shipping'
        content='On all UA order or order above $100'
      />
      <AdvantegItem
        icon='/ico-return.svg'
        title='30 days return'
        content='Simply return it within 30 days for an exchange'
      />
      <AdvantegItem
        icon='/ico-support.svg'
        title='Support 24/7'
        content='Contact us 24 hours a day, 7 days a week'
      />
    </Flex>
  )
}
