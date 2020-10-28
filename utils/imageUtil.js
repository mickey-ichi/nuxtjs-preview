import { nanoid } from 'nanoid'
export const getIdImage = () => {
  return `uploading-image__${nanoid()}`
}
