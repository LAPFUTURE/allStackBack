<template>
    <div class="dialogs">
        <el-dialog width="72%" top="18vh" title="添加" :visible.sync="dialogs.show" :show-close="true">
            <el-table :data="formData">
                <el-table-column property="date" label="Type" width="150"></el-table-column>
                <el-table-column property="name" label="Describe" width="200"></el-table-column>
                <el-table-column property="income" label="Income"></el-table-column>
                <el-table-column property="expend" label="Expend"></el-table-column>
                <el-table-column property="now" label="Now"></el-table-column>
                <el-table-column property="remark" label="Remark"></el-table-column>
            </el-table>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogs.show = false">确 定</el-button>
                <el-button @click="dialogs.show = false">取 消</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "dialogs",
        props: {
            dialogs: Object
        },
        created() {
            console.log("this.dialogs:", this.dialogs);
        },

        data() {
            return {
                formData: [{
                    "date": 12,
                    "name": "alp",
                    "address": "China"
                }]
            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    .dialogs {}
</style>