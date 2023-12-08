const elements = [
    "main_page",
    "welcome_popup",
    "choices_popup",
    "earth_assets",
    "earth_container",
    "start_bouton",
    "choices_container",
    "clouds_assets_1",
    "clouds_assets_2"
];

function enable_display(elt_name) {
    if (!elements.includes(elt_name)) {
        return;
    }
    const elt = document.getElementById(elt_name);
    elt.style.display = "block";
}

function apparition(elt_name){
    if (!elements.includes(elt_name)) {
        return;
    }
    const elt = document.getElementById(elt_name);
    elt.style.animation = "";
    elt.style.animation = "1s linear 0s 1 apparition";
}

function disable_display(elt_name) {
    if (!elements.includes(elt_name)) {
        return;
    }
    const elt = document.getElementById(elt_name);
    elt.style.display = "none";
}