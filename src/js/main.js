
require('../sass/styles.scss');

import Vue from './vue.js';
import anime from 'animejs';


window.onload = function() { 

    new Vue({
        el: '#app',
        data: {
            state: {
                menuActive: 'home',
                mobile: false,
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
            menuChange(to) {
                if (this.activeMenu === 'home') {
                    this.intro(to);
                } else {
                    anime({
                        targets: `.wrapper[data-content="${this.activeMenu}"]`,
                        opacity: [1, 0],
                        duration: 5000
                    })
    
                    setTimeout(()=>{
                        this.state.menuActive = to;
                    }, 510)
    
                    anime({
                        targets: `.wrapper[data-content="${to}"]`,
                        opacity: [0, 1],
                        duration: 5000,
                        delay: 1000
                    })
                }
            },
            intro(to) {
                let introProps = {
                    toTop: [this.windowHeight, 0],
                    toBottom: [0, this.windowHeight],
                    opTop: [0, 1],
                    opBottom: [1, 0],
                };
                let direction;
                this.activeMenu === 'home' ? direction = introProps.toTop : direction = introProps.toBottom;
                let opacity;
                this.activeMenu === 'home' ? opacity = introProps.opTop : opacity = introProps.opBottom;
                
                setTimeout(() => {
                    this.activeMenu !== 'home' ? this.state.menuActive = 'home' : this.state.menuActive = to;
                }, 500);
                
                let timeline = anime.timeline();
                anime({
                    targets: '.content-container',
                    scaleY: [0 , 1],
                    duration: 0
                })

                anime({
                    targets: '.content-container',
                    translateY: direction,
                    // opacity: opacity,
                    duration: 1000,
                    easing: 'easeOutCubic'
                })

                anime({
                    targets: `.wrapper[data-content="${to}"]`,
                    opacity: opacity,
                    duration: 4000,
                    delay: 1500
                })
                
            }
        }
    })
}

