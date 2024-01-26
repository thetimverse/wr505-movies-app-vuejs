
<template>
    <teleport to="body">
      <div class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center" v-if="isOpen" @click="closeModal">
        <div class="bg-neutral-800 p-5 rounded-lg w-2/5 overflow-y-auto gap-5 modal-container" @click.stop>

          <h2 class="font-semibold text-center text-2xl">Add actor</h2>
          <button @click="closeModal" class="absolute right-96 pr-16 top-44"><v-icon name="fa-window-close" scale="2" /></button>

          <form @submit.prevent="submitForm">
            
            <label for="firstname">First name</label>
            <input type="text" id="firstname" v-model="form.firstname" required>
  
            <br>

            <label for="lastname">Last name</label>
            <input type="text" id="lastname" v-model="form.lastname" required>
  
            <br>
  
            <label for="dob">Date of birth</label>
            <input type="date" id="dob" v-model="form.dob" required>
  
            <br>
  
            <label for="nationality">Nationality</label>
            <input type="text" id="nationality" v-model="form.nationality" required>
  
            <br>
  
            <button type="submit" class="font-semibold bg-violet-800 py-2 px-6 mt-5 mx-auto block tracking-wide cursor-pointer hover:bg-violet-900 text-white">Add</button>
          </form>
          </div>
      </div>
    </teleport>
  </template>
  
  <script>
  
  import ApiService from '@/api/ApiService.js';
  
  export default {
    components: {
    },
    data() {
      return {
        isOpen: false,
        form: {
          lastname: '',
          firstname: '',
          nationality: '',
          dob: '',
          image: {},
        },
        createdAt: '',
        // lastPage: null,
        // totalCount: null,
      };
    },
    methods: {
      openModal() {
        this.isOpen = true;
      },
      closeModal() {
        this.isOpen = false;
      },
      async submitForm() {
        const currentDate = new Date();
        const dateFormatted = currentDate.toISOString();

        try {
          const submitData = await ApiService.addActor({
            lastname: this.form.lastname,
            firstname: this.form.firstname,
            dob: this.form.dob,
            nationality: this.form.nationality,
            createdAt: dateFormatted,
            image: "/api/media_objects/24",
          });
          console.log('Formulaire soumis avec succès');
          console.log(this.createdAt);
          this.isOpen = false;
          console.log('erreur : ', submitData);
        } catch (error) {
          console.error('Error creating actor:', error);
          this.error = 'Une erreur s\'est produite lors de la création de l\'acteur.';
        }
        console.log('Données du forumulaire : ', this.form);
      }
    },
    created() {
    },
  }
  
  </script>
  
  <style scoped>
  
  .modal-container {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-height: 80%;
    grid-template-columns: 1fr; 
  }
  
  label {
    display: inline-block;
    width: 100%;
    text-align: left;
    padding-right: 10px;
    margin-bottom: 5px;
  }
  input, textarea {
    background-color: #343434;
    margin-bottom: 10px;
    width: 100%;
  }
  .selectOptions input, .selectOptions label {
    margin-bottom: 0;
    width: auto;
  }
  .selectOptions input {
    width: 15px;
  }
  
  
  </style>