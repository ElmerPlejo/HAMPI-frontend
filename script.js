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
    z:220,


    desbloqueado:true,
    completado:false,
    modulo:1,
    preguntaIA:
    "Explícame detalladamente la pantalla del ventilador Hamilton C3.",

preguntas:[

{

id:1,

pregunta:
"¿Qué información puede visualizar el operador en la pantalla principal del ventilador?",

opciones:[

"Únicamente la presión de la vía aérea",

"Solo la frecuencia respiratoria",

"Parámetros respiratorios, curvas y alarmas",

"Únicamente el volumen tidal"

],

correcta:2,

explicacion:
"La pantalla principal permite visualizar parámetros respiratorios, curvas de monitorización y alarmas del ventilador."

},

{

id:2,

pregunta:
"¿Cuál es la función principal de la pantalla del HAMILTON-C3?",

opciones:[

"Humidificar el aire",

"Permitir la interacción del usuario con el ventilador",

"Regular automáticamente el oxígeno",

"Conectar el circuito respiratorio"

],

correcta:1,

explicacion:
"La pantalla constituye la principal interfaz de interacción entre el usuario y el ventilador."

},

{

id:3,

pregunta:
"¿Cuál de los siguientes parámetros puede observarse en la pantalla?",

opciones:[

"Frecuencia respiratoria",

"Temperatura corporal",

"Glucosa sanguínea",

"Presión arterial invasiva"

],

correcta:0,

explicacion:
"La pantalla muestra parámetros respiratorios como la frecuencia respiratoria, FiO₂, presión y volumen tidal."

},

{

id:4,

pregunta:
"¿Qué elemento gráfico puede visualizarse además de los parámetros numéricos?",

opciones:[

"Radiografías",

"Curvas y bucles respiratorios",

"Electrocardiograma de 12 derivaciones",

"Ecografía pulmonar"

],

correcta:1,

explicacion:
"El ventilador permite visualizar formas de onda (curvas) y bucles respiratorios para facilitar el seguimiento del paciente."

},

{

id:5,

pregunta:
"¿Qué ventaja ofrece la pantalla táctil del HAMILTON-C3?",

opciones:[

"Permite modificar la ventilación y acceder a los ajustes",

"Realiza automáticamente la intubación",

"Controla la saturación de oxígeno",

"Elimina la necesidad de alarmas"

],

correcta:0,

explicacion:
"La pantalla táctil facilita la configuración de parámetros, modos ventilatorios y la navegación por las funciones del respirador."

}

]
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
    z:-180, //horizontal


    desbloqueado:false,
    completado:false,
    modulo:2,
    preguntaIA:
    "Explícame detalladamente el circuito respiratorio del ventilador Hamilton C3.",

