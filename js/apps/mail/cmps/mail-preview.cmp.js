export default {
    props: ['mail'],
    template: `
        <section class="mail-preview">
            <h3>title: {{mail.subject}}</h3>
        </section>
    `,
    data() {
        return {}
    },
    created() {},
    methods: {

    },
    computed: {

    },
}