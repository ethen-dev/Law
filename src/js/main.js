
require('../sass/styles.scss');

import Vue from './vue.js';
import anime from 'animejs';


window.onload = function() {    
    new Vue({
        el: '#app',
        data: {
            state: {
                menuActive: 'home'
            },
            height: ''
        },
        computed: {
            activeMenu() {
                return this.state.menuActive;
            },
            windowHeight() {
                return this.height;
            }
        },
        mounted() {
            this.height = window.innerHeight;
        },
        methods: {
            intro() {
                let introProps = {
                    toTop: [this.windowHeight, 0],
                    toBottom: [0, this.windowHeight],
                    opTop: [0, 1],
                    opBottom: [1, 0],
                };
                console.log(this.activeMenu)
                let direction;
                this.activeMenu === 'home' ? direction = introProps.toTop : direction = introProps.toBottom;
                let opacity;
                this.activeMenu === 'home' ? opacity = introProps.opTop : opacity = introProps.opBottom;

                console.log(direction)

                anime({
                    targets: '.content-container',
                    translateY: direction,
                    opacity: opacity,
                    duration: 1000,
                    easing: 'easeOutCubic'
                })
                this.state.menuActive = 'contact';
            }
        }
    })
}

