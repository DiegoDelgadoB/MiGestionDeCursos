const express = require ('expres');
const app = express();
const bodyParser = require ('body-parser');

const { nuevoCurso, prepararCurso, editarCurso, eliminarCurso } = require('./consulta');

app.use (bodyParser.urlencoded({ extended: false }));
app.use (bodyParser.json());

app.listen (3000, () => console.log('Server ON.'));

