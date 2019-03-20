import Vue from 'vue';

import './url.js';
import Http from './Http.js';
import './components.js';
import './Origin.js';
import './directive.js';


import '@/styles/styles.scss';

Vue.prototype.$http = Http;




upSize();

function upSize() {
    function up() {
        // document.getElementsByTagName("html")[0].style.fontSize =
        // 	window.innerWidth / 10 + "px";
        document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + "px"
    }
    up();
    window.addEventListener("resize", () => {
        up();
    });
}
