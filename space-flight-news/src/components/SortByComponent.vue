<template>
  <div class="filter-flex-container">
    <input
            type="search"
            placeholder="Buscar Funcionalidade"
            class="input-search"
          >
    <span @click="filterSwitch" :class="'filter' + (filter ? ' actived' : '')"
      ><i class="material-icons-outlined">filter_alt</i>Filtrar</span
    >
    <select
      id="sort-by-select"
      @change="$emit('sort', $event, direction)"
      :options="sortOptions"
      v-model="sortBy"
      class="select"
    >
        <option :value="undefined" disabled
          >Ordenar</option
        >
    </select>
    <div class="direction" @click="toggleDirection">
      <transition name="rotate">
        <i v-bind:key="direction" class="material-icons-outlined">{{
          direction ? "arrow_upward" : "arrow_downward"
        }}</i>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    sortBy: undefined,
    filter: false,
    direction: true // up true = asc, down false = desc
  }),
  methods: {
    filterSwitch () {
      this.filter = !this.filter
      this.$emit('filter', this.filter)
    },
    firstSelect () {
      this.$emit('firstSelect')
    },
    toggleDirection () {
      this.direction = !this.direction
      if (this.sortBy) {
        this.$emit('sort', this.sortBy, this.direction)
      }
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
</style>
