(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--https://www.youtube.com/watch?v=aL0-qgC8wuU&t=-->\n\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\n\n<div  style=\"height: 1200px\" [ngStyle]=\"{'background' : 'lightpink'}\">\n\n  <nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <button (click)=\"signIn()\" class=\"btn btn-primary\">Sign in</button><br>\n    <button (click)=\"logIn()\" class=\"btn btn-primary\">Log in / Log out</button><br>\n\n  </div>\n\n  </nav>\n  <router-outlet></router-outlet>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.signIn = function () {
        this.router.navigate(['register']);
    };
    AppComponent.prototype.logIn = function () {
        this.router.navigate(['login']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/registration/registration.component */ "./src/app/components/registration/registration.component.ts");
/* harmony import */ var _components_logination_logination_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/logination/logination.component */ "./src/app/components/logination/logination.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_purchases_purchases_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/purchases/purchases.component */ "./src/app/components/purchases/purchases.component.ts");
/* harmony import */ var _components_add_purchase_add_purchase_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/add-purchase/add-purchase.component */ "./src/app/components/add-purchase/add-purchase.component.ts");
/* harmony import */ var _components_all_purchases_all_purchases_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/all-purchases/all-purchases.component */ "./src/app/components/all-purchases/all-purchases.component.ts");
/* harmony import */ var _components_clear_purchases_clear_purchases_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/clear-purchases/clear-purchases.component */ "./src/app/components/clear-purchases/clear-purchases.component.ts");
/* harmony import */ var _components_report_purchases_report_purchases_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/report-purchases/report-purchases.component */ "./src/app/components/report-purchases/report-purchases.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");















