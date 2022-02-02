let real_cliccs = 0; let cliccs = 0; let cliccer = 1; let booster = 1; cliccer *= booster;

function clicc() {
    cliccs += cliccer;
    real_cliccs++;
    document.getElementById("counter").innerText = "You currently own " + cliccs + " cliccs";
    document.getElementById("real_cliccs").innerText = "You have clicced this button " + real_cliccs + " times"
}