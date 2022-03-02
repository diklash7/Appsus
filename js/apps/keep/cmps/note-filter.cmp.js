export default {
    template: `
        <section class="note-filter">
            <label>
            Search notes
            <input ref="vendorInput" @input="setFilter" type="text" v-model="filterBy.txt" placeholder="Search notes">
            </label>
        </section>
    `,
    data() {
        return {
            filterBy: {
                txt: ''
            }
        };
    },
    mounted(){
        this.$refs.vendorInput.focus()
    },
    methods: {
        setFilter() {
            this.$emit('filtered', {...this.filterBy});
        }
    }
}