function get_categories() {
    const categories = [];

    for (let ques of questions) {
        if (!categories.includes(ques.category)) {
            categories.push(ques.category);
        }
    }
    return categories;
}

function get_questions(category) {
    const questions_ret = [...questions];
    for (let i = 0; i < questions_ret.length; i++) {
        const ques = questions_ret[i];
        if (ques.category != category) {
            questions_ret.splice(i, 1);
            i--;
        }
    }
    return questions_ret;
}