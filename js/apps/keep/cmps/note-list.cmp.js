import notePreview from './note-preview.cmp.js'
export default {
    props: ['notes'],
    template: `
        <section class="note-list">
            <ul>
                <input type="text" placeholder="What's on your mind...">
                <li v-for="note in notes" :key="note.id"> 
                    <note-preview :note="note"/>
                    <div class="actions">
                    <button @click="remove(note.id)">X</button>
                    </div> 
                </li>
            </ul>
        </section>

`,
    components: {
        notePreview
    },
    methods: {
        remove(id) {
            console.log(id)
            this.$emit('remove', id);
        },
    }

}