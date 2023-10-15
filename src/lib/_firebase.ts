import { initializeApp } from 'firebase/app'
import { get, getDatabase, ref, set } from 'firebase/database'

const config = JSON.parse(process.env.FIREBASE_CONFIG || '')
const app = initializeApp(config)
const db = getDatabase(app)

export const _toStorage = async <T>(key: string, value: T) => {
  await set(ref(db, key), value)
}

export const _fromStorage = async <T>(key: string): Promise<T | undefined> => {
  const snapshot = await get(ref(db, key))
  if (snapshot.exists()) {
    return snapshot.val() as T
  } else {
    return undefined
  }
}
