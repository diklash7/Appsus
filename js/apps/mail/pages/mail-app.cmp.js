import { mailService } from '../services/mail-service.js';
import mailFilter from '../cmps/mail-filter.cmp.js';
import mailList from '../cmps/mail-list.cmp.js';

export default {
    template: `
        <section class="mail-app app-main">
            <h3>mail</h3>
              <!-- <mail-filter @filtered="setFilter" /> -->
           <mail-list :mails="mailsForDisplay" />
        </section>
    `,

    components: {
        // mailFilter,
        mailList,
    },
    data() {
        return {
            mails: null,
            // filterBy: null
        };
    },
    created() {
        mailService.query()
            .then(mails => this.mails = mails);
    },
    methods: {
        // removeBook(id) {
        //     bookService.remove(id)
        //         .then(() => {
        //             const idx = this.books.findIndex((book) => book.id === id);
        //             this.books.splice(idx, 1);
        //             eventBus.emit('show-msg', { txt: 'Deleted succesfully', type: 'success' });
        //         })
        //         .catch(err => {
        //             console.error(err);
        //             eventBus.emit('show-msg', { txt: 'Error - please try again later', type: 'error' });
        //         });
        // },
        // setFilter(filterBy) {
        //     this.filterBy = filterBy;
        // }
    },
    computed: {
        mailsForDisplay() {
            if (!this.filterBy) return this.mails;
            // const regex = new RegExp(this.filterBy.title, 'i');
            // const min = this.filterBy.fromPrice || 0;
            // const max = this.filterBy.toPrice || Infinity;
            // return this.books.filter(book => (regex.test(book.title) && (min < book.listPrice.amount) && (max > book.listPrice.amount)));
        }
    },
}