preguntas:[

{

id:1,

pregunta:
"¿Cuál es la función principal del circuito respiratorio?",

opciones:[

"Transportar los gases entre el ventilador y el paciente",

"Regular la presión arterial",

"Controlar la temperatura corporal",

"Almacenar oxígeno"

],

correcta:0,

explicacion:
"El circuito respiratorio transporta la mezcla de gases desde el ventilador hacia el paciente y permite el retorno del gas espirado."

},

{

id:2,

pregunta:
"¿Qué componente forma parte del circuito respiratorio?",

opciones:[

"Pieza en Y",

"Monitor ECG",

"Bomba de infusión",

"Sensor de SpO₂"

],

correcta:0,

explicacion:
"El circuito integra la pieza en Y, el sensor de flujo y la válvula espiratoria."

},

{

id:3,

pregunta:
"¿Qué ocurre con el aire exhalado por el paciente?",

opciones:[

"Es evacuado mediante el circuito espiratorio",

"Regresa al suministro de oxígeno",

"Se almacena en el humidificador",

"Sale directamente al ambiente"

],

correcta:0,

explicacion:
"El circuito permite la salida controlada del aire espirado para su monitorización."

},

{

id:4,

pregunta:
"¿Qué parámetros pueden medirse gracias al circuito respiratorio?",

opciones:[

"Presión, flujo y volumen",

"Glucosa y temperatura",

"Frecuencia cardíaca",

"Electrocardiograma"

],

correcta:0,

explicacion:
"El circuito permite medir presión, flujo y volumen respiratorio."

},

{

id:5,

pregunta:
"¿Cuál es uno de los objetivos del circuito respiratorio?",

opciones:[

"Mantener una ventilación segura",

"Reducir la frecuencia cardíaca",

"Controlar la presión arterial",

"Regular la temperatura del ventilador"

],

correcta:0,

explicacion:
"El circuito respiratorio contribuye a mantener una ventilación eficiente y segura."

}

]
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
    z:100,
    desbloqueado:false,
    completado:false,
    modulo:3,
    preguntaIA:
        "Explícame detalladamente el humidificador del ventilador Hamilton C3.",

    preguntas:[

{

id:1,

pregunta:
"¿Cuál es la función principal del humidificador?",

opciones:[

"Humidificar y calentar el gas inspirado",

"Disminuir la presión arterial",

"Regular la frecuencia respiratoria",

"Generar oxígeno"

],

correcta:0,

explicacion:
"El humidificador acondiciona el aire aportando humedad y temperatura."

},

{

id:2,

pregunta:
"¿Por qué es importante humidificar el gas respiratorio?",

opciones:[

"Porque protege las vías respiratorias",

"Porque reduce la presión arterial",

"Porque disminuye el consumo eléctrico",

"Porque aumenta la batería"

],

correcta:0,

explicacion:
"El aire seco puede lesionar las vías respiratorias del paciente."

},

{

id:3,

pregunta:
"¿Qué beneficio ofrece un humidificador durante la ventilación mecánica?",

opciones:[

"Favorece la eliminación de secreciones",

"Reduce la frecuencia cardíaca",

"Disminuye la presión arterial",

"Produce oxígeno"

],

correcta:0,

explicacion:
"Una adecuada humidificación facilita la movilización de secreciones."

},

{

id:4,

pregunta:
"¿Qué puede ocurrir si el aire inspirado no se humidifica correctamente?",

opciones:[

"Sequedad de las mucosas",

"Hipertensión arterial",

"Bradicardia",

"Hipoglucemia"

],

correcta:0,

explicacion:
"El aire seco favorece lesiones y resequedad de las mucosas."

},

{

id:5,

pregunta:
"¿Dónde se integra normalmente el humidificador?",

opciones:[

"En el circuito respiratorio",

"En la pantalla",

"En la batería",

"En el carro"

],

correcta:0,

explicacion:
"El humidificador forma parte del circuito respiratorio."

}

]
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
    z:37, //horizontal

    desbloqueado:false,
    completado:false,
    modulo:4,
    preguntaIA:
    "Explícame detalladamente las conexiones del circuito respiratorio del ventilador Hamilton C3.",

    preguntas:[

{

id:1,

pregunta:
"¿Cuál es la función principal de las conexiones del circuito respiratorio?",

opciones:[

"Unir los componentes del sistema respiratorio",

"Almacenar oxígeno",

"Regular la batería",

"Controlar el modo ventilatorio"

],

correcta:0,

explicacion:
"Las conexiones permiten integrar todos los componentes del circuito."

},

{

id:2,

pregunta:
"¿Qué conexión transporta el gas inspirado hacia el paciente?",

opciones:[

"Puerto inspiratorio",

"Puerto espiratorio",

"Puerto USB",

"Puerto de alimentación"

],

correcta:0,

explicacion:
"El puerto inspiratorio suministra el gas respiratorio."

},

{

id:3,

pregunta:
"¿Cuál es la función del puerto espiratorio?",

opciones:[

"Permitir la evacuación del aire exhalado",

"Regular el oxígeno",

"Controlar el volumen tidal",

"Activar las alarmas"

],

correcta:0,

explicacion:
"El puerto espiratorio conduce el aire exhalado fuera del paciente."

},

{

id:4,

pregunta:
"¿Qué componente puede conectarse para medir flujo y presión?",

opciones:[

"Sensor de flujo",

"Batería",

"Pantalla táctil",

"Carro"

],

correcta:0,

explicacion:
"El sensor de flujo proporciona información para la monitorización respiratoria."

},

{

id:5,

pregunta:
"¿Por qué es importante garantizar conexiones herméticas?",

opciones:[

"Para evitar fugas y asegurar una ventilación adecuada",

"Para ahorrar energía",

"Para disminuir el peso del equipo",

"Para aumentar el brillo de la pantalla"

],

correcta:0,

explicacion:
"Las conexiones deben mantener la estanqueidad para garantizar una ventilación segura."

}

]
},  


];

