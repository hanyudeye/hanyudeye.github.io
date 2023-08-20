var app = new Vue({
    el: "#app",
    data: {
        id: 1,
        todo: "",
        todoInfos: [
            // {
            //     id: 7,
            //     isChecked: false,
            //     todoTitle: "敌军 1",
            // },
            // {
            //     id: 8,
            //     isChecked: false,
            //     todoTitle: "敌军 2",
            // },
            // {
            //     id: 9,
            //     isChecked: false,
            //     todoTitle: "敌军 3",
            // },
        ],
         },
    methods: {
        addTodoItem() {
            // 每次点击，往数组中添加一组数据
            this.todoInfos.push({
                id: this.id, // id 唯一且自增
                isChecked: false, // 未完成和放弃为 false，完成为 true
                isEdit: false, // 是否在编辑
                todoTitle: this.todo,  // todo 标题
                state: 0, // 0 - 未完成，1 - 完成，2 - 放弃完成
            })
            // id 自增
            this.id++;
            // 清空输入框
            this.todo = "";
        },
    }
})
