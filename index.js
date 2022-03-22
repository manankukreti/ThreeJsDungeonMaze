import {maze} from './objects/maze.js'

window.onload = function() {

    //create scene and camera
    var scene = new THREE.Scene()


    var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 20000)
    //move camera inside cube
    camera.position.set(-30,550,-800)
    camera.lookAt(-30,10, 0)

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    //light
    var light = new THREE.DirectionalLight(0xffffff );
    light.position.set( 2, -40, -300).normalize();

    scene.add(light);

    const alight = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( alight );

    scene.add( maze );


    const controls = new THREE.PointerLockControls(camera, renderer.domElement)
    

    document.body.addEventListener( 'click', function () {
        controls.lock();
    }, false );

    const speed = 5
    const onKeyDown = function (event) {
        switch (event.code) {
            case 'KeyW':
                controls.moveForward(speed)
                break
            case 'KeyA':
                controls.moveRight(-1 * speed)
                break
            case 'KeyS':
                controls.moveForward(-1 * speed)
                break
            case 'KeyD':
                controls.moveRight(speed)
                break
        }
    }
    document.addEventListener('keydown', onKeyDown, false)
  
    renderer.setAnimationLoop(() => {
        renderer.render(scene, camera)
    });
}