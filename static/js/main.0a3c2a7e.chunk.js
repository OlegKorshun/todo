(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(22)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),c=n.n(r),l=n(7),i=n(6),s=n(1),u=n(2),m=n(4),f=n(3),b=n(5),d=(n(16),function(e){var t=e.toDo,n=e.done;return o.a.createElement("div",{className:"appHeader d-flex"},o.a.createElement("h1",null,"Todo List"),o.a.createElement("h2",null,t," more to do, ",n," done"))}),h=(n(17),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(m.a)(this,Object(f.a)(t).call(this))).onTermChange=function(t){e.setState({term:t.target.value}),e.props.onSearchChange(t.target.value)},e.state={term:""},e}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("input",{type:"text",placeholder:"type to search",className:"form-control",onChange:this.onTermChange,value:this.state.term})}}]),t}(a.Component)),p=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}],g=function(e){var t=e.filter,n=e.onFilterChange,a=p.map((function(e){var a=e.name,r=e.label,c="btn "+(t===a?"btn-info":"btn-outline-secondary");return o.a.createElement("button",{key:a,type:"button",className:c,onClick:function(){return n(a)}},r)}));return o.a.createElement("div",{className:"btn-group"},a)},v=n(10),O=(n(18),function(e){var t=e.label,n=e.done,a=e.important,r=e.onDelete,c=e.onToggleDone,l=e.onToggleImportant,i="todoItem";return n&&(i+=" done"),a&&(i+=" important"),o.a.createElement("span",{className:i},o.a.createElement("span",{className:"todoItemLabel",onClick:c},t),o.a.createElement("button",{type:"button",className:"btn btn-outline-success btn-sm float-right",onClick:l},o.a.createElement("i",{className:"fa fa-exclamation"})),o.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right",onClick:r},o.a.createElement("i",{className:"fa fa-trash-o"})))}),j=(n(19),function(e){var t=e.items,n=e.onDelete,a=e.onToggleDone,r=e.onToggleImportant,c=t.map((function(e){var t=e.id,c=Object(v.a)(e,["id"]);return o.a.createElement("li",{className:"list-group-item",key:t},o.a.createElement(O,Object.assign({},c,{onDelete:function(){return n(t)},onToggleDone:function(){return a(t)},onToggleImportant:function(){return r(t)}})))}));return o.a.createElement("ul",{className:"list-group todoList"},c)}),y=(n(20),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(m.a)(this,Object(f.a)(t).call(this))).onLabelChange=function(t){e.setState({label:t.target.value})},e.onSubmit=function(t){t.preventDefault(),e.state.label&&e.props.onItemAdded(e.state.label),e.setState({label:""})},e.state={label:""},e}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{className:"itemAddForm d-flex",onSubmit:this.onSubmit},o.a.createElement("input",{type:"text",placeholder:"What needs to be done?",className:"form-control",onChange:this.onLabelChange,value:this.state.label}),o.a.createElement("button",{type:"submit",className:"btn btn-outline-secondary"},"Add do"))}}]),t}(a.Component));n(21);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var I=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(m.a)(this,Object(f.a)(t).call(this))).maxId=4,e.onItemAdded=function(t){var n=e.createTodoItem(t);e.setState((function(e){var t=e.items;return{items:[].concat(Object(i.a)(t),[n])}}))},e.toggleProperty=function(e,t,n){var a=e.findIndex((function(e){return e.id===t})),o=e[a],r=!o[n],c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},o,Object(l.a)({},n,r));return[].concat(Object(i.a)(e.slice(0,a)),[c],Object(i.a)(e.slice(a+1)))},e.onToggleDone=function(t){e.setState((function(n){var a=n.items;return{items:e.toggleProperty(a,t,"done")}}))},e.onToggleImportant=function(t){e.setState((function(n){var a=n.items;return{items:e.toggleProperty(a,t,"important")}}))},e.onDelete=function(t){e.setState((function(e){var n=e.items,a=n.findIndex((function(e){return e.id===t}));return{items:[].concat(Object(i.a)(n.slice(0,a)),Object(i.a)(n.slice(a+1)))}}))},e.onFilterChange=function(t){e.setState({filter:t})},e.onSearchChange=function(t){e.setState({search:t})},e.searchItems=function(e,t){return 0===t.length?e:e.filter((function(e){return e.label.toLowerCase().indexOf(t.toLowerCase())>-1}))},e.state={items:[e.createTodoItem("Drink coffe"),e.createTodoItem("Learn React"),e.createTodoItem("Make Awesome App")],search:"",filter:"all"},e}return Object(b.a)(t,e),Object(u.a)(t,[{key:"createTodoItem",value:function(e){return{id:this.maxId++,label:e,important:!1,done:!1}}},{key:"filterItems",value:function(e,t){switch(t){case"all":return e;case"active":return e.filter((function(e){return!e.done}));case"done":return e.filter((function(e){return e.done}));default:return e}}},{key:"render",value:function(){var e=this.state,t=e.items,n=e.search,a=e.filter,r=t.filter((function(e){return e.done})).length,c=t.length-r,l=this.filterItems(this.searchItems(t,n),a);return o.a.createElement("div",{className:"app"},o.a.createElement(d,{toDo:c,done:r}),o.a.createElement("div",{className:"searchPanel d-flex"},o.a.createElement(h,{onSearchChange:this.onSearchChange}),o.a.createElement(g,{filter:a,onFilterChange:this.onFilterChange})),o.a.createElement(j,{items:l,onToggleImportant:this.onToggleImportant,onToggleDone:this.onToggleDone,onDelete:this.onDelete}),o.a.createElement(y,{onItemAdded:this.onItemAdded}))}}]),t}(a.Component);c.a.render(o.a.createElement(I,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.0a3c2a7e.chunk.js.map