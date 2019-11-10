import "isomorphic-fetch"

const fetcher = async (...args) => {
  const result = await fetch(...args)
  return result.json()
}
export const forgotPassword = email => {
  return fetcher()
}
