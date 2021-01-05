// Definimos las options  --> ya que se repiten en las dos
const opts = {
    base:{
        demand: true,
        alias : 'b'
    },
    limite: {
        alias  : 'l',
        default: 10
    }
}

// Definimos comandos
const argv = require('yargs')
                .command('listar','Imprimer la tabla en consola', opts)
                .command('crear', 'Crea un archivo con la tabla', opts)
                .help()
                .argv;


module.exports = {
    argv
}