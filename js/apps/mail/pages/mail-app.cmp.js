import { mailService } from '../services/mail-service.js';
import { eventBus } from '../../../services/eventBus-service.js'
import mailFilter from '../cmps/mail-filter.cmp.js';
import mailList from '../cmps/mail-list.cmp.js';

export default {
    template: `
        <section class="mail-app app-main">
               <section class="mail-menu">
                   <!-- <button class="btn-compos">➕ <span>Compos</span></button> -->
                   <router-link class="btn-compos" to="/mail/form"><span class="plus">+ </span><span>Compos</span></router-link>


                 <ul class="btn-menu">
                     <li>Inbox</li>
                    <li>Started</li>
                    <li>Sent Mail</li>
                    <li>Drafts</li>
                 </ul>
                 <div class="progress">32%</div>
                </section>
               <div class="mail-display">
                   <mail-filter @filtered="setFilter" />
                   <mail-list :mails="mailsForDisplay" />
                </div>
        </section>
    `,

    components: {
        mailFilter,
        mailList,
    },
    data() {
        return {
            mails: null,
            filterBy: null
        };
    },
    created() {
        mailService.query()
            .then(mails => this.mails = mails);
    },
    methods: {
        form() {
            `
            
            
            `
        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        }
    },
    computed: {
        mailsForDisplay() {
            if (!this.filterBy) return this.mails;
            const regex = new RegExp(this.filterBy.fullname, 'i');
            return this.mails.filter(mail => regex.test(mail.fullname));
        }
    },
}