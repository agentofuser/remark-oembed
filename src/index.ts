import h from 'hastscript'
import isHeading from 'hast-util-heading'

function parseDepth(str: string) {
  return parseInt(str[1], 10)
}

function wDepth(div: any) {
  const divClassNames = div.properties.className
  const divDepth = parseDepth(divClassNames[0])
  return divDepth
}

function w(depth: number, children: any[]) {
  return h(`section.h${depth}Wrapper.headingWrapper`, children)
}

function transformer(tree: any, _: any) {
  const rootChildren = tree.children

  const rootWrapper = w(0, [])
  let wrapperStack: any[] = []
  wrapperStack.push(rootWrapper)

  function currentWrapper() {
    return wrapperStack[wrapperStack.length - 1]
  }

  function currentWrapperDepth() {
    return wDepth(currentWrapper())
  }

  for (let elem of rootChildren) {
    if (isHeading(elem)) {
      const elemDepth = parseDepth(elem.tagName)
      // Child heading
      if (elemDepth > currentWrapperDepth()) {
        const childWrapper = w(elemDepth, [elem])
        currentWrapper().children.push(childWrapper)
        wrapperStack.push(childWrapper)
      }
      // Delimiting heading
      else if (elemDepth <= currentWrapperDepth()) {
        while (elemDepth <= currentWrapperDepth()) {
          wrapperStack.pop()
        }
        const siblingWrapper = w(elemDepth, [elem])
        currentWrapper().children.push(siblingWrapper)
        wrapperStack.push(siblingWrapper)
      }
    } else {
      currentWrapper().children.push(elem)
    }
  }

  return rootWrapper
}

function attacher() {
  return transformer
}

export default attacher
