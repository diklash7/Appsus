<<<<<<< HEAD
export default{
    template:`
    <section>
    <label>
    <!-- <img :src="ImgUrl"> -->
    {{info.url}}
    {{info.title}}
    <!-- <input type="text" v-model="val" @change="reportVal"/> -->
    <!-- <img :src="currentSeasonImg"> -->
   
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
=======
export default {
    props: ['info'],
    template: `
        <section class="note-img">
           
            <h3>{{info.title}}</h3>
            <img :src="info.url">

         </section>
    
    `,
    data() {
        return {
           
        }

    }
}
>>>>>>> 658bb46b6a3f94a3662d6c5248d23c3de503fb50
