import { mailService } from '../services/mail-service.js';
import { eventBus } from '../../../services/eventBus-service.js'

export default {
    template: `
    
        <section v-if="mailToSend" class="mail-send ">
            <h2>New message</h2>
            <form @submit.prevent="send">
                <input type="text" v-model="mailToSend.to" placeholder="To">
                <input type="text" v-model.number="mailToSend.subject" placeholder="Subject">
               <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Send</button>
            </form>
        </section>
    `,
    data() {
        return {
            mailToSend: null
        };
    },
    created() {
        const id = this.$route.params.mailId;
        if (id) {
            mailService.get(id)
                .then(mail => this.mailToSend = mail);
        } else {
            this.mailToSend = mailService.getEmptyMail();
        }
    },
    methods: {
        send() {
            if (!this.mailToSend.to) return;
            mailService.save(this.mailToSend)
                .then(mail => {
                    eventBus.emit('show-msg', { txt: 'Saved succesfully', type: 'success' })
                    this.$router.push('/car')
                });
        }
    },
    computed: {}
};