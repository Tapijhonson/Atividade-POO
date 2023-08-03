
class Pessoa {
    constructor(nome,idade) {
    this.nome = nome;
    this.idade = idade;
}
apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
}
}

const pessoa1 = new Pessoa("Moises",24)
pessoa1.apresentar()

class Aluno extends Pessoa {
    constructor(nome,idade,matricula){
        super(nome,idade);
        this.matricula = matricula;
    }
}

const aluno1 = new Aluno("Lamartine",29,"12345")
console.log(aluno1)