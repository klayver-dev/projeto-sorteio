import { Pessoa } from "../model/Pessoa";
import fs from "fs";

export default function carregarPessoas(arquivo: string): Pessoa[] {
  const conteudo = fs.readFileSync(arquivo, "utf8");
  const linhas = conteudo.split("\n");

  const pessoas = linhas
    .filter((l: any) => l.trim().length > 0)
    .map((linha: any) => {
      const [nome, email] = linha.split(";");
      return new Pessoa(nome.trim(), email.trim());
    });
  return pessoas;
}
