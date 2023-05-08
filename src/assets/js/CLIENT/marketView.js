import axios from "axios";
export default {
    name: "MarketView",
    data() {
        return {
            getData: '',
            loadingStatus: false
        }
    },
    mounted() {
        let data = [];
        axios.get("https://restcountries.com/v3.1/all").then(function(response) {
            // handle success            
            for (let i = 0; i < 10; i++) {
                let resName = response.data[i].name.official;
                let resFlags = response.data[i].flags.png;
                let resCapital = response.data[i].capital;

                data.push({
                    name: resName,
                    flag: resFlags,
                    capital: resCapital
                })
            }
        });
        this.getData = data;
        this.loadingStatus = true;
        // console.log(this.getData);
    },
};