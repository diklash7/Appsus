export default {
    props: ['mail'],
    template: `
        <div class="mail-desc">
        <p> {{mailDesc}}
           <button @click="toggleText">{{btnText}}</button>
        </p>
        </div>
    `,
    data() {
        return {
            isLongText: false
        }
    },
    methods: {
        toggleText() {
            this.isLongText = !this.isLongText
        }
    },
    computed: {
        btnText() {
            if (this.isLongText) return 'Show Less'
            else return 'Show More'
        },
        bookDesc() {
            if (this.isLongText) return this.text;
            else return this.text.substring(0, 8) + '...'
        }
    }
}