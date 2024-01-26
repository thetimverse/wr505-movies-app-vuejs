
<template>
    <teleport to="body">
      <div class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center" v-if="isOpen" @click="closeModal">
        <div class="bg-neutral-800 p-5 rounded-lg w-2/5 overflow-y-auto gap-5 modal-container" @click.stop>

          <h2 class="font-semibold text-center text-2xl">Add movie</h2>
          <button @click="closeModal" class="absolute right-96 pr-20 top-24"><v-icon name="fa-window-close" scale="2" /></button>

          <form @submit.prevent="submitForm">        
            <label for="title">Title</label>
            <input type="text" id="title" v-model="form.title" required>
            <br>
            <label for="release_date">Release date</label>
            <input type="date" id="release_date" v-model="form.releaseDate" required>
            <br>
            <label for="desc">Synopsis</label>
            <br>
            <textarea rows="5" cols="35" id="desc" v-model="form.description" required/>
            <br>
            <label for="duration">Duration (in minutes)</label>
            <input type="number" id="duration" v-model="form.duration" required>
            <br>
            <label for="note">Note</label>
            <input type="number" id="note" v-model="form.note" min=0 max=10 required>
            <br>
            <label for="budget">Budget</label>
            <input type="number" id="budget" v-model="form.budget" required>
            <br>
            <label for="boxOffice">Box-office revenue</label>
            <input type="number" id="boxOffice" v-model="form.boxOffice" required>
            <br>
            <label for="director">Director</label>
            <input type="text" id="director" v-model="form.director" required>
            <br>
            <label for="website">Website</label>
            <input type="url" id="website" v-model="form.website" required>
            <br>

            <label for="actors">Actors</label>
            <div v-for="actor in actorsOptions" :key="actor.id" class="flex flex-row gap-4 items-center selectOptions mb-2">
              <input
                type="checkbox"
                :id="`actor-${actor.id}`"
                v-model="form.actors"
                :value="actor.id"        
              />
              <label :for="`actor-${actor.id}`">{{ actor.firstname }} {{ actor.lastname }}</label>
            </div>
            <span v-if="!isAtLeastOneCheckboxCheckedActor">Select at least one actor.</span>
            <Pagination
                :current-page="variables_actors.page"
                :last-page="lastPage || 0"
                @update-page="updatePage"
            ></Pagination>
            <br>
  
            <label for="categories" class="mt-5">Genres</label>
            <div v-for="category in categoriesOptions" :key="category.id" class="flex flex-row gap-4 items-center selectOptions mb-2">
              <input
                type="checkbox"
                :id="`category-${category.id}`"
                v-model="form.categories"
                :value="category.id"
               />
              <label :for="`category-${category.id}`">{{ category.name }}</label>
            </div>
            <span v-if="!isAtLeastOneCheckboxCheckedCategory">Select at least one genre.</span>
            <Pagination
                :current-page="variables_categories.page"
                :last-page="lastPage || 0"
                @update-page="updatePage"
            ></Pagination>
            <br>
  
            <button type="submit" class="font-semibold bg-violet-800 py-2 px-6 mt-5 mx-auto block tracking-wide cursor-pointer hover:bg-violet-900 text-white">Add</button>
          </form>
          </div>
      </div>
    </teleport>
  </template>
  
  <script>
  
  import ApiService from '@/api/ApiService.js';
  import Pagination from "@/components/Pagination.vue";
  
  export default {
    components: {Pagination},
    data() {
      return {
        isOpen: false,
        form: {
          title: '',
          releaseDate: '',
          description: '',
          duration: '',
          note: '',
          boxOffice: '',
          budget: '',
          director: '',
          actors: [],
          categories: [],
          website: '',
          isAtLeastOneCheckboxCheckedActor: true,
          isAtLeastOneCheckboxCheckedCategory: true,
          mediaobject: [],
        },
        variables_actors: {
          page: 1,
          itemsPerPage: 5,
          firstname: '',
        },
        variables_categories: {
          page: 1,
          itemsPerPage: 5,
          name: '',
        },
        actors: [],
        actorsOptions: [],
        categories: [],
        categoriesOptions: [],
        lastPage: null,
        totalCount: null,
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
        this.isAtLeastOneCheckboxCheckedActor = this.form.actors.length > 0;
        this.isAtLeastOneCheckboxCheckedCategory = this.form.categories.length > 0
        if (this.isAtLeastOneCheckboxCheckedActor && this.isAtLeastOneCheckboxCheckedCategory) {
        try {
          const submitData = await ApiService.addMovie({
            title: this.form.title,
            releaseDate: this.form.releaseDate,
            description: this.form.description,
            duration: this.form.duration,
            note: this.form.note,
            boxOffice: this.form.boxOffice,
            budget: this.form.budget,
            director: this.form.director,
            actors: this.form.actors,
            categories: this.form.categories,
            website: this.form.website,
            mediaobject: ["/api/media_objects/23"],
          });
        //   console.log('success');
          this.isOpen = false;
        //   console.log('error ', submitData);
        } catch (error) {
          console.error('Error creating actor:', error);
          this.error = 'Une erreur s\'est produite lors de la création de l\'acteur.';
        }
        // console.log('Form data ', this.form);
      }
      else {
          console.log('Select at least one actor');
        }
      },
      async loadActors() {
        try {
          const response = await ApiService.getActors({
            page: this.variables_actors.page,
            itemsPerPage: this.variables_actors.itemsPerPage,
          });
        //   console.log(response);
          this.actors = response.data.actors.collection;
          this.lastPage = response.data.actors.paginationInfo.lastPage;
          // form options based on film data
          this.actorsOptions = this.actors.map(actor => ({ id: actor.id, firstname: actor.firstname, lastname: actor.lastname }));
        //   console.log(this.actorsOptions);
        } catch (error) {
          console.error('Error loading actors:', error);
        }
      },
      async loadCategories() {
        try {
          const response = await ApiService.getCategories({
            page: this.variables_categories.page,
            itemsPerPage: this.variables_categories.itemsPerPage,
          });
        //   console.log(response);
          this.categories = response.data.categories.collection;
          this.lastPage = response.data.categories.paginationInfo.lastPage;
          // form options based on film data
          this.categoriesOptions = this.categories.map(category => ({ id: category.id, name: category.name }));
        //   console.log(this.categoriesOptions);
        } catch (error) {
          console.error('Error loading actors:', error);
        }
      },
      updatePage(page) {
      this.variables_actors.page = page;
      this.loadActors(this.variables);  
      console.log(this.variables_actors.page);
      console.log(this.variables_actors);
    },
    updatePageCategory(page) {
      this.variables_categories.page = page;
      this.loadCategories(this.variables);  
      console.log(this.variables_categories.page);
      console.log(this.variables_categories);
    },
    },
    created() {
    this.loadActors();
    this.loadCategories();
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