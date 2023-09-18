'use strict';

import { apiKey, fetchDataFromServer } from "./api.js";
import { createMovieCard } from "./movie-card.js";

export function search() {

    const searchWrapper = document.querySelector("[search-wrapper]");
    const searchField = document.querySelector("[search-field]");

    const searchResultModal = document.createElement("div");
    searchResultModal.classList.add("search-modal");
    document.querySelector("main")


}