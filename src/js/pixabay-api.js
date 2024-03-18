export const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "42872670-b141582d5b3cf608eefd20d22";

export const options = {
    params: {
        key: API_KEY,
        q: "",
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page: 1,
        per_page: 40,

    },
};