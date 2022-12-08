const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            counter2: 0
        }
    },
    methods: {

    },
    computed: {
        getCounterResult() {
            console.log("counter 1 working");
            return this.counter > 4 ? "BÜYÜK" : "KÜÇÜK"; // bunu da çağırabiliriz
        },
        getCounterResult2() {
            console.log("counter 2 working");
            return this.counter2 > 4 ? "BÜYÜK" : "KÜÇÜK"; // bunu da çağırabiliriz
        }
    },
    watch: {
        counter(newValue, oldValue) {
            console.log("Counter", oldValue, "=>", newValue);
        },
        getCounterResult(newValue, oldValue) {
            console.log("Result", oldValue, "=>", newValue);
        }
    }
    // methods: {
    //     inc() {
    //         this.counter++;
    //     },
    //     dec() {
    //         this.counter--;
    //     }
    // }
}).mount("#app");