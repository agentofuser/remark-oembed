const getProviderEndpointForLinkUrl = (linkUrl: string, providers: any) => {
  const transformedEndpoint: { url: string; params: any } = {
    url: null,
    params: null,
  }

  for (const provider of providers || []) {
    for (const endpoint of provider.endpoints || []) {
      for (let schema of endpoint.schemes || []) {
        schema = schema.replace('*', '.*')
        const regExp = new RegExp(schema)
        if (regExp.test(linkUrl)) {
          transformedEndpoint.url = endpoint.url
          transformedEndpoint.params = {
            url: linkUrl,
            ...provider.params,
          }
        }
      }
    }
  }

  return transformedEndpoint
}

export default getProviderEndpointForLinkUrl
