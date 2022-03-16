(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-screens-results-results-module"],{

/***/ "61f6":
/*!***************************************************!*\
  !*** ./src/app/screens/results/results.module.ts ***!
  \***************************************************/
/*! exports provided: ResultsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsModule", function() { return ResultsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _results_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./results-routing.module */ "6OHq");
/* harmony import */ var _components_result_result_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/result/result.component */ "ER1l");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class ResultsModule {
}
ResultsModule.ɵfac = function ResultsModule_Factory(t) { return new (t || ResultsModule)(); };
ResultsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ResultsModule });
ResultsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _results_routing_module__WEBPACK_IMPORTED_MODULE_1__["ResultsRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ResultsModule, { declarations: [_components_result_result_component__WEBPACK_IMPORTED_MODULE_2__["ResultComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _results_routing_module__WEBPACK_IMPORTED_MODULE_1__["ResultsRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]] }); })();


/***/ }),

/***/ "6OHq":
/*!***********************************************************!*\
  !*** ./src/app/screens/results/results-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ResultsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsRoutingModule", function() { return ResultsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_result_result_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/result/result.component */ "ER1l");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _components_result_result_component__WEBPACK_IMPORTED_MODULE_1__["ResultComponent"]
    }
];
class ResultsRoutingModule {
}
ResultsRoutingModule.ɵfac = function ResultsRoutingModule_Factory(t) { return new (t || ResultsRoutingModule)(); };
ResultsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ResultsRoutingModule });
ResultsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ResultsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "ER1l":
/*!***********************************************************************!*\
  !*** ./src/app/screens/results/components/result/result.component.ts ***!
  \***********************************************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ResultComponent {
}
ResultComponent.ɵfac = function ResultComponent_Factory(t) { return new (t || ResultComponent)(); };
ResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResultComponent, selectors: [["app-result"]], decls: 0, vars: 0, template: function ResultComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXN1bHQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src-app-screens-results-results-module.js.map