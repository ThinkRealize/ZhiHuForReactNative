export const removeHtmlTag = originString => {
  if (originString === undefined) {
    return ''
  }
  const newString = originString.replace(/<[^>]+>/g, '')

  return newString
}

export const removeEllipsis = originString => {
  if (originString === undefined) {
    return ''
  }
  const newString = originString.replace(/.../g, '')

  return newString
}

export const formatZhiHuExcerpt = originString => {
  return removeEllipsis(removeHtmlTag(originString))
}
