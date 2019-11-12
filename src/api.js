import "isomorphic-fetch"

const fetcher = async (...args) => {
  const result = await fetch(...args)
  return result.json()
}

export const resetPassword = email => {
  return fetcher("/api/reset-password", {
    method: "POST",
    body: JSON.stringify({ email })
  })
}

export const login = (username, password) => {
  return fetcher("/api/login", {
    method: "POST",
    body: JSON.stringify({ username, password })
  })
}
