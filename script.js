function calculateMarks() {
    let m1 = parseFloat(document.getElementById("m1").value);
    let m2 = parseFloat(document.getElementById("m2").value);
    let m3 = parseFloat(document.getElementById("m3").value);

    // Validate input
    if (isNaN(m1) || isNaN(m2) || isNaN(m3)) {
        document.getElementById("result").innerHTML = "Please enter all marks!";
        return;
    }

    let total = m1 + m2 + m3;
    let average = total / 3;

    document.getElementById("result").innerHTML =
        "Total = " + total + "<br>Average = " + average.toFixed(1);
}
