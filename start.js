const cfonts = require('cfonts');
const colors = require('colors');
const { exec } = require('child_process');
const path = require('path');

// Exibir o banner
cfonts.say('Termux do Zero', {
  font: 'block',
  align: 'center',
  colors: ['cyan', 'white'],
  background: 'black',
  letterSpacing: 1
});

console.log(colors.green('┍━━━»•» 🌺 «•«━━━┑'));
console.log(colors.green('        "Termux do Zero"'));
console.log(colors.green('┕━━━»•» 🌺 «•«━━━┙'));

// Iniciar o servidor
console.log(colors.blue('\nIniciando o servidor...'));

exec(`node ${path.join(__dirname, 'server.js')}`, (err, stdout, stderr) => {
  if (err) {
    console.error(colors.red(`Erro ao iniciar o servidor: ${err.message}`));
    return;
  }
  if (stderr) {
    console.error(colors.red(`Erro: ${stderr}`));
    return;
  }
  console.log(stdout);
});

