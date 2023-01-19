<template>
  <div class="filter-flex-container">
    <b-input-group class="input-search" prepend-html='<span class="material-icons">search</span>'>
    <b-form-input
            @input="searchData()"
            type="search"
            placeholder="Search"
          ></b-form-input>
    </b-input-group>
    <b-form-select
      id="sort-by-select"
      @change="$emit('sort', $event, direction)"
      :options="sortOptions"
      v-model="sortBy"
      class="select"
    >
    <template #first>
        <b-form-select-option :value="undefined" disabled
          >Ordenar por</b-form-select-option
        >
      </template>
    </b-form-select>
  </div>
</template>

<script>
export default {
  name: 'SortByComponent',
  data: () => ({
    sortBy: undefined,
    filter: false
    // search: null
  }),
  methods: {
    filterSwitch () {
      this.filter = !this.filter
      this.$emit('filter', this.filter)
    },
    searchData (val) {
      console.log(val)
      return this.$store.getters.cards.filter((item) => {
        val
          .toLowerCase()
          .split(' ')
          .every((v) => item.title.toLowerCase().includes(v))
        return this.$emit('changeData', val)
      })
      /* else {
        return this.$store.getters.cards
      } */
    }
  },
  props: {
    sortOptions: Array
  }
}
</script>

<style>
.direction{
  vertical-align: middle
  }

  .filter-flex-container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: flex-end;
    align-items: center;
  }
  .custom-select{
    width: auto !important;
  }
  .input-search{
    width: 30% !important;
    height: 2rem;
    border-radius: 5px;
    outline:none !important;
    border: solid 0.5px slategrey !important;
  }
</style>
