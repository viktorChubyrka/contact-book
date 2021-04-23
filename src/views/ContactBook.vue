<template>
    <div>
        <Navbar>
            <button @click="goToContactInfoPage('new')" class="btn btn-default">add contact</button>
        </Navbar>
        <div v-if="contacts.length" class="contacts-list">
            <div v-for="contact in contacts" :key="contact.id"  class="contact-item">
                <h2>{{contact.fields[0].value}}</h2>
                <button @click="goToContactInfoPage(contact.id)" class="btn btn-default">info</button>
                <button @click="is_modal_active = true" class="btn btn-danger">delete</button>
                <ActionSubmitModal @accept="deleteContact(contact.id)" @cancel="is_modal_active = false" v-if="is_modal_active" >Delete?</ActionSubmitModal>
            </div>
        </div>
        <h2 v-else> You contact list is empty</h2>
    </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue"
import ActionSubmitModal from "@/components/ActionSubmitModal.vue"
export default {
    data:function(){
        return{
            is_modal_active:false
        }
    },
    components:{
        Navbar,
        ActionSubmitModal
    },
    methods:{
        goToContactInfoPage(contact_id){
            this.$router.push(`/contact_info/${contact_id}`)
        },
        getContacts(){
            let contacts = localStorage.getItem('contacts');
            if(contacts){
                this.$store.commit('setContacts',JSON.parse(contacts));
            }
        },
        deleteContact(id){
            console.log(id);
            this.$store.commit('deleteContact',id)
        }
    },
    created(){
        this.getContacts();
    },
    computed:{
        contacts(){
            return this.$store.getters.contacts;
        }
    }
}
</script>
<style scoped>

.contacts-list{
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 2vh 3vh;
}
.contact-item{
    display: flex;
    padding: 2vh;
    justify-content: space-between;
    z-index: 1;
    border-radius: 1.111vh;
    margin-bottom:  1.111vh;
    cursor: pointer;
}
.contact-item:hover{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    z-index:2
}

</style>
