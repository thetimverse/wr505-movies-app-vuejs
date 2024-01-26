<template>
    <div class="mb-8">
        <form @submit.prevent="">
            <input type="text" id="search" placeholder="Search" v-model="query">
        </form>
        
        <div class="mt-2">
            <div class="results">
                <p><span>{{ totalCount }}</span>&nbsp;results</p>
            </div>

        </div>
    </div>
</template>
  
<script>
    export default {
        props: {
            totalCount: null
        },
        data() {
            return {
                query: '',
                searchTimer: null
            }
        },
        watch: {
            search(query) {
                if (this.searchTimer) {
                    clearTimeout(this.searchTimer)
                }

                this.searchTimer = setTimeout(() => {
                    this.$emit('updatedSearch', query)
                }, 500)
            },
        }
    }
</script>
