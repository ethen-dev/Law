
require('../sass/styles.scss');

import Vue from './vue.js';
import anime from 'animejs';


window.onload = function() {

    var p = document.getElementById('p');
    p.addEventListener('click', () => {
     console.log('hoy')
    });
    
    console.log(p)
    
    new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue!'
        },
        mounted() {
            // this.intro();
        },
        methods: {
            intro() {
                let height = window.innerHeight;
                let timeline = anime.timeline();

                timeline
                .add({
                    targets: '#menu',
                    translateY: [0, 100],
                    opacity: [1, 0],
                    duration: 700,
                    easing: 'easeOutCubic'
                })
                .add({
                    targets: '.content',
                    translateY: [0, -height],
                    opacity: [0, 1],
                    duration: 1000,
                    easing: 'easeOutCubic'
                })
            }
        }
    })
}

