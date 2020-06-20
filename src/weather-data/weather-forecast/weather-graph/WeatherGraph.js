import React, { useContext } from "react";
import Context from "context";
import "./WeatherGraph.css";
import { Line } from "react-chartjs-2";

export default function WeatherGraph() {
  const { dataWeatherForecast } = useContext(Context);

  const arrTemp = [];
  const arrTime = [];
  const arrHumidity = [];
  const arrRain = [];
  const arrСlouds = [];
  const arrVisualTime = [];

  dataWeatherForecast.list.forEach((item) => {
    arrTime.push(
      new Date(item.dt_txt).toLocaleString("ru", {
        day: "numeric",
        month: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    );
  });

  const currentTime = new Date();
  const arrNextDay = [];
  for (let i = 0; i <= 5; i++) {
    arrNextDay.push(currentTime.getDate() + i);
  }

  const arrDate = arrTime.map((item) => item.split("."));
  const newArr = [[], [], [], [], [], []];
  const parent = dataWeatherForecast.list;
  for (let j = 0; j < arrDate.length; j++) {
    for (let y = 0; y <= 5; y++) {
      if (+arrDate[j][0] === arrNextDay[y]) {
        newArr[y].push({
          temp: parent[j].main.temp,
          clouds: parent[j].clouds.all,
          rain: parent[j].rain ? parent[j].rain["3h"] : 0,
          humidity: parent[j].main.humidity,
          time: parent[j].dt_txt,
        });
      }
    }
  }

  newArr.forEach((item) => {
    let temperature = 0;
    let humidity = 0;
    let rain = 0;
    let clouds = 0;
    item.forEach((arr) => {
      temperature += arr.temp;
      clouds += arr.clouds;
      rain += arr.rain;
      humidity += arr.humidity;
    });
    arrTemp.push(temperature / item.length);
    arrHumidity.push(humidity / item.length);
    arrRain.push(rain / item.length);
    arrСlouds.push(clouds / item.length);
    arrVisualTime.push(
      new Date(item[0].time).toLocaleString("ru", {
        day: "numeric",
        month: "numeric",
      })
    );
  });

  const data = (canvas) => {
    console.log(canvas)
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 800, 0);
    gradient.addColorStop(0, "rgba(100,155,200,0.5)");
    gradient.addColorStop(1, "rgba(250,155,100,0.5)");
    const gradient1 = ctx.createLinearGradient(0, 0, 800, 0);
    gradient1.addColorStop(0, "rgba(126, 228, 246, 0.6)");
    gradient1.addColorStop(1, "rgba(246,228,1226,0.6)");
    const gradient2 = ctx.createLinearGradient(0, 0, 800, 0);
    gradient2.addColorStop(0, "rgba(101, 124, 226, 0.6)");
    gradient2.addColorStop(1, "rgba(50,50,50,0.5)");

    return {
      labels: arrVisualTime,
      datasets: [
        {
          label: "temp °C",
          data: arrTemp,
          backgroundColor: gradient,
          borderWidth: 4,
          borderColor: ["rgba(209, 100, 100, 0.5)"],
          pointBorderColor: "rgba(209, 100, 100, 0.5)",
        },
        {
          label: "Сlouds %",
          data: arrСlouds,
          backgroundColor: gradient1,
          borderWidth: 4,
          borderColor: ["rgba(87, 251, 109, 0.472)"],
          pointBorderColor: "rgba(87, 251, 109, 0.472)",
        },
        {
          label: "Humidity %",
          data: arrHumidity,
          backgroundColor: gradient2,
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
    };
  };

  return (
    <div className="weather__graph">
      <Line
        height={100}
        overflow={true}
        data={data}
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
