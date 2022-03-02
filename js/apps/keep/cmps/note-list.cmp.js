import notePreview from './note-preview.cmp.js'
export default {
    props: ['notes'],
    template: `
        <section class="note-list">
            <input type="text"  placeholder="What's on your mind...">
            <ul>
                <li v-for="note in notes" :key="note.id"> 
                    <note-preview :note="note"/>

                </li>
            </ul>
        </section>

`,
    components: {
        notePreview
    },



}