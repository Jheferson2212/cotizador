const WebSocket = require('ws');

console.log('Iniciando el servidor WebSocket...');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Un cliente se ha conectado');
  ws.send('¡Hola, cliente!');
});

wss.on('listening', () => {
  console.log('Servidor WebSocket está escuchando en el puerto 8080');
});

wss.on('error', (err) => {
  console.error('Error en el servidor WebSocket:', err);
});

console.log('Servidor WebSocket configurado');
