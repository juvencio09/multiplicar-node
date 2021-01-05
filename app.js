// Definimos comandos
const { argv } = require('./config/yargs');
//libreria de colores
const  colors  = require('colors');


// Importamos las funciones creadas en multiplicar
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

// console.log(argv);
let comando = argv._[0];
let base;
let limite;

switch(comando){
    case 'listar':

        argv.b ? base   = argv.b : base = argv.base;
        argv.l ? limite = argv.l : limite = argv.limite;
        listarTabla(base, limite)
            .then( texto => console.log(texto))
            .catch( e => console.log(e));

    break;
    case 'crear':

        argv.b ? base = argv.b : base = argv.base;
        argv.l ? limite = argv.l : limite = argv.limite;
        crearArchivo(base, limite)
            .then( archivo => console.log(`Archivo cread:`+` ${archivo}`.green))
            .catch( e => console.log(e));

    break;
    default: 
        console.log(`Comando: "${comando}" no reconocido`);
}

// let parametro = argv[2];
// let base      = parametro.split('=')[1];

// console.log(base);
// console.log(multiplicar);
// console.log(module);
// console.log(process.argv);

