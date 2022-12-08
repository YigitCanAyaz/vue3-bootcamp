const app = Vue.createApp({
    data() {
        return {
            title: "Vue.js Bootcamp 1st day",
            content: "Lorem ipsum dolor sit amet...",
            google: {
                title: "Google",
                target: "_blank",
                url: "https://google.com",
                alt: "google-search-engine"
            },
            owner: "me",
            coords: {
                x: 0,
                y: 0
            }
        }
    }, methods: {
        changeTitle(pTitle) {
            alert();
            this.title = pTitle;
        },
        updateCoords(message, event) {
            console.log(message);
            this.changeTitle(`${event.x},${event.y}`)
            this.coords = {
                x: event.x,
                y: event.y
            }
        }
    }
}).mount("#app");

// Vue2 Version
// new Vue({
    // el: #app (same with mount)
//     data: {

//     }
// })