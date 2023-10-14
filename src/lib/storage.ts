export const toStorage = async (key: string, value: any) => {
  await chrome.storage.local.set({ [key]: value })
}

export const fromStorage = async (keys: string[]) => {
  return await chrome.storage.local.get(keys)
}
