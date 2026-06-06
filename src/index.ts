import carregarPessoas from "./function/carregar-pessoas";
import { SortearAzarado } from "./function/sortear-azarado";
import { terminal } from "./ui/terminal";

const pessoas = carregarPessoas("src/data/dados.csv");
const azarado = SortearAzarado(pessoas);

terminal.clear();
terminal.white("\n\nO").brightRed(" AZARADO");
terminal.bold.brightGreen(" MAIS SORTUDO").white(" é: \n");
terminal.bold.brightYellow(`🏆 ${azarado.toString()}`);
terminal.bold.brightGreen(
  "\n🍀 O grande vencedor da Semana da Formação.DEV! 🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉"
);
console.log();
