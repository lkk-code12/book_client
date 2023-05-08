export default {
    name: 'LoginView',
    data() {
        return {
            name: '',
            email: '',
            password: '',
            getData: [],
            message: '',
            helperText: false
        }
    },
    methods: {
        login() {
            this.getData = JSON.parse(localStorage.getItem('userData'));
            // console.log(this.getData[0].name);
            for (let i = 0; i < this.getData.length; i++) {
                // console.log(this.getData[i].name == this.name);
                if (this.name == this.getData[i].name && this.email == this.getData[i].email && this.password == this.getData[i].password) {
                    this.helperText = true;
                    this.$router.push('/client/marketPlace');
                }
            }

            if (this.helperText == false) {
                this.message = `Try again`;
            } else {
                this.message = '';
            }
        }
    }
}