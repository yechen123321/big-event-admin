<template>
  <page-container title="文章分类">
    <template #extra>
      <el-button @click="onAddChannel">添加分类</el-button>
    </template>
    <el-table v-loading="loading" :data="channelList" style="width: 100%">
      <el-table-column type="index" label="序号" width="100"></el-table-column>
      <el-table-column prop="cate_name" label="分类名称"></el-table-column>
      <el-table-column prop="cate_alias" label="分类别名"></el-table-column>
      <el-table-column label="操作" width="150">
        <!-- row 就是 channelList 的一项， $index 下标 -->
        <template #default="{ row, $index }">
          <el-button
            :icon="Edit"
            circle
            plain
            type="primary"
            @click="onEditChannel(row, $index)"
          ></el-button>
          <el-button
            :icon="Delete"
            circle
            plain
            type="danger"
            @click="onDeleteChannel(row, $index)"
          ></el-button>
        </template>
      </el-table-column>
      <template #empty>
        <el-empty description="没有数据"></el-empty>
      </template>
    </el-table>
    <channel-Edit ref="dialog"></channel-Edit>
  </page-container>
</template>

<script setup>
import { ref } from 'vue'
import channelEdit from './components/ChannelEdit.vue'
import { artGetChannelsService } from '@/api/article'
import { Edit, Delete } from '@element-plus/icons-vue'
const channelList = ref([])

const loading = ref(false)

const dialog = ref()

const getChannelList = async () => {
  loading.value = true
  const res = await artGetChannelsService()
  channelList.value = res.data.data
  loading.value = false
  console.log(channelList.value)
}
getChannelList()

const onDeleteChannel = (row, $index) => {
  console.log(row, $index)
}

const onEditChannel = (row) => {
  dialog.value.open({ row })
}
const onAddChannel = () => {
  dialog.value.open({})
}
</script>

<style lang="scss" scoped></style>
