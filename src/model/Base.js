/**
 * 模型基础类
 */
class Base {
  constructor(sence) {
    if (!THREE) {
      throw new Error('required THREE!!!')
    }
    this.sence = sence
    this.group = new THREE.Object3D()
  }
  // 清空模型
  clear() {
    this.group = new THREE.Object3D()
  }
  // 设置模型位置
  setPos(x = 0, y = 0, z = 0) {
    this.group.position.set(x, y, z)
    return this
  }
  // 设置模型旋转角度
  rotate(x = 0, y = 0, z = 0) {
    this.group.rotateX(x)
    this.group.rotateY(y)
    this.group.rotateZ(z)
    return this
  }
  // 设置模型缩放
  scale(x = 1, y = 1, z = 1) {
    this.group.scale.set(x, y, z)
    return this
  }
  // 获取模型
  getMesh() {
    return this.group
  }
  // 接受阴影
  shadow() {
    this.group.children.forEach(item => {
      item.castShadow = true
      item.receiveShadow = true
    })
    return this
  }
  // 将模型加入场景
  paint() {
    this.sence.add(this.group)
    return this
  }
}

export default Base