(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-screens-home-page-home-page-module"],{

/***/ "ApYr":
/*!*******************************************************************************!*\
  !*** ./src/app/screens/home-page/components/home-page/home-page.component.ts ***!
  \*******************************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/core */ "TaHA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/apis.service */ "8RPc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/angular */ "UMfn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function HomePageComponent_13_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r1 == null ? null : item_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.text);
} }
function HomePageComponent_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomePageComponent_13_ng_template_0_Template, 7, 3, "ng-template", 24);
} }
swiper_core__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper_core__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper_core__WEBPACK_IMPORTED_MODULE_0__["Pagination"]]);
class HomePageComponent {
    constructor(apis) {
        this.apis = apis;
        this.abouus = [
            { img: 'assets/p1.png', name: 'Sabrina Nelson', text: "With the word format my CVs got messy and didn't look good, with cvfy I have different templates ready anywhere" },
            { img: 'assets/p2.png', name: 'Joseph Pattison', text: "With the word format my CVs got messy and didn't look good, with cvfy I have different templates ready anywhere" },
            { img: 'assets/p3.png', name: 'Alberto Gonzalez', text: "With the word format my CVs got messy and didn't look good, with cvfy I have different templates ready anywhere" },
            { img: 'assets/p4.png', name: 'Star Mar5tinez', text: "With the word format my CVs got messy and didn't look good, with cvfy I have different templates ready anywhere" },
            { img: 'assets/p1.png', name: 'Sabrina Nelson', text: "With the word format my CVs got messy and didn't look good, with cvfy I have different templates ready anywhere" },
            { img: 'assets/p2.png', name: 'Joseph Pattison', text: "With the word format my CVs got messy and didn't look good, with cvfy I have different templates ready anywhere" },
            { img: 'assets/p3.png', name: 'Alberto Gonzalez', text: "With the word format my CVs got messy and didn't look good, with cvfy I have different templates ready anywhere" },
            { img: 'assets/p4.png', name: 'Star Mar5tinez', text: "With the word format my CVs got messy and didn't look good, with cvfy I have different templates ready anywhere" },
        ];
        this.counter = 0;
        this.swiperConfig = {
            slidesPerView: "2.6",
            loop: true,
            spaceBetween: "50",
            pagination: { clickable: true },
            navigation: "false",
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
            }
        };
    }
    ngOnInit() {
        this.apis.getCounter().subscribe((res) => {
            console.log(res);
            this.counter = res === null || res === void 0 ? void 0 : res.counter[0].counter;
        }, err => {
            console.log(err);
        });
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"])); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 68, vars: 3, consts: [[2, "background-image", "url('assets/homepageimage.jpg')"], [1, "cover", "text-center"], [1, "mb-3", "px-3"], [1, "btn", "btn-success", "p-0"], ["routerLink", "/cv", 2, "color", "white", "text-decoration", "none", "padding", "15px", "display", "block"], [2, "padding", "200px 0"], [1, "container"], [1, "text-primary", "text-center", 2, "font-weight", "bold"], [1, "p-5", 3, "config"], [4, "ngFor", "ngForOf"], [2, "padding-bottom", "200px"], [1, "p-4", "text-center", "text-white", 2, "border-radius", "20px", "margin-bottom", "50px", "background-color", "#033D4A"], [2, "font-weight", "bold", "font-size", "60px"], [2, "font-size", "30px"], [1, "text-center"], [2, "padding", "200px 0", "background-color", "#F4F7FC"], [1, "text-center", "text-primary"], [1, "text-center", 2, "font-size", "50px", "margin-bottom", "70px"], [1, "row"], [1, "col-lg-4", "mb-5"], [1, "p-5", "bg-white"], [1, "crcl"], [1, "my-3"], [1, "m-0"], ["swiperSlide", ""], [2, "border-radius", "10px", "border", "1px solid rgb(211, 209, 209)", "padding", "20px"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], ["alt", "", 2, "width", "70px", "height", "70px", "border-radius", "50%", "margin-right", "10px", 3, "src"], [1, "tex-secondary"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "FREE AND EASY CV BUILDER");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "CREATE YOUR CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " What they say about us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "swiper", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, HomePageComponent_13_Template, 1, 0, undefined, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "TOTAL CVs CREATED");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "CREATE YOUR CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h5", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "How it Works");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Build your resume ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " in three simple steps ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Fill in the Blanks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Start by filling in the relevant ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " information for your CV.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Pick a template");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Choose a template and customize ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " it to your own identity.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, " Download your CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Easily download your CV ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, " and edit afterwards. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", ctx.swiperConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.abouus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.counter);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], swiper_angular__WEBPACK_IMPORTED_MODULE_4__["SwiperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], swiper_angular__WEBPACK_IMPORTED_MODULE_4__["SwiperSlideDirective"]], styles: ["header[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background-size: cover;\n  position: relative;\n}\nheader[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.crcl[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border: 1px solid #b6b5b5;\n  border-radius: 50%;\n  margin-right: 10px;\n  line-height: 50px;\n  text-align: center;\n  margin-top: -15px;\n}\n.how[_ngcontent-%COMP%] {\n  text-align: left;\n}\n@media only screen and (max-width: 600px) {\n  .crcl[_ngcontent-%COMP%] {\n    margin: 20px auto;\n  }\n\n  .how[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGhvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQUk7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUVSO0FBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUVKO0FBQUE7RUFBSyxnQkFBQTtBQUlMO0FBSEE7RUFDSTtJQUFPLGlCQUFBO0VBT1Q7O0VBTkU7SUFBSyxrQkFBQTtFQVVQO0FBQ0YiLCJmaWxlIjoiaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC5jb3ZlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC41KTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcbi5jcmNsIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE4MiwgMTgxLCAxODEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxufVxyXG4uaG93e3RleHQtYWxpZ246IGxlZnQ7fVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuY3JjbCB7bWFyZ2luOjIwcHggYXV0b31cclxuICAgIC5ob3d7dGV4dC1hbGlnbjogY2VudGVyO31cclxuICB9Il19 */"] });


/***/ }),

/***/ "Tp+z":
/*!*******************************************************!*\
  !*** ./src/app/screens/home-page/home-page.module.ts ***!
  \*******************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_page_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page-routing.module */ "fUJ9");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "ApYr");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/angular */ "UMfn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class HomePageModule {
}
HomePageModule.ɵfac = function HomePageModule_Factory(t) { return new (t || HomePageModule)(); };
HomePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: HomePageModule });
HomePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _home_page_routing_module__WEBPACK_IMPORTED_MODULE_1__["HomePageRoutingModule"],
            swiper_angular__WEBPACK_IMPORTED_MODULE_3__["SwiperModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](HomePageModule, { declarations: [_components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _home_page_routing_module__WEBPACK_IMPORTED_MODULE_1__["HomePageRoutingModule"],
        swiper_angular__WEBPACK_IMPORTED_MODULE_3__["SwiperModule"]] }); })();


/***/ }),

/***/ "fUJ9":
/*!***************************************************************!*\
  !*** ./src/app/screens/home-page/home-page-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "ApYr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"]
    }
];
class HomePageRoutingModule {
}
HomePageRoutingModule.ɵfac = function HomePageRoutingModule_Factory(t) { return new (t || HomePageRoutingModule)(); };
HomePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HomePageRoutingModule });
HomePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=src-app-screens-home-page-home-page-module.js.map