function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

/**
 * 模型基础类
 */
var Base =
/*#__PURE__*/
function () {
  function Base(sence) {
    _classCallCheck(this, Base);

    if (!THREE) {
      throw new Error('required THREE!!!');
    }

    this.sence = sence;
    this.group = new THREE.Object3D();
  } // 清空模型


  _createClass(Base, [{
    key: "clear",
    value: function clear() {
      this.group = new THREE.Object3D();
    } // 设置模型位置

  }, {
    key: "setPos",
    value: function setPos() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      this.group.position.set(x, y, z);
      return this;
    } // 设置模型旋转角度

  }, {
    key: "rotate",
    value: function rotate() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      this.group.rotateX(x);
      this.group.rotateY(y);
      this.group.rotateZ(z);
      return this;
    } // 设置模型缩放

  }, {
    key: "scale",
    value: function scale() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      this.group.scale.set(x, y, z);
      return this;
    } // 获取模型

  }, {
    key: "getMesh",
    value: function getMesh() {
      return this.group;
    } // 接受阴影

  }, {
    key: "shadow",
    value: function shadow() {
      this.group.children.forEach(function (item) {
        item.castShadow = true;
        item.receiveShadow = true;
      });
      return this;
    } // 将模型加入场景

  }, {
    key: "paint",
    value: function paint() {
      this.sence.add(this.group);
      return this;
    }
  }]);

  return Base;
}();

var Tree =
/*#__PURE__*/
function (_Base) {
  _inherits(Tree, _Base);

  function Tree(scene) {
    var _this;

    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    _classCallCheck(this, Tree);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tree).call(this, scene));
    _this.materialLeaf = new THREE.MeshLambertMaterial({
      color: 0x00ff00
    });
    _this.materialTrunk = new THREE.MeshLambertMaterial({
      color: 0x8B4513
    });

    if (type === 0) {
      _this.design();
    } else if (type === 1) {
      _this.designCircle();
    } else if (type === 2) {
      _this.designPine();
    } else if (type === 3) {
      _this.designCircle2();
    } else {
      _this.design();
    }

    return _this;
  } // 方块树


  _createClass(Tree, [{
    key: "design",
    value: function design() {
      var leaf = new THREE.Mesh(new THREE.BoxGeometry(4, 6, 4), this.materialLeaf);
      leaf.position.y = 5;
      var trunk_geo = new THREE.CylinderGeometry(0.5, 0.5, 2);
      var trunk = new THREE.Mesh(trunk_geo, this.materialTrunk);
      trunk.position.y = 1;
      this.group.add(leaf);
      this.group.add(trunk);
    } // 圆形树

  }, {
    key: "designCircle",
    value: function designCircle() {
      var leaf = new THREE.Mesh(new THREE.SphereGeometry(3, 10, 10), this.materialLeaf);
      leaf.position.y = 4.8;
      var trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 2), this.materialTrunk);
      trunk.position.y = 1;
      this.group.add(leaf);
      this.group.add(trunk);
    } // 松树

  }, {
    key: "designPine",
    value: function designPine() {
      var leaf = new THREE.Mesh(new THREE.CylinderGeometry(0, 1, 2, 6), this.materialLeaf);
      leaf.position.y = 7;
      var leaf2 = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 2, 2, 6), this.materialLeaf);
      leaf2.position.y = 5;
      var leaf3 = new THREE.Mesh(new THREE.CylinderGeometry(1, 2.5, 2, 6), this.materialLeaf);
      leaf3.position.y = 3;
      var trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 2), this.materialTrunk);
      trunk.position.y = 1;
      this.group.add(leaf);
      this.group.add(leaf2);
      this.group.add(leaf3);
      this.group.add(trunk);
    } // 圆形树各个点随机移动一下

  }, {
    key: "designCircle2",
    value: function designCircle2() {
      var leaf = new THREE.Mesh(new THREE.SphereGeometry(3, 8, 4), this.materialLeaf);
      leaf.position.y = 4.8;
      leaf.geometry.vertices.forEach(function (item) {
        // let scale = Math.random()*0.4 + 0.7
        item.x *= Math.random() * 0.4 + 0.7;
        item.y *= Math.random() * 0.4 + 0.7;
        item.z *= Math.random() * 0.4 + 0.7;
      });
      var trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 4), this.materialTrunk);
      trunk.position.y = 2;
      this.group.add(leaf);
      this.group.add(trunk);
    }
  }]);

  return Tree;
}(Base);

var index = {
  Tree: Tree
};

export default index;
