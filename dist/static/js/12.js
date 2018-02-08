webpackJsonp([12,24],{

/***/ "Tg2t":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/index.js + 11 modules
var api = __webpack_require__("gyMJ");

// CONCATENATED MODULE: ./src/utils/validate.js
/**
 * 邮箱
 * @param {*} s
 */
function isEmail(s) {
  return (/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
  );
}

/**
 * 手机号码
 * @param {*} s
 */
function isMobile(s) {
  return (/^((\+?86)|(\(\+86\)))?(13[012356789][0-9]{8}|15[012356789][0-9]{8}|18[02356789][0-9]{8}|147[0-9]{8}|1349[0-9]{7})$/.test(s)
  );
}

/**
 * 电话号码
 * @param {*} s
 */
function isPhone(s) {
  return (/^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s)
  );
}
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.1@babel-loader/lib!./node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=script&index=0!./src/views/user/add-or-update.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var add_or_update = ({
  data: function data() {
    var _this = this;

    var validatePassword = function validatePassword(rule, value, callback) {
      if (!_this.dataForm.id && !/\S/.test(value)) {
        callback(new Error('密码不能为空'));
      } else {
        callback();
      }
    };
    var validateComfirmPassword = function validateComfirmPassword(rule, value, callback) {
      if (!_this.dataForm.id && !/\S/.test(value)) {
        callback(new Error('确认密码不能为空'));
      } else if (_this.dataForm.password !== value) {
        callback(new Error('确认密码与密码输入不一致'));
      } else {
        callback();
      }
    };
    var validateEmail = function validateEmail(rule, value, callback) {
      if (!isEmail(value)) {
        callback(new Error('邮箱格式错误'));
      } else {
        callback();
      }
    };
    var validateMobile = function validateMobile(rule, value, callback) {
      if (!isMobile(value)) {
        callback(new Error('手机号格式错误'));
      } else {
        callback();
      }
    };
    return {
      visible: false,
      roleList: [],
      dataForm: {
        id: 0,
        userName: '',
        password: '',
        comfirmPassword: '',
        email: '',
        mobile: '',
        roleIdList: [],
        status: 1
      },
      dataRule: {
        userName: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
        password: [{ validator: validatePassword, trigger: 'blur' }],
        comfirmPassword: [{ validator: validateComfirmPassword, trigger: 'blur' }],
        email: [{ required: true, message: '邮箱不能为空', trigger: 'blur' }, { validator: validateEmail, trigger: 'blur' }],
        mobile: [{ required: true, message: '手机号不能为空', trigger: 'blur' }, { validator: validateMobile, trigger: 'blur' }]
      }
    };
  },

  methods: {
    init: function init(id) {
      var _this2 = this;

      this.dataForm.id = id || 0;
      api["a" /* default */].role.select().then(function (_ref) {
        var data = _ref.data;

        _this2.roleList = data && data.code === 0 ? data.list : [];
      }).then(function () {
        _this2.visible = true;
        _this2.$nextTick(function () {
          _this2.$refs['dataForm'].resetFields();
        });
      }).then(function () {
        if (_this2.dataForm.id) {
          api["a" /* default */].user.info(_this2.dataForm.id).then(function (_ref2) {
            var data = _ref2.data;

            if (data && data.code === 0) {
              _this2.dataForm.userName = data.user.username;
              _this2.dataForm.email = data.user.email;
              _this2.dataForm.mobile = data.user.mobile;
              _this2.dataForm.roleIdList = data.user.roleIdList;
              _this2.dataForm.status = data.user.status;
            }
          });
        }
      });
    },

    // 表单提交
    dataFormSubmit: function dataFormSubmit() {
      var _this3 = this;

      this.$refs['dataForm'].validate(function (valid) {
        if (valid) {
          var params = {
            'userId': _this3.dataForm.id || undefined,
            'username': _this3.dataForm.userName,
            'password': _this3.dataForm.password,
            'email': _this3.dataForm.email,
            'mobile': _this3.dataForm.mobile,
            'status': _this3.dataForm.status,
            'roleIdList': _this3.dataForm.roleIdList
          };
          var tick = !_this3.dataForm.id ? api["a" /* default */].user.add(params) : api["a" /* default */].user.update(params);
          tick.then(function (_ref3) {
            var data = _ref3.data;

            if (data && data.code === 0) {
              _this3.$message({
                message: '操作成功',
                type: 'success',
                duration: 1500,
                onClose: function onClose() {
                  _this3.visible = false;
                  _this3.$emit('refreshDataList');
                }
              });
            } else {
              _this3.$message.error(data.msg);
            }
          });
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.3.0@vue-loader/lib/template-compiler?{"id":"data-v-6f622fd2","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=template&index=0!./src/views/user/add-or-update.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-dialog',{attrs:{"title":!_vm.dataForm.id ? '新增' : '修改',"close-on-click-modal":false,"visible":_vm.visible},on:{"update:visible":function($event){_vm.visible=$event}}},[_c('el-form',{ref:"dataForm",attrs:{"model":_vm.dataForm,"rules":_vm.dataRule,"label-width":"80px"},nativeOn:{"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key)){ return null; }_vm.dataFormSubmit()}}},[_c('el-form-item',{attrs:{"label":"用户名","prop":"userName"}},[_c('el-input',{attrs:{"placeholder":"登录帐号"},model:{value:(_vm.dataForm.userName),callback:function ($$v) {_vm.$set(_vm.dataForm, "userName", $$v)},expression:"dataForm.userName"}})],1),_vm._v(" "),_c('el-form-item',{class:{ 'is-required': !_vm.dataForm.id },attrs:{"label":"密码","prop":"password"}},[_c('el-input',{attrs:{"type":"password","placeholder":"密码"},model:{value:(_vm.dataForm.password),callback:function ($$v) {_vm.$set(_vm.dataForm, "password", $$v)},expression:"dataForm.password"}})],1),_vm._v(" "),_c('el-form-item',{class:{ 'is-required': !_vm.dataForm.id },attrs:{"label":"确认密码","prop":"comfirmPassword"}},[_c('el-input',{attrs:{"type":"password","placeholder":"确认密码"},model:{value:(_vm.dataForm.comfirmPassword),callback:function ($$v) {_vm.$set(_vm.dataForm, "comfirmPassword", $$v)},expression:"dataForm.comfirmPassword"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"邮箱","prop":"email"}},[_c('el-input',{attrs:{"placeholder":"邮箱"},model:{value:(_vm.dataForm.email),callback:function ($$v) {_vm.$set(_vm.dataForm, "email", $$v)},expression:"dataForm.email"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"手机号","prop":"mobile"}},[_c('el-input',{attrs:{"placeholder":"手机号"},model:{value:(_vm.dataForm.mobile),callback:function ($$v) {_vm.$set(_vm.dataForm, "mobile", $$v)},expression:"dataForm.mobile"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"角色","size":"mini","prop":"roleIdList"}},[_c('el-checkbox-group',{model:{value:(_vm.dataForm.roleIdList),callback:function ($$v) {_vm.$set(_vm.dataForm, "roleIdList", $$v)},expression:"dataForm.roleIdList"}},_vm._l((_vm.roleList),function(role){return _c('el-checkbox',{key:role.roleId,attrs:{"label":role.roleId}},[_vm._v(_vm._s(role.roleName))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"状态","size":"mini","prop":"status"}},[_c('el-radio-group',{model:{value:(_vm.dataForm.status),callback:function ($$v) {_vm.$set(_vm.dataForm, "status", $$v)},expression:"dataForm.status"}},[_c('el-radio',{attrs:{"label":0}},[_vm._v("禁用")]),_vm._v(" "),_c('el-radio',{attrs:{"label":1}},[_vm._v("正常")])],1)],1)],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.visible = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.dataFormSubmit()}}},[_vm._v("确定")])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var user_add_or_update = (esExports);
// CONCATENATED MODULE: ./src/views/user/add-or-update.vue
var normalizeComponent = __webpack_require__("46Yf")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  add_or_update,
  user_add_or_update,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_user_add_or_update = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "md3T":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/index.js + 11 modules
var api = __webpack_require__("gyMJ");

// EXTERNAL MODULE: ./src/views/user/add-or-update.vue + 3 modules
var add_or_update = __webpack_require__("Tg2t");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.1@babel-loader/lib!./node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=script&index=0!./src/views/user/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var user = ({
  data: function data() {
    return {
      dataForm: {
        userName: ''
      },
      dataList: [],
      pageIndex: 1,
      pageSize: 10,
      totalPage: 0,
      dataListLoading: false,
      dataListSelections: [],
      addOrUpdateVisible: false
    };
  },

  components: {
    AddOrUpdate: add_or_update["default"]
  },
  activated: function activated() {
    this.getDataList();
  },

  methods: {
    // 获取数据列表
    getDataList: function getDataList() {
      var _this = this;

      this.dataListLoading = true;
      var params = {
        page: this.pageIndex,
        limit: this.pageSize,
        username: this.dataForm.userName
      };
      api["a" /* default */].user.list(params).then(function (_ref) {
        var data = _ref.data;

        if (data && data.code === 0) {
          _this.dataList = data.page.list;
          _this.totalPage = data.page.totalCount;
        } else {
          _this.dataList = [];
          _this.totalPage = 0;
        }
        _this.dataListLoading = false;
      });
    },

    // 每页数
    sizeChangeHandle: function sizeChangeHandle(val) {
      this.pageSize = val;
      this.pageIndex = 1;
      this.getDataList();
    },

    // 当前页
    currentChangeHandle: function currentChangeHandle(val) {
      this.pageIndex = val;
      this.getDataList();
    },

    // 多选
    selectionChangeHandle: function selectionChangeHandle(val) {
      this.dataListSelections = val;
    },

    // 新增 / 修改
    addOrUpdateHandle: function addOrUpdateHandle(id) {
      var _this2 = this;

      this.addOrUpdateVisible = true;
      this.$nextTick(function () {
        _this2.$refs.addOrUpdate.init(id);
      });
    },

    // 删除
    deleteHandle: function deleteHandle(id) {
      var _this3 = this;

      var userIds = id ? [id] : this.dataListSelections.map(function (item) {
        return item.userId;
      });
      this.$confirm('\u786E\u5B9A\u5BF9[id=' + userIds.join(',') + ']\u8FDB\u884C[' + (id ? '删除' : '批量删除') + ']\u64CD\u4F5C?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        api["a" /* default */].user.del(userIds).then(function (_ref2) {
          var data = _ref2.data;

          if (data && data.code === 0) {
            _this3.$message({
              message: '操作成功',
              type: 'success',
              duration: 1500,
              onClose: function onClose() {
                _this3.getDataList();
              }
            });
          } else {
            _this3.$message.error(data.msg);
          }
        });
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.3.0@vue-loader/lib/template-compiler?{"id":"data-v-116af85d","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=template&index=0!./src/views/user/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mod-user"},[_c('el-form',{attrs:{"inline":true,"model":_vm.dataForm},nativeOn:{"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key)){ return null; }_vm.getDataList()}}},[_c('el-form-item',[_c('el-input',{attrs:{"placeholder":"用户名","clearable":""},model:{value:(_vm.dataForm.userName),callback:function ($$v) {_vm.$set(_vm.dataForm, "userName", $$v)},expression:"dataForm.userName"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{on:{"click":function($event){_vm.getDataList()}}},[_vm._v("查询")]),_vm._v(" "),(_vm.isAuth('sys:user:save'))?_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.addOrUpdateHandle()}}},[_vm._v("新增")]):_vm._e(),_vm._v(" "),(_vm.isAuth('sys:user:delete'))?_c('el-button',{attrs:{"type":"danger","disabled":_vm.dataListSelections.length <= 0},on:{"click":function($event){_vm.deleteHandle()}}},[_vm._v("批量删除")]):_vm._e()],1)],1),_vm._v(" "),_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.dataListLoading),expression:"dataListLoading"}],staticStyle:{"width":"100%"},attrs:{"data":_vm.dataList,"border":""},on:{"selection-change":_vm.selectionChangeHandle}},[_c('el-table-column',{attrs:{"type":"selection","header-align":"center","align":"center","width":"50"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"userId","header-align":"center","align":"center","width":"80","label":"ID"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"username","header-align":"center","align":"center","label":"用户名"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"email","header-align":"center","align":"center","label":"邮箱"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"mobile","header-align":"center","align":"center","label":"手机号"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"userId","header-align":"center","align":"center","label":"状态"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.status === 0)?_c('el-tag',{attrs:{"size":"small","type":"danger"}},[_vm._v("禁用")]):_c('el-tag',{attrs:{"size":"small"}},[_vm._v("正常")])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"createTime","header-align":"center","align":"center","width":"180","label":"创建时间"}}),_vm._v(" "),_c('el-table-column',{attrs:{"fixed":"right","header-align":"center","align":"center","width":"200","label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(_vm.isAuth('sys:user:update'))?_c('el-button',{attrs:{"type":"text","size":"small"},on:{"click":function($event){_vm.addOrUpdateHandle(scope.row.userId)}}},[_vm._v("修改")]):_vm._e(),_vm._v(" "),(_vm.isAuth('sys:user:delete'))?_c('el-button',{attrs:{"type":"text","size":"small"},on:{"click":function($event){_vm.deleteHandle(scope.row.userId)}}},[_vm._v("删除")]):_vm._e()]}}])})],1),_vm._v(" "),_c('el-pagination',{attrs:{"current-page":_vm.pageIndex,"page-sizes":[10, 20, 50, 100],"page-size":_vm.pageSize,"total":_vm.totalPage,"layout":"total, sizes, prev, pager, next, jumper"},on:{"size-change":_vm.sizeChangeHandle,"current-change":_vm.currentChangeHandle}}),_vm._v(" "),(_vm.addOrUpdateVisible)?_c('add-or-update',{ref:"addOrUpdate",on:{"refreshDataList":_vm.getDataList}}):_vm._e()],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var views_user = (esExports);
// CONCATENATED MODULE: ./src/views/user/index.vue
var normalizeComponent = __webpack_require__("46Yf")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  user,
  views_user,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_views_user = __webpack_exports__["default"] = (Component.exports);


/***/ })

});