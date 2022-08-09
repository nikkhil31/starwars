import { Flex } from '@chakra-ui/react'
import React from 'react'
import { usePagination } from '../hook/usePagination'
import { DOTS } from '../utils/constant'
import { PgButton } from './'

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  let lastPage = paginationRange[paginationRange.length - 1]

  return (
    <Flex
      bg='#edf3f8'
      _dark={{
        bg: '#3e3e3e',
      }}
      p={50}
      w='full'
      alignItems='center'
      justifyContent='center'
    >
      <Flex>
        <PgButton disabled={currentPage === 1} onClick={onPrevious}>
          previous
        </PgButton>
        {paginationRange.map(pageNumber => (
          <PgButton
            key={pageNumber}
            active={pageNumber === currentPage}
            onClick={() => pageNumber !== DOTS && onPageChange(pageNumber)}
          >
            {pageNumber}
          </PgButton>
        ))}
        <PgButton disabled={currentPage === lastPage} onClick={onNext}>
          Next
        </PgButton>
      </Flex>
    </Flex>
  )
}

export default Pagination
