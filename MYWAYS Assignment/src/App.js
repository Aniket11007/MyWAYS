import data from "./weather";

function App() {
  const basedata = data[0].query;
  const city = basedata.results.channel.location.city;
  const country = basedata.results.channel.location.country;
  const region = basedata.results.channel.location.region;
  const location = city + "," + region + "," + country;
  console.log(location);
  console.log(city);
  const forcast = basedata.results.channel.item.forecast;
  return (
    <div className="App">
      <h1>{location}</h1>
      {forcast.map((card, id) => {
        return (
          <div key={id} className="container">
            <h1>{card.code}</h1>
            <p1>{card.date}</p1>
            <p1>{card.day}</p1>
            <p1>{card.high}</p1>
            <p1>{card.low}</p1>
          </div>
        );
      })}
    </div>
  );
}

export default App;
