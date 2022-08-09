import React from 'react'
import { useParams } from 'react-router-dom'
import { Box, Heading, Container, Stack } from '@chakra-ui/react'

const Details = () => {
  let { id } = useParams()

  return (
    <Container maxW={'3xl'}>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
        >
          {id}
        </Heading>
      </Stack>
    </Container>
  )
}

export default Details
