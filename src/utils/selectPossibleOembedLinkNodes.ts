import { selectAll } from 'unist-util-select'

const selectPossibleOembedLinkNodes = (
  markdownAST: any,
  usePrefix = false
) => {
  let res = []
  if (usePrefix === true) {
    const nodes = selectAll(markdownAST, 'inlineCode')
    nodes.forEach(node => {
      if (node.value.startsWith('oembed:')) {
        const mutatedNode = node
        mutatedNode.url = mutatedNode.value.substring(7).trim()
        res.push(mutatedNode)
      }
    })
  } else {
    res = selectAll('paragraph link:only-child', markdownAST)
  }
  return res || []
}

export default selectPossibleOembedLinkNodes
