import React, { useContext, useState, useEffect } from "react";
import Context from "context";
import "./WeatherGraph.css";
import { Line } from "react-chartjs-2";

export default function WeatherGraph() {
  const { dataWeatherForecast } = useContext(Context);
  const [chartData, setChartData] = useState({});
  const arrTemp = [];
  const arrTime = [];
  const arrHumidity = [];
  const arrRain = []
  const arrСlouds = []


 

  dataWeatherForecast.list.forEach((item) => {
    arrTemp.push(item.main.temp);
    arrСlouds.push(item.clouds.all);
    arrRain.push(item.rain ? item.rain['3h'] : 0)
    arrHumidity.push(item.main.humidity);
    arrTime.push(
      new Date(item.dt_txt).toLocaleString("ru", {
        day: "numeric",
        month: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    );
  });


  const nowTime = new Date().toLocaleString("ru", {
    day: "numeric",
    month: "numeric"
   })

  const arrDate = []

  arrTime.map(item => {
    arrDate.push(item.split(','))
  })
  
  const arrGraph = []
  let count = 0
  arrDate.map(item=>{
    item[0] !== nowTime ? arrGraph.push(item) : count++
  })

  arrTime.splice(0,count)
  arrTemp.splice(0,count)
  arrСlouds.splice(0,count)
  arrRain.splice(0,count)
  arrHumidity.splice(0,count)

  const chart = () => {
    setChartData({
      labels: arrTime,
      datasets: [
        {
          label: "temp °C",
          data: arrTemp,
          backgroundColor: ["rgba(193, 211, 221, 0.5)"],
          borderWidth: 4,
          borderColor: ["rgba(209, 100, 100, 0.5)"],
          pointBorderColor: "rgba(209, 100, 100, 0.5)",
        },
        {
          label: "Сlouds %",
          data: arrСlouds,
          backgroundColor: ["rgba(126, 228, 246, 0.472)"],
          borderWidth: 4,
          borderColor: ["rgba(87, 251, 109, 0.472)"],
          pointBorderColor: "rgba(87, 251, 109, 0.472)",
        },
        {
          label: "Humidity %",
          data: arrHumidity,
          backgroundColor: ["rgba(100, 100, 100, 0.5)"],
          borderWidth: 4,
          borderColor: ["rgba(100, 100, 200, 0.5)"],
          pointBorderColor: "rgba(109, 100, 200, 0.5)",
        },
        {
          label: "Rain mm",
          data: arrRain,
          backgroundColor: ["rgba(151, 69, 69, 0.5)"],
          borderWidth: 4,
          borderColor: ["rgba(64, 63, 63, 0.5)"],
          pointBorderColor: "rgba(64, 63, 63, 0.5)",
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, [dataWeatherForecast]);

  return (
    <div className="weather__graph">
      <Line
        height={100}
        overflow={true}
        data={chartData}
        options={{
          scales: {
            yAxes: [
              {
                gridLines: {
                  display: false,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
}
