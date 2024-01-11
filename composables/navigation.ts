export async function useNavigation() {
  const { data: products } = await useAsyncData('products', () => queryContent('products').find())
  const { data: engines } = await useAsyncData('engines', () => queryContent('engines').find())
  const { data: solutions } = await useAsyncData('solutions', () => queryContent('solutions').find())
  const { data: resources } = await useAsyncData('resources', () => queryContent('resources').where({
    $or: [
      { _dir: { $eq: 'resources' } },
      { _dir: { $eq: '' } }
    ]
  }).find())

  return {
    products,
    engines,
    solutions,
    resources
  }
}
