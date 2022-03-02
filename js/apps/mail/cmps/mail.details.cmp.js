import { mailService } from '../services/mail-service.js';
import { eventBus } from '../services/eventBus-service.js';


export default {
    template: `
        <section v-if="mail" class="mail-details">
            <section class="mail-details-container" >
                <h1>mail.subject</h1>
                <h2> mail.name</h2>
               <p>mail.body</p>
                <router-link class="btn-exit" to="/mail">🗑️</router-link>
            </section>
        </section>
        <section v-else class="loading">
        </section>
    `,
    data() {
        return {
            mail: null
        };
    },
    components: {

    },
    created() {
        const id = this.$route.params.mailId;
        mailService.get(id)
            .then(mail => this.mail = mail);
    },
    methods: {},
    computed: {

    }
}