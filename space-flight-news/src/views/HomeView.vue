<template>
  <div class="home">
    <div v-if="loading">
      <b-spinner class="loading" type="grow" label="Loading..."></b-spinner>
    </div>
    <div v-for="(card, index) in cards" :key="index">
      <CardsComponent
      :title="card.title"
      :image="card.imageUrl"
      :date="card.publishedAt | dateFormat"
      :desc="card.summary"
      :site="card.newsSite"/>
    </div>
    <b-button class="btn-carregar-mais">carregar mais</b-button>
  </div>
</template>

<script>
// @ is an alias to /src
import CardsComponent from '@/components/CardsComponent.vue'
import { api } from '@/services'

export default {
  name: 'HomeView',
  components: {
    CardsComponent
  },
  data () {
    return {
      loading: true,
      search: null
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
    cards () {
      return this.$store.getters.cards
    },
    searchData () {
      if (this.search) {
        return this.cards.filter((item) => {
          return this.search
            .toLowerCase()
            .split(' ')
            .every((v) => item.title.toLowerCase().includes(v))
        })
      } else {
        return ''
      }
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
