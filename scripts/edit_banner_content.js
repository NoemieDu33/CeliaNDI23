const banner_elt_text_content = document.querySelector("#dynamictext");

function edit_banner(text, answer, sprite, earth_state) {
    document.querySelector("#show_answer_button").style.display = "block";
    banner_elt_text_content.textContent = text;
    document.getElementById("dynamicimg").src=`./res/framed-narrator-assets/6f.png`;
    document.getElementById("show_answer_button").onclick = () => {
        document.getElementById("dynamicimg").src=`./res/framed-narrator-assets/${sprite}.png`;
        banner_elt_text_content.textContent = answer;
        document.querySelector("#show_answer_button").style.display = "none";
        if(earth_state == 0){
            document.getElementById("earth_container").classList.add("normal_earth");
            document.getElementById("clouds_assets_1").src = "./res/cloud-assets/cloud_1.png";
            document.getElementById("clouds_assets_2").src = "./res/cloud-assets/cloud_2.png";
        }else if(earth_state == 1){
            document.getElementById("earth_container").classList.add("dead_earth");
            document.getElementById("clouds_assets_1").src = "./res/cloud-assets/cloud_5.png";
            document.getElementById("clouds_assets_2").src = "./res/cloud-assets/cloud_6.png";
        }else{
            document.getElementById("earth_container").classList.add("drowned_earth");
            document.getElementById("clouds_assets_1").src = "./res/cloud-assets/cloud_3.png";
            document.getElementById("clouds_assets_2").src = "./res/cloud-assets/cloud_4.png";
        }
    };
}