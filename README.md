# threejs-model
THREE.js 模型库

### 树模型(Tree)

​	使用树模型

```javascript
  let tree = new MODEL.Tree(scene, type)
```

​	当前有4中卡通树模型（0、方块树；1、圆形树；2、松树；3、随机圆形树）

```javascript
  for (let i = 0, len = 4; i < len; i++) {
    let tree = new MODEL.Tree(scene, i)
    let x = i*5 - len/2 *5
    tree.setPos(x, 0, 0).scale(1, 1, 1).rotate(0,0,0).shadow().paint()
  }
```
