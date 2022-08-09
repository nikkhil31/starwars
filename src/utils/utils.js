export const range = (start, end) => {
  let length = end - start + 1

  return Array.from({ length }, (_, idx) => idx + start)
}

export const characterID = (currentPage, index) =>
  (currentPage - 1) * 10 + (index + 1)
