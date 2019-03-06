(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"beige\">\r\n    <ion-buttons>\r\n    <ion-button slot=\"start\">\r\n        <ion-icon size=\"large\" name=\"menu\"></ion-icon>\r\n    </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"beige\">\r\n    <ion-list lines=\"none\" class=\"forest\">\r\n      <ion-item color=\"forest\">\r\n        <ion-label text-wrap>\r\n          <ion-text>\r\n            <h2>Bonjour {{ clientFirstName }}</h2>\r\n          </ion-text>\r\n          <p>{{ institutionName }}</p>\r\n        </ion-label>\r\n        <ion-button fill=\"clear\" size=\"medium\" color=\"white\" slot=\"end\" (click)=\"showNotifications()\">\r\n          <ion-icon size=\"large\" name=\"notifications-outline\">\r\n          </ion-icon>\r\n          <ion-badge size=\"small\" *ngIf=\"notifications.length > 0\" color=\"danger\">{{ notifications.length }}</ion-badge>\r\n        </ion-button>\r\n      </ion-item>\r\n      <ion-item color=\"forest\">\r\n        <ion-label text-wrap>\r\n          <ion-text>\r\n            <h2>{{ groupName }}</h2>\r\n          </ion-text>\r\n          <p>{{ certificateName }}</p>\r\n        </ion-label>\r\n      </ion-item>\r\n      \r\n      <ion-item color=\"forest\">\r\n        <ion-button expand=\"full\" color=\"white\" size=\"medium\" class=\"claim-button\" (click)=\"goToClaimPage()\">\r\n            FAIRE UNE RÉCLAMATION\r\n          <ion-icon name=\"arrow-forward\" slot=\"end\"></ion-icon>\r\n        </ion-button>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-grid class=\"inseam-grid\">\r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n              <div color=\"light\" class=\"tile\">\r\n                <img class=\"tile-icon\" src=\"../../assets/icon/phone-book.png\">\r\n                <div class=\"tile-title\">PROFESSIONNELS</div>\r\n                <div class=\"tile-description\">Gérer ma liste</div>\r\n              </div>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n              <div color=\"light\" class=\"tile\">\r\n                <img class=\"tile-icon\" src=\"../../assets/icon/cheque.png\">\r\n                <div class=\"tile-title\">REMBOURSEMENTS</div>\r\n                <div class=\"tile-description\">Voir l'historique</div>\r\n              </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n              <div color=\"light\" class=\"tile\">\r\n                <img class=\"tile-icon\" src=\"../../assets/icon/id-card.png\">\r\n                <div class=\"tile-title\">CARTE</div>\r\n                <div class=\"tile-description\">Afficher ma carte</div>\r\n              </div>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n              <div color=\"light\" class=\"tile\">\r\n                <img class=\"tile-icon\" src=\"../../assets/icon/phone-receiver.png\">\r\n                <div class=\"tile-title\">NOUS JOINDRE</div>\r\n                <div class=\"tile-description\">Obtenir de l'aide</div>\r\n              </div>\r\n          </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".forest {\n  background: var(--ion-color-forest);\n  color: var(--ion-color-forest-contrast); }\n\nion-button.button-full {\n  width: -webkit-fill-available; }\n\nion-button.claim-button {\n  font-weight: 600;\n  position: relative;\n  z-index: 2; }\n\nion-badge {\n  position: absolute;\n  top: 0;\n  right: 12px; }\n\n.inseam-grid {\n  padding: 12px 12px; }\n\n.list-ios {\n  margin-bottom: 0px; }\n\nion-list.list {\n  padding: 16px 0;\n  z-index: 1; }\n\n.item {\n  contain: none; }\n\n.tile {\n  color: #434343;\n  background-color: #fff;\n  text-align: center;\n  padding: 24px 0;\n  height: 178px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12); }\n\n.tile .tile-icon {\n    max-height: 48px;\n    max-width: 64px;\n    margin: 10px; }\n\n.tile .tile-title {\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 2px;\n    margin-bottom: 2px;\n    font-size: 14px;\n    font-weight: 600; }\n\n.tile .tile-description {\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 0;\n    margin-bottom: 2px;\n    font-size: 14px;\n    line-height: 20px;\n    font-weight: 400; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXFNpbW9uXFxEb2N1bWVudHNcXEdpdFxcZGVzamFyZGlucy1pbnN1cmFuY2UtYXBwXFxhcHAvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsbUNBQW1DO0VBQ25DLHVDQUF1QyxFQUFBOztBQUd6QztFQUNJLDZCQUE2QixFQUFBOztBQUdqQztFQUNJLGdCQUFnQjtFQUNoQixrQkFBaUI7RUFDakIsVUFBVSxFQUFBOztBQUdkO0VBQ0ksa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxlQUFlO0VBQ2YsVUFBUyxFQUFBOztBQUdiO0VBQ0ksYUFBWSxFQUFBOztBQUdoQjtFQUNJLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2IseUNBQXFDLEVBQUE7O0FBTnpDO0lBU1EsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixZQUFZLEVBQUE7O0FBWHBCO0lBZVEsY0FBYztJQUNkLGVBQWU7SUFDZixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZSxFQUFBOztBQXBCdkI7SUF3QlEsY0FBYztJQUNkLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3Jlc3Qge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1mb3Jlc3QpO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZm9yZXN0LWNvbnRyYXN0KTtcclxufVxyXG5cclxuaW9uLWJ1dHRvbi5idXR0b24tZnVsbCB7XHJcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxufVxyXG5cclxuaW9uLWJ1dHRvbi5jbGFpbS1idXR0b24ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuaW9uLWJhZGdlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAxMnB4O1xyXG59XHJcblxyXG4uaW5zZWFtLWdyaWQge1xyXG4gICAgcGFkZGluZzogMTJweCAxMnB4O1xyXG59XHJcblxyXG4ubGlzdC1pb3Mge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG5pb24tbGlzdC5saXN0IHtcclxuICAgIHBhZGRpbmc6IDE2cHggMDtcclxuICAgIHotaW5kZXg6MTtcclxufVxyXG5cclxuLml0ZW0ge1xyXG4gICAgY29udGFpbjpub25lO1xyXG59XHJcblxyXG4udGlsZSB7XHJcbiAgICBjb2xvcjogIzQzNDM0MztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyNHB4IDA7XHJcbiAgICBoZWlnaHQ6IDE3OHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwwLDAsLjEyKTtcclxuXHJcbiAgICAudGlsZS1pY29uIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogNjRweDtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpbGUtdGl0bGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpbGUtZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modal_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/modal.page */ "./src/app/modal/modal.page.ts");




var HomePage = /** @class */ (function () {
    function HomePage(modalController, navController) {
        this.modalController = modalController;
        this.navController = navController;
        this.clientFirstName = "Simon";
        this.institutionName = "CSSS De La Montagne";
        this.groupName = "Groupe 123456";
        this.certificateName = "Certificat 983727272";
        this.modal = null;
        this.notifications = [{
                text: "Désirez-vous faire une réclamation pour votre visite au Chiropraticien l’Institut?",
                route: "/claim"
            }];
    }
    HomePage.prototype.showNotifications = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.modalController.create({
                                component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_3__["ModalPage"],
                                componentProps: {
                                    'notifications': this.notifications
                                }
                            })];
                    case 1:
                        _a.modal = _b.sent();
                        return [4 /*yield*/, this.modal.present()];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    HomePage.prototype.goToClaimPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.navController.navigateForward("/claim")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map