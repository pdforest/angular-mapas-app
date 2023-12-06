const {writeFileSync, mkdirSync} = require('fs');

require('dotenv').config();
//console.log(process.env) // remove this after you've confirmed it is working

const targetPath = './src/environments/environment.ts';
const targetPathProd = './src/environments/environment.prod.ts';

const envFileContent = `
export const environment = {
    mapboxToken: "${ process.env['mapboxToken'] }",
    production: false,
};
`;

const envFileContentProd = `
export const environment = {
    mapboxToken: "${ process.env['mapboxToken'] }",
    production: true,
};
`;

mkdirSync('./src/environments', { recursive: true });

writeFileSync( targetPath, envFileContent );
writeFileSync( targetPathProd, envFileContentProd );
