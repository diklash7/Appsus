export default {
    props: ['note'],
    template: `
<section class="note-preview">
    
    <p> id:{{note.id}}</p>
    <p> type: {{note.type}}</p>
    <p> type: {{note.info.txt}}</p>

</section>

`,
    data() {
        return {}
    },
    created() {},
    methods: {},
    computed: {}



}