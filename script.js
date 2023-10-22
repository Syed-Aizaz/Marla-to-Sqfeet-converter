function convertmarla() {
    const MarlaInput = document.getElementById("MarlaInput");
    const sqfeetResult = document.getElementById("sqfeetResult");

    const marla = parseFloat(MarlaInput.value);

    if (isNaN(marla) || marla < 0) {
        sqfeetResult.value = "Invalid input";
    } else {
        const sqfeet = marla * 225;
        sqfeetResult.value = sqfeet.toFixed(2) + " sqft";
    }
}
