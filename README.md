# 🎉 Sorteio do Azarado Mais Sortudo

Este projeto foi criado para realizar o sorteio de um prêmio entre os participantes da **Semana da Formação.DEV**.

A proposta é simples, mas com uma regra diferente dos sorteios tradicionais: o vencedor não é o primeiro participante sorteado, mas sim o último nome restante após todas as eliminações.

O participante que sobreviver até o final do sorteio recebe o título de **Azarado Mais Sortudo** e leva o prêmio para casa. 🍀

---

## 🚀 Funcionalidades

- 📄 Carregamento automático da lista de participantes através de arquivo CSV.
- 🎲 Sorteio aleatório com lógica invertida.
- 🏆 Exibição do vencedor diretamente no terminal.
- 💻 Interface interativa via terminal.

---

## 📋 Como funciona

1. O usuário inicia o programa pelo terminal.
2. O sistema solicita ou carrega um arquivo CSV contendo a lista de participantes.
3. Os participantes são carregados para o sorteio.
4. A cada rodada, um participante é sorteado e eliminado.
5. O processo continua até restar apenas um participante.
6. O último participante restante é declarado vencedor.

---

## 📁 Estrutura do CSV

O arquivo CSV deve utilizar ponto e vírgula (`;`) como separador de colunas e conter os campos `nome` e `email`.

### Exemplo

```csv
nome;email
Maria;maria@maria.com.br
João;joao@email.com.br
Ana;ana@email.com.br
Carlos;carlos@email.com.br
```

---

## 🏆 Regra Principal

> O vencedor não é o primeiro participante sorteado.
>
> O vencedor é o último participante restante após todas as eliminações.

---

## 📌 Exemplo de Resultado

```text
❌ João foi eliminado
❌ Ana foi eliminada
❌ Carlos foi eliminado

O AZARADO MAIS SORTUDO é:
🏆 Rodrigo Barros <rod***@empresa.com.br>
🍀 O grande vencedor da Semana da Formação.DEV! 🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉
```

---

Desenvolvido para a **Semana da Formação.DEV** 🚀

## ▶️ Como Executar

### Instalação

Clone o repositório:

```bash
git clone <https://github.com/klayver-dev/projeto-sorteio.git>
cd projeto-sorteio
```

Instale as dependências:

```bash
npm install
```

### Executando o projeto

```bash
npm start
```

### Durante a execução

O arquivo esta em src/data/dados.csv

Após carregar os participantes, o sorteio será iniciado e as eliminações serão exibidas em tempo real até a definição do vencedor.
