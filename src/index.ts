import {
  getProviderEndpointForLinkUrl,
  fetchOembed,
  transformLinkNodeToOembedNode,
  fetchOembedProviders,
  selectPossibleOembedLinkNodes,
} from './utils'

// For each node this is the process
const processNode = async (node: { url: string }, providers = []) => {
  let mutatedNode = node
  try {
    const endpoint = getProviderEndpointForLinkUrl(node.url, providers)
    if (endpoint.url) {
      const oembedResponse = await fetchOembed(endpoint)
      mutatedNode = transformLinkNodeToOembedNode(node, oembedResponse)
    }
  } catch (error) {
    error.url = node.url
    throw error
  }
  return mutatedNode
}

async function transformer(tree: any, _file: any) {
  const providers = await fetchOembedProviders()

  const usePrefix = false
  const nodes = selectPossibleOembedLinkNodes(tree, usePrefix)

  await Promise.all(nodes.map(node => processNode(node, providers)))

  return tree
}

function attacher() {
  return transformer
}

export default attacher
