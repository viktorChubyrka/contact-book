import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);



export default new Vuex.Store({
  state: {
    contacts:[
    ],
    selected_contact:null,
  },
  getters:{
    contacts: (state)=>{
      return state.contacts;
    },
    selected_contact:(state)=>{
      return state.selected_contact;
    },

  },
  mutations: {
    emptyState() {
      this.replaceState({
        contacts:[
        ],
        selected_contact:null,
      });       
    },
    selectContact:(state,payload)=>{
      state.selected_contact = state.contacts.filter((el)=> el.id==payload)[0];
    },
    deleteContact:(state,payload)=>{
      let element_index = state.contacts.findIndex((el)=> {return el.id == payload})
      state.contacts.splice(element_index,1)
    },
    setContact:(state,payload)=>{
      let element_index = state.contacts.findIndex((el)=> {return el.id == payload.id})
      if(element_index == -1) state.contacts.push(payload)
      else state.contacts[element_index] = payload;
    },
    undo:(state)=>{
      state.contacts = JSON.parse(localStorage.getItem('state')).contacts;
    },
  }
});
