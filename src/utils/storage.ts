const prefix = 'ANWNFT_MARKETPLACE_STORAGE'
const loginKey = `${prefix}_USER_DATA`

export const get = (key) => {
  return localStorage.getItem(key)
}

export const set = (key, value) => {
  return localStorage.setItem(key, value)
}

export const remove = (key) => {
  return localStorage.removeItem(key)
}

export const clearStorage = () => {
  return localStorage.clear()
}

export const getUserData = () => {
  const userData = get(loginKey)
  if (userData) return JSON.parse(userData)
  return {}
}

export const setUserData = (value) => {
  return set(loginKey, value)
}

export const removeUserData = () => {
  return remove(loginKey)
}