const hotspotMeshes = {};
const hotspotLabels = {};

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

crearEtiquetaModulo(

    h,

    h.x,

    h.y+35,

    h.z

);
    let colorEsfera;

    if(h.completado){

        colorEsfera = 0x22C55E;

    }
    else if(h.desbloqueado){

        colorEsfera = 0x00BFFF;

    }
    else{

        colorEsfera = 0xE53935;

    }

    const esfera = new THREE.Mesh(

        new THREE.SphereGeometry(
            20,
            20,
            20
        ),

        new THREE.MeshBasicMaterial({

            
            color:colorEsfera

        })

    );

    esfera.position.set(

        h.x,
        h.y,
        h.z

    );

    esfera.name =
    h.nombre;

    scene.add(esfera);
    hotspotMeshes[h.modulo] = esfera;
    

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

            1000,

            700,

            900

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

const learnBtn =
document.getElementById(
    "learnBtn"
);
const askBtn =
document.getElementById(
    "askBtn"
);

const moduleStatus =
document.getElementById(
    "moduleStatus"
);

const closeInfo =
document.getElementById(
    "closeInfo"
);

const quizBtn =
document.getElementById(
    "quizBtn"
);



const quizPanel =
document.getElementById(
    "quizPanel"
);


const resultPanel =
document.getElementById(
    "resultPanel"
);

const resultStatus =
document.getElementById(
    "resultStatus"
);

const resultScore =
document.getElementById(
    "resultScore"
);

const resultCorrect =
document.getElementById(
    "resultCorrect"
);

const continueBtn =
document.getElementById(
    "continueBtn"
);


const closeQuiz =
document.getElementById(
    "closeQuiz"
);

const quizModule =
document.getElementById(
    "quizModule"
);

const quizQuestion =
document.getElementById(
    "quizQuestion"
);

const quizOptions =
document.getElementById(
    "quizOptions"
);

const quizProgress =
document.getElementById(
    "quizProgress"
);

const nextQuestion =
document.getElementById(
    "nextQuestion"
);



closeInfo.addEventListener(

    "click",

    ()=>{

        infoPanel.style.display =
        "none";

    }

);

let moduloActual = null;
const evaluacion={

    modulo:null,

    preguntas:[],

    indice:0,

    respuestas:[],

    puntaje:0

};


learnBtn.addEventListener(

    "click",

    ()=>{

        if(moduloActual){

            infoContent.innerHTML =
            moduloActual.descripcion;

            infoContent.style.display =
            "block";

        }

    }

);

quizBtn.addEventListener(

    "click",

    ()=>{

        if(!moduloActual){

            return;

        }

        iniciarEvaluacion();

    }

);

closeQuiz.addEventListener(

    "click",

    ()=>{

        quizPanel.style.display="none";

    }

);
nextQuestion.addEventListener(

    "click",

    ()=>{

        siguientePregunta();

    }

);

askBtn.addEventListener(

    "click",

    ()=>{

        if(!moduloActual){

            return;

        }

        chatWindow.style.display =

        "flex";

        chatInput.value =

        moduloActual.preguntaIA;

        chatInput.focus();

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

    const respuestaHTML =
    marked.parse(data.respuesta);

    chatMessages.innerHTML +=

    `
    <div class="botMessage">

        ${respuestaHTML}

    </div>
    `;

    chatMessages.scrollTop =
    chatMessages.scrollHeight;

});


    chatInput.value = "";
