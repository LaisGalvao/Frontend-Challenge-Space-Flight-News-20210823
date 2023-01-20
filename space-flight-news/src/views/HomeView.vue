<template>
  <div>
    <nav class="nav-style">
      <div class="filter-flex-container my-2 py-2 px-5">
        <b-input-group class="input-search" prepend-html='<span class="material-icons">search</span>'>
          <b-form-input
                  v-model="search"
                  type="search"
                  placeholder="Search"
                ></b-form-input>
          </b-input-group>
            <b-form-select
              id="sort-by-select"
              @change="sortByDate(selected)"
              :options="options"
              v-model="selected"
              class="select"
            >
            <template #first>
              <b-form-select-option :value="null" disabled>-- Ordenar por --</b-form-select-option>
            </template>
            </b-form-select>
      </div>
      <h1 class="display-5 my-3">
        <span class="material-icons">
          rocket_launch
        </span> Space Flight News</h1>
    </nav>
  <div class="home">
    <div v-if="loading">
      <b-spinner class="loading" type="grow" label="Loading..."></b-spinner>
    </div>
    <div v-for="(card, index) in cards" :key="index">
      <CardsComponent
      :id="card.id"
      :title="card.title"
      :image="card.imageUrl"
      :alt="card.title"
      :date="card.publishedAt | dateFormat"
      :desc="card.summary"
      :site="card.newsSite"
      :modal="card.id"/>

      <ModalComponent :id="card.id.toString()" :site="card.url">
         <template slot="img">
          <b-col md="6">
            <b-card-img
            :src="card.imageUrl"
            :alt="card.title"
            class="rounded-2"
            style="height: -webkit-fill-available">
          </b-card-img>
          </b-col>
         </template>
          <template slot="content">
            <b-card-body :title="card.title">
              <b-card-sub-title>{{ card.publishedAt | dateFormat }}</b-card-sub-title>
              <b-badge class="badge-site">{{card.newsSite}}</b-badge>
              <b-card-text>
                {{card.summary}}
              </b-card-text>
            </b-card-body>
          </template>
      </ModalComponent>

    </div>
    <div v-if="!cards.length && search.length > 0">
       <h2> No results found</h2>
    </div>
    <b-button v-if="cards.length"
     class="btn-carregar-mais text-uppercase"
     @click="loadDataOnDemand"
     v-observe-visibility="visibilityChanged">
     carregar mais</b-button>
  </div>
</div>
</template>

<script>
import CardsComponent from '@/components/CardsComponent.vue'
import ModalComponent from '@/components/ModalComponent.vue'
import { api } from '@/services'

export default {
  name: 'HomeView',
  components: {
    CardsComponent,
    ModalComponent
  },
  data () {
    return {
      loading: true,
      search: '',
      limit: 10,
      selected: '',
      options: [
        { value: 'antigas', text: 'Mais antigas' },
        { value: 'novas', text: 'Mais novas' }
      ]
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
    window.setTimeout(this.getData(this.limit), 2000)
  },
  methods: {
    getData (limit) {
      api.get(`/articles?_limit=${limit}`).then(response => {
        if (response.status === 200) {
          this.loading = false
          this.$store.dispatch('getArticles', response.data)
        }
      })
    },
    visibilityChanged (isVisible) {
      // if (!isVisible) return
      localStorage.setItem('visible', isVisible)
    },
    loadDataOnDemand () {
      if (localStorage.getItem('visible')) {
        this.limit = this.limit + 10
        this.getData(this.limit)
      }
    },
    sortByDate (selected) {
      this.cards.sort(function (a, b) {
        if (selected === 'antigas') {
          if (a.publishedAt > b.publishedAt) {
            return 1
          }
          if (a.publishedAt < b.publishedAt) {
            return -1
          }
        }
        if (selected === 'novas') {
          if (a.publishedAt < b.publishedAt) {
            return 1
          }
          if (a.publishedAt > b.publishedAt) {
            return -1
          }
        }

        return 0
      })

      return this.$store.dispatch('getArticles', this.cards)
    }
  },
  computed: {
    cards () {
      let items = []
      items = this.$store.getters.cards.filter((item) => {
        return (
          item.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
          item.summary.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        )
      })

      return items
    }
  }
}
</script>
<style scoped>

.nav-style{
  box-shadow: 0px 5px #302e5383;
}
.home{
    position: relative;
    top: 15rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
}
.loading{
  background-color: #302e53;
  color: #fff;
}
.btn-carregar-mais{
  margin: 5%;
  background-color: #302e53;
  color: #fff;
}
.input-group {
  width: auto!important
}

.filter-flex-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: flex-end;
    align-items: center;
}

#sort-by-select{
  width: auto;
}
</style>
