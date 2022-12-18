const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            counter2: 0,
            itemList: []
        };
    },
    methods: {
        addItem() {
            this.itemList.push(new Date().getTime());
        }
    },
    computed: {
        getResult() {
            console.log("counter1 çalıştı");
            return this.counter > 0 ? 'Pozitif' : (this.counter < 0 ? 'Negatif' : 'Sıfır')
        },
        getResult2() {
            console.log("counter2 çalıştı");
            return this.counter2 > 0 ? 'Pozitif' : (this.counter2 < 0 ? 'Negatif' : 'Sıfır')
        }
    },
    watch: {
        counter(newValue, oldValue) {
            console.log("Coutner watcher çalıştı...", newValue, oldValue);
        },
        getResult(newValue, oldValue) {
            console.log(`Watcher : Result ${oldValue} => ${newValue}`);
        },
        itemList: {
            deep: true,
            handler(itemList) {
                console.log('itemList :>> ', itemList);
            }
        }
    }
});

app.mount("#app");