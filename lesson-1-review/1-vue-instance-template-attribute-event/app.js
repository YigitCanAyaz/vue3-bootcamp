const app = Vue.createApp({
    data() {
        return {
            title: "Bu vue tarafından gelen bir bilgidir...",
            content: "lorem ipsum dolor sit amet",
            hobbies: [1, 2, 3, 4, 5],
            personal: {
                name: "Yiğit",
                lastName: "Ayaz",
                phone: "xxxxx",
            },
            details: `<a href="https://yigitcanayaz.com">Kişisel sitem</a>`,
            url: "https://yigitcanayaz.com",
            coordX: 0,
            coordY: 0,
            fullName: "Yiğit Can Ayaz"
        }
    },
    methods: {
        updateTitle(title) {
            this.title = title || "Bu benim yeni mesajım";
        },
        updateCoords(e) {
            console.log(e);
            this.coordX = e.offsetX;
            this.coordY = e.offsetY;
            this.updateTitle(`${this.coordX}, ${this.coordY}`)
        },
        updateValue(customText, e) {
            console.log(customText, e.target.value);
            this.fullName = e.target.value;
        }
    }
}).mount("#app");

// Vue2 version
/* new Vue ({
    el: "#app", => artık mount kullanıyoruz
    data : {

    }
})
*/