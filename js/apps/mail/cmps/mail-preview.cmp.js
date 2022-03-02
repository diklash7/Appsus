export default {
    props: ['mail'],
    template: `
        <section class="mail-preview flex">
                <span class="fullname">{{mail.fullname}}</span>
                <span class="subject">{{mail.subject}}</span>
                <span class="body">{{mail.body}}</span>
                <span class="sent-at">{{months}}</span>
            </section>
            <hr>
    `,
    data() {
        return {}
    },
    created() {},
    methods: {

    },
    computed: {
        months() {
            const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
            ];
            return monthNames[new Date().getMonth()] + ',' + new Date().getDay()
        }
    },
}