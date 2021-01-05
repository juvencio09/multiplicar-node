
const fs      = require('fs');
const colors  = require('colors');


const listarTabla = (base, limite) => {
    
    return new Promise((resolve,reject) => {

        if(!Number(base)){
            reject(`El valor "${base}", no es un númmero`);
        }

        let data = '';

        for(let i = 1; i <= limite; i++){
            data += `${base} X ${i} : ${base * i} \n`;
        }

        resolve(data);
    });
}

const crearArchivo = (base, limite) => {

    return new Promise((resolve,reject) => {

        if( !Number(base) ){
            reject(`El valor introducido: "${base}", no es un número`.red);
            return;
        }
        
        let data = "";
        
        for(let i = 1; i <= limite; i++){
            data += `2 X ${i} : ${i * base} \n`;
        }
        
        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
            
            if (err) {
                //mandamos el error
                reject(err);
            }else{
                //mandamos el nombre del archivo
                resolve(`tabla-${base}.txt`);
            }

        });          
    });
} 

module.exports = {
    crearArchivo,
    listarTabla
}

