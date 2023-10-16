//! ARCHIVO PARA CREAR LAS VARIABLES DE ENVIROMENT YA QUE NO PODEMOS SUBIR NUESTRAS KEY A GITHUB NECESITAMOS QUE NPM GENERE AUTOMANTICAMENTE LAS ENVIROMENT POR NOSOTROS POR SI ALGUIEN
//! DESCARGA ESTE ARCHIVO LUEGO DESDE GITHUB
const {writeFileSync, mkdirSync} = require('fs')


require('dotenv').config();


const targetPath = './src/environments/environment.ts';

const envFileContent = `
export const environment = {
	mapbox_key: "${ process.env['MAPBOX_KEY']} ",
	otra: "PROPIEDAD",
};
`

mkdirSync('./src/environments', {recursive: true})

writeFileSync(targetPath, envFileContent)