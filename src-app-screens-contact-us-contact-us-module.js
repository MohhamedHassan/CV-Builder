(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-screens-contact-us-contact-us-module"],{

/***/ "7UzY":
/*!********************************************************************************!*\
  !*** ./src/app/screens/contact-us/components/contactus/contactus.component.ts ***!
  \********************************************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ContactusComponent_p_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ContactusComponent_p_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ContactusComponent_p_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ContactusComponent_i_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 19);
} }
function ContactusComponent_p_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Message sent successfully ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class ContactusComponent {
    constructor(fb, http) {
        this.fb = fb;
        this.http = http;
        this.contactusForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({});
        this.submited = false;
        this.loading = false;
        this.sent = false;
    }
    ngOnInit() {
        this.contactusForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, this.emptyContent]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email, this.emptyContent]],
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, this.emptyContent]]
        });
    }
    emptyContent(control) {
        if (control.value) {
            if (control.value.trim() == '')
                return { invalidContetn: true };
        }
        return null;
    }
    contactus(value) {
        console.log(value);
        this.submited = true;
        if (this.contactusForm.valid) {
            this.submited = false;
            this.loading = true;
            this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}contactUs`, value).subscribe(res => {
                console.log(res);
                this.contactusForm.reset();
                this.loading = false;
                this.sent = true;
                setTimeout(() => {
                    this.sent = false;
                }, 2000);
            }, err => {
                console.log(err);
            });
        }
    }
}
ContactusComponent.ɵfac = function ContactusComponent_Factory(t) { return new (t || ContactusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ContactusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ContactusComponent, selectors: [["app-contactus"]], decls: 37, vars: 6, consts: [[1, "text-center", "text-white", "py-5", "px-3", 2, "background-color", "#033D4A"], [1, "container", "py-5"], [1, "row"], [1, "col-md-3"], [1, "col-md-6"], [1, "text-center"], [1, "mb-4"], [3, "formGroup", "ngSubmit"], [1, "form-group", "mb-4"], ["for", ""], ["formControlName", "name", "type", "text", 1, "form-control"], ["class", "text-danger py-2", 4, "ngIf"], ["formControlName", "email", "type", "email", 1, "form-control"], ["formControlName", "message", "cols", "30", "rows", "5", 1, "form-control"], [1, "form-group"], [1, "btn", "btn-success", "w-100"], ["class", "fas \n                text-white\n                ms-3\n                d-inline-block\n                fa-circle-notch fa-spin", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], [1, "text-danger", "py-2"], [1, "fas", "text-white", "ms-3", "d-inline-block", "fa-circle-notch", "fa-spin"], [1, "text-center", "py-5"]], template: function ContactusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Need some help? Call us.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "CVHelp's Customer service is here for you seven days a week.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Send us a message");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "We'd love to hear from you. Fill in the form and we promise to respond within one working day");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ContactusComponent_Template_form_ngSubmit_15_listener() { return ctx.contactus(ctx.contactusForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ContactusComponent_p_20_Template, 2, 0, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, ContactusComponent_p_25_Template, 2, 0, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, ContactusComponent_p_30_Template, 2, 0, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Send Message ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, ContactusComponent_i_34_Template, 1, 0, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, ContactusComponent_p_35_Template, 2, 0, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.contactusForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.contactusForm.controls.name == null ? null : ctx.contactusForm.controls.name.errors) != null && ctx.contactusForm.controls.name.touched || (ctx.contactusForm.controls.name == null ? null : ctx.contactusForm.controls.name.errors) != null && ctx.submited);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.contactusForm.controls.email == null ? null : ctx.contactusForm.controls.email.errors) != null && ctx.contactusForm.controls.email.touched || (ctx.contactusForm.controls.email == null ? null : ctx.contactusForm.controls.email.errors) != null && ctx.submited);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.contactusForm.controls.message == null ? null : ctx.contactusForm.controls.message.errors) != null && ctx.contactusForm.controls.message.touched || (ctx.contactusForm.controls.message == null ? null : ctx.contactusForm.controls.message.errors) != null && ctx.submited);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.sent);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".btn-success[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n}\n\n.btn-success[_ngcontent-%COMP%]:hover {\n  background-color: #1f778b !important;\n  border-color: #1f778b !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNvbnRhY3R1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0FBQ0o7O0FBQ0c7RUFDRSxvQ0FBQTtFQUNBLGdDQUFBO0FBRUwiLCJmaWxlIjoiY29udGFjdHVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1zdWNjZXNzOmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgfVxyXG4gICAuYnRuLXN1Y2Nlc3M6aG92ZXIge1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICAjMWY3NzhiICFpbXBvcnRhbnQ7XHJcbiAgICAgYm9yZGVyLWNvbG9yOiAgIzFmNzc4YiAhaW1wb3J0YW50O1xyXG4gICB9Il19 */"] });


/***/ }),

/***/ "cxAB":
/*!*****************************************************************!*\
  !*** ./src/app/screens/contact-us/contact-us-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ContactUsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsRoutingModule", function() { return ContactUsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/contactus/contactus.component */ "7UzY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _components_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_1__["ContactusComponent"]
    }
];
class ContactUsRoutingModule {
}
ContactUsRoutingModule.ɵfac = function ContactUsRoutingModule_Factory(t) { return new (t || ContactUsRoutingModule)(); };
ContactUsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ContactUsRoutingModule });
ContactUsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ContactUsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "f6b/":
/*!*********************************************************!*\
  !*** ./src/app/screens/contact-us/contact-us.module.ts ***!
  \*********************************************************/
/*! exports provided: ContactUsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsModule", function() { return ContactUsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-us-routing.module */ "cxAB");
/* harmony import */ var _components_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/contactus/contactus.component */ "7UzY");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class ContactUsModule {
}
ContactUsModule.ɵfac = function ContactUsModule_Factory(t) { return new (t || ContactUsModule)(); };
ContactUsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ContactUsModule });
ContactUsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_1__["ContactUsRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ContactUsModule, { declarations: [_components_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_2__["ContactusComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_1__["ContactUsRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=src-app-screens-contact-us-contact-us-module.js.map