'use strict';

const apiKey = 'f2c59e0b1b937fc21c55201ff6e98699';
const imageBaseUrl = 'https://image.tmdb.org/t/p/';


const fetchDataFromServer = function(url, callback, optionalParam) {
    fetch(url).then(response => response.json()).then(data => 
        callback(data, optionalParam));    
}

export{ imageBaseUrl, apiKey, fetchDataFromServer};