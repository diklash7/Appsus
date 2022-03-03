import noteTxt from './note-txt.cmp.js'
import noteImg from './note-img.cmp.js'
// import noteTodos from './note-todos.cmp.js'
import noteVideo from './note-video.cmp.js'
import notePreview from './note-preview.cmp.js'
export default {
    props: ['notes'],
    template: `
        <section class="note-list">
            <form  @submit.prevent="save">
                <input type="text" class="note-input" :placeholder="fromTimeWindow">
                <select name="type" v-model="fromTimeWindow">
                    <option value="all">ALL</option>
                    <option value="What's on your mind...">Text</option>
                    <option value="Enter image URL">Image</option>
                    <option value="Enter video URL">Video</option>
                    <option value="Enter comma seperated list..">List</option>
                </select>
            </form>
            <ul>
                <li  v-for="note in notes"> 
                    <component :is="note.type" :info="note.info"> </component>
                    <note-preview :note="note"/>
                    <div class="actions">
                    <button @click="remove(note.id)">X</button>
                    </div> 
                </li>
            </ul>
            <button @click="save">save</button>
        </section>

`,
    data() {
        return {
            fromTimeWindow: 'Hey here is custom placeholder'
        }
    },
    components: {
        notePreview,
        noteTxt,
        noteImg,
        // noteTodos,
        noteVideo
    },
    methods: {
        remove(id) {
            console.log(id)
            this.$emit('remove', id);
        },
    },
    computed: {
        placeHolderType() {
            console.log('type:', notes.type);

        }


    }

}