var routes = [
    { path: 'app', component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] },
    { path: 'register', component: _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"] },
    { path: 'login', component: _components_logination_logination_component__WEBPACK_IMPORTED_MODULE_5__["LoginationComponent"] },
    { path: 'admin', component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"] },
    { path: 'purchases', component: _components_purchases_purchases_component__WEBPACK_IMPORTED_MODULE_7__["PurchasesComponent"],
        children: [
            { path: 'all', component: _components_all_purchases_all_purchases_component__WEBPACK_IMPORTED_MODULE_9__["AllPurchasesComponent"] },
            { path: 'add', component: _components_add_purchase_add_purchase_component__WEBPACK_IMPORTED_MODULE_8__["AddPurchaseComponent"] },
            { path: 'clear', component: _components_clear_purchases_clear_purchases_component__WEBPACK_IMPORTED_MODULE_10__["ClearPurchasesComponent"] },
            { path: 'report', component: _components_report_purchases_report_purchases_component__WEBPACK_IMPORTED_MODULE_11__["ReportPurchasesComponent"] }
        ] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"],
                _components_logination_logination_component__WEBPACK_IMPORTED_MODULE_5__["LoginationComponent"],
                _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"],
                _components_purchases_purchases_component__WEBPACK_IMPORTED_MODULE_7__["PurchasesComponent"],
                _components_add_purchase_add_purchase_component__WEBPACK_IMPORTED_MODULE_8__["AddPurchaseComponent"],
                _components_all_purchases_all_purchases_component__WEBPACK_IMPORTED_MODULE_9__["AllPurchasesComponent"],
                _components_clear_purchases_clear_purchases_component__WEBPACK_IMPORTED_MODULE_10__["ClearPurchasesComponent"],
                _components_report_purchases_report_purchases_component__WEBPACK_IMPORTED_MODULE_11__["ReportPurchasesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"].forRoot(routes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-purchase/add-purchase.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/add-purchase/add-purchase.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".addForm{\r\n  width: 400px;\r\n  background: burlywood;\r\n  margin-left: 30px;\r\n  border: 1px solid midnightblue;\r\n  border-radius: 3px;\r\n  padding: 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtcHVyY2hhc2UvYWRkLXB1cmNoYXNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLXB1cmNoYXNlL2FkZC1wdXJjaGFzZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZEZvcm17XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGJhY2tncm91bmQ6IGJ1cmx5d29vZDtcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBtaWRuaWdodGJsdWU7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/add-purchase/add-purchase.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/add-purchase/add-purchase.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\n\n<div class=\"addForm\" *ngIf=\"show\">\n  <form  #addPurchaseForm=\"ngForm\">\n    <h3>Add a new purchase: </h3>\n    <label>Name:<br>\n      <input  class=\"form-control\"\n              [(ngModel)]=\"purchase.name\" type=\"text\"\n              [ngStyle]=\"{border: nameRef.invalid && nameRef.dirty?\n      '3px solid red': '3px solid green'}\"\n              ngModel\n              #nameRef = 'ngModel'\n              required minlength=\"3\"\n              name=\"name\" placeholder=\"name\" size=\"30\"></label><br>\n\n    <label>Price:<br>\n      <input class=\"form-control\"\n             [(ngModel)]=\"priceOfPurchase\" type=\"text\"\n             [ngStyle]=\"{border: priceRef.invalid && priceRef.dirty?\n      '3px solid red': '3px solid green'}\"\n             ngModel\n             #priceRef = 'ngModel'\n             required pattern=\"^\\d+(\\.|\\,)\\d{2}$\"\n             name=\"price\" placeholder=\"price\" size=\"10\"></label><br>\n\n    <label>Date:<br>\n      <input class=\"form-control\"\n             [(ngModel)]=\"purchase.date\" type=\"date\"\n             [ngStyle]=\"{border: dateRef.invalid && dateRef.dirty?\n      '3px solid red': '3px solid green'}\"\n             ngModel\n             #dateRef = 'ngModel'\n             required datatype=\"\"\n             name=\"date\" ></label><br>\n\n    <label>Currency:<br>\n      <select [(ngModel)]=\"purchase.currency\" name=\"currency\"\n              class=\"form-control\"\n              [ngStyle]=\"{border: currencyRef.invalid && currencyRef.dirty?\n      '3px solid red': '3px solid green'}\"\n              ngModel\n              #currencyRef = 'ngModel'\n              required\n      >\n        <option value=\"UAH\">UAH</option>\n        <option value=\"PLN\">PLN</option>\n        <option value=\"USD\">USD</option>\n        <option value=\"EUR\">EUR</option>\n      </select>\n\n    </label><br>\n\n    <button [disabled]=\"addPurchaseForm.invalid\"\n            (click)=\"savePurchase(addPurchaseForm)\" type=\"button\">Save purchase</button>\n  </form>\n  <h3 style=\"color: darkviolet\">{{responseOnSave}}</h3>\n\n</div>\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/components/add-purchase/add-purchase.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/add-purchase/add-purchase.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddPurchaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPurchaseComponent", function() { return AddPurchaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_Purshase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/Purshase */ "./src/app/models/Purshase.ts");
/* harmony import */ var _services_main_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/main-service.service */ "./src/app/services/main-service.service.ts");





var AddPurchaseComponent = /** @class */ (function () {
    function AddPurchaseComponent(mainService) {
        this.mainService = mainService;
        this.purchase = new _models_Purshase__WEBPACK_IMPORTED_MODULE_3__["Purchase"]();
        this.show = false;
    }
    AddPurchaseComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('_token') !== null) {
            this.headersOption =
                new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: localStorage.getItem('_token') });
            this.user = JSON.parse(localStorage.getItem('_userLogged'));
            this.show = true;
        }
    };
    AddPurchaseComponent.prototype.savePurchase = function (addPurchaseForm) {
        var _this = this;
        this.purchase.price = parseFloat(this.priceOfPurchase);
        this.mainService.savePurchase(this.user.id, this.purchase, this.headersOption).
            subscribe(function (value) { _this.responseOnSave = value.text; }, function (error1) { _this.responseOnSave = 'Failed to save purchase!'; });
    };
    AddPurchaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-purchase',
            template: __webpack_require__(/*! ./add-purchase.component.html */ "./src/app/components/add-purchase/add-purchase.component.html"),
            styles: [__webpack_require__(/*! ./add-purchase.component.css */ "./src/app/components/add-purchase/add-purchase.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_main_service_service__WEBPACK_IMPORTED_MODULE_4__["MainServiceService"]])
    ], AddPurchaseComponent);
    return AddPurchaseComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/admin.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/admin/admin.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tableStyle{\r\n  width: 450px;\r\n  background: salmon;\r\n  margin-left: 30px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGVTdHlsZXtcclxuICB3aWR0aDogNDUwcHg7XHJcbiAgYmFja2dyb3VuZDogc2FsbW9uO1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/admin/admin.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/admin/admin.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Admin Component</h4>\n\n\n<div  class=\"tableStyle\" *ngIf=\"show\">\n  <h2>All users: </h2>\n  <table class=\"table table-hover\"  >\n    <tr>\n      <th>Login of a User</th>\n      <th>Actions</th>\n\n    </tr>\n\n    <tr *ngFor=\"let u of users\">\n      <td>{{u.username}}</td>\n      <td> <button (click)=\"delete(u)\">DELETE</button></td>\n    </tr>\n  </table>\n</div>\n\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_main_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/main-service.service */ "./src/app/services/main-service.service.ts");




var AdminComponent = /** @class */ (function () {
    function AdminComponent(mainService) {
        this.mainService = mainService;
        this.show = false;
    }
    AdminComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('_token') !== null) {
            this.user = JSON.parse(localStorage.getItem('_userLogged'));
            if (this.user.username === 'admin') {
                this.headersOption =
                    new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: localStorage.getItem('_token') });
                this.getUsers();
            }
        }
    };
    AdminComponent.prototype.getUsers = function () {
        var _this = this;
        this.mainService.findAllUsers(this.headersOption).
            subscribe(function (value) {
            _this.users = value;
            _this.show = true;
        }, function (error1) { return alert('Failed to load users'); });
    };
    AdminComponent.prototype.delete = function (u) {
        var _this = this;
        if (confirm('DO YOU REALLY WANT TO DELETE the ACCOUNT of: ' + u.username + '???')) {
            this.mainService.deleteUser(u, this.headersOption).
                subscribe(function (data) {
                alert(data.text);
                _this.getUsers();
            }, function (err) {
                console.log('err: ' + err.toString());
                alert('Failed to delete!');
            });
        }
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/components/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/components/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_main_service_service__WEBPACK_IMPORTED_MODULE_3__["MainServiceService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/components/all-purchases/all-purchases.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/all-purchases/all-purchases.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tableStyle{\r\n  width: 700px;\r\n  background: darkseagreen;\r\n  margin-left: 30px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbGwtcHVyY2hhc2VzL2FsbC1wdXJjaGFzZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hbGwtcHVyY2hhc2VzL2FsbC1wdXJjaGFzZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZVN0eWxle1xyXG4gIHdpZHRoOiA3MDBweDtcclxuICBiYWNrZ3JvdW5kOiBkYXJrc2VhZ3JlZW47XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/all-purchases/all-purchases.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/all-purchases/all-purchases.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\n\n<div  class=\"tableStyle\" *ngIf=\"show\">\n  <h2>All purchases: </h2>\n  <table class=\"table table-hover\"  >\n    <tr>\n      <th>Name</th>\n      <th>Price</th>\n      <th>Currency</th>\n      <th>Date </th>\n    </tr>\n\n    <tr *ngFor=\"let p of purchases\">\n      <td>{{p.name}}</td>\n      <td>{{p.price | number: '1.2-2'}}</td>\n      <td>{{p.currency}}</td>\n      <td>{{p.date | date: 'yyyy-MM-dd'}}</td>\n    </tr>\n  </table>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/components/all-purchases/all-purchases.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/all-purchases/all-purchases.component.ts ***!
  \*********************************************************************/
/*! exports provided: AllPurchasesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllPurchasesComponent", function() { return AllPurchasesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_main_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/main-service.service */ "./src/app/services/main-service.service.ts");




var AllPurchasesComponent = /** @class */ (function () {
    function AllPurchasesComponent(mainService) {
        this.mainService = mainService;
        this.purchases = [];
        this.show = false;
    }
    AllPurchasesComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('_token') !== null) {
            this.headersOption =
                new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: localStorage.getItem('_token') });
            this.user = JSON.parse(localStorage.getItem('_userLogged'));
            this.getPurchases(this.user);
            this.show = true;
        }
    };
    AllPurchasesComponent.prototype.getPurchases = function (user) {
        var _this = this;
        this.headersOption =
            new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: localStorage.getItem('_token') });
        this.mainService.getPurchases(user.id, this.headersOption).
            subscribe(function (value) { _this.purchases = value; }, function (error1) {
            console.log(error1);
            alert('Failed to load purchases. Your session might have expired. Try to Log In');
        });
    };
    AllPurchasesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all-purchases',
            template: __webpack_require__(/*! ./all-purchases.component.html */ "./src/app/components/all-purchases/all-purchases.component.html"),
            styles: [__webpack_require__(/*! ./all-purchases.component.css */ "./src/app/components/all-purchases/all-purchases.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_main_service_service__WEBPACK_IMPORTED_MODULE_3__["MainServiceService"]])
    ], AllPurchasesComponent);
    return AllPurchasesComponent;
}());



