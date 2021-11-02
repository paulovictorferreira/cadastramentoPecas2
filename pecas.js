let peso = 100;

if (peso>= 100) {
    console.log("A peça possui um peso adequado,pode ser cadastrada")
} else {
    console.log("A peça nao possui um peso adequado,nao pode ser cadastrada")
}

let listaPecas = ["Amortecedor", "Embreagem", "disco de freio", "Virabrequim", "Vela", "Bateria", "Correia", "Carter", "ingnição", "Vela"]

if (listaPecas.length < 10 ) {
    console.log("A lista ainda possui espaço para mais peças")
} else {
    console.log("Não há espaço disponil na lista,a peça não pode ser cadastrada")
}

let texto = "35"   // string
let numero = 35  // Number

 // 35 + 35 -> 70
 // "35" + "35" -> "3535"

 let nomePeças = "fio"
 if (nomePeças.length >= 3) {
     console.log("Nome de peça é valido,pode seguir com cadastro")
 } else {
     console.log("Nome de peça invalido,o nome deve conter mais de 3 caracteres")
 }