'use strict';

import { apiKey, fetchDataFromServer } from "./api";

export function sidebar() {
    const genreList = {};

    fetchDataFromServer('https://api.themoviedb.org/3/genre/movie/list?api_key=f2c59e0b1b937fc21c55201ff6e98699', function ({ genres }) {
        for (const { id, name } of genres) {
            genreList[id] = name;
        }

        genreLink();
    });
    const sidebarInner = document.createElement("div");
    sidebarInner.classList.add("sidebar-inner");

    sidebarInner.innerHTML = html`
    <div class="sidebar-list">

                <p class="title"> Genre </p>
            </div>
            <div class="sidebar-list">
                <p class="title"> Language </p>
                    <a href="./movie-list.html" 
                    menu-close class="sidebar-link">English</a>
                    <a href="./movie-list.html" 
                    menu-close class="sidebar-link">Hindi</a>
                    <a href="./movie-list.html" 
                    menu-close class="sidebar-link">Bengali</a>
            </div>

            <div class="sidebar-footer">
                <p class="copyright">
                    Copyright 2023
                </p>
                <img src="./assets/images/tmdb-logo.png" width="130" height="17" alt="the movie database logo">
            </div>`;
    
    const genreLink = function() {
        for(const [genreId, genreName] of Object.entries
            (genreList)){

                const link = document.createElement("a");
                link.classList.add("sidebar-link");
                link.setAttribute("href", "./movie-list.html");
                link.setAttribute("menu-close", "");

                link.textContent = genreName;

                sidebarInner.querySelectorAll("sidebar-list")[0]
                .appendChild(link);

            }

            const sidebar = document.querySelector("[sidebar]");
            sidebar.appendChild(sidebarInner);
            toggleSidebar(sidebar);
    } 

    const toggleSidebar = function(sidebar) {

        const sidebarBtn = document.querySelector("[menu-btn]");
        const sidebarTogglers = document.querySelectorAll("[menu-toggler]");
        const sidebarClose = document.querySelectorAll("[menu-close]");
        const overlay = document.querySelector("[overlay]");

        addEventOnElements(sidebarTogglers, "click", function (){
            sidebar.classList.toggle("active");
            sidebarBtn.classList.toggle("active");
            overlay.classList.toggle("active");
        });

        addEventOnElements(sidebarClose, "click", function() {
            sidebar.classList.remove("active");
            sidebarBtn.classList.remove("active");
            overlay.classList.remove("active");
        })
    }
    
}