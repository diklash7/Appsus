export default{
    template:`
    <section>
    <label>
    <iframe width="200" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>
    <!-- <iframe width="50" height="315"
src={{info.url}}>
</iframe> -->
    {{info.url}}
    {{info.title}}
    
    <!-- <input type="text" v-model="val" @change="reportVal"/> -->
    
    </label>
    </section>
    
    `,
    props:['info'],
    data(){
        return{
            val:'',
        }
    
    },
    methods:{
        reportVal(){
            this.$emit('setVal', this.val)
        }
    }
    
    
    
    
    
    
    
    
    }