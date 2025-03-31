// Dependencias
const express = require('express');
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json'); // Importa el archivo JSON

// Archivos
const config = require('../config');
const db = require('./utils/database');
const initModels = require('./models/initModels');
const UserRouter = require('./users/users.router');
const TalleresRouter = require('./talleres/talleres.router');
const usuario_taller = require('./usuarios_talleres/usuarios_talleres.router');

// Configuración inicial
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Autenticar y sincronizar la base de datos
db.authenticate()
  .then(() => console.log('Database autenticada'))
  .catch((err) => console.log(err));

db.sync()
  .then(() => console.log('Database sincronizada'))
  .catch((err) => console.log(err));

// Iniciar modelos
initModels();

// Ruta de inicio
app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'OK!',
    routes: {
      users: '/api/v1/users',
      talleres: '/api/v1/talleres',
      usuarios_talleres: '/api/v1/usuarios-talleres',
      docs: '/api/v1/docs' // Ruta de Swagger UI
    }
  });
});

// Rutas de la API
app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc)); // Swagger UI
app.use('/api/v1/users', UserRouter);
app.use('/api/v1/talleres', TalleresRouter);
app.use('/api/v1/usuarios-talleres', usuario_taller);

// Iniciar servidor
app.listen(config.api.port, () => {
  console.log(`Server started on http://localhost:${config.api.port}`);
});

module.exports = app;