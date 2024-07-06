import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarGraph(props) {
  const labels = ["Total Assets", "Total Liabilities"];
  const data = {
    labels,
    datasets: [
      {
        data: [props.assetSum, props.liabilitySum],
        backgroundColor: ["rgb(56, 125, 241)", "rgb(255, 88, 45)"],
        borderColor: ["rgb(56, 125, 241)", "rgb(255, 88, 45)"],
        borderWidth: 1,
        barThickness: 140,
        categoryPercentage: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    // maintainAspectRatio: false,
    plugins: {
      legend: {
        onClick: (event, legendItem, legend) => {
          const index = legend.chart.data.labels.indexOf(legendItem.text);
          legend.chart.toggleDataVisibility(index);
          // fillStyle:none
          legend.chart.update();
        },
        labels: {
          usePointStyle: true,
          padding: 27, // Adjust the padding between legend items
          // fontColor: 'red',
          // fontSize:200,
          generateLabels: (chart) => {
            let visibility = [];
            for (let i = 0; i < chart.data.labels.length; i++) {
              if (chart.getDataVisibility(i) === true) {
                visibility.push(false);
              } else {
                visibility.push(true);
              }
            }
            return chart.data.labels.map((label, index) => ({
              text: label,
              strokeStyle: chart.data.datasets[0].borderColor[index],
              fillStyle: chart.data.datasets[0].backgroundColor[index],
              hidden: visibility[index],
            }));
          },
        },
        display: true,
        position: "bottom",
      },
      title: {
        display: true,
        text: "Assets and Liabilities",
        font: {
          weight: "bolder",
          size: 20,
        },
        color: "#011c46",
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
}
