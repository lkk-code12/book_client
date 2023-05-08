import axios from "axios";

export default {
    name: "Home View",
    data() {
        return {
            page: 'HomeView',
            image: ''
        }
    },
    mounted() {
        console.log(this.page);
    },
    methods: {
        onChange(e) {
            // console.log(e.target.files[0]);
            this.image = e.target.files[0].name;
        },
        upload() {
            console.log(this.image);
            axios
                .post("http://localhost:8000/api/upload/bookImage", { data: this.image });
        }
    }
}