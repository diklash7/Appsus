import { noteService } from "../services/note.service.js";

export default {
    template:`
        <section class="note-app app-main">
            <h3>noteapp</h3>
        </section>
    `,

data() {
    return {
        notes: null,
        // selectedBook: null,
        // filterBy: null
    };

},
created(){
    noteService.query()
    .then(notes=> this.notes=notes);
}
}