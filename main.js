const app = Vue.createApp ({
    // short-hand data(){}
    // data: function() {}
    //
    data(){
        return{
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            url:'https://vuejs.org/',
            description: 'A warm fuzzy pair of socks.'
        }
    }
})
