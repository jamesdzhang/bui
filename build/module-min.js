/**
 * @ignore
 * @fileOverview module
 * @author dxq613
 */define("bui/module",function(e){function r(){return"module"+n++}var t=e("bui/common"),n=1,i=function(e){i.superclass.constructor.call(this,e),this.get("id")||this.set("id",r()),this.get("autoInit")&&this.init(),i.Manager.add(this)};i.ATTRS={id:{},autoInit:{value:!1},hasInit:{value:!1},parent:{},destroyed:{value:!1},modules:{value:{}},events:{value:["change"]}},t.extend(i,t.Base),t.augment(i,{set:function(e,t){this.setInternal?this.setInternal(e,t):i.superclass.set.call(this,e,t)},init:function(){return this.get("hasInit")||(this._initData(),this._initDom(),this._initModules(),this._initEvent(),this.set("hasInit",!0)),this},fire:function(e,t,n){n=n==undefined?!0:n;var r=$.makeArray(arguments),s=this,o=t;t&&t.module&&(s=t.module,o=t.event),i.superclass.fire.apply(this,r);var u=this.get("parent");u&&u.fire("change",{module:s,eventType:e,event:o},!1),n&&i.Manager.fire("change",{module:this,eventType:e,event:t})},addModule:function(e){e.set("parent",this),this.get("modules")[e.get("id")]=e},removeById:function(e){this.removeModule(this.getModule(e))},removeModule:function(e){delete this.get("modules")[e.get("id")]},getModule:function(e){return this.get("modules")[e]},eachModule:function(e){t.each(this.getModules(),e)},getModules:function(){return this.get("modules")},_initData:function(){},_initDom:function(){},_initModules:function(){},_initEvent:function(){},_destroy:function(){var e=this,n=e.get("modules");t.each(n,function(e){e.destroy()}),e.set("modules",null),e.detach()},destroy:function(){this.get("destroyed")||(i.Manager.remove(this),this._destroy(),this.set("destroyed",!0))}});var s={},o=function(){};return t.extend(o,t.Base),t.augment(o,{add:function(e){var t=e.get("id");s[t]=e},remove:function(e){var t=e.get("id");delete s[t]},getModule:function(e){return s[e]}}),i.Manager=new o,i});
