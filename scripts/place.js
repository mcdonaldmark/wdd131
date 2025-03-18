/* Copyright Year */
const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = `${today.getFullYear()}`;

/* Date Last Modified */
const modify = document.querySelector("#modified");
const modified = (document.lastModified);
modify.innerHTML = `${modified}`;

/* Temperature */
const temp = 50;
document.getElementById("temp").innerHTML = temp;

/* Wind Speed */
const wSpeed = 15;
document.getElementById("wSpeed").innerHTML = wSpeed;

/* Wind Chill Condition */
function calculateWindChill(temp, wSpeed) {
    if (temp > 50 || wSpeed <= 3) {
        return "N/A"
    }
    /* Wind Chill Formula and Return */
    const windChill = (35.74 + 0.6215 * temp - 35.75 * (wSpeed ** 0.16) + 0.4275 * temp * (wSpeed ** 0.16));
    return Math.round(windChill);
}

/* Apply to HTML */
const windChill = calculateWindChill(temp, wSpeed);
document.getElementById("windChill").innerHTML = windChill;