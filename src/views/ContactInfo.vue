<template>
    <div>
        <Navbar>
            <div>
                <button @click="addField" class="btn btn-default">add field</button>
                <button @click="undo" class="btn btn-default">undo last action</button>
            </div>
        </Navbar>
       <div class="contact-info-fields-container">
           <ContactInfoField @delete="deleteField(index)" @save="(name,value)=>changeContact(index,name,value)" v-for="(field,index) in contact.fields" :key="field.name" :name="field.name" :value="field.value" :is_name_readonly="index==0"/>
        </div>
        
    </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue"
import ContactInfoField from "@/components/ContactInfoField.vue"


export default {
    components:{
        Navbar,
        ContactInfoField,
        
    },
   data:function(){
       return {
           contact:{
               id:Date.now(),
               fields:[{name:'title',value:''}]
           },
          
       }
   },
   methods:{
       addField(){
           localStorage.setItem('contact',JSON.stringify(this.contact));
           this.contact.fields.push({name:'',value:''});
       },
       changeContact(index,name,value){
           this.contact.fields[index].name = name;
           this.contact.fields[index].value = value; 
           this.$store.commit('setContact',this.contact);
       },
       setContactInfo(){
           localStorage.setItem('contact',JSON.stringify(this.contact));
           if(this.$route.params.contact_id != 'new'){
               this.$store.commit('selectContact',this.$route.params.contact_id)
               this.contact = this.$store.getters.selected_contact;
           }
       },
       deleteField(index){
           localStorage.setItem('contact',JSON.stringify(this.contact));
           this.contact.fields.splice(index,1);
           this.$store.commit('setContact',this.contact);
       },
       undo(){
           this.contact = JSON.parse(localStorage.getItem('contact'));
           this.$store.commit('setContact',this.contact);
       }
      
   },
   created(){
    this.setContactInfo();
    localStorage.setItem('contact',JSON.stringify(this.contact));
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
