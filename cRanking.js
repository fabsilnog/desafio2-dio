const readline = require('readline');

function cNivel() {
  const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  leitor.question('Digite a quantidade de vitórias: ', (vitorias) => {
    leitor.question('Digite a quantidade de derrotas: ', (derrotas) => {
      const saldoVitorias = vitorias - derrotas;
      let nivel;

      if (saldoVitorias <= 0) {
        nivel = "Noob";
      } else if (saldoVitorias >0 && saldoVitorias <= 10) {
        nivel = "Ferro";
      } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze";
      } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
      } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
      } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
      } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
      } else {
        nivel = "Imortal";
      }

      console.log(`Herói tem saldo de vitórias de ${saldoVitorias} e está no nível ${nivel}`);

      leitor.close();
    });
  });
}

module.exports = cNivel;