/***/ }),

/***/ "./src/app/components/clear-purchases/clear-purchases.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/clear-purchases/clear-purchases.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clearForm{\r\n  width: 200px;\r\n  border: 1px solid midnightblue;\r\n  border-radius: 3px;\r\n  background: crimson;\r\n  margin-left: 30px;\r\n  padding: 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbGVhci1wdXJjaGFzZXMvY2xlYXItcHVyY2hhc2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xlYXItcHVyY2hhc2VzL2NsZWFyLXB1cmNoYXNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsZWFyRm9ybXtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgbWlkbmlnaHRibHVlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBiYWNrZ3JvdW5kOiBjcmltc29uO1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/clear-purchases/clear-purchases.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/clear-purchases/clear-purchases.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\n\n<div class=\"clearForm\" *ngIf=\"showForm\">\n  <form #dateToDeleteForm=\"ngForm\">\n    <h3 style=\"color: snow\">Clear:</h3>\n    <label>Date:<br>\n      <input class=\"form-control\"\n             [(ngModel)]=\"dateToDelete\" type=\"date\"\n             [ngStyle]=\"{border: dateToDeleteRef.invalid && dateToDeleteRef.dirty?\n        '3px solid red': '3px solid green'}\"\n             ngModel\n             #dateToDeleteRef = 'ngModel'\n             required datatype=\"\"\n             name=\"dateToDelete\" ></label><br>\n\n    <button [disabled]=\"dateToDeleteForm.invalid\"\n            (click)=\"deletePurchases(dateToDeleteForm)\" type=\"button\">Clear</button>\n  </form>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/components/clear-purchases/clear-purchases.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/clear-purchases/clear-purchases.component.ts ***!
  \*************************************************************************/
