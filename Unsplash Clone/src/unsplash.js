import { API_KEY } from "./secrets"

const BASE_URL = `https://api.unsplash.com`
const COUNT = 30

export function getRandomImages() {
    const URL = `${BASE_URL}/photos/random/?client_id=${API_KEY}&count=${COUNT}`
    return fetch(URL)
}

export function searchImages(searchTerm) {
    const URL = `${BASE_URL}/search/photos/?client_id=${API_KEY}&per_page=${COUNT}&query=${searchTerm}`
    return fetch(URL)
}
