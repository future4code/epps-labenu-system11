export function calcularIdade(aniversario: string) {
    var nascimento = aniversario.split("/");
    var dataNascimento = new Date(parseInt(nascimento[2], 10),
    parseInt(nascimento[1], 10) - 1,
    parseInt(nascimento[0], 10));
    var diferenca = Date.now() -  dataNascimento.getTime();
    var idade = new Date(diferenca);
    return Math.abs(idade.getUTCFullYear() - 1970);
}