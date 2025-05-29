import * as THREE from './threejs/three.module.js';
import { STLLoader } from './threejs/STLLoader.js';
import { OrbitControls } from './threejs/OrbitControls.js';

let scene, camera, renderer;
let model1, model2, model3, model4, model5 , model6, model7, model8, model9, model10, model11, model12;


function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.001,
        10000
    );
    
    camera.position.z = 10
    camera.position.set(0, 10, 0);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.id = 'canvas3d'; 
    document.body.appendChild(renderer.domElement);

    let control = new OrbitControls(camera, renderer.domElement);
    control.enableDamping = true;
    control.dampingFactor = 0.05;
    control.rotateSpeed = 0.1;
    control.autoRotate = true; // Enables auto-rotation
    control.autoRotateSpeed = 0.05; // Sets auto-rotation speed


    let light = new THREE.DirectionalLight(0xffffff);
    light.position.set(0, 0, 10);
    scene.add(light);

    let light2 = new THREE.DirectionalLight(0xffffff);
    light2.position.set(0, 0, -10);
    scene.add(light2);

    // Add event listener to button 1
document.getElementById('button1').addEventListener('click', () => {
    // Load model 1
    let loader1 = new STLLoader();
    loader1.load('/神经外科/WANG YAN JUN_Cyan_001.stl', (geometry) => {
        let material1 = new THREE.MeshLambertMaterial({ color: 0x00FFFF });
        model1 = new THREE.Mesh(geometry, material1);
        // Set position, rotation, and scale of model1 as needed
        scene.add(model1);
    });
});


// Add event listener to button 2
document.getElementById('button2').addEventListener('click', () => {
    // Load model 2
    let loader2 = new STLLoader();
    loader2.load('/神经外科/WANG YAN JUN_Fuchsia_001.stl', (geometry) => {
        let material2 = new THREE.MeshLambertMaterial({ color: 0xD9027D });
        model2 = new THREE.Mesh(geometry, material2);
        // Set position, rotation, and scale of model2 as needed
        scene.add(model2);
    });
});

// Add event listener to button 3
document.getElementById('button3').addEventListener('click', () => {
    // Load model 3
    let loader3 = new STLLoader();
    loader3.load('/神经外科/WANG YAN JUN_Peach2_001.stl', (geometry) => {
        let material3 = new THREE.MeshLambertMaterial({ color: 0xffe5b4 });
        model3 = new THREE.Mesh(geometry, material3);
        // Set position, rotation, and scale of model3 as needed
        scene.add(model3);
    });
});

// Add event listener to button 4
document.getElementById('button4').addEventListener('click', () => {
    // Load model 4
    let loader4 = new STLLoader();
    loader4.load('/神经外科/WANG YAN JUN_Pink2_001.stl', (geometry) => {
        let material4 = new THREE.MeshLambertMaterial({ color: 0xFFC0CB });
        model4 = new THREE.Mesh(geometry, material4);
        // Set position, rotation, and scale of model4 as needed
        scene.add(model4);
    });
});

// Add event listener to button 5
document.getElementById('button5').addEventListener('click', () => {
    // Load model 5
    let loader5 = new STLLoader();
    loader5.load('/神经外科/WANG YAN JUN_Turquoise2_001.stl', (geometry) => {
        let material5 = new THREE.MeshLambertMaterial({ color: 0x30D5C8 });
        model5 = new THREE.Mesh(geometry, material5);
        // Set position, rotation, and scale of model5 as needed
        scene.add(model5);
    });
});

// Add event listener to button 6
document.getElementById('button6').addEventListener('click', () => {
    // Load model 6
    let loader6 = new STLLoader();
    loader6.load('/神经外科/WANG YAN JUN_Violet2_001.stl', (geometry) => {
        let material6 = new THREE.MeshLambertMaterial({ color: 0x7F00FF });
        model6 = new THREE.Mesh(geometry, material6);
        // Set position, rotation, and scale of model6 as needed
        scene.add(model6);
    });
});

// Add event listener to button 7
document.getElementById('button7').addEventListener('click', () => {
    // Load model 7
    let loader7 = new STLLoader();
    loader7.load('/神经外科/WANG YAN JUN_Yellow_001.stl', (geometry) => {
        let material7 = new THREE.MeshLambertMaterial({ color: 0xFFFF00 });
        model7 = new THREE.Mesh(geometry, material7);
        // Set position, rotation, and scale of model7 as needed
        scene.add(model7);
    });
});

// Add event listener to button 8
document.getElementById('button8').addEventListener('click', () => {
    // Load model 8
    let loader8 = new STLLoader();
    loader8.load('/神经外科/WANG YAN JUN_动脉_001.stl', (geometry) => {
        let material8 = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });
        model8 = new THREE.Mesh(geometry, material8);
        // Set position, rotation, and scale of model8 as needed
        scene.add(model8);
    });
});

// Add event listener to button 9
document.getElementById('button9').addEventListener('click', () => {
    // Load model 9
    let loader9 = new STLLoader();
    loader9.load('/神经外科/WANG YAN JUN_占位_001.stl', (geometry) => {
        let material9 = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });
        model9 = new THREE.Mesh(geometry, material9);
        // Set position, rotation, and scale of model9 as needed
        scene.add(model9);
    });
});

// Add event listener to button 10
document.getElementById('button10').addEventListener('click', () => {
    // Load model 10
    let loader10 = new STLLoader();
    loader10.load('/神经外科/WANG YAN JUN_皮肤_001.stl', (geometry) => {
        let material10 = new THREE.MeshLambertMaterial({ color: 0xFFC0CB });
        model10 = new THREE.Mesh(geometry, material10);
        // Set position, rotation, and scale of model10 as needed
        scene.add(model10);
    });
});

// Add event listener to button 11
document.getElementById('button11').addEventListener('click', () => {
    // Load model 11
    let loader11 = new STLLoader();
    loader11.load('/神经外科/WANG YAN JUN_脑组织_001.stl', (geometry) => {
        let material11 = new THREE.MeshLambertMaterial({ color: 0x0000FF });
        model11 = new THREE.Mesh(geometry, material11);
        // Set position, rotation, and scale of model11 as needed
        scene.add(model11);
    });
});

// Add event listener to button 12
document.getElementById('button12').addEventListener('click', () => {
    // Load model 12
    let loader12 = new STLLoader();
    loader12.load('/神经外科/WANG YAN JUN_静脉_001.stl', (geometry) => {
        let material12 = new THREE.MeshLambertMaterial({ color: 0x00FF00 });
        model12 = new THREE.Mesh(geometry, material12);
        // Set position, rotation, and scale of model12 as needed
        scene.add(model12);
    });
});


    animate();
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    control.update();
    
}

init();



