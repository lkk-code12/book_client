export default {
    name: 'RegisterView',
    data() {
        return {
            name: '',
            email: '',
            password: '',
            dataArr: [],
            emptyName: '',
            emptyEmail: '',
            emptyPassword: ''
        }
    },
    methods: {
        register() {
            if (this.name === '' && this.email === '' && this.password === '') {
                this.emptyName = `You need to fill your name`;
                this.emptyEmail = `You need to fill your email`;
                this.emptyPassword = `You need to fill your password`;
            } else if (this.name === '') {
                this.emptyName = `You need to fill your name`;
            } else if (this.email === '') {
                this.emptyEmail = `You need to fill your email`;
            } else if (this.password === '') {
                this.emptyPassword = `You need to fill your password`;
            }

            // console.log(this.dataArr);
            if (this.name != '' && this.email != '' && this.password != '') {
                this.dataArr.push({
                    name: this.name,
                    email: this.email,
                    password: this.password
                })
                localStorage.setItem('userData', JSON.stringify(this.dataArr));
            }
        }
    }
}