chatMessa

    chatMessages.scrollTop =

    chatMessages.scrollHeight;
}


window.addEventListener(

    "click",

    detectarHotspot

);

continueBtn.addEventListener(

    "click",

    ()=>{

        // Si aprobó
        if(moduloActual){

            aprobarModulo();

        }

        resultPanel.style.display="none";

    }

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

    if(!hotspotInfo.desbloqueado){

        alert("🔒 Este módulo está bloqueado.\n\nCompleta aquellos disponibles para desbloquearlo.");
        break;
    }


    mostrarModulo(hotspotInfo);

    break;
}



        
    }
}

function mostrarModulo(modulo){

    infoTitle.textContent =
    modulo.titulo;

    if(modulo.completado){

        moduleStatus.textContent =
        "🟢 Completado";

    }

    else if(modulo.desbloqueado){

        moduleStatus.textContent =
        "🔵 Disponible";

    }

    else{

        moduleStatus.textContent =
        "🔒 Bloqueado";

    }

    moduloActual = modulo;

    infoContent.innerHTML = "";

    infoContent.style.display = "none";

    infoPanel.style.display =
    "block";

}


//=========================================
// CREAR ETIQUETA DEL MÓDULO
//=========================================

function crearEtiquetaModulo(h, x, y, z){

    // Crear un canvas
    const canvas = document.createElement("canvas");

    canvas.width = 256;
    canvas.height = 128;

    const ctx = canvas.getContext("2d");

    // Fondo blanco con borde azul
    ctx.fillStyle = "white";
    ctx.strokeStyle = "#005EB8";
    ctx.lineWidth = 10;

    ctx.beginPath();
    ctx.roundRect(10,10,236,108,20);
    ctx.fill();
    ctx.stroke();

    // Texto
    ctx.fillStyle = "#005EB8";
    ctx.font = "bold 72px Poppins";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.shadowColor = "rgba(0,0,0,0.35)";
    ctx.shadowBlur = 8;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;

let texto = "";

    if(h.completado){

        texto = "✅ M"+h.modulo;

    }

    else if(h.desbloqueado){

        texto = "📘 M"+h.modulo;

    }

    else{

        texto = "🔒 M"+h.modulo;

    }

    ctx.fillText(

        texto,

        canvas.width/2,

        canvas.height/2

    );

    // Convertir el canvas en textura
    const textura = new THREE.CanvasTexture(canvas);

    const material = new THREE.SpriteMaterial({

        map:textura,

        transparent:true,
        depthTest:false,

        depthWrite:false

    });

    const sprite = new THREE.Sprite(material);

    sprite.position.set(

        x,

        y,

        z

    );

    sprite.scale.set(

        120,

        60,

        1

    );

    scene.add(sprite);
        hotspotLabels[h.modulo] = sprite;

}


function iniciarEvaluacion(){

    evaluacion.modulo = moduloActual;

    evaluacion.preguntas = moduloActual.preguntas;

    evaluacion.indice = 0;

    evaluacion.respuestas = [];

    evaluacion.puntaje = 0;

    quizModule.textContent =

    "Módulo " +

    moduloActual.modulo +

    " - " +

    moduloActual.titulo;

    quizPanel.style.display =

    "block";
    mostrarPregunta();

}

