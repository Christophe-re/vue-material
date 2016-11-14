!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()}(this,function(){return function(e){function t(a){if(n[a])return n[a].exports;var i=n[a]={exports:{},id:a,loaded:!1};return e[a].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}({0:function(e,t,n){e.exports=n(20)},1:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function e(t,n){return!!t.$el&&(t.$el.classList.contains(n)?t:0!==t._uid&&e(t.$parent,n))};t.default=n},20:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e){e.component("md-table",e.extend(o.default)),e.component("md-table-header",{functional:!0,render:function(e,t){return e("thead",{staticClass:"md-table-header"},t.children)}}),e.component("md-table-body",{functional:!0,render:function(e,t){return e("tbody",{staticClass:"md-table-body"},t.children)}}),e.component("md-table-row",e.extend(d.default)),e.component("md-table-head",e.extend(l.default)),e.component("md-table-cell",e.extend(f.default)),e.component("md-table-edit",e.extend(m.default)),e.component("md-table-card",e.extend(b.default)),e.component("md-table-pagination",e.extend(v.default)),e.component("md-table-alternate-header",e.extend(S.default)),e.material.styles.push(T.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var r=n(145),o=a(r),s=n(152),d=a(s),c=n(150),l=a(c),u=n(148),f=a(u),h=n(149),m=a(h),p=n(147),b=a(p),g=n(146),S=a(g),_=n(151),v=a(_),y=n(107),T=a(y)},56:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),r=a(i);t.default={props:{mdSortType:String,mdSort:String},data:function(){return{sortType:this.mdSortType,sortBy:this.mdSort,hasRowSelection:!1,data:[],numberOfRows:0,numberOfSelected:0,selectedRows:{}}},methods:{emitSort:function(e){this.sortBy=e,this.$emit("sort",{name:e,type:this.sortType})},emitSelection:function(){this.$emit("select",this.selectedRows)}},mounted:function(){this.parentCard=(0,r.default)(this.$parent,"md-table-card"),this.parentCard&&(this.parentCard.tableInstance=this)}}},57:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),r=a(i);t.default={props:{mdSelectedLabel:String},data:function(){return{classes:{},tableInstance:{}}},mounted:function(){var e=this;this.parentCard=(0,r.default)(this.$parent,"md-table-card"),this.$nextTick(function(){e.tableInstance=e.parentCard.tableInstance,e.$watch("tableInstance.numberOfSelected",function(){e.$refs.counter.textContent=e.tableInstance.numberOfSelected,e.classes={"md-active":e.tableInstance.numberOfSelected>0}})})}}},58:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdNumeric:Boolean},computed:{classes:function(){return{"md-numeric":this.mdNumeric}}}}},59:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{value:String,mdLarge:Boolean,mdId:String,mdName:String,mdPlaceholder:String,mdMaxlength:[Number,String]},data:function(){return{active:!1}},computed:{triggerClasses:function(){return{"md-edited":this.value}},dialogClasses:function(){return{"md-active":this.active,"md-large":this.mdLarge}},realValue:function(){console.log(this.value)}},methods:{openDialog:function(){this.active=!0,this.$refs.input.$el.focus(),document.addEventListener("click",this.closeDialogOnOffClick)},closeDialog:function(){this.active&&(this.active=!1,this.$refs.input.$el.blur(),document.removeEventListener("click",this.closeDialogOnOffClick))},closeDialogOnOffClick:function(e){this.$refs.dialog.contains(e.target)||this.closeDialog()},confirmDialog:function(){var e=this.$refs.input.$el.value;this.closeDialog(),this.$emit("input",e),this.$emit("edited",e)}}}},60:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),r=a(i);t.default={props:{mdNumeric:Boolean,mdSortBy:String,mdTooltip:String},data:function(){return{sortType:null,sorted:!1,parentTable:{}}},computed:{classes:function(){var e=this.hasMatchSort();return e||(this.sorted=!1),{"md-numeric":this.mdNumeric,"md-sortable":this.mdSortBy,"md-sorted":e&&this.sorted,"md-sorted-descending":e&&"desc"===this.sortType}}},methods:{hasMatchSort:function(){return this.parentTable.sortBy===this.mdSortBy},changeSort:function(){this.mdSortBy&&("asc"===this.sortType&&this.sorted?this.sortType="desc":this.sortType="asc",this.sorted=!0,this.parentTable.sortType=this.sortType,this.parentTable.emitSort(this.mdSortBy))}},mounted:function(){this.parentTable=(0,r.default)(this.$parent,"md-table"),this.hasMatchSort()&&(this.sorted=!0,this.sortType=this.parentTable.sortType)}}},61:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdSize:{type:[Number,String],default:10},mdPageOptions:[Array,Boolean],mdPage:{type:[Number,String],default:1},mdTotal:{type:[Number,String],default:"Many"},mdLabel:{type:String,default:"Rows per page"},mdSeparator:{type:String,default:"of"}},data:function(){return{currentSize:parseInt(this.mdSize,10),currentPage:parseInt(this.mdPage,10)}},computed:{lastPage:function(){return!1}},methods:{emitPaginationEvent:function(){this.canFireEvents&&this.$emit("pagination",{size:this.currentSize,page:this.currentPage})},changeSize:function(){this.canFireEvents&&(this.$emit("size",this.currentSize),this.emitPaginationEvent())},changePage:function(){this.canFireEvents&&(this.$emit("page",this.currentPage),this.emitPaginationEvent())}},mounted:function(){var e=this;this.$nextTick(function(){e.mdPageOptions=e.mdPageOptions||[10,25,50,100],e.currentSize=e.mdPageOptions[0],e.canFireEvents=!0})}}},62:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),r=a(i),o="md-transition-off";t.default={props:{mdAutoSelect:Boolean,mdSelection:Boolean,mdItem:Object},data:function(){return{parentTable:{},headRow:!1,checkbox:!1,index:0}},computed:{isDisabled:function(){return!this.mdSelection&&!this.headRow},hasSelection:function(){return this.mdSelection||this.headRow&&this.parentTable.hasRowSelection},classes:function(){return{"md-selected":this.checkbox}}},methods:{setSelectedRow:function(e,t){e?(this.parentTable.selectedRows[t]=this.parentTable.data[t],++this.parentTable.numberOfSelected):(delete this.parentTable.selectedRows[t],--this.parentTable.numberOfSelected)},handleSingleSelection:function(e){this.setSelectedRow(e,this.index-1),this.parentTable.$children[0].checkbox=this.parentTable.numberOfSelected===this.parentTable.numberOfRows},handleMultipleSelection:function(e){var t=this;this.parentTable.numberOfRows>25&&this.parentTable.$el.classList.add(o),this.parentTable.$children.forEach(function(n,a){n.checkbox=e,n.headRow||t.setSelectedRow(e,a-1)}),e?this.parentTable.numberOfSelected=this.parentTable.numberOfRows:this.parentTable.numberOfSelected=0,window.setTimeout(function(){return t.parentTable.$el.classList.remove(o)})},select:function(e){this.hasSelection&&(this.headRow?this.handleMultipleSelection(e):this.handleSingleSelection(e),this.parentTable.emitSelection())},autoSelect:function(){this.mdAutoSelect&&this.hasSelection&&(this.checkbox=!this.checkbox,this.handleSingleSelection(this.checkbox),this.parentTable.emitSelection())}},watch:{data:function(){this.parentTable.data[this.index]=this.item}},mounted:function(){this.parentTable=(0,r.default)(this.$parent,"md-table"),"thead"===this.$el.parentNode.tagName.toLowerCase()?this.headRow=!0:(this.parentTable.numberOfRows++,this.index=this.parentTable.numberOfRows,this.mdSelection&&(this.parentTable.hasRowSelection=!0),this.mdItem&&this.parentTable.data.push(this.mdItem))}}},89:function(e,t){},107:function(e,t){e.exports=".THEME_NAME .md-table-card .md-toolbar,.THEME_NAME.md-table-card .md-toolbar{background-color:BACKGROUND-COLOR-A100;color:BACKGROUND-CONTRAST-A100}.THEME_NAME .md-table-alternate-header,.THEME_NAME.md-table-alternate-header{background-color:BACKGROUND-COLOR-A100}.THEME_NAME .md-table-alternate-header .md-toolbar,.THEME_NAME.md-table-alternate-header .md-toolbar{background-color:ACCENT-COLOR-A100-0.2;color:ACCENT-CONTRAST-A100}.THEME_NAME .md-table-alternate-header .md-counter,.THEME_NAME.md-table-alternate-header .md-counter{color:ACCENT-COLOR}\n"},145:function(e,t,n){var a,i;n(89),a=n(56);var r=n(198);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,e.exports=a},146:function(e,t,n){var a,i;a=n(57);var r=n(169);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,e.exports=a},147:function(e,t,n){var a,i,r=n(199);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,e.exports=a},148:function(e,t,n){var a,i;a=n(58);var r=n(183);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,e.exports=a},149:function(e,t,n){var a,i;a=n(59);var r=n(170);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,e.exports=a},150:function(e,t,n){var a,i;a=n(60);var r=n(178);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,e.exports=a},151:function(e,t,n){var a,i;a=n(61);var r=n(190);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,e.exports=a},152:function(e,t,n){var a,i;a=n(62);var r=n(196);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,e.exports=a},169:function(e,t){e.exports={render:function(){var e=this;return e._h("div",{staticClass:"md-table-alternate-header",class:e.classes},[e._h("md-toolbar",[e._h("div",{staticClass:"md-counter"},[e._h("span",{ref:"counter"},[e._s(e.tableInstance.numberOfSelected)])," ",e._h("span",[e._s(e.mdSelectedLabel)])])," ",e._t("default")])])},staticRenderFns:[]}},170:function(e,t){e.exports={render:function(){var e=this;return e._h("div",{staticClass:"md-table-edit",on:{keydown:function(t){27===t.keyCode&&e.closeDialog(t)}}},[e._h("div",{staticClass:"md-table-edit-trigger",class:e.triggerClasses,on:{click:function(t){t.stopPropagation(),e.openDialog(t)}}},["\n    "+e._s(e.value||e.mdPlaceholder)+"\n  "])," ",e._h("div",{ref:"dialog",staticClass:"md-table-dialog",class:e.dialogClasses},[e._h("md-input-container",[e._h("md-input",{ref:"input",attrs:{id:e.mdId,name:e.mdName,maxlength:e.mdMaxlength,placeholder:e.mdPlaceholder},domProps:{value:e.value},nativeOn:{keydown:function(t){13===t.keyCode&&e.confirmDialog(t)}}})])])])},staticRenderFns:[]}},178:function(e,t){e.exports={render:function(){var e=this;return e._h("th",{staticClass:"md-table-head",class:e.classes,on:{click:e.changeSort}},[e._h("div",{directives:[{name:"md-ink-ripple",rawName:"v-md-ink-ripple",value:!e.mdSortBy,expression:"!mdSortBy"}],staticClass:"md-table-head-container"},[e._h("div",{staticClass:"md-table-head-text md-test"},[e.mdSortBy?e._h("md-icon",{staticClass:"md-sortable-icon"},["arrow_downward"]):e._e()," ",e._t("default")," ",e.mdTooltip?e._h("md-tooltip",[e._s(e.mdTooltip)]):e._e()])])])},staticRenderFns:[]}},183:function(e,t){e.exports={render:function(){var e=this;return e._h("td",{staticClass:"md-table-cell",class:e.classes},[e._h("div",{staticClass:"md-table-cell-container"},[e._t("default")])])},staticRenderFns:[]}},190:function(e,t){e.exports={render:function(){var e=this;return e._h("div",{staticClass:"md-table-pagination"},[e._h("span",{staticClass:"md-table-pagination-label"},[e._s(e.mdLabel)+":"])," ",e.mdPageOptions?e._h("md-select",{directives:[{name:"model",rawName:"v-model",value:e.currentSize,expression:"currentSize"}],attrs:{"md-menu-class":"md-pagination-select"},domProps:{value:e.currentSize},on:{change:e.changeSize,input:function(t){e.currentSize=t}}},[e._l(e.mdPageOptions,function(t){return e._h("md-option",{domProps:{value:t}},[e._s(t)])})]):e._e()," ",e._h("span",[e._s((e.currentSize-e.currentSize+1)*e.currentPage)+"-"+e._s(e.currentSize)+" "+e._s(e.mdSeparator)+" "+e._s(e.mdTotal)])," ",e._h("md-button",{staticClass:"md-icon-button md-table-pagination-previous",attrs:{disabled:1===e.currentPage},on:{click:e.changePage}},[e._h("md-icon",["keyboard_arrow_left"])])," ",e._h("md-button",{staticClass:"md-icon-button md-table-pagination-next",attrs:{disabled:e.currentSize*e.currentPage>=e.mdTotal},on:{click:e.changePage}},[e._h("md-icon",["keyboard_arrow_right"])])])},staticRenderFns:[]}},196:function(e,t){e.exports={render:function(){var e=this;return e._h("tr",{staticClass:"md-table-row",class:e.classes,on:{click:e.autoSelect}},[e.hasSelection?e._h("md-table-cell",{staticClass:"md-table-selection"},[e._h("md-checkbox",{directives:[{name:"model",rawName:"v-model",value:e.checkbox,expression:"checkbox"}],attrs:{disabled:e.isDisabled},domProps:{value:e.checkbox},on:{change:e.select,input:function(t){e.checkbox=t}}})]):e._e()," ",e._t("default")])},staticRenderFns:[]}},198:function(e,t){e.exports={render:function(){var e=this;return e._h("div",{staticClass:"md-table"},[e._h("table",[e._t("default")])])},staticRenderFns:[]}},199:function(e,t){e.exports={render:function(){var e=this;return e._h("md-card",{staticClass:"md-table-card"},[e._t("default")])},staticRenderFns:[]}}})});