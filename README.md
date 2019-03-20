#接口文档

## 通过一级分类的id，获取二级分类
> 请求方式：get
````javascript
  this.$http.get('class/list', {
        params: {
            super_id: this.$route.query.super_id//一级分类的id
        }
  }).then(res => {
    //   this.list = res.data.list;
  })
````

| 字段名      | 类型    | 备注         |
| ----------- | ------- | ------------ |
| super_id    | int     | 上级id       |
| title       | varchar | 分类标题     |
| sort        | int     | 排序         |
| head_bg_img | text    | 背景图片     |
| add_time    | int     | 添加时间     |
| edit_time   | int     | 最后编辑时间 |
## 通过id获取分类详情
> 请求方式：get
````javascript

this.$http.get('class/get', {
    params: {
        id: this.class_id//要获取的分类的id
    }
}).then(res => {
    // this.form = res.data;//分类详情
});

 ````

## 根据分类id获取电子书列表
> 请求方式：get

````javascript
    this.$http.get('book/list', {
        params: {
            key: this.key,//查询关键字
            page: this.page,//当前页数
        }
    }).then(res => {
        // this.total = res.data.total; //页面总数
        // this.list = res.data.list; //数据列表
    });
````

## 根据id取电子书详情
> 请求方式：get
````javascript
this.$http.get('book/get', {
    params: {
        id: this.$route.query.id//电子书的id
    }
}).then(res => {
    // this.form = res.data;//详情
});
````


| 字段名     | 类型    | 备注         |
| ---------- | ------- | ------------ |
| title      | varchar | 标题         |
| class_id   | int     | 所属分类的id |
| info       | varchar | 内容简介     |
| publish    | varchar | 出版信息     |
| head_img   | text    | 封面         |
| add_time   | int     | 添加时间     |
| edit_time  | int     | 最后编辑时间 |
| data_state | int     | 1            |




## 根据电子书的id获取本书的目录列表

> 请求方式：get
````javascript
this.$http.get('chapter/list', {
    params: {
        book_id:  this.$route.query.id //电子书的id
    }
}).then(res => {
    // this.list = res.data;//获取的列表
});
````

| 字段名    | 类型    | 备注         |
| --------- | ------- | ------------ |
| book_id   | int     | 所属的书本id |
| sort      | int     | 排序         |
| title     | varchar | 章节标题     |
| type      | int     | 类型         |
| src       | text    | 文件地址     |
| add_time  | int     | 添加时间     |
| edit_time | int     | 最后编辑时间 |