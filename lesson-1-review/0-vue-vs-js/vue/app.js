const app = Vue.createApp({
    data() {
        return {
            todoText: null,
            todoList: []
        }
    },
    methods: {
        addTodo() {
            console.log(this.todoText);
            this.todoList.push(this.todoText);
            this.todoText = "";
        }
    }
}).mount("#app");