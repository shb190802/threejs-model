function paintModel() {
  plane()
  for (let i = 0, len = 4; i < len; i++) {
    let tree = new MODEL.Tree(scene, i)
    let x = i*5 - len/2 *5
    tree.setPos(x, 0, 0).scale(1, 1, 1).rotate(0,0,0).shadow().paint()
  }
  // let tree = new MODEL.Tree(scene, 3)
  // let scale = 3
  // tree.scale(scale, scale, scale).paint()
}

function plane() {
  var planeGeometry = new THREE.PlaneGeometry(100, 100);
  var planeMaterial = new THREE.MeshStandardMaterial({
    color: 0x8fab60
  });
  var plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.rotation.x = -0.5 * Math.PI;
  plane.receiveShadow = true;
  scene.add(plane)
}

function subtract(src, dest) {
  var srcBSP = new ThreeBSP(src);
  var destBSP = new ThreeBSP(dest);
  var resultBSP = srcBSP.subtract(destBSP);
  return resultBSP.toMesh(src.material);
}