function calculate() {
    let kat1 = parseFloat(document.getElementById("kat1").value);
    let hypotenuse = parseFloat(document.getElementById("hypotenuse").value);

    if (kat1 > 0 && hypotenuse > 0) {
        kat2 = Math.sqrt(Math.pow(kat1, 2) + Math.pow(hypotenuse, 2));
        alert ("Другий катет: " + kat2);
    } else {
        alert("Введіть корректне значення!");
    }
}
