import React from 'react';
import { View, Text } from 'react-native';

const WeatherScreen = () => {

  fetch("http://api.openweathermap.org/data/2.5/forecast?zip=GL51,GB&units=metric&appid=12dd7ca9ea3ee83b8905ec822844bcd1")
    .then(response => response.json())
    .then((data) => {
      compareTime(data);
    })
    .catch((error) => {
      console.error(error)
    })

  let weatherObj = [];
  const compareTime = (data) => {

    let i = 0;
    while (i < data["list"].length) {

      let compareDate = new Date();
      compareDate.setDate(compareDate.getDate() + i);
      compareDate.setHours(10, 0, 0);
      compareDate.setMilliseconds(0);
      //console.log(compareDate.getTime());

      let date = new Date(data["list"][i].dt * 1000)
      // console.log(date);
      // console.log(date);

      let dayOfWeek = new Date(data["list"][i].dt * 1000).toLocaleDateString("en-UK", { weekday: "long", day: "numeric" });
      //console.log(dayOfWeek);

      if (date.getTime() === compareDate.getTime()) {
        console.log(date);
        console.log(data["list"][i]["main"]["temp"]);

        weatherObj.push({
          date: dayOfWeek,
          temp: data["list"][i]["main"]["temp"],
          icon: data["list"][i]["weather"][0].icon
        });

      }
      i++;
      //console.log(weatherObj);
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#ff4081' }}>
      <Text>Page 2</Text>
      <Text>Temperature this week will be ...</Text>
      <ul>
        {/* {weatherObj.forEach(e => {
          <li>{e.date}: {e.temp} <img src={"http://openweathermap.org/img/w/" + {e.icon} + ".png"} alt="Weather icon"/></li>
        })} */}
      </ul>
    </View>
  )
};

export default WeatherScreen;