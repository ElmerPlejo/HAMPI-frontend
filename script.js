import * as THREE from "https://unpkg.com/three@0.167.1/build/three.module.js?module";

import { OrbitControls }

from "https://unpkg.com/three@0.167.1/examples/jsm/controls/OrbitControls.js?module";

import { STLLoader }

from "https://unpkg.com/three@0.167.1/examples/jsm/loaders/STLLoader.js?module";



// ESCENA

const scene = new THREE.Scene();

scene.background =

new THREE.Color(0x2b2b2b);


// CÁMARA

const camera =

new THREE.PerspectiveCamera(

    60,

    window.innerWidth /
    window.innerHeight,

    0.1,

    10000

);


// RENDERER

const renderer =

new THREE.WebGLRenderer({

    antialias:true

});


renderer.setSize(

    window.innerWidth,

    window.innerHeight

);


document
.getElementById("visor3D")
.appendChild(renderer.domElement);


// CONTROLES

const controls =

new OrbitControls(

    camera,

    renderer.domElement

);

const raycaster =
new THREE.Raycaster();

const mouse =
new THREE.Vector2();

controls.enableDamping = true;





// LUCES

scene.add(

    new THREE.AmbientLight(

        0xffffff,

        3

    )

);


const directionalLight =

new THREE.DirectionalLight(

    0xffffff,

    3

);


directionalLight.position.set(

    100,

    200,

    100

);


scene.add(

    directionalLight

);


// STL

const loader =

new STLLoader();



const hotspots = [

{
    nombre:"pantalla",

    titulo:"Pantalla del ventilador",

descripcion:`
<p>
La pantalla del ventilador constituye la principal interfaz de interacción entre el usuario y el equipo. A través de ella se pueden visualizar en tiempo real los parámetros respiratorios del paciente, las curvas de monitorización y las alarmas del sistema, además de permitir la configuración de los modos ventilatorios.
</p>

<ul>
    <li>Visualización de presión de vía aérea.</li>
    <li>Monitorización del volumen tidal y volumen minuto.</li>
    <li>Visualización de frecuencia respiratoria y FiO₂.</li>
    <li>Presentación de curvas y bucles respiratorios.</li>
    <li>Gestión y notificación de alarmas.</li>
    <li>Configuración de parámetros y modos de ventilación.</li>
</ul>

`,

    x:-225,
    y:400,
    z:220
},

{
    nombre:"Circuito respiratorio",
    titulo:"Circuito respiratorio",

   descripcion:`
<p>
El circuito respiratorio es el conjunto de tubos y accesorios que conecta el ventilador con el paciente. Su función es transportar los gases respiratorios desde el ventilador hacia los pulmones y permitir el retorno de los gases espirados para su monitorización y eliminación.
</p>

<ul>
    <li>Transporta la mezcla de aire y oxígeno al paciente.</li>
    <li>Permite la salida controlada del aire exhalado.</li>
    <li>Integra componentes como la pieza en Y, sensor de flujo y válvula espiratoria.</li>
    <li>Facilita la medición de presión, flujo y volumen respiratorio.</li>
    <li>Contribuye a mantener una ventilación segura y eficiente.</li>
</ul>
`,

    x:350,//profundidad
    y:150,//altura
    z:-180 //horizontal
},

{
    nombre: 'Humidificador',
    titulo: 'Humidificador',

    descripcion:`
<p>
El humidificador es un dispositivo incorporado al circuito respiratorio que acondiciona el gas suministrado al paciente mediante el aporte de humedad y temperatura adecuadas. Su utilización ayuda a preservar la función normal de las vías respiratorias durante la ventilación mecánica.
</p>

<ul>
    <li>Humidifica el gas inspirado.</li>
    <li>Calienta el aire suministrado al paciente.</li>
    <li>Reduce la sequedad de las mucosas respiratorias.</li>
    <li>Favorece la movilización y eliminación de secreciones.</li>
    <li>Disminuye el riesgo de lesiones asociadas al aire seco.</li>
</ul>
`,

    x: 0,
    y:-180,
    z:100
},

{
    nombre: 'Conexiones del circuito respiratorio',
    titulo: 'Conexiones del circuito respiratorio',

    descripcion:`
    <p>
    Las conexiones del circuito respiratorio corresponden a los puntos de unión entre el ventilador, los distintos componentes del circuito y la interfaz del paciente. Estas conexiones permiten el transporte adecuado de gases y la transmisión de información necesaria para la monitorización respiratoria.
    </p>

    <ul>
        <li>Conexión del puerto inspiratorio para el suministro de gas.</li>
        <li>Conexión del puerto espiratorio para la evacuación del aire exhalado.</li>
        <li>Conectores para el sensor de flujo y monitorización respiratoria.</li>
        <li>Acoplamiento del humidificador al circuito.</li>
        <li>Conexión de la interfaz del paciente (tubo endotraqueal, mascarilla o cánula).</li>
        <li>Garantizan la estanqueidad y seguridad del sistema ventilatorio.</li>
    </ul>
    `,

    x:50,//profundidad
    y:30,//altura
    z:37 //horizontal
},  

{
    nombre: 'Humidificador',
    titulo: 'Humidificador',

    descripcion:`
        <p>
    Posee sensores para el acondicionamiento del oxigeno
    </p>

    <ul>
        <li>Control de temperatura</li>
        <li>Humidificación</li>
        <li>Prevención de sequedad</li>
    </ul>
    `,

    x: 0,
    y:-180,
    z:100
}

];

