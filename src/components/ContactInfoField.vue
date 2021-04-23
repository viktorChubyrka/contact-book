<template>
    <div class="contact-info-field">
        <div class="info-field">
            <label for="input">Information name</label>
            <input :disabled="is_name_readonly" class="input" v-model="current_name" type="text">
        </div>
         <div class="info-field">
            <label for="input">Information value</label>
            <input class="input" v-model="current_value"  type="text">
        </div>
        <div v-if="are_values_changet">
             <button @click="setDefault" class="btn btn-warning">undo changes</button>
        </div>
        <div v-if="are_values_changet && are_fields_nod_empty" >
             <button @click="saveChanges" class="btn btn-default">save changes</button>
        </div>
        <div v-if="!is_name_readonly" >
             <button @click="is_modal_active=true" class="btn btn-danger">delete</button>
        </div>
        <ActionSubmitModal @accept="$emit('delete')" @cancel="is_modal_active=false" v-if="is_modal_active">Delete?</ActionSubmitModal>
    </div>
</template>
<script>
import ActionSubmitModal from "@/components/ActionSubmitModal.vue"
export default {
    components:{

        ActionSubmitModal
    },
   props:{
       is_name_readonly:{
           default:false,
           type:Boolean
       },
       name:{
           default:'',
           type:String
       },
       value:{
           default:'',
           type:String
       },
   },
   data:function(){
       return {
           current_name:'',
           current_value:'',
            is_modal_active:false
       }
   },
   created(){
       this.setDefault();
   },
   methods:{
       setDefault(){
            this.current_name = this.name;
            this.current_value = this.value
       },
       saveChanges(){
           this.$emit('save',this.current_name,this.current_value)
       }
   },
   computed:{
       are_values_changet(){
           return !(this.current_value == this.value && this.current_name == this.name)
       },
       are_fields_nod_empty(){
           return this.current_name.length && this.current_value.length; 
       }
   }
}
</script>
<style scoped>
.contact-info-field{
    display: flex;
    align-items: center;
    padding: 1.111vh;
    margin-bottom: 1.111vh;
}
.info-field{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 2vh;
}

</style>