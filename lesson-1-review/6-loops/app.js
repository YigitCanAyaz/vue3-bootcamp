const app = Vue.createApp({
    data() {
        return {
            memberList: [
                { id: 1, name: "Yiğit Can Ayaz" },
                { id: 2, name: "Can Demir" },
                { id: 3, name: "Emir Demir" },
                { id: 4, name: "Gavi" },
                { id: 5, name: "Pedri" },
                { id: 6, name: "Ansu Fati" },
            ]
        }
    },
}).mount("#app");