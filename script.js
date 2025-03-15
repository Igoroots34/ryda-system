// Dados (substitua com seus dados reais)
const dados = {
  saldo: 324513.52,
  despesa: 8004.51,
  receita: [
    1000, 1200, 1500, 1800, 2000, 2200, 2500, 2300, 2600, 2800, 3000, 3200,
  ],
  despesasMes: [
    800, 900, 1100, 1300, 1500, 1700, 1900, 1800, 2100, 2300, 2500, 2700,
  ],
  gastosCategorias: [300, 150, 200, 100, 250], // Exemplo de gastos por categoria
  categorias: ['Comida', 'Casa', 'Carro', 'Lazer', 'Outros'], // Categorias de gastos
};

// Atualiza os valores no HTML
document.querySelector(
  '.saldo .valor'
).textContent = `R$ ${dados.saldo.toLocaleString('pt-BR')}`;
document.querySelector(
  '.despesas .valor'
).textContent = `R$ ${dados.despesa.toLocaleString('pt-BR')}`;

// Gráfico de Receita vs Despesa
const ctxReceitaDespesa = document
  .getElementById('grafico-receita-despesa')
  .getContext('2d');
const graficoReceitaDespesa = new Chart(ctxReceitaDespesa, {
  type: 'bar',
  data: {
    labels: [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dez',
    ],
    datasets: [
      {
        label: 'Receita',
        data: dados.receita,
        backgroundColor: 'green',
      },
      {
        label: 'Despesa',
        data: dados.despesasMes,
        backgroundColor: 'red',
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Gráfico de Gastos por Categoria
const ctxGastos = document.getElementById('grafico-gastos').getContext('2d');
const graficoGastos = new Chart(ctxGastos, {
  type: 'doughnut',
  data: {
    labels: dados.categorias,
    datasets: [
      {
        data: dados.gastosCategorias,
        backgroundColor: ['blue', 'orange', 'purple', 'yellow', 'cyan'],
      },
    ],
  },
});
