import { mailService } from '../services/mail-service.js';
import mailFilter from '../cmps/mail-filter.cmp.js';
import mailList from '../cmps/mail-list.cmp.js';

export default {
    template: `
        <section class="mail-app">
               <section class="mail-menu">
                   <router-link class="btn-compos" to="/mail/form"><span class="plus">+ </span><span>Compos</span></router-link>
                 <ul class="btn-menu">
                 <router-link class="inbox" to="/mail">
                     <li>Inbox</li>
                 </router-link>
                 <router-link class="started" to="/mail">
                    <li>Started</li>
                    </router-link>
                    <router-link class="sent-mail" to="/mail/sent-mail">
                    <li>Sent Mail</li>
                    </router-link>
                    <router-link class="drafts" to="/mail">
                    <li>Drafts</li>
                    </router-link>
                 </ul>
                 <div class="progress">32%</div>
                </section>
               <div class="mail-display">
                   <mail-filter @filtered="setFilter"/>
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