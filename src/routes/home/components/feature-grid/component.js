let data = require("./data")
let list_map = data.list_map;

module.exports = class {
    onCreate() {
        this.state = {
            first_heading: list_map.first.data.heading,
            second_heading: list_map.second.data.heading,
            third_heading: list_map.third.data.heading,
            forth_heading: list_map.forth.data.heading,

            first_paragraph: list_map.first.data.paragraph,
            second_paragraph: list_map.second.data.paragraph,
            third_paragraph: list_map.third.data.paragraph,
            forth_paragraph: list_map.forth.data.paragraph
        }


    }

}

