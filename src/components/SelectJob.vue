<template>
    <div style="display: flex;align-items: center;">
        <div class="title">{{ title }}</div>
        <el-dropdown>
            <el-icon>
                <ArrowDown />
            </el-icon>
            <template #dropdown>
                <el-dropdown-menu>
                    <div v-for="v in jobCategory" :key="v.name">
                        <el-dropdown-item disabled>
                            <div class="drop-down-title">{{ v.name }}</div>
                        </el-dropdown-item>
                        <el-dropdown-item v-for="item in v.children" :key="item.id">
                            <div class="drop-down-subtitle" @click="goto(v.name, item.id)">{{ item.name }}</div>
                        </el-dropdown-item>
                    </div>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    title: String
})
const emit = defineEmits(['change'])
const goto =(type,id)=>{
    emit('change',{ type, id })
}
const jobCategory = ref([
    {
        name: '前端开发',
        children: [
            {
                name: 'Web前端开发工程师',
                id: 1
            },
            {
                name: '移动应用开发工程师',
                id: 2
            },
            {
                name: '全栈开发工程师',
                id: 3
            }
        ]
    },
    {
        name: '后端开发',
        children: [
            {
                name: 'C/C++ 开发工程师',
                id: 4
            },
            {
                name: 'Java 开发工程师',
                id: 5
            },
            {
                name: 'Python 开发工程师',
                id: 6
            },
            {
                name: 'PHP 开发工程师',
                id: 7
            },
            {
                name: 'GoLang 开发工程师',
                id: 8
            }
        ]
    },
    {
        name: '测试运维',
        children: [
            {
                name: '软件测试工程师',
                id: 9
            },
            {
                name: '运维工程师',
                id: 10
            },
            {
                name: '实施工程师',
                id: 11
            }
        ]
    },
    {
        name: '前沿技术',
        children: [
            {
                name: '大数据开发工程师',
                id: 12
            },
            {
                name: '机器学习工程师',
                id: 13
            },
            {
                name: '物联网工程师',
                id: 14
            }
        ]
    }
]);
</script>

<style scoped>
.el-dropdown-link:focus {
    outline: 0;
}

.el-dropdown {
    margin-left: 15px;
}
.title {
    color: #000;
    font-size: 20px;
    font-weight: 600;
    line-height: 28px
}
.drop-down-title {
    color: #000;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    padding: 5px 12px;
}

.drop-down-subtitle {
    font-size: 14px;
    font-weight: 500;
    padding: 5px 12px;
}
</style>