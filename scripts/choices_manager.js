const choices_container = document.querySelector("#choices_container");
const choices_template = document.querySelector("#category_choice");
const question_choice_template = document.querySelector("#question_choice");
//const banner_elt_text_content = document.querySelector("#dynamictext");

function empty_choices_container() {
    for (let children of choices_container.children) {
        children.remove();
    }
}

async function insert_categories() {
    empty_choices_container();
    const categories = await get_categories();
    for (let category of categories) {
        const category_elt = choices_template.cloneNode(true);
        const category_elt_p = category_elt.querySelector("p");
        category_elt.removeAttribute("id");
        category_elt.classList.remove("template")
        category_elt_p.textContent = category;
        choices_container.append(category_elt);

        const question = get_questions(category)[0];
        console.log(question);
        category_elt_p.onclick = (e) => {
            edit_banner(question["question"], question["text"], question["sprite"], question["earth_state"]);
            document.getElementById("earth_container").classList.remove("dead_earth");
            document.getElementById("earth_container").classList.remove("drowned_earth");s
            document.getElementById("earth_container").classList.remove("normal_earth");
            document.getElementById("earth_container").classList.add("normal_earth");
            document.getElementById("clouds_assets_1").src = "./res/cloud-assets/cloud_1.png";
            document.getElementById("clouds_assets_2").src = "./res/cloud-assets/cloud_2.png";
        };

    //     const category_elt_questions_container = category_elt.querySelector("div");

    //     for (let question of questions) {
    //         const question_elt = question_choice_template.cloneNode(true);
    //         const question_elt_p = question_elt.querySelector("p");

    //         question_elt_p.onclick = () => {};
    //         //banner_elt_text_content.textContent = question

    //         question_elt.removeAttribute("id");
    //         question_elt.classList.remove("template");
    //         question_elt_p.textContent = question["question"];
    //         category_elt_questions_container.append(question_elt);
    //     }
    }
}