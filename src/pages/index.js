import { format } from "path";

export default {
    name: 'index',
    data() {
        return {
            list: {
                navList: [],
                bookList: [],
            },
            classInfo: [],
            activeId: 0,
            key: ''
        };
    },
    methods: {
        init() {
            this.update();
        },
        update() {
            this.updateNav();
            this.updateList();
            this.updateClassInfo();
        },

        updateClassInfo() {
            this.$http.get('class/get', {
                params: {
                    id: this.$route.query.class_id//要获取的分类的id
                }
            }).then(res => {
                this.classInfo = res.data;
                // this.form = res.data;//分类详情
            });
        },
        // 导航栏分类
        updateNav() {
            this.$http.get('class/list', {
                params: {
                    super_id: this.$route.query.class_id
                }
            }).then(res => {
                this.list.navList = res.data.list;
            })
        },
        // 电子书列表
        updateList() {
            this.$http.get('book/list', {
                params: {
                    class_id: this.$route.query.class_id,//要获取的分类的id
                    page: 1,
                    key: this.key
                }
            }).then(res => {
                this.list.bookList = res.data.list;

            });
        }
    },
    // 计算属性
    computed: {},
    // 包含 Vue 实例可用过滤器的哈希表。
    filters: {},
    // 在实例创建完成后被立即调用
    created() { },
    // 在挂载开始之前被调用：相关的 render 函数首次被调用。
    beforeMount() { },
    // el 被新创建的 vm.el 替换，并挂载到实例上去之后调用该钩子。
    mounted() {
        this.init();
        this.$nextTick(() => { });
    },
    // 数据更新时调用，发生在虚拟 DOM 打补丁之前。
    beforeUpdate() { },
    // keep-alive 组件激活时调用。
    activated() { },
    // keep-alive 组件停用时调用。
    deactivated() { },
    // 实例销毁之前调用。在这一步，实例仍然完全可用。
    beforeDestroy() { },
    //Vue 实例销毁后调用。
    destroyed() { },
    // 当捕获一个来自子孙组件的错误时被调用。此
    errorCaptured() { },
    // 包含 Vue 实例可用指令的哈希表。
    directives: {},
    // 一个对象，键是需要观察的表达式，值是对应回调函数。
    watch: {
        activeId() {
            this.updateList();
        },
    }
};