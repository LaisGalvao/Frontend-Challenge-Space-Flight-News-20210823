<template>
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
</style>
