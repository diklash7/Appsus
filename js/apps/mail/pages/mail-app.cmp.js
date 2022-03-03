import { mailService } from '../services/mail-service.js';
import mailFilter from '../cmps/mail-filter.cmp.js';
import mailList from '../cmps/mail-list.cmp.js';

export default {
    template: `
        <section class="mail-app">
               <section class="mail-menu">
                   <router-link class="btn-compos" to="/mail/form"><span class="plus">+ </span><span>Compos</span></router-link>
                 <ul class="btn-menu">
                    <li @click="setFilter" class="inbox">Inbox</li>
                    <li class="started">Started</li>                              
                    <li @click="setFilterSent" class="sent-mail">Sent Mail</li>
                    <li  class="drafts">Drafts</li>
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
            myFilterBy: {
                status: 'inbox',
                txt: '',
                isRead: false,
                mail: '',
            }
        };
    },
    created() {
        mailService.query()
            .then(mails => this.mails = mails);
    },
    methods: {
        setFilter(filterBy) {
            this.myFilterBy.txt = filterBy;
        },
        setFilterSent() {
            this.myFilterBy.status = 'sent'
        }
    },
    computed: {
        mailsForDisplay() {
            if (!this.myFilterBy.txt) return this.mails;
            console.log(this.myFilterBy.txt);
            const regex = new RegExp(this.myFilterBy.fullname, 'i');
            return this.mails.filter(mail => regex.test(mail.fullname));
        }
    },
}