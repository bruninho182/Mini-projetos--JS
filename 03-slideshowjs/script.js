'use strict';

const images = [
    { 'id': '1', 'url':'./image/chrono.jpg' },
    { 'id': '1', 'url':'./image/inuyasha.jpg' },
    { 'id': '1', 'url':'./image/techi.jpg' },
    { 'id': '1', 'url':'./image/tenjhotenge.jpg' },
    { 'id': '1', 'url':'./image/yuyuhakusho.jpg' },
    { 'id': '1', 'url':'./image/ippo.png' },
]

const container = document.querySelector ('.container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item' data-number=${image.id}>
                <img src='${image.url}'
            </div>
        `
    })
}


loadImages( images, container );