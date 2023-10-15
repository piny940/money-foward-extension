import { initializeApp } from 'firebase/app'
import { get, getDatabase, ref, set } from 'firebase/database'

const config = JSON.parse(process.env.FIREBASE_CONFIG || '')
const app = initializeApp(config)
const db = getDatabase(app)

export const _toStorage = async (key: string, value: any) => {
  set(ref(db, key), value)
}

export const _fromStorage = async (key: string) => {
  const snapshot = await get(ref(db, key))
  if (snapshot.exists()) {
    return snapshot.val()
  } else {
    return undefined
  }
}
