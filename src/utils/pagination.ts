export const getDataRange = (total = 1, limit = 10, page = 1) => {
  const from = (page - 1) * limit + 1
  let to = 1
  if (total <= limit || page * limit > total) {
    to = total
  } else {
    to = page * limit
  }

  return {
    from,
    to,
  }
}
