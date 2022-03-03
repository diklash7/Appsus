export default{
    template:`
    <section>
    <label>
    <!-- <img :src="ImgUrl"> -->
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
    },
    computed:{
        ImgUrl(){
            return this.note.url
        }  
    }
    
    
    
    
    
    
    
    
    }