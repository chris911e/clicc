let real_cliccs = 0; let cliccs = 50; let how_many_c_you_do_per_clicc = 1;

function clicc() {
    cliccs += how_many_c_you_do_per_clicc;
    //cliccer += booster;
    //cliccs += cliccer;
    real_cliccs++;
    document.getElementById("counter").innerText = `You currently own ${cliccs} cliccs`;
    document.getElementById("real_cliccs").innerText = `You have clicced this button ${real_cliccs} times`;
}

//autocliccer
let btn_autocliccer_count = 0;
let btn_autocliccer_boost = 2;
let btn_autocliccer_price = 50;
function autocliccUpgrade(){
    if (cliccs < btn_autocliccer_price) {
        alert("Not enough cliccs :(");
    } else {
        how_many_c_you_do_per_clicc += btn_autocliccer_boost;
        btn_autocliccer_count++;
        btn_autocliccer_boost += btn_autocliccer_price;
        btn_autocliccer_price += btn_autocliccer_boost;
        document.getElementById("how_may_c_you_do_per_clicc").innerText = `You currently do ${how_many_c_you_do_per_clicc}C per clicc`;
        document.getElementById("btn-autocliccer").innerText = `Buy AutoCliccer ${btn_autocliccer_price}C (+${btn_autocliccer_boost}C per clicc)`;
    }
}