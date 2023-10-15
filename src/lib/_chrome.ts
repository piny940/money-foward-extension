export const _toStorage = async <T>(key: string, value: T) => {
  await chrome.storage.local.set({ [key]: value })
}

export const _fromStorage = async <T>(key: string): Promise<T | undefined> => {
  return (await chrome.storage.local.get([key]))[key]
}
