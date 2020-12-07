export function formatProduct(product) {
  const { id, price, quantity, color, size, title } = product

  return {
    id,
    price,
    quantity,
    color,
    size,
    title,
  }
}
