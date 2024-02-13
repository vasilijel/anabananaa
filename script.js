let tries = 0;

function respond(answer) {
  if (answer === "da") {
    document.getElementById("message").innerHTML = "Hvala mala slatka kovrdžava 😊💖";
  } else if (answer === "ne") {
    tries++;
    if (tries < 3) {
      document.getElementById("message").innerHTML = "Pitaću te još " + (3 - tries) + " puta.";
    } else {
      document.getElementById("message").innerHTML = "Nema više pokušaja.";
    }
  } else {
    alert("Molim te odgovori sa 'da' ili 'ne'.");
  }
}
