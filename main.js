const app = Vue.createApp ({
    // short-hand data(){}
    // data: function() {}
    //
    data(){
        return{
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            url:'https://vuejs.org/',
            description: 'A warm fuzzy pair of socks.',
            inStock: true,
            details: ['50% cotton', '30% wool'],
            sizes: ['S', 'M', 'L', 'XL'],
            variants: [
                    {id: 2234, color: 'green'},
                    {id: 2235, color:'blue'},
            ]
        }
    }
})
