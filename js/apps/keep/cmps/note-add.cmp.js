export default {
    template: `
    <section>
        <form @submit.prevent="save" >
            <div v-for="(cmp, idx) in noteAdd.cmps">
                <component :is="cmp.type"
                :info="cmp.info" >
                         <!-- @setVal="setAns($event, idx)" -->
            </component>
           </div >
            <button>Save</button>
    </section>
    `,
}