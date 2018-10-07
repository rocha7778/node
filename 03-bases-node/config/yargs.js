opciones = {

    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        demand: false,
        alias: 'l',
        default: 10
    }


}


const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opciones)
    .command('crear', 'Crear una  la tabla de multiplicar', opciones)
    .help()
    .argv;


module.exports = {
    argv: argv
}