/*! exports provided: ClearPurchasesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearPurchasesComponent", function() { return ClearPurchasesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_ResponseTransfer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/ResponseTransfer */ "./src/app/models/ResponseTransfer.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_main_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/main-service.service */ "./src/app/services/main-service.service.ts");






var ClearPurchasesComponent = /** @class */ (function () {
    function ClearPurchasesComponent(activatedRoute, mainService) {
        this.activatedRoute = activatedRoute;
        this.mainService = mainService;
        this.responseTransfer = new _models_ResponseTransfer__WEBPACK_IMPORTED_MODULE_3__["ResponseTransfer"]();
        this.showForm = false;
    }
    ClearPurchasesComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('_token') !== null) {
            this.headersOption =
                new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: localStorage.getItem('_token') });
            this.user = JSON.parse(localStorage.getItem('_userLogged'));
            this.activatedRoute.queryParams.subscribe(function (data) {
                _this.user = data;
                _this.showForm = true;
            });
        }
    };
    ClearPurchasesComponent.prototype.deletePurchases = function (dateToDeleteForm) {
        if (confirm('DO YOU REALLY WANT TO DELETE YOUR purchases of: ' + this.dateToDelete.toString() + '???')) {
            this.responseTransfer.date = this.dateToDelete;
            this.mainService.deleteByDate(this.user, this.responseTransfer, this.headersOption).
                subscribe(function (value) { alert(value.text); }, function (error1) {
                console.log(error1);
                alert('Failed to delete');
            });
        }
    };
    ClearPurchasesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clear-purchases',
            template: __webpack_require__(/*! ./clear-purchases.component.html */ "./src/app/components/clear-purchases/clear-purchases.component.html"),
            styles: [__webpack_require__(/*! ./clear-purchases.component.css */ "./src/app/components/clear-purchases/clear-purchases.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_main_service_service__WEBPACK_IMPORTED_MODULE_5__["MainServiceService"]])
    ], ClearPurchasesComponent);
    return ClearPurchasesComponent;
}());



