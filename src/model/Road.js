/**
 * 树模型
 * type（0、基础公路）
 * width: 路的宽度
 * len: 路的长度
 */
import Base from './Base';

class Road extends Base {
  constructor(scene, type = 0,width = 4, len = 8) {
    super(scene)
    this.width = width
    this.len = len
    this.materialBase = new THREE.MeshLambertMaterial({
      color: 0x68696c,
    })
    this.materialSide = new THREE.MeshLambertMaterial({
      color: 0xe5e8ed
    })
    this.materialWhite = new THREE.MeshLambertMaterial({
      color: 0xe5e8ed
    })
    this.materialWhite = new THREE.MeshLambertMaterial({
      color: 0xe5e8ed
    })
    if(type === 0) {
      this.design()
    }
  }
  // 默认公路
  design() {
    let main = new THREE.Mesh(new THREE.BoxGeometry(this.width, 0.1, this.len), this.materialBase)
    main.position.y = 0.05

    this.group.add(main)
  }
  /**
   * 公路两边辅路
   * @param {*} width 
   * @param {*} type left right 
   */
  side(width = 1, type){
    let side = new THREE.Mesh(new THREE.BoxGeometry(width, 0.12, this.len), this.materialSide)
    side.position.y = 0.06
    this.group.add(side)
    if(type === 'left') {
      side.position.x = -(this.width+width)/2
    }else if(type === 'right') {
      side.position.x = (this.width+width)/2
    }else {
      side.position.x = -(this.width+width)/2
      let otherSide = side.clone()
      otherSide.position.x = (this.width+width)/2
      this.group.add(otherSide)
    }
    return this
  }
  /**
   * 非机动车道
   */
  bicycle(width = 0.5){
    // 公路宽度小于4米，无非机动车道
    if(this.width < 4) {
      return this
    }
    let side = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.102, this.len), this.materialWhite)
    side.position.y = 0.051
    side.position.x = -(this.width/2 - width)
    let otherSide = side.clone()
    otherSide.position.x = (this.width/2 - width)
    this.group.add(side)
    this.group.add(otherSide)
    return this
  }
  /**
   * 道路添加分道线
   * @param {*} num 分道线数量 中心默认为1 之后每+1 两边同时加 1条线为单虚线
   * @param {*} warnning // warnning 中心线为黄色双实线
   */
  lane(double = false, warnning = false){
    let line = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.102, this.len), this.materialWhite)
    line.position.y = 0.051
    line.position.x = double ? 0 : 0.2
    this.group.add(line)
    if(double) {
      let otherline = line.clone()
      otherline.position.x = -0.2
      this.group.add(otherline)
    }
    return this
  }
  /**
   * 路口是否需要人行横道
   */
  sidewalk(){

  }
}

export default Road