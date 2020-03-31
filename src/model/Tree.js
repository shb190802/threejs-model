/**
 * 树模型
 * type（0、方块树；1、圆形树；2、松树；3、随机圆形树）
 */
import Base from './Base';

class Tree extends Base {
  constructor(scene, {
    type = 1,
    shadow = true,
    paint = true
  }) {
    super(scene)
    this.materialLeaf = new THREE.MeshLambertMaterial({
      color: 0x00ff00,
    })
    this.materialTrunk = new THREE.MeshLambertMaterial({
      color: 0x8B4513
    })

    if (type === 0) {
      this.design()
    } else if (type === 1) {
      this.designCircle()
    } else if (type === 2) {
      this.designPine()
    } else if (type === 3) {
      this.designCircle2()
    } else {
      this.design()
    }
    if(shadow) {
      this.shadow()
    }
    if(paint) {
      this.paint()
    }
  }
  // 方块树
  design() {
    let leaf = new THREE.Mesh(new THREE.BoxGeometry(4, 6, 4), this.materialLeaf)
    leaf.position.y = 5

    let trunk_geo = new THREE.CylinderGeometry(0.5, 0.5, 2)
    let trunk = new THREE.Mesh(trunk_geo, this.materialTrunk)
    trunk.position.y = 1

    this.group.add(leaf)
    this.group.add(trunk)
  }
  // 圆形树
  designCircle() {
    let leaf = new THREE.Mesh( new THREE.SphereGeometry(3, 10, 10), this.materialLeaf)
    leaf.position.y = 4.8

    let trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 2), this.materialTrunk)
    trunk.position.y = 1

    this.group.add(leaf)
    this.group.add(trunk)
  }
  // 松树
  designPine() {
    let leaf = new THREE.Mesh(new THREE.CylinderGeometry(0, 1, 2, 6), this.materialLeaf)
    leaf.position.y = 7
    let leaf2 = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 2, 2, 6), this.materialLeaf)
    leaf2.position.y = 5
    let leaf3 = new THREE.Mesh(new THREE.CylinderGeometry(1, 2.5, 2, 6), this.materialLeaf)
    leaf3.position.y = 3

    let trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 2), this.materialTrunk)
    trunk.position.y = 1

    this.group.add(leaf)
    this.group.add(leaf2)
    this.group.add(leaf3)
    this.group.add(trunk)
  }
  // 圆形树各个点随机移动一下
  designCircle2() {
    let leaf = new THREE.Mesh( new THREE.SphereGeometry(3, 8, 4), this.materialLeaf)
    leaf.position.y = 4.8
    leaf.geometry.vertices.forEach(item => {
      // let scale = Math.random()*0.4 + 0.7
      item.x *=  Math.random()*0.4 + 0.7
      item.y *=  Math.random()*0.4 + 0.7
      item.z *=  Math.random()*0.4 + 0.7
    })

    let trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 4), this.materialTrunk)
    trunk.position.y = 2

    this.group.add(leaf)
    this.group.add(trunk)
  }
}

export default Tree