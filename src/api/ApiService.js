import { api } from '@/api/api.js'

export default {
    // MOVIES REQUESTS
    addMovie (variables) {
        const { title, releaseDate, description, duration, note, boxOffice, budget, director, website, actors, categories, mediaobject } = variables;
        const mutation = `
            mutation createMovie($title: String!, $releaseDate: String, $description: String, $duration: Int, $note: Int, $boxOffice: Int, $budget: Int, $director: String!, $website: String, $actors: [String], $categories: [String], $mediaobject: [String]) {
                createMovie(input : {
                    title: $title,
                    releaseDate: $releaseDate,
                    description: $description,
                    duration: $duration,
                    note: $note,
                    boxOffice: $boxOffice,
                    budget: $budget,
                    director: $director,
                    website: $website,
                    actors: $actors,
                    categories: $categories,
                    mediaobject: $mediaobject
                }){
                    movie{
                        id
                        title
                        releaseDate
                        description
                        duration
                        note
                        boxOffice
                        budget
                        director
                        website
                        actors{
                            collection{
                                id
                            }
                        }
                        categories{
                            collection{
                                id
                            }
                        }
                        mediaobject{collection{id}}
                    }
                }
            }`;
        return api('/api/graphql', {
            method: 'POST',
            body: JSON.stringify({
                query: mutation,
                variables: { title, releaseDate, description, duration, note, boxOffice, budget, director, website, actors, categories, mediaobject }
            })
        })
    },
    updateMovie (movieInfo, id) {
        return api('/movies/' + id, {
            method: 'PATCH',
            body: JSON.stringify(movieInfo)
        })
    },
    deleteMovie (id) {
        const mutation = `
        mutation deleteMovie(
            $id: ID!
          ){
            deleteMovie(input: 
            {id: $id}){
              movie {id}
            }
          }
        `;

        return api('/api/graphql/', {
            method: 'POST',
            body: JSON.stringify({
                query: mutation,
                variables: {id}
            })
        })
    },
    searchMovie (title) {
        return api('/api/movies?title=' + title, {
        method: 'GET' 
        })
    },
    getLastMovie() {
        const query = `
        query movies{
          movies(itemsPerPage: 4, order: {id: "DESC"}){
                paginationInfo {
                itemsPerPage
                totalCount
                }
                collection{
                id
                _id
                title
                note
                mediaobject{
                    collection{
                        contentUrl
                    }
                }
                }
            }
        }
        `;

        return api('/api/graphql', { 
        method: 'POST',
        body: JSON.stringify({
            query,
        })
        })
    },
    getMovies(variables) {
        const query = `
        query movies($title: String, $page: Int, $itemsPerPage: Int){
            movies(page: $page, itemsPerPage: $itemsPerPage, title: $title){
                paginationInfo {
                itemsPerPage
                lastPage
                totalCount
                }
                collection{
                id
                _id
                title
                note
                mediaobject{
                    collection{
                        contentUrl
                    }
                }
                }
            }
        }
        `;

        return api('/api/graphql', { 
        method: 'POST',
        body: JSON.stringify({
            query,
            variables
        })
        })
    },
    getMovieById(id) {
        const query = `
        query movie($id: ID!){
        movie(id: $id){
            id
            title
            releaseDate
            description
            duration
            note
            boxOffice
            budget
            director
            website
            categories{
                collection{
                name
                }
            }
            mediaobject{
                collection{
                contentUrl
                }
            }
            actors{
                collection{
                id
                _id
                lastname
                firstname
                image {contentUrl}
                }
            }
            }
        }`;

        return api('/api/graphql', { 
        method: 'POST',
        body: JSON.stringify({
            query,
            variables: { id }
        })
        })
    },

    // ACTORS REQUESTS
    getLastActor() {
        const query = `
        query actors{
          actors(itemsPerPage: 4, order: {id: "DESC"}) {
                paginationInfo {
                itemsPerPage
                lastPage
                totalCount
                }
                collection{
                    id
                    _id
                    lastname
                    firstname
                    image {contentUrl}
                }
            }   
        }
        `;
        return api('/api/graphql', { 
        method: 'POST',
        body: JSON.stringify({
            query,
        })
        })
    },
    getActors(variables) {
        const query = `
        query actors($lastname: String, $firstname: String, $page: Int, $itemsPerPage: Int){
            actors(page: $page, itemsPerPage: $itemsPerPage, lastname: $lastname, firstname: $firstname) {
                paginationInfo {
                itemsPerPage
                lastPage
                totalCount
                }
                collection{
                    id
                    _id
                    lastname
                    firstname
                    image {contentUrl}
                }
            }   
        }
        `;
        return api('/api/graphql', { 
        method: 'POST',
        body: JSON.stringify({
            query,
            variables
        })
        })
    },
    getActorById(id) {
        const query = `
        query actor($id: ID!){
            actor(id: $id){
            id
            lastname
            firstname
            dob
            movies{
                collection{
                    id
                    _id
                    title
                    mediaobject{
                        collection{
                            contentUrl
                        }
                    }
                }
            }
            nationality
            image{ contentUrl }
            }
        }
        `;
        return api('/api/graphql', { 
          method: 'POST',
          body: JSON.stringify({
            query,
            variables: { id }
          })
        })
    },
    addActor (variables) {
        const { lastname, firstname, dob, nationality, image, createdAt } = variables; 
        const mutation = `
        mutation createActor($lastname: String!, $firstname: String, $createdAt: String!, $dob: String, $nationality: String!, $image: String) {
            createActor(input: {
            lastname: $lastname,
            firstname: $firstname,
            dob: $dob,
            createdAt: $createdAt,
            image: $image
            nationality: $nationality,
            }) {
                actor {
                    id
                    lastname
                    firstname
                    dob
                    nationality
                    createdAt
                    image{id}
                }
            }
        }`;
        return api('/api/graphql', {
            method: 'POST',
            body: JSON.stringify({
                query: mutation,
                variables: { lastname, firstname, dob, nationality, image, createdAt }
            })
        });
    },
    updateActor (actorInfo, id) {
        return api('/actors/' + id, {
            method: 'PATCH',
            body: JSON.stringify(actorInfo)
        })
    },
    deleteActor (id) {
        return api('/actors/' + id, {
            method: 'DELETE'
        })
    },
    searchActor (name) {
        return api('/api/actors?lastname=' + name, {
        method: 'GET' 
        })
    },

    // CATEGORIES REQUESTS
    getCategories(variables) {
        const query = `
        query categories($name: String, $page: Int, $itemsPerPage: Int){
            categories(name: $name, page: $page, itemsPerPage: $itemsPerPage){
              paginationInfo {
                    itemsPerPage
                    lastPage
                    totalCount
                }
              collection{
                    id
                    name
                movies{
                  collection{
                        id
                        _id
                        title
                        mediaobject{
                            collection{
                                contentUrl
                            }
                        }
                        }
                    }
                }
            }

        }`;

        return api('/api/graphql', { 
            method: 'POST',
            body: JSON.stringify({
                query,
                variables
            })
        })
    },
    addCategory (categoriesInfo) {
        return api('/categories', {
            method: 'POST',
            body: JSON.stringify(categoriesInfo)
        })
    },
    updateCategory (categoriesInfo, id) {
        return api('/categories/' + id, {
            method: 'PATCH',
            body: JSON.stringify(categoriesInfo)
        })
    },
    deleteCategory (id) {
        return api('/categories/' + id, {
            method: 'DELETE'
        })
    },
    searchCategories (name) {
        return api('/api/categories?name=' + name, {
        method: 'GET' 
        })
    },
}
