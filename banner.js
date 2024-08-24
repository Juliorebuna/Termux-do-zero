const CFonts = require('cfonts');
const colors = require('colors');

// Configuração do banner
CFonts.say('Termux do Zero', {
  font: 'block',
  align: 'center',
  colors: ['cyan', 'Black'],
  background: 'black',
  letterSpacing: 1,
  lineHeight: 1,
});

console.log(colors.green('Projeto: Termux do Zero'));
console.log(colors.yellow('Desenvolvedor: juliorebuna'));
console.log(colors.red('Repositório GitHub: https://github.com/Juliorebuna'));

