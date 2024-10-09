const app = Vue.createApp({
    name: "PHP JSON",
    data: () => ({
        // Struttura dati
        dataList: []
    }),
    methods: {
        getDataList() {
            axios.get("./server/server.php").then(response => {
                this.dataList = response.data;
            }).catch(error => {
                console.log(error);
            });
        }
    },
    created() {
        this.getDataList();
    }
});

app.mount("#app");