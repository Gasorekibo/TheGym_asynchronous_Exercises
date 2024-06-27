async function getCountry() {
  const resp = await fetch("https://restcountries.com/v3.1/name/rwanda");
  const data = await resp.json();
  return data;
}
(async () => {
  const data = await getCountry();
  const resp = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${data[0].latlng[0]}&longitude=${data[0].latlng[1]}&current_weather=true`
  );
  const ans = await resp.json();
  console.log({
    country: data[0].name.common,
    capital: data[0].capital[0],
    currentTemperature: ans.current_weather.temperature + "°C",
  });
})();