loader.load(

    "./modelos/medical_ventilator.stl",

    function(geometry){

        geometry.computeVertexNormals();

        geometry.center();


        const material =

        new THREE.MeshStandardMaterial({

            color:0xD8DDE6,

            metalness:0.2,

            roughness:0.6

        });


        const modelo =

        new THREE.Mesh(

            geometry,

            material

        );


        modelo.rotation.x =

        -Math.PI/2;


        modelo.scale.set(

            1000,

            1000,

            1000

        );


        scene.add(

            modelo

        );
        


hotspots.forEach(h=>{

    const esfera =
    new THREE.Mesh(

        new THREE.SphereGeometry(
            20,
            20,
            20
        ),

        new THREE.MeshBasicMaterial({

            color:0x00BFFF

        })

    );

    esfera.position.set(

        h.x,
        h.y,
        h.z

    );

    esfera.name =
    h.nombre;

    scene.add(
        esfera
    );

});


        const box =

        new THREE.Box3()

        .setFromObject(modelo);


        const center =

        box.getCenter(

            new THREE.Vector3()

        );


        const size =

        box.getSize(

            new THREE.Vector3()

        );


        const maxDim =

        Math.max(

            size.x,

            size.y,

            size.z

        );


        controls.target.copy(

            center

        );


        camera.position.set(

            center.x,

            center.y + maxDim,

            center.z + maxDim * 2

        );


        camera.lookAt(

            center

        );


        controls.update();


        console.log(

            "Modelo cargado"

        );

    },

    undefined,

    function(error){

        console.error(error);

    }

);


// ANIMACIÓN

function animate(){

    requestAnimationFrame(

        animate

    );


    controls.update();


    renderer.render(

        scene,

        camera

    );

}


animate();


// RESPONSIVE

window.addEventListener(

    "resize",

    ()=>{

        camera.aspect =

        window.innerWidth /

        window.innerHeight;


        camera.updateProjectionMatrix();


        renderer.setSize(

            window.innerWidth,

            window.innerHeight

        );

    }

);


// CHAT

const chatToggle =

document.getElementById(

    "chatToggle"

);


const chatWindow =

document.getElementById(

    "chatWindow"

);


const closeChat =

document.getElementById(

    "closeChat"

);


const chatInput =

document.getElementById(

    "chatInput"

);


const sendBtn =

document.getElementById(

    "sendBtn"

);


const chatMessages =

document.getElementById(

    "chatMessages"

);

const infoPanel =
document.getElementById(
    "infoPanel"
);

const infoTitle =
document.getElementById(
    "infoTitle"
);

const infoContent =
document.getElementById(
    "infoContent"
);

const closeInfo =
document.getElementById(
    "closeInfo"
);

closeInfo.addEventListener(

    "click",

    ()=>{

        infoPanel.style.display =
        "none";

    }

);


chatToggle.addEventListener(

    "click",

    ()=>{

        chatWindow.style.display =

        "flex";

    }

);


closeChat.addEventListener(

    "click",

    ()=>{

        chatWindow.style.display =

        "none";

    }

);


sendBtn.addEventListener(

    "click",

    enviarPregunta

);


function enviarPregunta(){

    const pregunta =

    chatInput.value.trim();


    if(pregunta===""){

        return;

    }


    chatMessages.innerHTML +=

    `
    <div class="userMessage">

        ${pregunta}

    </div>
    `;


fetch(

    "https://hampi-backend.onrender.com/preguntar",

    {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify({

            pregunta: pregunta

        })

    }

)

.then(response => response.json())

.then(data => {

    chatMessages.innerHTML +=

    `
    <div class="botMessage">

        ${data.respuesta}

    </div>
    `;

    chatMessages.scrollTop =
    chatMessages.scrollHeight;

});


    chatInput.value = "";


    chatMessages.scrollTop =

    chatMessages.scrollHeight;
}


window.addEventListener(

    "click",

    detectarHotspot

);


function detectarHotspot(event){

    const rect =
    renderer.domElement.getBoundingClientRect();

    mouse.x =
    ((event.clientX - rect.left) / rect.width)
    * 2 - 1;

    mouse.y =
    -((event.clientY - rect.top) / rect.height)
    * 2 + 1;

    raycaster.setFromCamera(
        mouse,
        camera
    );

    const intersects =
    raycaster.intersectObjects(
        scene.children,
        true
    );

    console.log(intersects);

    for(const hit of intersects){

        console.log(
            "Objeto detectado:",
            hit.object.name
        );
        const hotspotInfo =
hotspots.find(

    h => h.nombre === hit.object.name

);

if(hotspotInfo){

    infoTitle.textContent =
    hotspotInfo.titulo;

    infoContent.innerHTML =
    hotspotInfo.descripcion;

    infoPanel.style.display =
    "block";

    break;
}
        
    }
}