/***/ }),

/***/ "./src/app/components/logination/logination.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/logination/logination.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logForm{\r\n  width: 250px;\r\n  border: 3px solid orange;\r\n  border-radius: 5px;\r\n  background: darkturquoise;\r\n  margin-left: 150px;\r\n  padding: 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbmF0aW9uL2xvZ2luYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbmF0aW9uL2xvZ2luYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dGb3Jte1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBib3JkZXI6IDNweCBzb2xpZCBvcmFuZ2U7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQ6IGRhcmt0dXJxdW9pc2U7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/logination/logination.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/logination/logination.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\n\n<div class=\"logForm\">\n  <form #loginForm=\"ngForm\">\n    <h1>LOG IN:</h1>\n    <label>Login:<br>\n      <input  class=\"form-control\"\n              [(ngModel)]=\"userToLogin.username\" type=\"text\"\n              [ngStyle]=\"{border: usernameRef.invalid && usernameRef.dirty?\n      '3px solid red': '3px solid green'}\"\n              ngModel\n              #usernameRef = 'ngModel'\n              required minlength=\"4\" maxlength=\"10\"\n              name=\"username\" placeholder=\"username\" size=\"10\"></label><br>\n\n    <label>Password:<br>\n      <input class=\"form-control\"\n             [(ngModel)]=\"userToLogin.password\" type=\"password\"\n             [ngStyle]=\"{border: passwordRef.invalid && passwordRef.dirty?\n      '3px solid red': '3px solid green'}\"\n             ngModel\n             #passwordRef = 'ngModel'\n             required minlength=\"4\" maxlength=\"10\"\n             name=\"password\" placeholder=\"password\" size=\"10\"></label><br>\n\n\n    <button [disabled]=\"loginForm.invalid\"\n            (click)=\"logInto(loginForm)\" type=\"button\">Log In</button>\n\n  </form>\n\n</div>\n\n<h3 style=\"color: indigo\">{{responseLogination}}</h3>\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/components/logination/logination.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/logination/logination.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginationComponent", function() { return LoginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/User */ "./src/app/models/User.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_main_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/main-service.service */ "./src/app/services/main-service.service.ts");





var LoginationComponent = /** @class */ (function () {
    function LoginationComponent(activatedRoute, router, mainService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.mainService = mainService;
        this.user = new _models_User__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.userToLogin = new _models_User__WEBPACK_IMPORTED_MODULE_2__["User"]();
    }
    LoginationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (data) {
            localStorage.clear();
            _this.user = new _models_User__WEBPACK_IMPORTED_MODULE_2__["User"]();
        });
    };
    LoginationComponent.prototype.logInto = function (loginForm) {
        var _this = this;
        this.mainService.login(this.userToLogin).
            subscribe(function (value) {
            var token = value.headers.get('Authorization');
            var userLogged = value.headers.get('UserLogged');
            localStorage.setItem('_token', token);
            localStorage.setItem('_userLogged', userLogged);
            _this.user = JSON.parse(userLogged);
            if (_this.user.username === 'admin') {
                _this.router.navigate(['admin']);
            }
            else {
                _this.router.navigate(['purchases'], { queryParams: _this.user });
            }
        }, function (error1) {
            console.log(error1);
            _this.responseLogination = 'Access denied';
        });
    };
    LoginationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logination',
            template: __webpack_require__(/*! ./logination.component.html */ "./src/app/components/logination/logination.component.html"),
            styles: [__webpack_require__(/*! ./logination.component.css */ "./src/app/components/logination/logination.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_main_service_service__WEBPACK_IMPORTED_MODULE_4__["MainServiceService"]])
    ], LoginationComponent);
    return LoginationComponent;
}());



/***/ }),

/***/ "./src/app/components/purchases/purchases.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/purchases/purchases.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHVyY2hhc2VzL3B1cmNoYXNlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/purchases/purchases.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/purchases/purchases.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\n\n<nav class=\"navbar \" style=\"background: sandybrown\">\n  <div class=\"container-fluid\">\n    <h2 *ngIf=\"showGreeting\">Hello: {{user.username}}</h2>\n    <button (click)=\"all()\" class=\"btn btn-primary\">All</button>\n    <button (click)=\"add()\" class=\"btn btn-primary\">Add</button>\n    <button (click)=\"clear()\" class=\"btn btn-primary\">Clear</button>\n    <button (click)=\"report()\" class=\"btn btn-primary\">Report</button>\n    <button [disabled]=\"showDeleteUserButton\" (click)=\"deleteAccount()\"\n            class=\"btn btn-danger\">Delete Account</button>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/components/purchases/purchases.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/purchases/purchases.component.ts ***!
  \*************************************************************/
