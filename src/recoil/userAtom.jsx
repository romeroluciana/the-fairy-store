import { atom, selector } from 'recoil'

const localStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key)
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue))
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue))
    })
  }

const userAuthState = atom({
  key: 'user',
  default: null,
  effects: [localStorageEffect('user')],
})

const userLogedState = selector({
  key: 'userLoged',
  get: ({ get }) => {
    const user = get(userAuthState)
    return user
  },
})

export default userAuthState
export { userLogedState }
