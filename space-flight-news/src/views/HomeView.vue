<template>
  <div>
    <nav>
      <div class="filter-flex-container">
        <b-input-group class="input-search" prepend-html='<span class="material-icons">search</span>'>
          <b-form-input
                  v-model="search"
                  type="search"
                  placeholder="Search"
                ></b-form-input>
          </b-input-group>
        <SortByComponent :sortOptions="options" />
      </div>
      <h1 class="display-4 my-5"> Space Flight News</h1>
    </nav>
  <div class="home">
    <div v-if="loading">
      <b-spinner class="loading" type="grow" label="Loading..."></b-spinner>
    </div>
    <div v-for="(card, index) in cards" :key="index">
      <CardsComponent
      :title="card.title"
      :image="card.imageUrl"
      :date="card.publishedAt"
      :desc="card.summary"
      :site="card.newsSite"/>
    </div>

    <b-button class="btn-carregar-mais">carregar mais</b-button>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import CardsComponent from '@/components/CardsComponent.vue'
import SortByComponent from '@/components/SortByComponent.vue'
import { api } from '@/services'

export default {
  name: 'HomeView',
  components: {
    CardsComponent,
    SortByComponent
  },
  data () {
    return {
      loading: true,
      search: ''
    }
  },
  filters: {
    dateFormat: (date) => {
      return new Date(new Date(date) - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .replace(/-/g, '/')
        .replace('T', ' - ')
        .replace('Z', '')
        .slice(0, -4)
    }
  },
  mounted () {
    window.setTimeout(this.getData, 2000)
  },
  methods: {
    getData () {
      api.get('/articles').then(response => {
        if (response.status === 200) {
          this.loading = false
          this.$store.dispatch('getArticles', response.data)
        }
      })
    }
  },
  computed: {
    options () {
      return [
        { value: 'antigas', text: 'Mais antigas' },
        { value: 'novas', text: 'Mais novas' }
      ]
    },
    cards () {
      let items = []
      items = this.$store.getters.cards.filter((item) => {
        return (
          item.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
          item.summary.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        )
      })
      console.log(items)
      if (this.search.length === 0) {
        return items.push('No results found')
      }
      return items
    }
  }
}
</script>
<style scoped>
.home{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
}
.loading{
  background-color: #302e53;
}
.btn-carregar-mais{
  margin: 5%;
  background-color: #302e53;
}
</style>