/*! exports provided: PurchasesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasesComponent", function() { return PurchasesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_main_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/main-service.service */ "./src/app/services/main-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var PurchasesComponent = /** @class */ (function () {
    function PurchasesComponent(router, mainService) {
        this.router = router;
        this.mainService = mainService;
        this.showDeleteUserButton = true;
        this.showGreeting = false;
    }
    PurchasesComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('_token') !== null) {
            this.headersOption =
                new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ Authorization: localStorage.getItem('_token') });
            this.user = JSON.parse(localStorage.getItem('_userLogged'));
            this.showDeleteUserButton = false;
            this.showGreeting = true;
        }
    };
    PurchasesComponent.prototype.all = function () {
        this.router.navigate(['purchases/all'], { queryParams: this.user });
    };
    PurchasesComponent.prototype.add = function () {
        this.router.navigate(['purchases/add'], { queryParams: this.user });
    };
    PurchasesComponent.prototype.clear = function () {
        this.router.navigate(['purchases/clear'], { queryParams: this.user });
    };
    PurchasesComponent.prototype.report = function () {
        this.router.navigate(['purchases/report'], { queryParams: this.user });
    };
    PurchasesComponent.prototype.deleteAccount = function () {
        var _this = this;
        if (confirm('DO YOU REALLY WANT TO DELETE YOUR ACCOUNT???')) {
            this.mainService.deleteUser(this.user, this.headersOption).
                subscribe(function (data) {
                alert(data.text);
                _this.router.navigate(['login']);
            }, function (err) {
                console.log('err: ' + err.toString());
                alert('Failed to delete!');
            });
        }
    };
    PurchasesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-purchases',
            template: __webpack_require__(/*! ./purchases.component.html */ "./src/app/components/purchases/purchases.component.html"),
            styles: [__webpack_require__(/*! ./purchases.component.css */ "./src/app/components/purchases/purchases.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_main_service_service__WEBPACK_IMPORTED_MODULE_3__["MainServiceService"]])
    ], PurchasesComponent);
    return PurchasesComponent;
}());



/***/ }),

