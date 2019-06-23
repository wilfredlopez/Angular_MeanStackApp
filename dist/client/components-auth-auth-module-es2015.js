(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-auth-auth-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/auth/login/login.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/auth/login/login.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-spinner *ngIf=\"isLoading\" style=\"margin: auto\"></mat-spinner>\n<form *ngIf=\"!isLoading\" (submit)=\"onLogin(loginForm)\" #loginForm=\"ngForm\">\n  <h1>Login</h1>\n  <mat-form-field>\n    <label for=\"email\">Email *</label>\n    <input matInput ngModel #emailInput=\"ngModel\" type=\"email\" name=\"email\" id=\"email\" required email />\n    <mat-error *ngIf=\"emailInput.invalid\">Please enter a valid email</mat-error>\n  </mat-form-field>\n\n  <mat-form-field>\n    <label for=\"password\">Password *</label>\n    <input matInput ngModel #passwordInput=\"ngModel\" type=\"password\" id=\"password\" name=\"password\" required />\n    <mat-error *ngIf=\"passwordInput.invalid\">Please enter a valid password</mat-error>\n  </mat-form-field>\n  <div>\n\n    <button mat-raised-button color=\"primary\" type=\"submit\" *ngIf=\"!isLoading\">LOGIN</button>\n    <mat-spinner *ngIf=\"isLoading\" style=\"margin: auto\"></mat-spinner>\n  </div>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/auth/signup/signup.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/auth/signup/signup.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-spinner *ngIf=\"isLoading\" style=\"margin: auto\"></mat-spinner>\n<form *ngIf=\"!isLoading\" (submit)=\"onSignUp(singUpForm)\" #singUpForm=\"ngForm\">\n  <h1>SignUp</h1>\n  <mat-form-field>\n      <label for=\"username\">Name *</label>\n      <input matInput ngModel #userNameInput=\"ngModel\" type=\"text\" name=\"username\" id=\"username\" required />\n      <mat-error *ngIf=\"userNameInput.invalid\">Please enter a valid email</mat-error>\n    </mat-form-field>\n  <mat-form-field>\n    <label for=\"email\">Email *</label>\n    <input matInput ngModel #emailInput=\"ngModel\" type=\"email\" name=\"email\" id=\"email\" required email />\n    <mat-error *ngIf=\"emailInput.invalid\">Please enter a valid email</mat-error>\n  </mat-form-field>\n\n  <mat-form-field>\n    <label for=\"password\">Password *</label>\n    <input matInput ngModel #passwordInput=\"ngModel\" type=\"password\" id=\"password\" name=\"password\" required />\n    <mat-error *ngIf=\"passwordInput.invalid\">Please enter a valid password</mat-error>\n  </mat-form-field>\n  <div>\n    <button mat-raised-button color=\"primary\" type=\"submit\" *ngIf=\"!isLoading\">SIGNUP</button>\n    <mat-spinner *ngIf=\"isLoading\" style=\"margin: auto\"></mat-spinner>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/components/auth/auth-routing.ts":
/*!*************************************************!*\
  !*** ./src/app/components/auth/auth-routing.ts ***!
  \*************************************************/
/*! exports provided: AuthRoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutesModule", function() { return AuthRoutesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/components/auth/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/components/auth/signup/signup.component.ts");





const routes = [
    {
        path: "login",
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: "signup",
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]
    }
];
let AuthRoutesModule = class AuthRoutesModule {
};
AuthRoutesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthRoutesModule);



/***/ }),

/***/ "./src/app/components/auth/auth.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/auth/auth.module.ts ***!
  \************************************************/
/*! exports provided: WilfredAuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WilfredAuthModule", function() { return WilfredAuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/components/auth/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/components/auth/signup/signup.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_ang_materia_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/ang-materia.module */ "./src/app/ang-materia.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _auth_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth-routing */ "./src/app/components/auth/auth-routing.ts");








let WilfredAuthModule = class WilfredAuthModule {
};
WilfredAuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], src_app_ang_materia_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _auth_routing__WEBPACK_IMPORTED_MODULE_7__["AuthRoutesModule"]]
    })
], WilfredAuthModule);



/***/ }),

/***/ "./src/app/components/auth/login/login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/auth/login/login.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\r\n  width: 100%;\r\n}\r\n\r\nmat-card {\r\n  /* background: rgb(41, 43, 47); */\r\n  font-size: 1.2rem;\r\n}\r\n\r\nbutton {\r\n  margin-top: 0.8rem;\r\n}\r\n\r\nlabel {\r\n  /* color: #cecece; */\r\n  color: #747171;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gIC8qIGJhY2tncm91bmQ6IHJnYig0MSwgNDMsIDQ3KTsgKi9cclxuICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAwLjhyZW07XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAvKiBjb2xvcjogI2NlY2VjZTsgKi9cclxuICBjb2xvcjogIzc0NzE3MTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/auth/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/auth/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");



let LoginComponent = class LoginComponent {
    constructor(authService) {
        this.authService = authService;
        this.isLoading = false;
    }
    ngOnInit() {
        this.authStatusSub = this.authService
            .getAuthStatus()
            .subscribe(authStatus => {
            this.isLoading = false;
        });
    }
    onLogin(form) {
        this.isLoading = true;
        this.authService.loginUser(form.value.email, form.value.password);
    }
    ngOnDestroy() {
        this.authStatusSub.unsubscribe();
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/auth/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/auth/login/login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/components/auth/signup/signup.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/auth/signup/signup.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\r\n  width: 100%;\r\n}\r\n\r\nmat-card {\r\n  /* background: rgb(41, 43, 47); */\r\n  font-size: 1.2rem;\r\n}\r\n\r\nbutton {\r\n  margin-top: 0.8rem;\r\n}\r\n\r\nlabel {\r\n  /* color: #cecece; */\r\n  color: #747171;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRoL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICAvKiBiYWNrZ3JvdW5kOiByZ2IoNDEsIDQzLCA0Nyk7ICovXHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMC44cmVtO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgLyogY29sb3I6ICNjZWNlY2U7ICovXHJcbiAgY29sb3I6ICM3NDcxNzE7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/auth/signup/signup.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/auth/signup/signup.component.ts ***!
  \************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");



let SignupComponent = class SignupComponent {
    constructor(authService) {
        this.authService = authService;
        this.isLoading = false;
    }
    ngOnInit() {
        this.authStatusSub = this.authService
            .getAuthStatus()
            .subscribe(authStatus => {
            this.isLoading = false;
        });
    }
    onSignUp(form) {
        this.isLoading = true;
        if (form.invalid) {
            console.log("INVALID");
            return;
        }
        this.authService.createUser(form.value.email, form.value.password, form.value.username);
    }
    ngOnDestroy() {
        this.authStatusSub.unsubscribe();
    }
};
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-signup",
        template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/auth/signup/signup.component.html"),
        styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/auth/signup/signup.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], SignupComponent);



/***/ })

}]);
//# sourceMappingURL=components-auth-auth-module-es2015.js.map