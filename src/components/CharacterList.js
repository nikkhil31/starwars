import { Grid } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useGetCharacterQuery } from '../services/characterApi'
import { characterID } from '../utils/utils'
import { Character, Pagination } from './'

const CharacterList = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const { data, isLoading } = useGetCharacterQuery(currentPage)

  return (
    <>
      <div className='container items'>
        <h1 className='item-list-title'>Characters</h1>
        <div className='item-grid'>
          <Grid templateColumns='repeat(5, 1fr)' gap={30}>
            {!isLoading &&
              (data?.results || []).map((character, index) => (
                <Character
                  key={characterID(currentPage, index)}
                  details={character}
                  imageId={characterID(currentPage, index)}
                />
              ))}
          </Grid>
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        totalCount={data?.count || 0}
        pageSize={10}
        onPageChange={page => setCurrentPage(page)}
      />
    </>
  )
}

export default CharacterList