function mostrarPregunta(){

    const pregunta = evaluacion.preguntas[evaluacion.indice];

    if(!pregunta){

        return;

    }

    // Mostrar texto de la pregunta
    quizQuestion.textContent = pregunta.pregunta;

    // Limpiar opciones anteriores
    quizOptions.innerHTML = "";

    // Crear botones
    pregunta.opciones.forEach((opcion, opcionIndex)=>{

        const boton = document.createElement("button");

        boton.className = "optionBtn";

        boton.textContent = opcion;

        // Si ya respondió esta pregunta, mantener seleccionada
        if(evaluacion.respuestas[evaluacion.indice] === opcionIndex){

            boton.classList.add("selected");

        }

        boton.addEventListener("click", ()=>{

            document.querySelectorAll(".optionBtn").forEach(b=>{

                b.classList.remove("selected");

            });

            boton.classList.add("selected");

            evaluacion.respuestas[evaluacion.indice] = opcionIndex;

            console.log(evaluacion.respuestas);

        });

        quizOptions.appendChild(boton);

    });

    actualizarBarra();

    if(evaluacion.indice === evaluacion.preguntas.length-1){

        nextQuestion.textContent = "Finalizar evaluación";

    }else{

        nextQuestion.textContent = "Siguiente";

    }

}

function actualizarBarra(){

    const total =

    evaluacion.preguntas.length;

    const actual =

    evaluacion.indice+1;

    const porcentaje =

    (actual/total)*100;

    document.getElementById(

        "progressFill"

    ).style.width=

    porcentaje+"%";

    document.getElementById(

        "progressText"

    ).textContent=

    "Pregunta "+actual+

    " de "+total;

}


function siguientePregunta(){

    // Verificar que haya seleccionado una respuesta
    if(evaluacion.respuestas[evaluacion.indice] == null){

        alert("Selecciona una respuesta antes de continuar.");

        return;

    }

    evaluacion.indice++;

    if(evaluacion.indice >= evaluacion.preguntas.length){

        finalizarEvaluacion();

        return;

    }

    mostrarPregunta();

}


function finalizarEvaluacion(){

    let correctas = 0;

    evaluacion.preguntas.forEach((pregunta, indice)=>{

        if(

            evaluacion.respuestas[indice] === pregunta.correcta

        ){

            correctas++;

        }

    });

    const porcentaje = Math.round(

        (correctas / evaluacion.preguntas.length) * 100

    );

    const aprobado = porcentaje >= 80;

    mostrarResultado(

        correctas,

        porcentaje,

        aprobado

    );

}

function mostrarResultado(

    correctas,

    porcentaje,

    aprobado

){

    quizPanel.style.display = "none";

    resultPanel.style.display = "block";

    resultStatus.textContent =

        aprobado ?

        "✅ MÓDULO APROBADO"

        :

        "❌ MÓDULO NO APROBADO";

    resultScore.textContent =

        porcentaje + "%";

    resultCorrect.textContent =

        correctas +

        " de " +

        evaluacion.preguntas.length +

        " respuestas correctas";

}

function aprobarModulo(){

    console.log("Entró a aprobarModulo");

    moduloActual.completado = true;

    const siguiente = hotspots.find(

        h => h.modulo === moduloActual.modulo + 1

    );

    if(siguiente){

        siguiente.desbloqueado = true;

    }

    actualizarHotspots();
    actualizarEtiquetas();

}

function actualizarHotspots(){

    console.log("Actualizando hotspots...");

    hotspots.forEach(h=>{

        const esfera = hotspotMeshes[h.modulo];

        console.log(
            "Modulo:",
            h.modulo,
            esfera
        );

        if(!esfera){

            console.log("No encontró esfera");

            return;

        }

        if(h.completado){

            console.log("Verde");

            esfera.material.color.set(0x22C55E);

        }

        else if(h.desbloqueado){

            console.log("Azul");

            esfera.material.color.set(0x00BFFF);

        }

        else{

            console.log("Rojo");

            esfera.material.color.set(0xE53935);

        }

    });

}

function actualizarEtiquetas(){

    console.log("Actualizando etiquetas...");

    hotspots.forEach(h=>{

        console.log(
            "Modulo",
            h.modulo,
            "Completado:",
            h.completado,
            "Desbloqueado:",
            h.desbloqueado
        );

        const sprite = hotspotLabels[h.modulo];

        if(sprite){

            scene.remove(sprite);

        }

        crearEtiquetaModulo(

            h,

            h.x,

            h.y+35,

            h.z

        );

    });

}