<template>
  <div>
    <DataTable :data="data" :columns="columns" :loading="query.loading.value" />
  </div>
</template>
<script setup>
import DataTable from '../components/table/DataTable.vue'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { onMounted, ref, watch } from 'vue'
const data = ref([])
const query = useQuery(gql`
  query ABC {
    authors {
      name
      id
      age
      books {
        name
      }
    }
  }
`)
onMounted(() => {
  query.refetch()
})
watch(
  () => query.result.value,
  (newResult) => {
    if (newResult) {
      data.value = newResult.authors
    }
  }
)

const columns = [
  {
    title: 'Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left'
  },
  {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left'
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100
  }
]
</script>

<style scoped></style>
