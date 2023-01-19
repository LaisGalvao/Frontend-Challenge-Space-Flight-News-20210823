<template>
   <b-input-group class="input-search" prepend-html='<span class="material-icons">search</span>'>
    <b-form-input
            :v-model="search"
            type="search"
            placeholder="Search"
          ></b-form-input>
    </b-input-group>
</template>

<script>
export default {
  ame: 'SearchFilterComponent',
  data: () => ({
  }),
  props: {
    search: String
  }
}
</script>

<style>
 .input-search{
    width: 30% !important;
    height: 2rem;
    border-radius: 5px;
    outline:none !important;
    border: solid 0.5px slategrey !important;
  }
</style>
