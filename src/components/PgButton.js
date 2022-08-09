import React from 'react'
import { Button } from '@chakra-ui/react'

const PgButton = props => {
  const activeStyle = {
    bg: 'brand.600',
    _dark: {
      bg: 'brand.500',
    },
    color: 'white',
  }
  return (
    <Button
      mx={1}
      px={4}
      py={2}
      rounded='md'
      bg='white'
      color='gray.700'
      _dark={{
        color: 'white',
        bg: 'gray.800',
      }}
      opacity={props.disabled && 0.6}
      _hover={!props.disabled && activeStyle}
      cursor={props.disabled && 'not-allowed'}
      {...(props.active && activeStyle)}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  )
}

export default PgButton
