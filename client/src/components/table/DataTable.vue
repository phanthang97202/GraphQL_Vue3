<template>
  <a-table sticky :columns="columns" :data-source="data" :loading="loading" :scroll="{ x: 1500 }">
    <template #bodyCell="{ column }">
      <template v-if="column.key === 'operation'"><a>View</a></template>
    </template>
  </a-table>
  <a-modal v-model:open="openModal" title="Title" :confirm-loading="confirmLoading" @ok="handleOk">
    <a-form
      ref="formRef"
      :model="formState"
      :rules="rules"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
    >
      <a-form-item ref="name" label="Activity name" name="name">
        <a-input v-model:value="formState.name" />
      </a-form-item>
      <a-form-item label="Activity zone" name="region">
        <a-select v-model:value="formState.region" placeholder="please select your zone">
          <a-select-option value="shanghai">Zone one</a-select-option>
          <a-select-option value="beijing">Zone two</a-select-option>
        </a-select>
      </a-form-item>
    </a-form>
  </a-modal>
</template>
<script setup>
import { ref } from 'vue'

defineProps({
  data: Array,
  columns: Array,
  loading: Boolean
})

const openModal = ref(true)
const confirmLoading = ref(false)
const handleOk = () => {
  confirmLoading.value = true
  setTimeout(() => {
    openModal.value = false
    confirmLoading.value = false
  })
}
</script>
<style scoped>
#components-table-demo-summary tfoot th,
#components-table-demo-summary tfoot td {
  background: #fafafa;
}
[data-theme='dark'] #components-table-demo-summary tfoot th,
[data-theme='dark'] #components-table-demo-summary tfoot td {
  background: #1d1d1d;
}
</style>
