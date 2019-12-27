const messages = [
  "Hola",
  "Adiós",
  "¿Cómo estás?",
  "¿Qué tal tu día?",
  "Hasta pronto",
  "Hasta luego",
  "El derecho al respeto ajeno es la paz"
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

module.exports = {
  randomMsg
};