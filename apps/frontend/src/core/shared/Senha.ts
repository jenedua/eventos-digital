/* eslint-disable @typescript-eslint/no-unused-vars */
export default class Senha {
    static novo(tamanho: number = 15): string {
        const minusculas = 'abcdefghijklmnopqrstuvwxyz';
        const maiusculas = minusculas.toUpperCase();
        const numeros = '0123456789';
        const especiais = "!@#$%&*";

        const grupos = [minusculas, maiusculas, numeros, especiais]; 
        const senha = [];

        for (let i = 0; i < tamanho; i++) {
            const grupo = grupos[Math.floor(Math.random() * grupos.length)];
            const caractere = grupo.charAt(Math.floor(Math.random() * grupo.length));
            senha.push(caractere);
        }

        return senha.join('');
        
    }
}
// console.log(Senha.criar(10));