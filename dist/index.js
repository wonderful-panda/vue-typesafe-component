"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Vue = require("vue");
var vue_class_component_1 = require("vue-class-component");
/*
 * Base class for typesafe component
 */
var VueComponent = (function (_super) {
    __extends(VueComponent, _super);
    function VueComponent() {
        return _super.apply(this, arguments) || this;
    }
    return VueComponent;
}(Vue));
VueComponent = __decorate([
    vue_class_component_1.default({
        beforeCreate: function () {
            this.$props = this;
            this.$events = {
                emit: this.$emit.bind(this),
                on: this.$on.bind(this),
                once: this.$once.bind(this),
                off: this.$off.bind(this)
            };
        }
    })
], VueComponent);
exports.VueComponent = VueComponent;
/*
 * Base class for typesafe component with $data
 */
var VueStatefulComponent = (function (_super) {
    __extends(VueStatefulComponent, _super);
    function VueStatefulComponent() {
        return _super.apply(this, arguments) || this;
    }
    return VueStatefulComponent;
}(VueComponent));
exports.VueStatefulComponent = VueStatefulComponent;
/*
 * decorator with typesafe interface
 */
exports.component = vue_class_component_1.default;