/***/ "./src/app/components/registration/registration.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/registration/registration.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".regForm{\r\n  width: 250px;\r\n  border: 3px solid orange;\r\n  border-radius: 5px;\r\n  background: darkseagreen;\r\n  margin-left: 30px;\r\n  padding: 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ0Zvcm17XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIG9yYW5nZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZDogZGFya3NlYWdyZWVuO1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/registration/registration.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/registration/registration.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\n<div class=\"regForm\">\n  <form  #registerForm=\"ngForm\" >\n    <h3>REGISTRATION:</h3>\n    <label>Login:<br>\n      <input  class=\"form-control\"\n              [(ngModel)]=\"user.username\" type=\"text\"\n              [ngStyle]=\"{border: usernameRef.invalid && usernameRef.dirty?\n      '3px solid red': '3px solid green'}\"\n              ngModel\n              #usernameRef = 'ngModel'\n              required minlength=\"4\" maxlength=\"10\"\n              name=\"username\" placeholder=\"username\" size=\"10\"></label><br>\n\n    <label>Password:<br>\n      <input class=\"form-control\"\n             [(ngModel)]=\"user.password\" type=\"password\"\n             [ngStyle]=\"{border: passwordRef.invalid && passwordRef.dirty?\n      '3px solid red': '3px solid green'}\"\n             ngModel\n             #passwordRef = 'ngModel'\n             required minlength=\"4\" maxlength=\"10\"\n             name=\"password\" placeholder=\"password\" size=\"10\"></label><br>\n\n    <button [disabled]=\"registerForm.invalid\"\n            (click)=\"saveUser(registerForm)\" type=\"button\">Sign In</button>\n\n  </form>\n  <h3 style=\"color: blueviolet\">{{responseRegistration}}</h3>\n</div>\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/components/registration/registration.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/registration/registration.component.ts ***!
  \*******************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/User */ "./src/app/models/User.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_main_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/main-service.service */ "./src/app/services/main-service.service.ts");





var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(router, mainService) {
        this.router = router;
        this.mainService = mainService;
        this.user = new _models_User__WEBPACK_IMPORTED_MODULE_2__["User"]();
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.saveUser = function (registerForm) {
        var _this = this;
        this.mainService.saveUser(this.user)
            .subscribe(function (value) {
            _this.responseRegistration = value.text;
            if (value.text === 'User was saved successfully.') {
                _this.router.navigate(['login']);
            }
        }, function (error1) {
            console.log(error1);
            _this.responseRegistration = 'Registration Failed';
        });
    };
    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/components/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/components/registration/registration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_main_service_service__WEBPACK_IMPORTED_MODULE_4__["MainServiceService"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/components/report-purchases/report-purchases.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/report-purchases/report-purchases.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reportForm{\r\n  width: 250px;\r\n  border: 1px solid midnightblue;\r\n  border-radius: 3px;\r\n  background: antiquewhite;\r\n  margin-left: 30px;\r\n  padding: 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXBvcnQtcHVyY2hhc2VzL3JlcG9ydC1wdXJjaGFzZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXBvcnQtcHVyY2hhc2VzL3JlcG9ydC1wdXJjaGFzZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXBvcnRGb3Jte1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBtaWRuaWdodGJsdWU7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJhY2tncm91bmQ6IGFudGlxdWV3aGl0ZTtcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/report-purchases/report-purchases.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/report-purchases/report-purchases.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\n\n<div class=\"reportForm\" *ngIf=\"show\">\n  <form #billingYearForm=\"ngForm\" >\n    <h3>Report:</h3>\n    <label>Year:<br>\n      <select [(ngModel)]=\"billingYear\" name=\"currency\"\n              class=\"form-control\"\n              [ngStyle]=\"{border: billingYearRef.invalid && billingYearRef.dirty?\n    '3px solid red': '3px solid green'}\"\n              ngModel\n              #billingYearRef = 'ngModel'\n              required >\n        <option *ngFor=\"let y of years\" value=\"{{y}}\">\n          {{y}}\n        </option>\n      </select>\n    </label><br>\n\n    <label>Currency:<br>\n      <select [(ngModel)]=\"billingCurrency\" name=\"billingCurrency\"\n              class=\"form-control\"\n              [ngStyle]=\"{border: billingCurrencyRef.invalid && billingCurrencyRef.dirty?\n    '3px solid red': '3px solid green'}\"\n              ngModel\n              #billingCurrencyRef = 'ngModel'\n              required\n      >\n        <option value=\"UAH\">UAH</option>\n        <option value=\"PLN\">PLN</option>\n        <option value=\"USD\">USD</option>\n        <option value=\"EUR\">EUR</option>\n      </select>\n\n    </label><br>\n\n    <button [disabled]=\"billingYearForm.invalid\"\n            (click)=\"report(billingYearForm)\" type=\"button\">Report</button>\n  </form  >\n\n  <h4 *ngIf=\"showResultOnReport\" style=\"color: blueviolet\">\n    Result : {{resultOnReport}}</h4>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/components/report-purchases/report-purchases.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/report-purchases/report-purchases.component.ts ***!
  \***************************************************************************/
/*! exports provided: ReportPurchasesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportPurchasesComponent", function() { return ReportPurchasesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_ResponseTransfer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/ResponseTransfer */ "./src/app/models/ResponseTransfer.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_main_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/main-service.service */ "./src/app/services/main-service.service.ts");






var ReportPurchasesComponent = /** @class */ (function () {
    function ReportPurchasesComponent(activatedRoute, mainService) {
        this.activatedRoute = activatedRoute;
        this.mainService = mainService;
        this.responseTransfer = new _models_ResponseTransfer__WEBPACK_IMPORTED_MODULE_3__["ResponseTransfer"]();
        this.billingYear = '';
        this.years = ['2000', '2001', '2002', '2003', '2004', '2005', '2006',
            '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'];
        this.showResultOnReport = false;
        this.show = false;
    }
    ReportPurchasesComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('_token') !== null) {
            this.headersOption =
                new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: localStorage.getItem('_token') });
            this.activatedRoute.queryParams.subscribe(function (data) {
                _this.user = data;
                _this.show = true;
            });
        }
    };
    ReportPurchasesComponent.prototype.report = function (billingYearForm) {
        var _this = this;
        this.responseTransfer = new _models_ResponseTransfer__WEBPACK_IMPORTED_MODULE_3__["ResponseTransfer"]();
        this.responseTransfer.text = this.billingYear;
        this.responseTransfer.currency = this.billingCurrency;
        this.mainService.report(this.user, this.responseTransfer, this.headersOption).
            subscribe(function (value) {
            _this.showResultOnReport = true;
            _this.resultOnReport = value.text;
        }, function (error1) {
            console.log(error1);
            alert('Failed to calculate');
        });
    };
    ReportPurchasesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-report-purchases',
            template: __webpack_require__(/*! ./report-purchases.component.html */ "./src/app/components/report-purchases/report-purchases.component.html"),
            styles: [__webpack_require__(/*! ./report-purchases.component.css */ "./src/app/components/report-purchases/report-purchases.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_main_service_service__WEBPACK_IMPORTED_MODULE_5__["MainServiceService"]])
    ], ReportPurchasesComponent);
    return ReportPurchasesComponent;
}());



