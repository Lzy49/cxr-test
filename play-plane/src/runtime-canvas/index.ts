
import { createRenderer } from 'vue'
import { Texture, Sprite, Text, Container } from 'pixi.js'
const renderer = createRenderer<Container, Container>({
  createElement(type) {
    let el = undefined
    switch (type) {
      case 'Sprite':
        el = new Sprite()
        break
      case 'Container':
        el = new Container()
        break
      default:
        el = '' as never
        throw new Error(`不包含该类型 ${type}`)
    }
    return el
  },
  createComment(text) {
    return new Text(text)
  },
  createText(text) {
    return new Text(text)
  },
  insert(el, parent) {
    parent.addChild(el)
  },
  patchProp(el, key, prevValue, nextValue) {
    switch (key) {
      case 'texture':
        (el as Sprite).texture = Texture.from(nextValue);
        break
      default:
        (el as any)[key] = nextValue
        return
    }
  },
  remove(el) {
    el.parent.removeChild(el)
  },
  setText() {
  },
  setElementText() { },
  parentNode(el) {
    return el.parent
  },
  nextSibling() {
    return null
  }
})
export const createApp = (app: any) => {
  return renderer.createApp(app)
}