export default function sliceText(text: string, end: number){
  let result = ''

  if(text.length > end){
    result = text.slice(0, end - 3) + '...'
  } else {
    result = text
  }

  return result
}