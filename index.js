// Calculadora de partidas Rankeadas

let vitorias = 100;
let derrotas = 70;

function heroLevel(score) {
    let nivel;
    if (score < 10) {
        nivel = 'Ferro'
    } else if (score > 11 && score < 20) {
        nivel = 'Bronze'
    } else if (score > 21 && score < 50) {
        nivel = 'Prata'
    } else if (score > 51 && score < 80) {
        nivel = 'Ouro'
    } else if (score > 81 && score < 90) {
        nivel = 'Platina'
    } else if (score > 91 && score < 100) {
        nivel = 'Ascendente'
    } else if (score >= 101) {
        nivel = 'Radiante'
    }
    console.log(`O Herói tem saldo de ${score} está no nível de ${nivel}`)
}

heroLevel(vitorias - derrotas)




