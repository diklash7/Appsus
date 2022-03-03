import { mailService } from '../services/mail-service.js';
import { eventBus } from '../../../services/eventBus-service.js'

export default {
    template: `
    <section v-if="mailToSend" class="mail-form">
            <h4>New message</h4>
            <section class="form-container">
                <form @submit.prevent="send">
                    <input type="text" v-model="mailToSend.to" placeholder="To:">
                    <input type="text" v-model.number="mailToSend.subject" placeholder="Subject:">
                    <textarea
                    name="" id="" cols="30" rows="20">
                </textarea>
                <div class="btns-form" >
                    <button class="btn-send">Send</button>
                 <router-link class="btn-remove" :to="/mail/">🗑️</router-link>
                </div>
            </form>
        </section>
        </section>
    `,
    data() {
        return {
            // mailToSend() {
            //     id
            //     subject='',
            // }
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
            console.log(this.mailToSend);
            mailService.save(this.mailToSend)
                .then(mail => {
                    eventBus.emit('show-msg', { txt: 'Saved succesfully', type: 'success' })
                    this.$router.push('/mail/sent-mail')
                });
        }
    },
    computed: {}
};