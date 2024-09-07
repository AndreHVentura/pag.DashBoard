
const ctxBattery = document.getElementById("grafico-bateria").getContext("2d");
const chartBattery = {
  labels: ["12:00:00","","","","","","","","","","12:10:00","","","","","","","","","","12:20:00","","","","","","","","","","12:30:00"],
  datasets: [{
    label: "Desempenho da Bateria",
    data: [100, 100, 99, 98, 98, 98, 97, 97, 96, 96, 90, 90, 90, 90, 86, 86, 86, 79, 79, 75, 75, 75, 75, 70, 70, 70, 70, 68, 68, 64, 0],
    fill: true,
    borderWidth: 0,
    pointRadius: 0,
    backgroundColor: ["rgb(75, 192, 192)"],
  }],
};
const batteryConfig = {
  type: "bar",
  data: chartBattery,
  options: {
    scales: {
      x: {
        display: true,
        title: { display: true, text: "Período" },
      },
      y: {
        display: true,
        title: { display: true, text: "Nível de bateria (%)" },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: { font: { size: 14 } },
      },
    },
  },
};
const graficoBateria = new Chart(ctxBattery, batteryConfig);

const ctxAceleracao = document.getElementById("grafico-aceleracao").getContext("2d");
const chartAceleracao = {
  labels: ["12:00:00","","","","","","","","","","12:10:00","","","","","","","","","","12:20:00","","","","","","","","","","12:30:00"],
  datasets: [
    {
      label: "Eixo X",
      data: [0, 0.1, -1, -1.9, -2.5, -2, 0, 3, 3.6, 3.8, 4, 4.2, 4.4, 4.5, 4.7, 5, 4.6, 4.5, 4, 0, -2, 1, 0, 1.4, -1, 0, 1, -1, 0, 2, -2],
      borderColor: "rgb(255, 99, 132)",
      fill: false,
      tension: 0.1,
    },
    {
      label: "Eixo Y",
      data: [0, -1, 1, 1.4, 1.6, -1, 0, -2.1, 1, 0, -1, 1, 0, -1.3, 1.6, -1.1, 0, -1, 1, -2, 2, -1, 0, -3, 1, 0, -1, 1, 0, -2, 2],
      borderColor: "rgb(54, 162, 235)",
      fill: false,
      tension: 0.1,
    },
    {
      label: "Eixo Z",
      data: [0, 1, 1, 0, -1, -1, 2, 2, 0, 0, -2, -2, 1, 1, 0, 0, -1, -1, 2, 2, 0, 0, -2, -2, 1, 1, 0, 0, -1, -1, 2],
      borderColor: "rgb(75, 192, 192)",
      fill: false,
      tension: 0.1,
    },
  ],
};
const aceleracaoConfig = {
  type: "line",
  data: chartAceleracao,
  options: {
    scales: {
      x: {
        display: true,
        title: { display: true, text: "Tempo" },
      },
      y: {
        display: true,
        title: { display: true, text: "Aceleração (m/s²)", suggestedMin: -5, suggestedMax: 5 },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: { font: { size: 14 } },
      },
    },
  },
};
const graficoAceleracao = new Chart(ctxAceleracao, aceleracaoConfig);

const ctxMemory = document.getElementById("grafico-memoria").getContext("2d");
const chartMemory = {
  labels: ["Espaço Interno", "Cache", "MemoryCard","Memória disponível"],
  datasets: [{
    data: [64, 6, 20, 10],
    fill: true,
    borderWidth: 0,
    pointRadius: 0,
    backgroundColor: ["rgba(54, 162, 235, 0.9)", "rgb(255, 99, 132)", "rgb(75, 192, 192)","rgba(255, 206, 86, 0.9)"],
  }],
};
const MemoryConfig = {
  type: "doughnut",
  data: chartMemory,
  options: {
    scales: {
      x: {
        display: true,
        title: { display: true},
      },
      y: {
        display: true,
        title: { display: true, text: "Memória" },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: { font: { size: 14 } },
      },
    },
  },
};
const graficoMemoria = new Chart(ctxMemory, MemoryConfig);

const ctxTemperatura = document.getElementById("grafico-temperatura").getContext("2d");
const chartTemperatura = {
  labels: ["12:00:00","","","","","","","","","","12:10:00","","","","","","","","","","12:20:00","","","","","","","","","","12:30:00"],
  datasets: [{
    label: "Temperatura Interna",
    data: [16, 8, 2, -6, 2, -5, 16, 17, 18, 19, 20, 16, 15, 10, 4, 5, 6, 7, 3, -9, 0, 1, 2, 6, 10, 9, 6, 4, 2, -3, 0],
    backgroundColor: function(context) {
      const value = context.raw;
      return value >= 0 ? "rgba(255, 99, 132, 0.9)" : "rgba(54, 162, 235, 0.9)";
    },
  }],
};
const temperatuaConfig = {
  type: "bar",
  data: chartTemperatura,
  options: {
    scales: {
      x: {
        display: true,
        title: { display: true, text: "Período" },
      },
      y: {
        display: true,
        title: { display: true, text: "Temperatura (°C)" },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: { font: { size: 14 } },
      },
    },
  },
};
const graficoTemperatura = new Chart(ctxTemperatura, temperatuaConfig);

const ctxLuminosidade = document.getElementById("grafico-luminosidade").getContext("2d");
const chartLuminosidade = {
  labels: ["12:00:00","","","","","","","","","","12:10:00","","","","","","","","","","12:20:00","","","","","","","","","","12:30:00"],
  datasets: [{
    label: "Luminosidade",
    data: [500, 610, 420, 500, 640, 750, 620, 470, 450, 500, 600, 620, 660, 620, 640, 680, 600, 580, 600, 690, 710, 705, 720, 700, 640, 650, 620, 770, 780, 790, 800],
    fill: true,
    borderWidth: 2,
    pointRadius: 2,
    tension: 0.5,
    borderColor: ["rgb(255, 206, 86)"],
    backgroundColor: ["rgba(255, 206, 86, 0.0)"],
  }],
};
const luminosidadeConfig = {
  type: "line",
  data: chartLuminosidade,
  options: {
    scales: {
      x: {
        display: true,
        title: { display: true, text: "Período" },
      },
      y: {
        display: true,
        title: { display: true, text: "Luminosidade (Lux)" },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: { font: { size: 14 } },
      },
    },
  },
};
const graficoLuminosidade = new Chart(ctxLuminosidade, luminosidadeConfig);


