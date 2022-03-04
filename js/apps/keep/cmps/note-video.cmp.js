export default {
    props: ['info'],
<<<<<<< HEAD
    template: `
    <section>
    <label>
    <iframe class="video-1" width="160" height="160"
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
    data() {
        return {
            val: '',
        }

    },
    methods: {
        reportVal() {
            this.$emit('setVal', this.val)
        }
    }








=======
        template: `
            <section class="note-video">
    
                    <h3>{{info.title}}</h3>
                
                    <iframe width="200"
                         :src="info.url">
                     </iframe>

            </section>
    `,
    data() {
        return {

        }

    }
>>>>>>> 658bb46b6a3f94a3662d6c5248d23c3de503fb50
}