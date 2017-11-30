export default (page, limit) => {
  if (!page || !Number.isInteger(page) || page <= 0) {
    return 0
  }

  return (page - 1) * limit
}