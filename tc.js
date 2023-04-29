function fc(temperature) {
  temperature = parseFloat(temperature);
  document.getElementById("celsius").value = (temperature - 32) / 1.8;
  document.getElementById("kelvin").value = ((temperature - 32) / 1.8) + 273.15;
}

function cc(temperature) {
  temperature = parseFloat(temperature);
  document.getElementById("fahrenheit").value = (temperature * 1.8) + 32;
  document.getElementById("kelvin").value = temperature + 273.15;
}

function kc(temperature) {
  temperature = parseFloat(temperature);
  document.getElementById("fahrenheit").value = ((temperature - 273.15) * 1.8) + 32;
  document.getElementById("celsius").value = temperature - 273.15;
}

