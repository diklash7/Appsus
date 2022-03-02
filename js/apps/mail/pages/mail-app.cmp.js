import { mailService } from '../services/mail-service.js';
import { eventBus } from '../../../services/eventBus-service.js'
import mailFilter from '../cmps/mail-filter.cmp.js';
import mailList from '../cmps/mail-list.cmp.js';

export default {
    template: `
        <section class="mail-app app-main">
            <h3>Apps place</h3>
              <mail-filter @filtered="setFilter" />
           <mail-list :mails="mailsForDisplay" />
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