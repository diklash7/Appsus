import { noteService } from "../services/note-service.js";
import noteList from "../cmps/note-list.cmp.js";
import noteFilter from "../cmps/note-filter.cmp.js";

export default {
    template: `
        <section class="note-app app-main">
            <h3>noteapp</h3>
            <note-filter @filtered="setFilter" />
            <note-list :notes="notesForDisplay"/>
        </section>
    `,
    components: {
        noteList,
        noteFilter
    },
    data() {
        return {
            notes: null,
            // selectedBook: null,
            filterBy: null
        };

    },
    created() {
        noteService.query()
            .then(notes => this.notes = notes);
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy;
        }

    },
    computed: {
        notesForDisplay() {
            if (!this.filterBy) return this.notes;
            const regex = new RegExp(this.filterBy.txt, 'i');
            return this.notes.filter(note => regex.test(note.txt));
        }
    },
}