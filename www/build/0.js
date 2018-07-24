webpackJsonp([0],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestMapPageModule", function() { return TestMapPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__test_map__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_gaode_map_gaode_map_module__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_baidu_map_baidu_map_module__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TestMapPageModule = /** @class */ (function () {
    function TestMapPageModule() {
    }
    TestMapPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__test_map__["a" /* TestMapPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_baidu_map_baidu_map_module__["a" /* BaiduMapComponentModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_gaode_map_gaode_map_module__["a" /* GaodeMapComponentModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__test_map__["a" /* TestMapPage */]),
            ],
        })
    ], TestMapPageModule);
    return TestMapPageModule;
}());

//# sourceMappingURL=test-map.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaiduMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BaiduMapComponent = /** @class */ (function () {
    function BaiduMapComponent() {
        console.log('Hello BaiduMapComponent Component');
    }
    BaiduMapComponent.prototype.ngOnInit = function () {
        this.init();
    };
    BaiduMapComponent.prototype.init = function () {
        var map = new BMap.Map(this.map.nativeElement);
        var BMAP_STATUS_SUCCESS = 0;
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function (r) {
            if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                console.log("\u767E\u5EA6\u5730\u56FE\u5B9A\u4F4D\u6210\u529F    lng\uFF1A" + r.point.lng + ",lat\uFF1A" + r.point.lat);
                map.centerAndZoom(r.point, 12);
                var mk = new BMap.Marker(r.point);
                map.addOverlay(mk);
            }
            else {
                alert('failed' + this.getStatus());
            }
        }, { enableHighAccuracy: true });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], BaiduMapComponent.prototype, "map", void 0);
    BaiduMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'baidu-map',template:/*ion-inline-start:"E:\chen\ionic-map\src\components\baidu-map\baidu-map.html"*/'<div class="map" #map></div>'/*ion-inline-end:"E:\chen\ionic-map\src\components\baidu-map\baidu-map.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], BaiduMapComponent);
    return BaiduMapComponent;
}());

//# sourceMappingURL=baidu-map.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaiduMapComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baidu_map__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BaiduMapComponentModule = /** @class */ (function () {
    function BaiduMapComponentModule() {
    }
    BaiduMapComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__baidu_map__["a" /* BaiduMapComponent */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__baidu_map__["a" /* BaiduMapComponent */]]
        })
    ], BaiduMapComponentModule);
    return BaiduMapComponentModule;
}());

//# sourceMappingURL=baidu-map.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GaodeMapComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gaode_map__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var GaodeMapComponentModule = /** @class */ (function () {
    function GaodeMapComponentModule() {
    }
    GaodeMapComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__gaode_map__["a" /* GaodeMapComponent */]
            ],
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__gaode_map__["a" /* GaodeMapComponent */]
            ]
        })
    ], GaodeMapComponentModule);
    return GaodeMapComponentModule;
}());

//# sourceMappingURL=gaode-map.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GaodeMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GaodeMapComponent = /** @class */ (function () {
    function GaodeMapComponent() {
        console.log('Hello GaodeMapComponent Component');
    }
    GaodeMapComponent.prototype.ngOnInit = function () {
        this.init();
    };
    GaodeMapComponent.prototype.init = function () {
        var map = new AMap.Map(this.map.nativeElement, {
            resizeEnable: true,
            zoom: 11,
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], GaodeMapComponent.prototype, "map", void 0);
    GaodeMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'gaode-map',template:/*ion-inline-start:"E:\chen\ionic-map\src\components\gaode-map\gaode-map.html"*/'<div class="map" #map></div>'/*ion-inline-end:"E:\chen\ionic-map\src\components\gaode-map\gaode-map.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], GaodeMapComponent);
    return GaodeMapComponent;
}());

//# sourceMappingURL=gaode-map.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestMapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_baidu_map_baidu_map__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TestMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestMapPage = /** @class */ (function () {
    function TestMapPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TestMapPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TestMapPage');
    };
    TestMapPage.prototype.doRefresh = function () {
        this.baidMap.init();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__components_baidu_map_baidu_map__["a" /* BaiduMapComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__components_baidu_map_baidu_map__["a" /* BaiduMapComponent */])
    ], TestMapPage.prototype, "baidMap", void 0);
    TestMapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-test-map',template:/*ion-inline-start:"E:\chen\ionic-map\src\pages\test-map\test-map.html"*/'<!--\n\n  Generated template for the TestMapPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>testMap</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-slides class="map-slides" pager>\n\n    <ion-slide>\n\n\n\n      <h2>Slide 1</h2>\n\n    \n\n    </ion-slide>\n\n    <ion-slide>\n\n      <ion-content padding>\n\n\n\n        <baidu-map></baidu-map>\n\n\n\n      </ion-content>\n\n    </ion-slide>\n\n    <ion-slide>\n\n      <ion-content padding>\n\n\n\n        <gaode-map></gaode-map>\n\n     \n\n      </ion-content>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>'/*ion-inline-end:"E:\chen\ionic-map\src\pages\test-map\test-map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], TestMapPage);
    return TestMapPage;
}());

//# sourceMappingURL=test-map.js.map

/***/ })

});
//# sourceMappingURL=0.js.map