/***/ }),

/***/ "./src/app/models/Purshase.ts":
/*!************************************!*\
  !*** ./src/app/models/Purshase.ts ***!
  \************************************/
/*! exports provided: Purchase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Purchase", function() { return Purchase; });
var Purchase = /** @class */ (function () {
    function Purchase() {
        this.id = 0;
        this.name = '';
        this.price = 0;
        this.currency = null;
    }
    return Purchase;
}());



/***/ }),

/***/ "./src/app/models/ResponseTransfer.ts":
/*!********************************************!*\
  !*** ./src/app/models/ResponseTransfer.ts ***!
  \********************************************/
/*! exports provided: ResponseTransfer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseTransfer", function() { return ResponseTransfer; });
var ResponseTransfer = /** @class */ (function () {
    function ResponseTransfer() {
    }
    return ResponseTransfer;
}());



/***/ }),

/***/ "./src/app/models/User.ts":
/*!********************************!*\
  !*** ./src/app/models/User.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
        this.id = 0;
        this.username = '';
        this.password = '';
        this.purchases = [];
    }
    return User;
}());



/***/ }),

/***/ "./src/app/services/main-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/main-service.service.ts ***!
  \**************************************************/
/*! exports provided: MainServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainServiceService", function() { return MainServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var MainServiceService = /** @class */ (function () {
    function MainServiceService(http) {
        this.http = http;
        this.url = 'http://localhost:8080';
    }
    MainServiceService.prototype.saveUser = function (user) {
        return this.http.post(this.url + '/saveUser', user);
    };
    MainServiceService.prototype.login = function (user) {
        return this.http.post(this.url + '/login', JSON.stringify({ username: user.username,
            password: user.password }), { observe: 'response' });
    };
    MainServiceService.prototype.findAllUsers = function (headersOption) {
        return this.http.get(this.url + '/admin/findAllUsers', { headers: headersOption });
    };
    MainServiceService.prototype.deleteUser = function (user, headersOption) {
        return this.http.delete(this.url + '/deleteUser/' + user.id, { headers: headersOption });
    };
    MainServiceService.prototype.savePurchase = function (id, purchase, headersOption) {
        return this.http.post(this.url + '/savePurchase/' + id, purchase, { headers: headersOption });
    };
    MainServiceService.prototype.getPurchases = function (id, headersOption) {
        return this.http.get(this.url + '/getPurchases/' + id, { headers: headersOption });
    };
    MainServiceService.prototype.deleteByDate = function (user, responseTransfer, headersOption) {
        return this.http.post(this.url + '/deleteByDate/' + user.id, responseTransfer, { headers: headersOption });
    };
    MainServiceService.prototype.report = function (user, responseTransfer, headersOption) {
        return this.http.post(this.url + '/report/' + user.id, responseTransfer, { headers: headersOption });
    };
    MainServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MainServiceService);
    return MainServiceService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\TryTask6\purchasesFront\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map