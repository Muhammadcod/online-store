const initState = {
  product: [
    {
      id: 1,
      title: 'shirt',
      price: 50,
    },
    {
      id: 2,
      title: 'shirt',
      price: 60,
    },
    {
      id: 3,
      title: 'shirt',
      price: 70,
    },
  ],
}
export default function products(state = initState, action) {
  return state + action
}
