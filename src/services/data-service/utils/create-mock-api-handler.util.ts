const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

// Note: This is a stub
// TODO: Remove this once we have a real API
export const createMockApiHandler = async <T, Q>(data: T, params?: Q) => {
  // eslint-disable-next-line no-console
  console.log('This is a !stub, createMockApiHandler', params)
  await sleep(500)

  return data
}
