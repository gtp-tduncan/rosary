(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+dEH":
/*!*******************************************************************************!*\
  !*** ./src/app/components/holy-rosary-prayer/holy-rosary-prayer.component.ts ***!
  \*******************************************************************************/
/*! exports provided: HolyRosaryPrayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HolyRosaryPrayerComponent", function() { return HolyRosaryPrayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_prayers_common_prayers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/prayers/common-prayers */ "dxo7");
/* harmony import */ var _pats_beads_pats_beads_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pats-beads/pats-beads.component */ "vJvT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _current_prayer_current_prayer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./current-prayer/current-prayer.component */ "60da");
/* harmony import */ var _mystery_display_mystery_display_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mystery-display/mystery-display.component */ "4f7d");







const _c0 = ["primaryPrayer"];
function HolyRosaryPrayerComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-mystery-display", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeBeadGroupList", ctx_r0.activeBeadGroupList);
} }
const seqMap = new Map();
seqMap['closing1'] = new src_app_prayers_common_prayers__WEBPACK_IMPORTED_MODULE_1__["PrayerClosing1"]();
seqMap['closing2'] = new src_app_prayers_common_prayers__WEBPACK_IMPORTED_MODULE_1__["PrayerClosing2"]();
seqMap['creed'] = new src_app_prayers_common_prayers__WEBPACK_IMPORTED_MODULE_1__["PrayerApostlesCreed"]();
seqMap['glory'] = new src_app_prayers_common_prayers__WEBPACK_IMPORTED_MODULE_1__["PrayerGlory"]();
seqMap['fatima'] = new src_app_prayers_common_prayers__WEBPACK_IMPORTED_MODULE_1__["PrayerFatima"]();
seqMap['glory-fatima'] = new src_app_prayers_common_prayers__WEBPACK_IMPORTED_MODULE_1__["PrayerGloryFatima"]();
seqMap['hail-holy-queen'] = new src_app_prayers_common_prayers__WEBPACK_IMPORTED_MODULE_1__["PrayerHailHolyQueen"]();
seqMap['hail-mary'] = new src_app_prayers_common_prayers__WEBPACK_IMPORTED_MODULE_1__["PrayerHailMary"]();
seqMap['our-father'] = new src_app_prayers_common_prayers__WEBPACK_IMPORTED_MODULE_1__["PrayerOurFather"]();
seqMap['sign-cross'] = new src_app_prayers_common_prayers__WEBPACK_IMPORTED_MODULE_1__["PrayerSignOfTheCross"]();
class HolyRosaryPrayerComponent {
    constructor() {
        this.prayerClosing2 = new src_app_prayers_common_prayers__WEBPACK_IMPORTED_MODULE_1__["PrayerClosing2"]();
    }
    ngOnInit() {
        this.activeBeadGroup = this.activeBeadGroupList.next();
        this.highlightBeadIndex = 0;
        if (this.orientation === undefined) {
            this.orientation = 'wide';
        }
        this.currentPrayer = this.findCurrentPrayer();
        console.log(`prayerName 1: ${this.prayerName}`);
    }
    ngAfterViewInit() {
        console.log(`prayerName 2: ${this.prayerName}`);
    }
    get showMystery() {
        const mysteryNumber = this.activeBeadGroupList.mysteryNumber();
        return (mysteryNumber >= 1 && mysteryNumber <= 5 && this.activeBeadGroupList.mystery() !== undefined);
    }
    onNext() {
        this.activeBeadGroup = this.activeBeadGroupList.next();
        if (this.activeBeadGroup) {
            this.highlightBeadIndex++;
        }
        this.currentPrayer = this.findCurrentPrayer();
    }
    onPrevious() {
        this.activeBeadGroup = this.activeBeadGroupList.previous();
        if (this.activeBeadGroup) {
            this.highlightBeadIndex--;
        }
        this.currentPrayer = this.findCurrentPrayer();
    }
    findCurrentPrayer() {
        var _a;
        return seqMap[(_a = this.activeBeadGroup) === null || _a === void 0 ? void 0 : _a.sequence];
    }
}
HolyRosaryPrayerComponent.ɵfac = function HolyRosaryPrayerComponent_Factory(t) { return new (t || HolyRosaryPrayerComponent)(); };
HolyRosaryPrayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HolyRosaryPrayerComponent, selectors: [["app-holy-rosary-prayer"]], viewQuery: function HolyRosaryPrayerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.currentPrayerComponent = _t.first);
    } }, inputs: { activeBeadGroupList: "activeBeadGroupList", prayerName: "prayerName", debugTheEnd: "debugTheEnd", orientation: "orientation" }, decls: 8, vars: 6, consts: [["id", "rosary-beads"], ["id", "rosary-beads-img-div"], [3, "highlightBeadIdx"], ["id", "rosary-beads-prayer-div"], [4, "ngIf"], ["id", "active-prayer"], [3, "prayerName", "activeBeadGroup", "currentPrayer", "debugTheEnd"], ["primaryPrayer", ""], [3, "activeBeadGroupList"]], template: function HolyRosaryPrayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-pats-beads", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HolyRosaryPrayerComponent_div_4_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-current-prayer", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlightBeadIdx", ctx.highlightBeadIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMystery);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("prayerName", ctx.prayerName)("activeBeadGroup", ctx.activeBeadGroup)("currentPrayer", ctx.currentPrayer)("debugTheEnd", ctx.debugTheEnd);
    } }, directives: [_pats_beads_pats_beads_component__WEBPACK_IMPORTED_MODULE_2__["PatsBeadsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _current_prayer_current_prayer_component__WEBPACK_IMPORTED_MODULE_4__["CurrentPrayerComponent"], _mystery_display_mystery_display_component__WEBPACK_IMPORTED_MODULE_5__["MysteryDisplayComponent"]], styles: ["@media (orientation: landscape) {\n  #rosary-beads-img-div[_ngcontent-%COMP%] {\n    float: left;\n    width: 30%;\n  }\n\n  #rosary-beads-prayer-div[_ngcontent-%COMP%] {\n    float: right;\n    width: 70%;\n  }\n}\n@media (orientation: portrait) {\n  #rosary-beads-prayer-div[_ngcontent-%COMP%] {\n    margin-top: -1vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbHktcm9zYXJ5LXByYXllci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVFO0lBQ0UsV0FBQTtJQUNBLFVBQUE7RUFGRjs7RUFLQTtJQUNFLFlBQUE7SUFDQSxVQUFBO0VBRkY7QUFDRjtBQU1BO0VBRUU7SUFDRSxnQkFBQTtFQUxGO0FBQ0YiLCJmaWxlIjoiaG9seS1yb3NhcnktcHJheWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzLXNoYXJlZC1taXhpbnMuc2Nzcyc7XHJcblxyXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuXHJcbiAgI3Jvc2FyeS1iZWFkcy1pbWctZGl2IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICB9XHJcblxyXG4gICNyb3NhcnktYmVhZHMtcHJheWVyLWRpdiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcblxyXG4gICNyb3NhcnktYmVhZHMtcHJheWVyLWRpdiB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMXZoO1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HolyRosaryPrayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-holy-rosary-prayer',
                templateUrl: './holy-rosary-prayer.component.html',
                styleUrls: ['./holy-rosary-prayer.component.scss']
            }]
    }], function () { return []; }, { activeBeadGroupList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], prayerName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], debugTheEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], orientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], currentPrayerComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['primaryPrayer']
        }] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/tony/workspace/personal/rosary/src/main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_app_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/app-config.service */ "JvtB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = ["navEnabledChkbox"];
function HeaderComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_span_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onStartNew(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_span_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onStartNew(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HeaderComponent_span_7_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onEnableNavigation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(appConfig) {
        this.appConfig = appConfig;
        this.onResetEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onEnableNavigationEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    onStartNew() {
        this.onResetEvent.emit(true);
    }
    onEnableNavigation() {
        var _a, _b, _c, _d;
        console.log(`header nav flag: ${(_b = (_a = this.navEnabledChkbox) === null || _a === void 0 ? void 0 : _a.nativeElement) === null || _b === void 0 ? void 0 : _b.checked}`);
        this.onEnableNavigationEvent.emit((_d = (_c = this.navEnabledChkbox) === null || _c === void 0 ? void 0 : _c.nativeElement) === null || _d === void 0 ? void 0 : _d.checked);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_config_service__WEBPACK_IMPORTED_MODULE_1__["AppConfigService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.navEnabledChkbox = _t.first);
    } }, inputs: { prayerName: "prayerName", isPrayerSequenceDone: "isPrayerSequenceDone" }, outputs: { onResetEvent: "onResetEvent", onEnableNavigationEvent: "onEnableNavigationEvent" }, decls: 8, vars: 4, consts: function () { let i18n_1; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5923369199825683093$$SRC_APP_COMPONENTS_HEADER_HEADER_COMPONENT_TS__2 = goog.getMsg("Reset Prayer");
        i18n_1 = MSG_EXTERNAL_5923369199825683093$$SRC_APP_COMPONENTS_HEADER_HEADER_COMPONENT_TS__2;
    }
    else {
        i18n_1 = $localize `:␟8a9f4ee16ad2bdfa38bd60aea19f73a9f6870fc5␟5923369199825683093:Reset Prayer`;
    } let i18n_3; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7476772930738694812$$SRC_APP_COMPONENTS_HEADER_HEADER_COMPONENT_TS__4 = goog.getMsg("Start New Prayer");
        i18n_3 = MSG_EXTERNAL_7476772930738694812$$SRC_APP_COMPONENTS_HEADER_HEADER_COMPONENT_TS__4;
    }
    else {
        i18n_3 = $localize `:␟c915df2dcfd5d2d5c63e041a59f318b690e34d4d␟7476772930738694812:Start New Prayer`;
    } return [[1, "active-prayer-header"], [1, "left"], [1, "prayer-name"], [1, "right"], ["class", "active-nav", 4, "ngIf"], [4, "ngIf"], [1, "active-nav"], [3, "click"], i18n_1, i18n_3, ["type", "checkbox", "value", "false", 3, "change"], ["navEnabledChkbox", ""]]; }, template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_span_5_Template, 3, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_span_6_Template, 3, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_span_7_Template, 3, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.prayerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isPrayerSequenceDone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPrayerSequenceDone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appConfig.isPortrait);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".active-prayer-header[_ngcontent-%COMP%] {\n  background-color: yellowgreen;\n  display: flex;\n  flex-direction: row;\n  padding: 1vh;\n}\n\n@media (orientation: landscape) {\n  .active-prayer-header[_ngcontent-%COMP%] {\n    max-height: 6vh;\n  }\n}\n\n@media (orientation: portrait) {\n  .active-prayer-header[_ngcontent-%COMP%] {\n    max-height: 4vh;\n  }\n}\n\n.active-prayer-header[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  padding: 1vh;\n  text-align: center;\n  width: 50%;\n}\n\n.active-prayer-header[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  padding: 1vh;\n  text-align: center;\n  width: 50%;\n}\n\n@media (orientation: landscape) {\n  .active-prayer-header[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n    margin-top: -1.5vh;\n  }\n}\n\n@media (orientation: portrait) {\n  .active-prayer-header[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n    margin-top: -1.9vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy1zaGFyZWQtbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFRSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUVBLFlDRFE7QUREVjs7QUFNQTtFQUNFO0lBQ0UsZUFBQTtFQUhGO0FBQ0Y7O0FBTUE7RUFDRTtJQUNFLGVBQUE7RUFKRjtBQUNGOztBQU9BO0VBQ0UsWUNsQlE7RURtQlIsa0JBQUE7RUFDQSxVQUFBO0FBTEY7O0FBUUE7RUFDRSxZQ3hCUTtFRHlCUixrQkFBQTtFQUNBLFVBQUE7QUFMRjs7QUFRQTtFQUVFO0lBQ0Usa0JBQUE7RUFORjtBQUNGOztBQVVBO0VBRUU7SUFDRSxrQkFBQTtFQVRGO0FBQ0YiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL3N0eWxlcy1zaGFyZWQtbWl4aW5zLnNjc3MnO1xyXG5cclxuLmFjdGl2ZS1wcmF5ZXItaGVhZGVyIHtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93Z3JlZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBwYWRkaW5nOiAkcGFkZGluZztcclxuXHJcbn1cclxuXHJcbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gIC5hY3RpdmUtcHJheWVyLWhlYWRlciB7XHJcbiAgICBtYXgtaGVpZ2h0OiA2dmg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gIC5hY3RpdmUtcHJheWVyLWhlYWRlciB7XHJcbiAgICBtYXgtaGVpZ2h0OiA0dmg7XHJcbiAgfVxyXG59XHJcblxyXG4uYWN0aXZlLXByYXllci1oZWFkZXIgLmxlZnQge1xyXG4gIHBhZGRpbmc6ICRwYWRkaW5nO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uYWN0aXZlLXByYXllci1oZWFkZXIgLnJpZ2h0IHtcclxuICBwYWRkaW5nOiAkcGFkZGluZztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcblxyXG4gIC5hY3RpdmUtcHJheWVyLWhlYWRlciAucmlnaHQge1xyXG4gICAgbWFyZ2luLXRvcDogLTEuNXZoO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcblxyXG4gIC5hY3RpdmUtcHJheWVyLWhlYWRlciAucmlnaHQge1xyXG4gICAgbWFyZ2luLXRvcDogLTEuOXZoO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbiIsIiRmb250bmFtZTogQ29uc29sYTtcclxuJGZvbnQtc2l6ZS1iYXNlOiAydnc7XHJcbiRmb250LXNpemUtYmFzZS1waG9uZTogNXZ3O1xyXG5cclxuJG1hcmdpbnM6IDF2aDtcclxuJG5hdi1sYW5kc2NhcGUtbWFyZ2luOiAzdmg7XHJcblxyXG4kcGFkZGluZzogMXZoO1xyXG4kcGFkZGluZy1waG9uZTogMC4zdmg7XHJcblxyXG4kYm9yZGVyOiAxcHggZGFzaGVkIGJsYWNrO1xyXG4kYm9yZGVyLXJhZGl1czogMS41dmg7XHJcblxyXG4kaW5wdXQtbWFyZ2luLWJvdHRvbTogMXZoO1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: src_app_services_app_config_service__WEBPACK_IMPORTED_MODULE_1__["AppConfigService"] }]; }, { prayerName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isPrayerSequenceDone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onResetEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onEnableNavigationEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], navEnabledChkbox: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['navEnabledChkbox']
        }] }); })();


/***/ }),

/***/ "4f7d":
/*!********************************************************************************************!*\
  !*** ./src/app/components/holy-rosary-prayer/mystery-display/mystery-display.component.ts ***!
  \********************************************************************************************/
/*! exports provided: MysteryDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MysteryDisplayComponent", function() { return MysteryDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MysteryDisplayComponent {
    constructor() {
        this.mysteryNumbers = [undefined, 'First', 'Second', 'Third', 'Fourth', 'Fifth'];
    }
    ngOnInit() {
    }
    get mysteryNum() {
        return this.mysteryNumbers[this.activeBeadGroupList.mysteryNumber()];
    }
    get mysteryName() {
        return this.activeBeadGroupList.mysterySequenceName();
    }
    get mysteryLiteralLabel() {
        return $localize `:@@mysteryLiteral:Mystery`;
    }
}
MysteryDisplayComponent.ɵfac = function MysteryDisplayComponent_Factory(t) { return new (t || MysteryDisplayComponent)(); };
MysteryDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MysteryDisplayComponent, selectors: [["app-mystery-display"]], inputs: { activeBeadGroupList: "activeBeadGroupList" }, decls: 11, vars: 5, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2159739125156471219$$SRC_APP_COMPONENTS_HOLY_ROSARY_PRAYER_MYSTERY_DISPLAY_MYSTERY_DISPLAY_COMPONENT_TS_1 = goog.getMsg(" Fruit of the Mystery: ");
        i18n_0 = MSG_EXTERNAL_2159739125156471219$$SRC_APP_COMPONENTS_HOLY_ROSARY_PRAYER_MYSTERY_DISPLAY_MYSTERY_DISPLAY_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟78f9b078083fe6f4f39314a51f86ec4ee1b7303d␟2159739125156471219: Fruit of the Mystery: `;
    } return [[1, "mystery-row"], [1, "mystery-row-inner"], [1, "mystery-label"], [1, "mystery-value"], [1, "fruit-label"], i18n_0, [1, "fruit-value"]]; }, template: function MysteryDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx.mysteryNum, " ", ctx.mysteryName, " ", ctx.mysteryLiteralLabel, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.activeBeadGroupList.mystery(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.activeBeadGroupList.fruit(), " ");
    } }, styles: [".mystery-row[_ngcontent-%COMP%] {\n  border: 1px dashed black;\n  border-radius: 1.5vh;\n  background-color: lightskyblue;\n  margin-left: 1vh;\n  margin-right: 1vh;\n  padding: 1vh;\n  text-align: left;\n}\n\n@media (orientation: landscape) {\n  .mystery-row-inner[_ngcontent-%COMP%] {\n    margin-top: 1vh;\n  }\n}\n\n@media (orientation: portrait) {\n  .mystery-row-inner[_ngcontent-%COMP%] {\n    margin-top: 0.5vh;\n  }\n}\n\n.mystery-label[_ngcontent-%COMP%], .fruit-label[_ngcontent-%COMP%] {\n  font-size: small;\n  margin-left: 1vh;\n  margin-right: 1vh;\n}\n\n.mystery-value[_ngcontent-%COMP%], .fruit-value[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-left: 1vh;\n  margin-right: 1vh;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL215c3RlcnktZGlzcGxheS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy1zaGFyZWQtbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSx3QkNPTztFRE5QLG9CQ09jO0VETmQsOEJBQUE7RUFDQSxnQkNGUTtFREdSLGlCQ0hRO0VESVIsWUNEUTtFREVSLGdCQUFBO0FBREY7O0FBSUE7RUFFRTtJQUNFLGVDWE07RURTUjtBQUNGOztBQU1BO0VBRUU7SUFDRSxpQkFBQTtFQUxGO0FBQ0Y7O0FBU0E7RUFDRSxnQkFBQTtFQUNBLGdCQzFCUTtFRDJCUixpQkMzQlE7QURvQlY7O0FBVUE7RUFDRSxpQkFBQTtFQUNBLGdCQ2hDUTtFRGlDUixpQkNqQ1E7RURrQ1IsZ0JBQUE7QUFQRiIsImZpbGUiOiJteXN0ZXJ5LWRpc3BsYXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9zdHlsZXMtc2hhcmVkLW1peGlucy5zY3NzJztcclxuXHJcbi5teXN0ZXJ5LXJvdyB7XHJcbiAgYm9yZGVyOiAkYm9yZGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcclxuICBtYXJnaW4tbGVmdDogJG1hcmdpbnM7XHJcbiAgbWFyZ2luLXJpZ2h0OiAkbWFyZ2lucztcclxuICBwYWRkaW5nOiAkcGFkZGluZztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuXHJcbiAgLm15c3Rlcnktcm93LWlubmVyIHtcclxuICAgIG1hcmdpbi10b3A6ICRtYXJnaW5zO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcblxyXG4gIC5teXN0ZXJ5LXJvdy1pbm5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjV2aDtcclxuICB9XHJcblxyXG59XHJcblxyXG4ubXlzdGVyeS1sYWJlbCwgLmZydWl0LWxhYmVsIHtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG4gIG1hcmdpbi1sZWZ0OiAkbWFyZ2lucztcclxuICBtYXJnaW4tcmlnaHQ6ICRtYXJnaW5zO1xyXG59XHJcblxyXG4ubXlzdGVyeS12YWx1ZSwgLmZydWl0LXZhbHVlIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tbGVmdDogJG1hcmdpbnM7XHJcbiAgbWFyZ2luLXJpZ2h0OiAkbWFyZ2lucztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4iLCIkZm9udG5hbWU6IENvbnNvbGE7XHJcbiRmb250LXNpemUtYmFzZTogMnZ3O1xyXG4kZm9udC1zaXplLWJhc2UtcGhvbmU6IDV2dztcclxuXHJcbiRtYXJnaW5zOiAxdmg7XHJcbiRuYXYtbGFuZHNjYXBlLW1hcmdpbjogM3ZoO1xyXG5cclxuJHBhZGRpbmc6IDF2aDtcclxuJHBhZGRpbmctcGhvbmU6IDAuM3ZoO1xyXG5cclxuJGJvcmRlcjogMXB4IGRhc2hlZCBibGFjaztcclxuJGJvcmRlci1yYWRpdXM6IDEuNXZoO1xyXG5cclxuJGlucHV0LW1hcmdpbi1ib3R0b206IDF2aDtcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MysteryDisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mystery-display',
                templateUrl: './mystery-display.component.html',
                styleUrls: ['./mystery-display.component.scss']
            }]
    }], function () { return []; }, { activeBeadGroupList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "60da":
/*!******************************************************************************************!*\
  !*** ./src/app/components/holy-rosary-prayer/current-prayer/current-prayer.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CurrentPrayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentPrayerComponent", function() { return CurrentPrayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_prayers_common_prayers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/prayers/common-prayers */ "dxo7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _prayers_end_end_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../prayers/end/end.component */ "Uspq");





function CurrentPrayerComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.currentPrayer.all, " ");
} }
function CurrentPrayerComponent_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](11, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.currentPrayerCounter());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.currentPrayerLeader(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.currentPrayer.response, " ");
} }
function CurrentPrayerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CurrentPrayerComponent_div_1_div_2_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CurrentPrayerComponent_div_1_ng_container_3_Template, 14, 3, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentPrayer.all);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentPrayer.all === undefined);
} }
function CurrentPrayerComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-end", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("prayerName", ctx_r1.prayerName);
} }
const cssClassesColumn1 = 'gtp-cell-plain-1 gtp-cell-plain-1-phone gtp-pre-line';
const cssClassesColumn2 = 'gtp-cell-plain-11 gtp-cell-plain-11-phone gtp-pre-line';
class CurrentPrayerComponent {
    constructor() { }
    ngOnInit() {
        console.log(`ngOnInit() debugTheEnd: ${this.debugTheEnd}`);
    }
    beadStatus() {
        return (this.currentPrayer instanceof src_app_prayers_common_prayers__WEBPACK_IMPORTED_MODULE_1__["PrayerHailMary"])
            ? `(${this.activeBeadGroup.index + 1} / ${this.activeBeadGroup.maxIndex})`
            : undefined;
    }
    currentPrayerCounter() {
        var _a;
        return (((_a = this.activeBeadGroup) === null || _a === void 0 ? void 0 : _a.maxIndex) > 1)
            ? `(${this.activeBeadGroup.index + 1} / ${this.activeBeadGroup.maxIndex}) `
            : '';
    }
    currentPrayerLeader() {
        return `${this.currentPrayer.leader}`;
    }
    updateDebugTheEnd(flag) {
        this.debugTheEnd = flag;
    }
}
CurrentPrayerComponent.ɵfac = function CurrentPrayerComponent_Factory(t) { return new (t || CurrentPrayerComponent)(); };
CurrentPrayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CurrentPrayerComponent, selectors: [["app-current-prayer"]], inputs: { activeBeadGroup: "activeBeadGroup", currentPrayer: "currentPrayer", prayerName: "prayerName", debugTheEnd: "debugTheEnd" }, decls: 3, vars: 2, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_prayer_leader$$SRC_APP_COMPONENTS_HOLY_ROSARY_PRAYER_CURRENT_PRAYER_CURRENT_PRAYER_COMPONENT_TS___1 = goog.getMsg("Leader:");
        i18n_0 = MSG_EXTERNAL_prayer_leader$$SRC_APP_COMPONENTS_HOLY_ROSARY_PRAYER_CURRENT_PRAYER_CURRENT_PRAYER_COMPONENT_TS___1;
    }
    else {
        i18n_0 = $localize `:@@prayer-leader␟e7f93903bdfd7dc32405b3528a32952df2c278aa␟5238047990163522235:Leader:`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_prayer_response$$SRC_APP_COMPONENTS_HOLY_ROSARY_PRAYER_CURRENT_PRAYER_CURRENT_PRAYER_COMPONENT_TS___3 = goog.getMsg(" Response: ");
        i18n_2 = MSG_EXTERNAL_prayer_response$$SRC_APP_COMPONENTS_HOLY_ROSARY_PRAYER_CURRENT_PRAYER_CURRENT_PRAYER_COMPONENT_TS___3;
    }
    else {
        i18n_2 = $localize `:@@prayer-response␟14f66d64b276b9b6a2a5a7c2f2c92d3e83ef17d3␟6552250481309160969: Response: `;
    } return [[1, "active-prayer-workspace"], [4, "ngIf"], ["class", "prayer-all", 4, "ngIf"], [1, "prayer-all"], [1, "prayer-leader-label"], [1, "leaderPrayerLeft"], i18n_0, [1, "leaderPrayerRight"], [1, "prayer-leader"], [1, "prayer-response-label"], i18n_2, [1, "prayer-response"], [3, "prayerName"]]; }, template: function CurrentPrayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CurrentPrayerComponent_div_1_Template, 4, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CurrentPrayerComponent_div_2_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentPrayer && ctx.debugTheEnd !== true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeBeadGroup === undefined || ctx.debugTheEnd);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _prayers_end_end_component__WEBPACK_IMPORTED_MODULE_3__["EndComponent"]], styles: [".active-prayer-workspace[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n@media (orientation: landscape) {\n  .active-prayer-workspace[_ngcontent-%COMP%] {\n    font-size: 2vw;\n    margin-top: 10vh;\n  }\n}\n\n@media (orientation: portrait) {\n  .active-prayer-workspace[_ngcontent-%COMP%] {\n    font-size: 5vw;\n    margin-top: -2vh;\n  }\n}\n\n.leaderPrayerRight[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.prayer-leader-label[_ngcontent-%COMP%], .prayer-response-label[_ngcontent-%COMP%] {\n  border-width: 1px;\n  font-style: italic;\n  font-weight: bold;\n  opacity: 100%;\n  width: 5vh;\n}\n\n.prayer-all[_ngcontent-%COMP%], .prayer-leader-label[_ngcontent-%COMP%], .prayer-response-label[_ngcontent-%COMP%] {\n  margin-top: 1vh;\n}\n\n.prayer-all[_ngcontent-%COMP%], .prayer-leader[_ngcontent-%COMP%], .prayer-response[_ngcontent-%COMP%], .prayer-leader-label[_ngcontent-%COMP%], .prayer-response-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: 1vh;\n  margin-right: 1vh;\n  padding: 1vh;\n  text-align: left;\n  width: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2N1cnJlbnQtcHJheWVyLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzLXNoYXJlZC1taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQURGOztBQUlBO0VBQ0U7SUFDRSxjQ1JhO0lEU2IsZ0JBQUE7RUFERjtBQUNGOztBQUlBO0VBQ0U7SUFDRSxjQ2RtQjtJRGVuQixnQkFBQTtFQUZGO0FBQ0Y7O0FBS0E7RUFDRSxZQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQUhGOztBQU1BO0VBQ0UsZUM5QlE7QUQyQlY7O0FBTUE7RUFDRSxjQUFBO0VBQ0EsZ0JDbkNRO0VEb0NSLGlCQ3BDUTtFRHFDUixZQ2xDUTtFRG1DUixnQkFBQTtFQUNBLFdBQUE7QUFIRiIsImZpbGUiOiJjdXJyZW50LXByYXllci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3N0eWxlcy1zaGFyZWQtbWl4aW5zLnNjc3MnO1xyXG5cclxuLmFjdGl2ZS1wcmF5ZXItd29ya3NwYWNlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gIC5hY3RpdmUtcHJheWVyLXdvcmtzcGFjZSB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtYmFzZTtcclxuICAgIG1hcmdpbi10b3A6IDEwdmg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gIC5hY3RpdmUtcHJheWVyLXdvcmtzcGFjZSB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtYmFzZS1waG9uZTtcclxuICAgIG1hcmdpbi10b3A6IC0ydmg7XHJcbiAgfVxyXG59XHJcblxyXG4ubGVhZGVyUHJheWVyUmlnaHQge1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnByYXllci1sZWFkZXItbGFiZWwsIC5wcmF5ZXItcmVzcG9uc2UtbGFiZWwge1xyXG4gIGJvcmRlci13aWR0aDogMXB4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBvcGFjaXR5OiAxMDAlO1xyXG4gIHdpZHRoOiA1dmg7XHJcbn1cclxuXHJcbi5wcmF5ZXItYWxsLCAucHJheWVyLWxlYWRlci1sYWJlbCwgLnByYXllci1yZXNwb25zZS1sYWJlbCB7XHJcbiAgbWFyZ2luLXRvcDogJG1hcmdpbnM7XHJcbn1cclxuXHJcbi5wcmF5ZXItYWxsLCAucHJheWVyLWxlYWRlciwgLnByYXllci1yZXNwb25zZSwgLnByYXllci1sZWFkZXItbGFiZWwsIC5wcmF5ZXItcmVzcG9uc2UtbGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiAkbWFyZ2lucztcclxuICBtYXJnaW4tcmlnaHQ6ICRtYXJnaW5zO1xyXG4gIHBhZGRpbmc6ICRwYWRkaW5nO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuIiwiJGZvbnRuYW1lOiBDb25zb2xhO1xyXG4kZm9udC1zaXplLWJhc2U6IDJ2dztcclxuJGZvbnQtc2l6ZS1iYXNlLXBob25lOiA1dnc7XHJcblxyXG4kbWFyZ2luczogMXZoO1xyXG4kbmF2LWxhbmRzY2FwZS1tYXJnaW46IDN2aDtcclxuXHJcbiRwYWRkaW5nOiAxdmg7XHJcbiRwYWRkaW5nLXBob25lOiAwLjN2aDtcclxuXHJcbiRib3JkZXI6IDFweCBkYXNoZWQgYmxhY2s7XHJcbiRib3JkZXItcmFkaXVzOiAxLjV2aDtcclxuXHJcbiRpbnB1dC1tYXJnaW4tYm90dG9tOiAxdmg7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrentPrayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-current-prayer',
                templateUrl: './current-prayer.component.html',
                styleUrls: ['./current-prayer.component.scss']
            }]
    }], function () { return []; }, { activeBeadGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], currentPrayer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], prayerName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], debugTheEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "72Gp":
/*!*********************************************!*\
  !*** ./src/app/models/liturgical-colors.ts ***!
  \*********************************************/
/*! exports provided: LiturgicalColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiturgicalColors", function() { return LiturgicalColors; });
var LiturgicalColors;
(function (LiturgicalColors) {
    LiturgicalColors["GREEN"] = "green";
    LiturgicalColors["RED"] = "red";
    LiturgicalColors["ROSE"] = "rose";
    LiturgicalColors["VIOLET"] = "violet";
    LiturgicalColors["WHITE"] = "white";
})(LiturgicalColors || (LiturgicalColors = {}));


/***/ }),

/***/ "8pZM":
/*!*****************************************************************************!*\
  !*** ./src/app/components/holy-rosary-prayer/mysteries/mystery-luminous.ts ***!
  \*****************************************************************************/
/*! exports provided: MysteryLuminousComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MysteryLuminousComponent", function() { return MysteryLuminousComponent; });
class MysteryLuminousComponent {
    constructor() { }
    get mysterySequenceName() {
        return 'Luminous';
    }
    get mystery1() {
        return $localize `:@@luminous-mystery-1:The Baptism in the Jordan`;
    }
    get fruit1() {
        return $localize `:@@luminous-fruit-1:Openness to the Holy Spirit`;
    }
    get mystery2() {
        return $localize `:@@luminous-mystery-2:The Wedding Feast at Cana`;
    }
    get fruit2() {
        return $localize `:@@luminous-fruit-2:To Jesus through Mary`;
    }
    get mystery3() {
        return $localize `:@@luminous-mystery-3:The Proclamation of the Kingdom of God`;
    }
    get fruit3() {
        return $localize `:@@luminous-fruit-3:Conversion`;
    }
    get mystery4() {
        return $localize `:@@luminous-mystery-4:The Transfiguration`;
    }
    get fruit4() {
        return $localize `:@@luminous-fruit-4:Desire for holiness`;
    }
    get mystery5() {
        return $localize `:@@luminous-mystery-5:The Instituation of the Eucharist`;
    }
    get fruit5() {
        return $localize `:@@luminous-fruit-5:Adoration`;
    }
}


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    debugMode: true
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

/***/ "BB6k":
/*!***************************************************************************!*\
  !*** ./src/app/components/holy-rosary-prayer/mysteries/mystery-joyful.ts ***!
  \***************************************************************************/
/*! exports provided: MysteryJoyfulComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MysteryJoyfulComponent", function() { return MysteryJoyfulComponent; });
class MysteryJoyfulComponent {
    constructor() { }
    get mysterySequenceName() {
        return 'Joyful';
    }
    get mystery1() {
        return $localize `:@@joyful-mystery-1:The Annunciation`;
    }
    get fruit1() {
        return $localize `:@@joyful-fruit-1:Humility`;
    }
    get mystery2() {
        return $localize `:@@joyful-mystery-2:The Visitation`;
    }
    get fruit2() {
        return $localize `:@@joyful-fruit-2:Charity`;
    }
    get mystery3() {
        return $localize `:@@joyful-mystery-3:Birth of our Lord`;
    }
    get fruit3() {
        return $localize `:@@joyful-fruit-3:Poverty; detachment from the world`;
    }
    get mystery4() {
        return $localize `:@@joyful-mystery-4:The Presentation`;
    }
    get fruit4() {
        return $localize `:@@joyful-fruit-4:Obedience`;
    }
    get mystery5() {
        return $localize `:@@joyful-mystery-5:The Finding of our Lord in the temple`;
    }
    get fruit5() {
        return $localize `:@@joyful-fruit-5:Piety`;
    }
}


/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sequences_rosary_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sequences/rosary-helper */ "hwcc");
/* harmony import */ var _active_prayer_active_prayer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../active-prayer/active-prayer.component */ "K4TB");
/* harmony import */ var _services_bead_group_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bead-group-loader.service */ "ivI1");
/* harmony import */ var _services_app_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/app-config.service */ "JvtB");
/* harmony import */ var src_app_services_liturgical_year_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/liturgical-year.service */ "N8x+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _mystery_selector_mystery_selector_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mystery-selector/mystery-selector.component */ "MKlP");
/* harmony import */ var _notices_notices_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../notices/notices.component */ "z+NF");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../navigation/navigation.component */ "mvyS");












function HomeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-mystery-selector", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedMysteryEvent", function HomeComponent_div_1_Template_app_mystery_selector_selectedMysteryEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onMysterySelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-notices");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-navigation", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onNextClickEvent", function HomeComponent_ng_container_2_div_2_Template_app_navigation_onNextClickEvent_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.onNext(); })("onPreviousClickEvent", function HomeComponent_ng_container_2_div_2_Template_app_navigation_onPreviousClickEvent_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.onPrevious(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-active-prayer", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onResetEvent", function HomeComponent_ng_container_2_Template_app_active_prayer_onResetEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onResetEvent($event); })("onEnableNavigationEvent", function HomeComponent_ng_container_2_Template_app_active_prayer_onEnableNavigationEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onEnableNavigation($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_ng_container_2_div_2_Template, 2, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeBeadGroupList", ctx_r1.selectedBeadGroupList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.appConfig.isPortrait || ctx_r1.navigationEnabled);
} }
class HomeComponent {
    constructor(beadGroupLoader, appConfig, liturgicalYear) {
        this.beadGroupLoader = beadGroupLoader;
        this.appConfig = appConfig;
        this.liturgicalYear = liturgicalYear;
    }
    ngOnInit() {
        console.log(`selectedMysteryId: ${this.selectedMysteryId}`);
        if (this.selectedMysteryId) {
            this.onMysterySelected(_sequences_rosary_helper__WEBPACK_IMPORTED_MODULE_1__["RosaryMysteriesEnum"][this.selectedMysteryId]);
        }
    }
    onMysterySelected(selectedMystery) {
        this.selectedBeadGroupList = this.beadGroupLoader.loadHolyRosaryContemporaryMysteryEnum(selectedMystery);
    }
    get showMysterySelector() {
        return this.selectedBeadGroupList === undefined;
    }
    onResetEvent(flag) {
        this.selectedBeadGroupList = undefined;
        this.liturgicalYear.overrideLiturgicalColor = undefined;
    }
    onEnableNavigation(flag) {
        console.log(`home: ${flag}`);
        this.navigationEnabled = flag;
    }
    onNext() {
        console.log('home - window.navigator.vibrate([1000, 100, 250]);');
        this.activePrayer.onNext();
        // navigator.vibrate([1000, 100, 250]);
        window.navigator.vibrate([1000, 100, 250]);
    }
    onPrevious() {
        console.log('home - window.navigator.vibrate([250, 250, 250]);');
        this.activePrayer.onPrevious();
        // navigator.vibrate([250, 250, 250]);
        window.navigator.vibrate([250, 250, 250]);
    }
    onSwipe(event) {
        if (Hammer.DIRECTION_LEFT === (event === null || event === void 0 ? void 0 : event.direction)) {
            this.onNext();
        }
        else if (Hammer.DIRECTION_RIGHT === (event === null || event === void 0 ? void 0 : event.direction)) {
            this.onPrevious();
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bead_group_loader_service__WEBPACK_IMPORTED_MODULE_3__["BeadGroupLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__["AppConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_liturgical_year_service__WEBPACK_IMPORTED_MODULE_5__["LiturgicalYearService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_active_prayer_active_prayer_component__WEBPACK_IMPORTED_MODULE_2__["ActivePrayerComponent"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.activePrayer = _t.first);
    } }, inputs: { selectedMysteryId: "selectedMysteryId" }, decls: 3, vars: 2, consts: [["id", "home-content-border", 3, "swipe"], [4, "ngIf"], [3, "selectedMysteryEvent"], [3, "activeBeadGroupList", "onResetEvent", "onEnableNavigationEvent"], ["id", "nav-footer", 4, "ngIf"], ["id", "nav-footer"], [3, "onNextClickEvent", "onPreviousClickEvent"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("swipe", function HomeComponent_Template_div_swipe_0_listener($event) { return ctx.onSwipe($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_1_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_ng_container_2_Template, 3, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMysterySelector);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showMysterySelector);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _mystery_selector_mystery_selector_component__WEBPACK_IMPORTED_MODULE_7__["MysterySelectorComponent"], _notices_notices_component__WEBPACK_IMPORTED_MODULE_8__["NoticesComponent"], _active_prayer_active_prayer_component__WEBPACK_IMPORTED_MODULE_2__["ActivePrayerComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _services_bead_group_loader_service__WEBPACK_IMPORTED_MODULE_3__["BeadGroupLoaderService"] }, { type: _services_app_config_service__WEBPACK_IMPORTED_MODULE_4__["AppConfigService"] }, { type: src_app_services_liturgical_year_service__WEBPACK_IMPORTED_MODULE_5__["LiturgicalYearService"] }]; }, { selectedMysteryId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], activePrayer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_active_prayer_active_prayer_component__WEBPACK_IMPORTED_MODULE_2__["ActivePrayerComponent"]]
        }] }); })();


/***/ }),

/***/ "COt9":
/*!*******************************************!*\
  !*** ./src/app/models/bead-group-list.ts ***!
  \*******************************************/
/*! exports provided: BeadGroupList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeadGroupList", function() { return BeadGroupList; });
/* harmony import */ var _mysteries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mysteries */ "qcAC");

class BeadGroupList {
    constructor(prayerName, beadContainer, mysteries) {
        this.prayerName = prayerName;
        this.beadContainer = beadContainer;
        this.debugTheEnd = false;
        this.skipNext = false;
        this.beadIdxOverrideOccurred = false;
        this.currentBeadGroup = undefined;
        this.beadGroups = beadContainer.beadGroups;
        this.beadGroupIdx = -1;
        this.activeMysteries = mysteries;
        this.activeMysteriesIdx = 0;
    }
    debugHasBeadIdxOverrideOccurred(resetOverrideFlag = true) {
        const result = this.beadIdxOverrideOccurred;
        if (resetOverrideFlag) {
            this.beadIdxOverrideOccurred = false;
        }
        return result;
    }
    debugWriteSequenceIds() {
        if (this.beadGroups) {
            this.beadGroups.forEach(beadGroup => console.log(`seqId: ${beadGroup.sequenceId}, mysteryIdx: ${beadGroup.mysteryIdx}, beadIdx: ${beadGroup.beadGroupIndex}`));
        }
    }
    debugSetIndices(sequenceId) {
        const redirectBeadInfo = this.beadContainer.beadMap[sequenceId];
        if (redirectBeadInfo) {
            this.currentBeadGroup = redirectBeadInfo;
            this.activeMysteriesIdx = redirectBeadInfo.mysteryIdx;
            this.beadGroupIdx = redirectBeadInfo.beadGroupIndex;
            this.skipNext = true;
            this.beadIdxOverrideOccurred = true;
            console.log('debugTheEnd set to false');
            this.debugTheEnd = false;
        }
        else if (sequenceId === 'end') {
            console.log('debugTheEnd set to true');
            this.debugTheEnd = true;
        }
    }
    get isPrayerSequenceDone() {
        return this.beadGroupIdx >= this.beadGroups.length;
    }
    current() {
        return this.currentBeadGroup;
    }
    next() {
        if (this.skipNext) {
            this.skipNext = false;
            return this.currentBeadGroup;
        }
        if (this.isCurrentBeadGroupDone()) {
            this.beadGroupIdx++;
            if (this.beadGroupIdx >= this.beadGroups.length) {
                return undefined;
            }
            this.currentBeadGroup = this.beadGroups[this.beadGroupIdx];
            this.currentBeadGroup.resetBeadIndex();
            if (this.currentBeadGroup.sequence.startsWith('mystery') || this.currentBeadGroup.incrementMysteryIdx) {
                this.activeMysteriesIdx++;
            }
        }
        else {
            this.currentBeadGroup.next();
        }
        return this.currentBeadGroup;
    }
    previous() {
        if (this.currentBeadGroup.index > 0) {
            this.currentBeadGroup.previous();
        }
        else if (this.beadGroupIdx > 0) {
            const lastWasMystery = this.currentBeadGroup.sequence.startsWith('mystery') || this.currentBeadGroup.incrementMysteryIdx;
            this.beadGroupIdx--;
            this.currentBeadGroup = this.beadGroups[this.beadGroupIdx];
            this.currentBeadGroup.resetBeadIndexToEnd();
            if (lastWasMystery) {
                this.activeMysteriesIdx--;
            }
        }
        return this.currentBeadGroup;
    }
    mysterySequenceName() {
        return this.activeMysteries.mysterySequenceName;
    }
    mysteryNumber() {
        return this.activeMysteriesIdx;
    }
    mystery() {
        return Object(_mysteries__WEBPACK_IMPORTED_MODULE_0__["mysteryByNumber"])(this.activeMysteries, this.activeMysteriesIdx);
    }
    fruit() {
        return Object(_mysteries__WEBPACK_IMPORTED_MODULE_0__["fruitByNumber"])(this.activeMysteries, this.activeMysteriesIdx);
    }
    toConsole() {
        console.log('------- Bead group - start -------');
        this.beadGroups.forEach(entry => {
            console.log(`${JSON.stringify(entry)}`);
        });
        console.log('-------- Bead group - end --------');
    }
    isCurrentBeadGroupDone() {
        return this.currentBeadGroup === undefined || this.currentBeadGroup === null
            || this.beadGroupIdx < 0 || this.currentBeadGroup.isBeadGroupDone();
    }
}


/***/ }),

/***/ "DZO2":
/*!*****************************************************************!*\
  !*** ./src/app/components/testing/layouts/layouts.component.ts ***!
  \*****************************************************************/
/*! exports provided: LayoutsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutsComponent", function() { return LayoutsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_bead_group_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/bead-group-loader.service */ "ivI1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../home/home.component */ "BuFo");





class LayoutsComponent {
    // selectedBeadGroupList: BeadGroupList;
    // debugTheEnd: boolean;
    // @ViewChild(ActivePrayerComponent)
    // activePrayer: ActivePrayerComponent;
    constructor(beadGroupLoader, activateRoute) {
        this.beadGroupLoader = beadGroupLoader;
        this.activateRoute = activateRoute;
    }
    ngOnInit() {
        // this.selectedBeadGroupList = this.beadGroupLoader.loadHolyRosaryContemporaryMysteryEnum(RosaryMysteriesEnum.GLORIOUS);
        // this.activateRoute.queryParams.subscribe(params => {
        //   if (('list' in params)) {
        //     this.selectedBeadGroupList.debugWriteSequenceIds();
        //   }
        //   else {
        //     console.log('Received message');
        //     const sequenceId = params['seqId'];
        //     console.log(`setting rosary to ${sequenceId}`);
        //     this.selectedBeadGroupList.debugSetIndices(sequenceId);
        //     this.debugTheEnd = (sequenceId === 'end');
        //     console.log(`LayoutsComponent - debugTheEnd: ${this.debugTheEnd}`);
        //   }
        // })
    }
}
LayoutsComponent.ɵfac = function LayoutsComponent_Factory(t) { return new (t || LayoutsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_bead_group_loader_service__WEBPACK_IMPORTED_MODULE_1__["BeadGroupLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
LayoutsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutsComponent, selectors: [["app-layouts"]], decls: 1, vars: 0, consts: [["selectedMysteryId", "GLORIOUS"]], template: function LayoutsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home", 0);
    } }, directives: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXlvdXRzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-layouts',
                templateUrl: './layouts.component.html',
                styleUrls: ['./layouts.component.scss']
            }]
    }], function () { return [{ type: src_app_services_bead_group_loader_service__WEBPACK_IMPORTED_MODULE_1__["BeadGroupLoaderService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "Gl89":
/*!*********************************************!*\
  !*** ./src/utils/dates-advent-christmas.ts ***!
  \*********************************************/
/*! exports provided: refreshNeeded, calculateAdventAndChristmas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refreshNeeded", function() { return refreshNeeded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateAdventAndChristmas", function() { return calculateAdventAndChristmas; });
/* harmony import */ var src_app_models_liturgical_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/liturgical-colors */ "72Gp");
/* harmony import */ var src_app_models_liturgical_dates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/liturgical-dates */ "t1Hb");
/* harmony import */ var _key_dates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./key-dates */ "rOcc");



function refreshNeeded(period, appDate) {
    const hasStart = (period === null || period === void 0 ? void 0 : period.startDate) !== undefined;
    const hasEnd = (period === null || period === void 0 ? void 0 : period.endDate) !== undefined;
    if (!hasStart && !hasEnd) {
        return src_app_models_liturgical_dates__WEBPACK_IMPORTED_MODULE_1__["PeriodStatus"].MISSING;
    }
    return (hasEnd && period.endDate > appDate.date) || (!hasEnd && period.startDate > appDate.date)
        ? src_app_models_liturgical_dates__WEBPACK_IMPORTED_MODULE_1__["PeriodStatus"].INCREMENT_YEAR
        : src_app_models_liturgical_dates__WEBPACK_IMPORTED_MODULE_1__["PeriodStatus"].GOOD;
}
function calculateAdventAndChristmas(appDate, localization) {
    const nextChristmasDay = calculateNextChristmas(appDate, localization);
    const adventYear = nextChristmasDay.startDate.getFullYear();
    const dowChristmasDay = nextChristmasDay.startDate.getDay();
    const sundayBeforeChristmas = (dowChristmasDay === 0) ? 7 : dowChristmasDay;
    const adventStartsDaysBack = nextChristmasDay.startDate.getDate() - 21 - sundayBeforeChristmas;
    const adventStarts = (adventStartsDaysBack >= 1)
        ? new Date(adventYear, _key_dates__WEBPACK_IMPORTED_MODULE_2__["Months"].DEC, adventStartsDaysBack)
        : new Date(adventYear, _key_dates__WEBPACK_IMPORTED_MODULE_2__["Months"].NOV, adventStartsDaysBack + 30);
    return {
        christmas: nextChristmasDay,
        advent: {
            startDate: adventStarts,
            endDate: new Date(adventYear, _key_dates__WEBPACK_IMPORTED_MODULE_2__["Months"].DEC, 24),
            name: localization.adventLabel,
            color: src_app_models_liturgical_colors__WEBPACK_IMPORTED_MODULE_0__["LiturgicalColors"].VIOLET
        }
    };
}
function calculateNextChristmas(appDate, localization) {
    let christmasDay = new Date(appDate.currentYear, _key_dates__WEBPACK_IMPORTED_MODULE_2__["Months"].DEC, 25);
    if (appDate.date > christmasDay) {
        christmasDay = new Date(appDate.currentYear + 1, _key_dates__WEBPACK_IMPORTED_MODULE_2__["Months"].DEC, 25);
    }
    const endOfChristmas = calculateEndOfChristmasSeason(christmasDay);
    return {
        startDate: christmasDay,
        endDate: endOfChristmas,
        name: localization.christmasLabel,
        color: src_app_models_liturgical_colors__WEBPACK_IMPORTED_MODULE_0__["LiturgicalColors"].WHITE
    };
}
function calculateEndOfChristmasSeason(christmasDay) {
    // TODO: Less certain about how end of Christmas season is determined
    const jan6 = new Date(christmasDay.getFullYear() + 1, _key_dates__WEBPACK_IMPORTED_MODULE_2__["Months"].JAN, 6);
    const daysInFuture = 7 - jan6.getDay();
    return Object(_key_dates__WEBPACK_IMPORTED_MODULE_2__["addDays"])(jan6, daysInFuture);
}


/***/ }),

/***/ "JvtB":
/*!************************************************!*\
  !*** ./src/app/services/app-config.service.ts ***!
  \************************************************/
/*! exports provided: AppConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfigService", function() { return AppConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_date_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-date.service */ "tdVI");
/* harmony import */ var _localization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localization.service */ "c2Te");




class AppConfigService {
    constructor(appDate, localization) {
        this.appDate = appDate;
        this.localization = localization;
    }
}
AppConfigService.ɵfac = function AppConfigService_Factory(t) { return new (t || AppConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_date_service__WEBPACK_IMPORTED_MODULE_1__["AppDateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_localization_service__WEBPACK_IMPORTED_MODULE_2__["LocalizationService"])); };
AppConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppConfigService, factory: AppConfigService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _app_date_service__WEBPACK_IMPORTED_MODULE_1__["AppDateService"] }, { type: _localization_service__WEBPACK_IMPORTED_MODULE_2__["LocalizationService"] }]; }, null); })();


/***/ }),

/***/ "K4TB":
/*!*********************************************************************!*\
  !*** ./src/app/components/active-prayer/active-prayer.component.ts ***!
  \*********************************************************************/
/*! exports provided: ActivePrayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivePrayerComponent", function() { return ActivePrayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _holy_rosary_prayer_holy_rosary_prayer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../holy-rosary-prayer/holy-rosary-prayer.component */ "+dEH");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ "2MiI");





class ActivePrayerComponent {
    constructor() {
        this.onResetEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onEnableNavigationEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.prayerName = this.activeBeadGroupList.prayerName;
        this.prayerName = this.prayerName[0].toUpperCase() + this.prayerName.substring(1);
        console.log(`prayerName: ${this.prayerName}`);
    }
    ngAfterViewInit() {
        this.holyRosaryPrayer.debugTheEnd = this.debugTheEnd;
    }
    get isPrayerSequenceDone() {
        return this.activeBeadGroupList.isPrayerSequenceDone;
    }
    onNext() {
        console.log('active-prayer next');
        this.holyRosaryPrayer.onNext();
    }
    onPrevious() {
        console.log('active-prayer prev');
        this.holyRosaryPrayer.onPrevious();
    }
    onStartNew() {
        this.onResetEvent.emit(true);
    }
    onEnableNavigation(flag) {
        console.log(`active prayer nav flag: ${flag}`);
        this.onEnableNavigationEvent.emit(flag);
    }
}
ActivePrayerComponent.ɵfac = function ActivePrayerComponent_Factory(t) { return new (t || ActivePrayerComponent)(); };
ActivePrayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActivePrayerComponent, selectors: [["app-active-prayer"]], viewQuery: function ActivePrayerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_holy_rosary_prayer_holy_rosary_prayer_component__WEBPACK_IMPORTED_MODULE_1__["HolyRosaryPrayerComponent"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.holyRosaryPrayer = _t.first);
    } }, inputs: { activeBeadGroupList: "activeBeadGroupList", debugTheEnd: "debugTheEnd" }, outputs: { onResetEvent: "onResetEvent", onEnableNavigationEvent: "onEnableNavigationEvent" }, decls: 5, vars: 5, consts: [["id", "active-prayer-section-container"], [1, "app-header-div"], [3, "prayerName", "isPrayerSequenceDone", "onResetEvent", "onEnableNavigationEvent"], [3, "activeBeadGroupList", "prayerName", "debugTheEnd"]], template: function ActivePrayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onResetEvent", function ActivePrayerComponent_Template_app_header_onResetEvent_2_listener() { return ctx.onStartNew(); })("onEnableNavigationEvent", function ActivePrayerComponent_Template_app_header_onEnableNavigationEvent_2_listener($event) { return ctx.onEnableNavigation($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-holy-rosary-prayer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("prayerName", ctx.prayerName)("isPrayerSequenceDone", ctx.isPrayerSequenceDone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeBeadGroupList", ctx.activeBeadGroupList)("prayerName", ctx.prayerName)("debugTheEnd", ctx.debugTheEnd);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _holy_rosary_prayer_holy_rosary_prayer_component__WEBPACK_IMPORTED_MODULE_1__["HolyRosaryPrayerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3RpdmUtcHJheWVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActivePrayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-active-prayer',
                templateUrl: './active-prayer.component.html',
                styleUrls: ['./active-prayer.component.scss']
            }]
    }], function () { return []; }, { activeBeadGroupList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], debugTheEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onResetEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onEnableNavigationEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], holyRosaryPrayer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_holy_rosary_prayer_holy_rosary_prayer_component__WEBPACK_IMPORTED_MODULE_1__["HolyRosaryPrayerComponent"]]
        }] }); })();


/***/ }),

/***/ "Kn0e":
/*!*****************************************************************************!*\
  !*** ./src/app/components/testing/buzz-feedback/buzz-feedback.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BuzzFeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuzzFeedbackComponent", function() { return BuzzFeedbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class BuzzFeedbackComponent {
    constructor() {
        this.fg = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            time: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](200)
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        console.log(`onSubmit 1: ${JSON.stringify(this.fg.value)}`);
        const value = this.fg.controls['time'].value;
        console.log(`onSubmit 2: ${value}`);
        window.navigator.vibrate(value);
    }
    onReset() {
        console.log(`onReset: ${JSON.stringify(this.fg.value)}`);
    }
}
BuzzFeedbackComponent.ɵfac = function BuzzFeedbackComponent_Factory(t) { return new (t || BuzzFeedbackComponent)(); };
BuzzFeedbackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BuzzFeedbackComponent, selectors: [["app-buzz-feedback"]], decls: 8, vars: 1, consts: [[3, "formGroup", "ngSubmit"], ["for", "time"], ["type", "text", "formControlName", "time"], ["type", "submit"], ["type", "reset", 3, "click"]], template: function BuzzFeedbackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function BuzzFeedbackComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Time (ms)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuzzFeedbackComponent_Template_button_click_6_listener() { return ctx.onReset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.fg);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["label[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1enotZmVlZGJhY2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0oiLCJmaWxlIjoiYnV6ei1mZWVkYmFjay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcbiAgICBjb2xvcjogd2hpdGU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuzzFeedbackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-buzz-feedback',
                templateUrl: './buzz-feedback.component.html',
                styleUrls: ['./buzz-feedback.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "MKlP":
/*!***************************************************************************!*\
  !*** ./src/app/components/mystery-selector/mystery-selector.component.ts ***!
  \***************************************************************************/
/*! exports provided: MYSTERY_LABEL_MAP, MysterySelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MYSTERY_LABEL_MAP", function() { return MYSTERY_LABEL_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MysterySelectorComponent", function() { return MysterySelectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_sequences_rosary_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sequences/rosary-helper */ "hwcc");



const SUN = 0;
const MON = 1;
const TUE = 2;
const WED = 3;
const THU = 4;
const FRI = 5;
const SAT = 6;
const MYSTERY_LABEL_MAP = new Map();
const HIGHLIGHT_MYSTERY_OF_DAY = 'highlight-mystery-of-day';
class MysterySelectorComponent {
    constructor() {
        this.selectedMysteryEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        if (MYSTERY_LABEL_MAP.size === 0) {
            MYSTERY_LABEL_MAP[src_app_sequences_rosary_helper__WEBPACK_IMPORTED_MODULE_1__["RosaryMysteriesEnum"].GLORIOUS] = this.gloriousMystery;
            MYSTERY_LABEL_MAP[src_app_sequences_rosary_helper__WEBPACK_IMPORTED_MODULE_1__["RosaryMysteriesEnum"].JOYFUL] = this.joyfulMystery;
            MYSTERY_LABEL_MAP[src_app_sequences_rosary_helper__WEBPACK_IMPORTED_MODULE_1__["RosaryMysteriesEnum"].LUMINOUS] = this.luminousMystery;
            MYSTERY_LABEL_MAP[src_app_sequences_rosary_helper__WEBPACK_IMPORTED_MODULE_1__["RosaryMysteriesEnum"].SORROWFUL] = this.sorrowfulMystery;
        }
        this.dayOfWeek = (new Date()).getDay();
        this.mysteryOfTheDay = this.getMysteryOfTheDay();
        this.mysteryOfTheDayLabel = MYSTERY_LABEL_MAP[this.mysteryOfTheDay];
    }
    ngOnInit() { }
    get gloriousMystery() {
        return $localize `:@@glorious:Glorious`;
    }
    get joyfulMystery() {
        return $localize `:@@joyful:Joyful`;
    }
    get luminousMystery() {
        return $localize `:@@luminous:Luminous`;
    }
    get sorrowfulMystery() {
        return $localize `:@@sorrowful:Sorrowful`;
    }
    get isGlorious() {
        return (this.getMysteryOfTheDay() === src_app_sequences_rosary_helper__WEBPACK_IMPORTED_MODULE_1__["RosaryMysteriesEnum"].GLORIOUS)
            ? HIGHLIGHT_MYSTERY_OF_DAY : '';
    }
    get isJoyful() {
        return (this.getMysteryOfTheDay() === src_app_sequences_rosary_helper__WEBPACK_IMPORTED_MODULE_1__["RosaryMysteriesEnum"].JOYFUL)
            ? HIGHLIGHT_MYSTERY_OF_DAY : '';
    }
    get isLuminous() {
        return (this.getMysteryOfTheDay() === src_app_sequences_rosary_helper__WEBPACK_IMPORTED_MODULE_1__["RosaryMysteriesEnum"].LUMINOUS)
            ? HIGHLIGHT_MYSTERY_OF_DAY : '';
    }
    get isSorrowful() {
        return (this.getMysteryOfTheDay() === src_app_sequences_rosary_helper__WEBPACK_IMPORTED_MODULE_1__["RosaryMysteriesEnum"].SORROWFUL)
            ? HIGHLIGHT_MYSTERY_OF_DAY : '';
    }
    getMysteryOfTheDay() {
        if (this.dayOfWeek === SUN || this.dayOfWeek === WED) {
            return src_app_sequences_rosary_helper__WEBPACK_IMPORTED_MODULE_1__["RosaryMysteriesEnum"].GLORIOUS;
        }
        else if (this.dayOfWeek === MON || this.dayOfWeek === SAT) {
            return src_app_sequences_rosary_helper__WEBPACK_IMPORTED_MODULE_1__["RosaryMysteriesEnum"].JOYFUL;
        }
        else if (this.dayOfWeek === TUE || this.dayOfWeek === FRI) {
            return src_app_sequences_rosary_helper__WEBPACK_IMPORTED_MODULE_1__["RosaryMysteriesEnum"].SORROWFUL;
        }
        return src_app_sequences_rosary_helper__WEBPACK_IMPORTED_MODULE_1__["RosaryMysteriesEnum"].LUMINOUS;
    }
    selectByDay() {
        if (this.mysteryOfTheDay === src_app_sequences_rosary_helper__WEBPACK_IMPORTED_MODULE_1__["RosaryMysteriesEnum"].GLORIOUS) {
            this.selectGlorious();
        }
        else if (this.mysteryOfTheDay === src_app_sequences_rosary_helper__WEBPACK_IMPORTED_MODULE_1__["RosaryMysteriesEnum"].JOYFUL) {
            this.selectJoyful();
        }
        else if (this.mysteryOfTheDay === src_app_sequences_rosary_helper__WEBPACK_IMPORTED_MODULE_1__["RosaryMysteriesEnum"].SORROWFUL) {
            this.selectSorrowful();
        }
        else {
            this.selectLuminous();
        }
    }
    selectGlorious() {
        console.log(`selectGlorious`);
        this.selectedMysteryEvent.emit(src_app_sequences_rosary_helper__WEBPACK_IMPORTED_MODULE_1__["RosaryMysteriesEnum"].GLORIOUS);
    }
    selectJoyful() {
        console.log(`selectJoyful`);
        this.selectedMysteryEvent.emit(src_app_sequences_rosary_helper__WEBPACK_IMPORTED_MODULE_1__["RosaryMysteriesEnum"].JOYFUL);
    }
    selectLuminous() {
        console.log(`selectLuminous`);
        this.selectedMysteryEvent.emit(src_app_sequences_rosary_helper__WEBPACK_IMPORTED_MODULE_1__["RosaryMysteriesEnum"].LUMINOUS);
    }
    selectSorrowful() {
        console.log(`selectSorrowful`);
        this.selectedMysteryEvent.emit(src_app_sequences_rosary_helper__WEBPACK_IMPORTED_MODULE_1__["RosaryMysteriesEnum"].SORROWFUL);
    }
}
MysterySelectorComponent.ɵfac = function MysterySelectorComponent_Factory(t) { return new (t || MysterySelectorComponent)(); };
MysterySelectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MysterySelectorComponent, selectors: [["app-mystery-selector"]], outputs: { selectedMysteryEvent: "selectedMysteryEvent" }, decls: 20, vars: 12, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7300978048101236463$$SRC_APP_COMPONENTS_MYSTERY_SELECTOR_MYSTERY_SELECTOR_COMPONENT_TS_1 = goog.getMsg("Select the desired Mystery:");
        i18n_0 = MSG_EXTERNAL_7300978048101236463$$SRC_APP_COMPONENTS_MYSTERY_SELECTOR_MYSTERY_SELECTOR_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟40acf9c3b3d2ff26290656991b8c86617013c54e␟7300978048101236463:Select the desired Mystery:`;
    } return [[1, "content-border"], [1, "section-title"], i18n_0, [1, "button-row"], [1, "button-cell"], [3, "click"]]; }, template: function MysterySelectorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MysterySelectorComponent_Template_button_click_5_listener() { return ctx.selectGlorious(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MysterySelectorComponent_Template_button_click_9_listener() { return ctx.selectJoyful(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MysterySelectorComponent_Template_button_click_13_listener() { return ctx.selectLuminous(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MysterySelectorComponent_Template_button_click_17_listener() { return ctx.selectSorrowful(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isGlorious);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.gloriousMystery);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isJoyful);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.joyfulMystery);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isLuminous);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.luminousMystery);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isSorrowful);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sorrowfulMystery);
    } }, styles: ["@media (orientation: landscape) {\n  .button-row[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n  }\n\n  .button-cell[_ngcontent-%COMP%] {\n    width: 24%;\n  }\n\n  .button-cell[_ngcontent-%COMP%] {\n    padding: 1vh;\n  }\n}\n@media (orientation: portrait) {\n  .button-row[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .button-cell[_ngcontent-%COMP%] {\n    width: 97%;\n  }\n\n  .button-cell[_ngcontent-%COMP%] {\n    padding: 0.3vh;\n  }\n}\nbutton[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.highlight-mystery-of-day[_ngcontent-%COMP%] {\n  background-color: yellow;\n  border-width: 2px;\n  color: darkblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL215c3Rlcnktc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMtc2hhcmVkLW1peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsbUJBQUE7RUFERjs7RUFJQTtJQUNFLFVBQUE7RUFERjs7RUFJQTtJQUNFLFlDTk07RURLUjtBQUNGO0FBSUE7RUFDRTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtFQUZGOztFQUtBO0lBQ0UsVUFBQTtFQUZGOztFQUtBO0lBQ0UsY0NwQlk7RURrQmQ7QUFDRjtBQUtBO0VBQ0UsV0FBQTtBQUhGO0FBTUE7RUFDRSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUhGIiwiZmlsZSI6Im15c3Rlcnktc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMtc2hhcmVkLW1peGlucy5zY3NzJztcclxuXHJcbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gIC5idXR0b24tcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbi1jZWxsIHtcclxuICAgIHdpZHRoOiAyNCU7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uLWNlbGwge1xyXG4gICAgcGFkZGluZzogJHBhZGRpbmc7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gIC5idXR0b24tcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbi1jZWxsIHtcclxuICAgIHdpZHRoOiA5NyU7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uLWNlbGwge1xyXG4gICAgcGFkZGluZzogJHBhZGRpbmctcGhvbmU7XHJcbiAgfVxyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaGlnaGxpZ2h0LW15c3Rlcnktb2YtZGF5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgY29sb3I6IGRhcmtibHVlO1xyXG59XHJcbiIsIiRmb250bmFtZTogQ29uc29sYTtcclxuJGZvbnQtc2l6ZS1iYXNlOiAydnc7XHJcbiRmb250LXNpemUtYmFzZS1waG9uZTogNXZ3O1xyXG5cclxuJG1hcmdpbnM6IDF2aDtcclxuJG5hdi1sYW5kc2NhcGUtbWFyZ2luOiAzdmg7XHJcblxyXG4kcGFkZGluZzogMXZoO1xyXG4kcGFkZGluZy1waG9uZTogMC4zdmg7XHJcblxyXG4kYm9yZGVyOiAxcHggZGFzaGVkIGJsYWNrO1xyXG4kYm9yZGVyLXJhZGl1czogMS41dmg7XHJcblxyXG4kaW5wdXQtbWFyZ2luLWJvdHRvbTogMXZoO1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MysterySelectorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mystery-selector',
                templateUrl: './mystery-selector.component.html',
                styleUrls: ['./mystery-selector.component.scss']
            }]
    }], function () { return []; }, { selectedMysteryEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "N8x+":
/*!*****************************************************!*\
  !*** ./src/app/services/liturgical-year.service.ts ***!
  \*****************************************************/
/*! exports provided: LiturgicalYearService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiturgicalYearService", function() { return LiturgicalYearService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_utils_dates_advent_christmas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/utils/dates-advent-christmas */ "Gl89");
/* harmony import */ var src_utils_dates_lent_easter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/utils/dates-lent-easter */ "tV7K");
/* harmony import */ var src_utils_key_dates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/utils/key-dates */ "rOcc");
/* harmony import */ var _models_liturgical_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/liturgical-colors */ "72Gp");
/* harmony import */ var _models_liturgical_dates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/liturgical-dates */ "t1Hb");
/* harmony import */ var _app_date_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-date.service */ "tdVI");
/* harmony import */ var _localization_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./localization.service */ "c2Te");









class LiturgicalYearService {
    constructor(appDate, localization) {
        this.appDate = appDate;
        this.localization = localization;
        this.validateDates();
    }
    liturgicalColor() {
        if (this.overrideLiturgicalColor) {
            return this.overrideLiturgicalColor;
        }
        if ((this.dateInRange(this.liturgicalDates.triduum)
            || this.appDate.date === this.palmSunday
            || this.appDate.date === this.pentacostSunday)
            && this.appDate.date !== this.liturgicalDates.easter.startDate) {
            return _models_liturgical_colors__WEBPACK_IMPORTED_MODULE_4__["LiturgicalColors"].RED;
        }
        else if (this.appDate.date === this.adventSunday3
            || this.appDate.date === this.lentSunday4) {
            return _models_liturgical_colors__WEBPACK_IMPORTED_MODULE_4__["LiturgicalColors"].ROSE;
        }
        else if (this.dateInRange(this.liturgicalDates.christmas)
            || this.dateInRange(this.liturgicalDates.easter)
            || this.appDate.date === this.allSaintsDay) {
            return _models_liturgical_colors__WEBPACK_IMPORTED_MODULE_4__["LiturgicalColors"].WHITE;
        }
        else if (this.dateInRange(this.liturgicalDates.advent)
            || this.dateInRange(this.liturgicalDates.lent)) {
            return _models_liturgical_colors__WEBPACK_IMPORTED_MODULE_4__["LiturgicalColors"].VIOLET;
        }
        return _models_liturgical_colors__WEBPACK_IMPORTED_MODULE_4__["LiturgicalColors"].GREEN;
    }
    validateDates() {
        let rawDates = window.localStorage.getItem('rosary.liturgical-dates');
        try {
            if (rawDates) {
                this.liturgicalDates = JSON.parse(rawDates);
            }
        }
        catch (error) {
            this.liturgicalDates = undefined;
        }
        this.refreshLiturgicalDates();
        this.allSaintsDay = new Date(this.appDate.currentYear, src_utils_key_dates__WEBPACK_IMPORTED_MODULE_3__["Months"].NOV, 1);
        this.pentacostSunday = this.liturgicalDates.easter.endDate;
        let workingDate = new Date(this.liturgicalDates.advent.startDate);
        workingDate.setDate(workingDate.getDate() + 14);
        this.adventSunday3 = workingDate;
        workingDate = new Date(this.liturgicalDates.lent.startDate);
        workingDate.setDate(workingDate.getDate() + 25);
        this.lentSunday4 = workingDate;
        workingDate = new Date(this.liturgicalDates.easter.startDate);
        workingDate.setDate(workingDate.getDate() - 7);
        this.palmSunday = workingDate;
    }
    dateInRange(period) {
        return period.startDate <= this.appDate.date && this.appDate.date <= period.endDate;
    }
    refreshLiturgicalDates() {
        let workingCopy = new _models_liturgical_dates__WEBPACK_IMPORTED_MODULE_5__["LiturgicalDates"](this.liturgicalDates);
        this.refreshAdventAndChristmas(workingCopy);
        this.refreshLentAndEaster(workingCopy);
        this.liturgicalDates = workingCopy;
    }
    refreshAdventAndChristmas(workingCopy) {
        const adventStatus = Object(src_utils_dates_advent_christmas__WEBPACK_IMPORTED_MODULE_1__["refreshNeeded"])(workingCopy === null || workingCopy === void 0 ? void 0 : workingCopy.advent, this.appDate);
        const christmasStatus = Object(src_utils_dates_advent_christmas__WEBPACK_IMPORTED_MODULE_1__["refreshNeeded"])(workingCopy === null || workingCopy === void 0 ? void 0 : workingCopy.christmas, this.appDate);
        if (_models_liturgical_dates__WEBPACK_IMPORTED_MODULE_5__["PeriodStatus"].GOOD !== adventStatus || _models_liturgical_dates__WEBPACK_IMPORTED_MODULE_5__["PeriodStatus"].GOOD !== christmasStatus) {
            const updatedAdventChristmas = Object(src_utils_dates_advent_christmas__WEBPACK_IMPORTED_MODULE_1__["calculateAdventAndChristmas"])(this.appDate, this.localization);
            workingCopy.christmas = updatedAdventChristmas.christmas;
            workingCopy.advent = updatedAdventChristmas.advent;
        }
    }
    refreshLentAndEaster(workingCopy) {
        const lentStatus = Object(src_utils_dates_advent_christmas__WEBPACK_IMPORTED_MODULE_1__["refreshNeeded"])(workingCopy === null || workingCopy === void 0 ? void 0 : workingCopy.lent, this.appDate);
        const triduumStatus = Object(src_utils_dates_advent_christmas__WEBPACK_IMPORTED_MODULE_1__["refreshNeeded"])(workingCopy === null || workingCopy === void 0 ? void 0 : workingCopy.triduum, this.appDate);
        const easterStatus = Object(src_utils_dates_advent_christmas__WEBPACK_IMPORTED_MODULE_1__["refreshNeeded"])(workingCopy === null || workingCopy === void 0 ? void 0 : workingCopy.easter, this.appDate);
        if (_models_liturgical_dates__WEBPACK_IMPORTED_MODULE_5__["PeriodStatus"].GOOD !== lentStatus || _models_liturgical_dates__WEBPACK_IMPORTED_MODULE_5__["PeriodStatus"].GOOD !== triduumStatus || _models_liturgical_dates__WEBPACK_IMPORTED_MODULE_5__["PeriodStatus"].GOOD !== easterStatus) {
            const updatedLentEaster = Object(src_utils_dates_lent_easter__WEBPACK_IMPORTED_MODULE_2__["calculateLentAndEaster"])(this.appDate, this.localization);
            workingCopy.lent = updatedLentEaster.lent;
            workingCopy.easter = updatedLentEaster.easter;
            workingCopy.triduum = updatedLentEaster.triduum;
        }
    }
}
LiturgicalYearService.ɵfac = function LiturgicalYearService_Factory(t) { return new (t || LiturgicalYearService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_date_service__WEBPACK_IMPORTED_MODULE_6__["AppDateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_localization_service__WEBPACK_IMPORTED_MODULE_7__["LocalizationService"])); };
LiturgicalYearService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LiturgicalYearService, factory: LiturgicalYearService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LiturgicalYearService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _app_date_service__WEBPACK_IMPORTED_MODULE_6__["AppDateService"] }, { type: _localization_service__WEBPACK_IMPORTED_MODULE_7__["LocalizationService"] }]; }, null); })();


/***/ }),

/***/ "S4vp":
/*!************************************************************!*\
  !*** ./src/app/components/pats-beads/pats-beads-coords.ts ***!
  \************************************************************/
/*! exports provided: PATS_BEADS_COORDS_LONG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PATS_BEADS_COORDS_LONG", function() { return PATS_BEADS_COORDS_LONG; });
const PATS_BEADS_COORDS_LONG = [
    { x: 853, y: 3454 },
    { x: 948, y: 3208 },
    { x: 948, y: 3208 },
    { x: 1051, y: 2992 },
    { x: 1033, y: 2902 },
    { x: 988, y: 2830 },
    { x: 815, y: 2646 },
    { x: 815, y: 2646 },
    { x: 805, y: 2368 },
    { x: 949, y: 2170 },
    { x: 1015, y: 2091 },
    { x: 1060, y: 2012 },
    { x: 1105, y: 1933 },
    { x: 1141, y: 1841 },
    { x: 1169, y: 1761 },
    { x: 1228, y: 1673 },
    { x: 1305, y: 1604 },
    { x: 1339, y: 1533 },
    { x: 1353, y: 1442 },
    { x: 1458, y: 1249 },
    { x: 1458, y: 1249 },
    { x: 1458, y: 1249 },
    { x: 1458, y: 1249 },
    { x: 1425, y: 1018 },
    { x: 1430, y: 924 },
    { x: 1458, y: 836 },
    { x: 1458, y: 765 },
    { x: 1447, y: 682 },
    { x: 1441, y: 600 },
    { x: 1425, y: 512 },
    { x: 1370, y: 429 },
    { x: 1287, y: 407 },
    { x: 1199, y: 396 },
    { x: 1045, y: 495 },
    { x: 1045, y: 495 },
    { x: 1045, y: 495 },
    { x: 1045, y: 495 },
    { x: 820, y: 479 },
    { x: 771, y: 400 },
    { x: 723, y: 324 },
    { x: 693, y: 238 },
    { x: 705, y: 144 },
    { x: 658, y: 103 },
    { x: 584, y: 84 },
    { x: 504, y: 107 },
    { x: 443, y: 165 },
    { x: 408, y: 242 },
    { x: 357, y: 459 },
    { x: 357, y: 459 },
    { x: 357, y: 459 },
    { x: 357, y: 459 },
    { x: 391, y: 683 },
    { x: 351, y: 759 },
    { x: 279, y: 788 },
    { x: 186, y: 836 },
    { x: 142, y: 907 },
    { x: 123, y: 986 },
    { x: 124, y: 1074 },
    { x: 137, y: 1161 },
    { x: 174, y: 1241 },
    { x: 230, y: 1318 },
    { x: 399, y: 1503 },
    { x: 399, y: 1503 },
    { x: 399, y: 1503 },
    { x: 399, y: 1503 },
    { x: 341, y: 1710 },
    { x: 371, y: 1796 },
    { x: 405, y: 1871 },
    { x: 424, y: 1953 },
    { x: 481, y: 2034 },
    { x: 555, y: 2062 },
    { x: 654, y: 2074 },
    { x: 738, y: 2082 },
    { x: 787, y: 2139 },
    { x: 810, y: 2215 },
    { x: 805, y: 2368 },
    { x: 805, y: 2368 },
    { x: 805, y: 2368 },
    { x: 805, y: 2368 },
    { x: 805, y: 2368 },
    { x: 853, y: 3454 } // Sign of the cross
];


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package.json */ "kiQV");
var _package_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../package.json */ "kiQV", 1);
/* harmony import */ var _services_liturgical_year_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/liturgical-year.service */ "N8x+");
/* harmony import */ var _services_app_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/app-config.service */ "JvtB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AppComponent {
    constructor(liturgicalYear, appConfig) {
        this.liturgicalYear = liturgicalYear;
        this.appConfig = appConfig;
        this.title = $localize `:@@rosaryTitle:Rosary`;
        this.appVersion = _package_json__WEBPACK_IMPORTED_MODULE_1__["version"];
        this.checkOrientation();
        console.log(`user-agent: ${window.navigator.userAgent}`);
    }
    backgroundImageClass() {
        const color = this.liturgicalYear.liturgicalColor();
        return `lit-color-${color.toString().toLowerCase()}`;
    }
    onResize(event) {
        this.checkOrientation();
    }
    checkOrientation() {
        if (window.matchMedia('(orientation: portrait)').matches) {
            console.log(`you're in PORTRAIT mode`);
            this.appConfig.isPortrait = true;
        }
        else if (window.matchMedia('(orientation: landscape)').matches) {
            console.log(`you're in LANDSCAPE mode`);
            this.appConfig.isPortrait = false;
        }
        else {
            this.appConfig.isPortrait = undefined;
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_liturgical_year_service__WEBPACK_IMPORTED_MODULE_2__["LiturgicalYearService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_app_config_service__WEBPACK_IMPORTED_MODULE_3__["AppConfigService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function AppComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 2, vars: 2, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.backgroundImageClass());
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _services_liturgical_year_service__WEBPACK_IMPORTED_MODULE_2__["LiturgicalYearService"] }, { type: _services_app_config_service__WEBPACK_IMPORTED_MODULE_3__["AppConfigService"] }]; }, { onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "TJLn":
/*!*****************************************************************************!*\
  !*** ./src/app/components/holy-rosary-prayer/mysteries/mystery-glorious.ts ***!
  \*****************************************************************************/
/*! exports provided: MysteryGloriousComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MysteryGloriousComponent", function() { return MysteryGloriousComponent; });
class MysteryGloriousComponent {
    constructor() { }
    get mysterySequenceName() {
        return 'Glorious';
    }
    get mystery1() {
        return $localize `:@@glorious-mystery-1:The Resurrection`;
    }
    get fruit1() {
        return $localize `:@@glorious-fruit-1:A conversion of heart`;
    }
    get mystery2() {
        return $localize `:@@glorious-mystery-2:The Ascension`;
    }
    get fruit2() {
        return $localize `:@@glorious-fruit-2:A desire for heaven`;
    }
    get mystery3() {
        return $localize `:@@glorious-mystery-3:The Coming of the Holy Spirit`;
    }
    get fruit3() {
        return $localize `:@@glorious-fruit-3:The gifts of the Holy Spirit`;
    }
    get mystery4() {
        return $localize `:@@glorious-mystery-4:The Assumption of the Blessed Mother`;
    }
    get fruit4() {
        return $localize `:@@glorious-fruit-4:Devotion to Mary`;
    }
    get mystery5() {
        return $localize `:@@glorious-mystery-5:The Coronation of the Blessed Mother`;
    }
    get fruit5() {
        return $localize `:@@glorious-fruit-5:Eternal happiness`;
    }
}


/***/ }),

/***/ "Uspq":
/*!**********************************************!*\
  !*** ./src/app/prayers/end/end.component.ts ***!
  \**********************************************/
/*! exports provided: EndComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndComponent", function() { return EndComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class EndComponent {
    constructor() { }
    ngOnInit() {
    }
}
EndComponent.ɵfac = function EndComponent_Factory(t) { return new (t || EndComponent)(); };
EndComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EndComponent, selectors: [["app-end"]], inputs: { prayerName: "prayerName" }, decls: 7, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_740978180461711971$$SRC_APP_PRAYERS_END_END_COMPONENT_TS_1 = goog.getMsg("Thank you for praying");
        i18n_0 = MSG_EXTERNAL_740978180461711971$$SRC_APP_PRAYERS_END_END_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟1e8c5582acfd4c735932f72ca7fb38ba55b50db2␟740978180461711971:Thank you for praying`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4029563688694449379$$SRC_APP_PRAYERS_END_END_COMPONENT_TS_3 = goog.getMsg("today!");
        i18n_2 = MSG_EXTERNAL_4029563688694449379$$SRC_APP_PRAYERS_END_END_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟c79387e8dadfb6a7333a25518e59e8b0a4eec574␟4029563688694449379:today!`;
    } return [[1, "the-end"], i18n_0, i18n_2]; }, template: function EndComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.prayerName);
    } }, styles: [".the-end[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0YiLCJmaWxlIjoiZW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRoZS1lbmQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EndComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-end',
                templateUrl: './end.component.html',
                styleUrls: ['./end.component.scss']
            }]
    }], function () { return []; }, { prayerName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "WsnB":
/*!***************************************************************************!*\
  !*** ./src/app/components/liturgical-dates/liturgical-dates.component.ts ***!
  \***************************************************************************/
/*! exports provided: LiturgicalDatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiturgicalDatesComponent", function() { return LiturgicalDatesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_liturgical_dates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/liturgical-dates */ "t1Hb");
/* harmony import */ var src_app_services_liturgical_year_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/liturgical-year.service */ "N8x+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function LiturgicalDatesComponent_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const periodSelector_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", periodSelector_r2.name, " ");
} }
function LiturgicalDatesComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const period_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", period_r4.name, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, period_r4.startDate), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, period_r4.endDate), " ");
} }
class LiturgicalDatesComponent {
    constructor(liturgicalYear) {
        this.liturgicalYear = liturgicalYear;
    }
    ngOnInit() {
        var _a;
        const liturgicalDates = (_a = this.liturgicalYear) === null || _a === void 0 ? void 0 : _a.liturgicalDates;
        let periods = [
            liturgicalDates.advent,
            liturgicalDates.christmas,
            liturgicalDates.lent,
            liturgicalDates.triduum,
            liturgicalDates.easter
        ];
        periods.sort((period1, period2) => {
            return period1.startDate < period2.startDate ? -1 : 1;
        });
        this.periodsLeft = [
            periods[0], periods[1], periods[2]
        ];
        this.periodsRight = [
            periods[3], periods[4]
        ];
        this.periods = periods;
        this.litYearColorSelector = [
            src_app_models_liturgical_dates__WEBPACK_IMPORTED_MODULE_1__["automaticSelection"],
            src_app_models_liturgical_dates__WEBPACK_IMPORTED_MODULE_1__["ordinaryTime"],
            ...periods
        ];
    }
    onLiturgicalPeriodChanged(newValue) {
        const idx = Number.parseInt(newValue);
        if (idx === 0) {
            this.liturgicalYear.overrideLiturgicalColor = undefined;
        }
        else if (idx >= 1 && idx < this.litYearColorSelector.length) {
            this.liturgicalYear.overrideLiturgicalColor = this.litYearColorSelector[idx].color;
        }
    }
}
LiturgicalDatesComponent.ɵfac = function LiturgicalDatesComponent_Factory(t) { return new (t || LiturgicalDatesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_liturgical_year_service__WEBPACK_IMPORTED_MODULE_2__["LiturgicalYearService"])); };
LiturgicalDatesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LiturgicalDatesComponent, selectors: [["app-liturgical-dates"]], decls: 8, vars: 2, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1516891117638138457$$SRC_APP_COMPONENTS_LITURGICAL_DATES_LITURGICAL_DATES_COMPONENT_TS_1 = goog.getMsg("Liturgical period:");
        i18n_0 = MSG_EXTERNAL_1516891117638138457$$SRC_APP_COMPONENTS_LITURGICAL_DATES_LITURGICAL_DATES_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟f3a92a305f31f615cf7381e9ebd177aaa53d03d7␟1516891117638138457:Liturgical period:`;
    } return [[1, "liturgical-div"], i18n_0, [3, "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "box"], ["class", "period", 4, "ngFor", "ngForOf"], [3, "value"], [1, "period"], [1, "label"]]; }, template: function LiturgicalDatesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LiturgicalDatesComponent_Template_select_change_4_listener($event) { return ctx.onLiturgicalPeriodChanged($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LiturgicalDatesComponent_option_5_Template, 2, 2, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LiturgicalDatesComponent_div_7_Template, 6, 7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.litYearColorSelector);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.periods);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".liturgical-div[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 99%;\n}\n\n@media (orientation: landscape) {\n  .liturgical-div[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    font-weight: 2vw;\n    height: vh;\n  }\n\n  .box[_ngcontent-%COMP%] {\n    height: 40vh;\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    text-align: center;\n  }\n\n  .box[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    flex: 0 0 33%;\n    height: 5vh;\n  }\n}\n\n\n\n@media (orientation: portrait) {\n  select[_ngcontent-%COMP%] {\n    font-weight: 5vw;\n    height: 3vh;\n  }\n\n  .box[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    height: 300px;\n    text-align: center;\n  }\n\n  .box[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    flex: 0 0 10%;\n  }\n}\n\n.label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin: 0.5vh;\n  padding-top: 1vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpdHVyZ2ljYWwtZGF0ZXMuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMtc2hhcmVkLW1peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBREY7O0FBSUE7RUFFRTtJQUNFLGdCQ1RhO0lEVWIsVUFBQTtFQUZGOztFQUtBO0lBQ0UsWUFBQTtJQUNBLGFBQUE7SUFDQSxlQUFBO0lBQ0Esc0JBQUE7SUFDQSxrQkFBQTtFQUZGOztFQUtBO0lBQ0UsYUFBQTtJQUNBLFdBQUE7RUFGRjtBQUNGOztBQU1BLHFGQUFBOztBQUVBO0VBRUU7SUFDRSxnQkNoQ21CO0lEaUNuQixXQUFBO0VBTkY7O0VBU0E7SUFDRSxhQUFBO0lBRUEsc0JBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7RUFQRjs7RUFVQTtJQUNFLGFBQUE7RUFQRjtBQUNGOztBQVdBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JDaERRO0FEdUNWIiwiZmlsZSI6ImxpdHVyZ2ljYWwtZGF0ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMtc2hhcmVkLW1peGlucy5zY3NzJztcclxuXHJcbi5saXR1cmdpY2FsLWRpdiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiA5OSU7XHJcbn1cclxuXHJcbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG5cclxuICAubGl0dXJnaWNhbC1kaXYgc2VsZWN0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udC1zaXplLWJhc2U7XHJcbiAgICBoZWlnaHQ6IHZoO1xyXG4gIH1cclxuXHJcbiAgLmJveCB7XHJcbiAgICBoZWlnaHQ6IDQwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5ib3g+KiB7XHJcbiAgICBmbGV4OiAwIDAgMzMlO1xyXG4gICAgaGVpZ2h0OiA1dmg7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcblxyXG4gIHNlbGVjdCB7XHJcbiAgICBmb250LXdlaWdodDogJGZvbnQtc2l6ZS1iYXNlLXBob25lO1xyXG4gICAgaGVpZ2h0OiAzdmg7XHJcbiAgfVxyXG5cclxuICAuYm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5ib3g+KiB7XHJcbiAgICBmbGV4OiAwIDAgMTAlO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5sYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luOiAwLjV2aDtcclxuICBwYWRkaW5nLXRvcDogJHBhZGRpbmc7XHJcbn1cclxuIiwiJGZvbnRuYW1lOiBDb25zb2xhO1xyXG4kZm9udC1zaXplLWJhc2U6IDJ2dztcclxuJGZvbnQtc2l6ZS1iYXNlLXBob25lOiA1dnc7XHJcblxyXG4kbWFyZ2luczogMXZoO1xyXG4kbmF2LWxhbmRzY2FwZS1tYXJnaW46IDN2aDtcclxuXHJcbiRwYWRkaW5nOiAxdmg7XHJcbiRwYWRkaW5nLXBob25lOiAwLjN2aDtcclxuXHJcbiRib3JkZXI6IDFweCBkYXNoZWQgYmxhY2s7XHJcbiRib3JkZXItcmFkaXVzOiAxLjV2aDtcclxuXHJcbiRpbnB1dC1tYXJnaW4tYm90dG9tOiAxdmg7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LiturgicalDatesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-liturgical-dates',
                templateUrl: './liturgical-dates.component.html',
                styleUrls: ['./liturgical-dates.component.scss']
            }]
    }], function () { return [{ type: src_app_services_liturgical_year_service__WEBPACK_IMPORTED_MODULE_2__["LiturgicalYearService"] }]; }, null); })();


/***/ }),

/***/ "XQ6Z":
/*!***********************************************!*\
  !*** ./src/app/models/bead-group-template.ts ***!
  \***********************************************/
/*! exports provided: initBeadGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initBeadGroup", function() { return initBeadGroup; });
/* harmony import */ var _bead_group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bead-group */ "k8Er");

function initBeadGroup(beadMap, template, mysteryIdx, beadGroupIndex) {
    const beadGroup = new _bead_group__WEBPACK_IMPORTED_MODULE_0__["BeadGroup"](template, mysteryIdx, beadGroupIndex);
    beadMap[beadGroup.sequenceId] = beadGroup;
    return beadGroup;
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppHammerConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHammerConfig", function() { return AppHammerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_active_prayer_active_prayer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/active-prayer/active-prayer.component */ "K4TB");
/* harmony import */ var _components_holy_rosary_prayer_current_prayer_current_prayer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/holy-rosary-prayer/current-prayer/current-prayer.component */ "60da");
/* harmony import */ var _components_holy_rosary_prayer_holy_rosary_prayer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/holy-rosary-prayer/holy-rosary-prayer.component */ "+dEH");
/* harmony import */ var _components_holy_rosary_prayer_mystery_display_mystery_display_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/holy-rosary-prayer/mystery-display/mystery-display.component */ "4f7d");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_testing_layouts_layouts_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/testing/layouts/layouts.component */ "DZO2");
/* harmony import */ var _components_liturgical_dates_liturgical_dates_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/liturgical-dates/liturgical-dates.component */ "WsnB");
/* harmony import */ var _components_mystery_selector_mystery_selector_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/mystery-selector/mystery-selector.component */ "MKlP");
/* harmony import */ var _components_notices_notices_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/notices/notices.component */ "z+NF");
/* harmony import */ var _components_pats_beads_pats_beads_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/pats-beads/pats-beads.component */ "vJvT");
/* harmony import */ var _prayers_end_end_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./prayers/end/end.component */ "Uspq");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "mvyS");
/* harmony import */ var _components_rotate_div_rotate_div_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/rotate-div/rotate-div.component */ "aFVH");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _components_testing_buzz_feedback_buzz_feedback_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/testing/buzz-feedback/buzz-feedback.component */ "Kn0e");






















class AppHammerConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HammerGestureConfig"] {
    constructor() {
        super(...arguments);
        this.overrides = {
            'swipe': { enable: true, direction: hammerjs__WEBPACK_IMPORTED_MODULE_19__["DIRECTION_HORIZONTAL"] },
            'pinch': { enable: false },
            'rotate': { enable: false }
        };
    }
    buildHammer(element) {
        const mc = new hammerjs__WEBPACK_IMPORTED_MODULE_19__(element, {
            touchAction: 'pan-x'
        });
        return mc;
    }
}
AppHammerConfig.ɵfac = function AppHammerConfig_Factory(t) { return ɵAppHammerConfig_BaseFactory(t || AppHammerConfig); };
AppHammerConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppHammerConfig, factory: AppHammerConfig.ɵfac, providedIn: 'root' });
const ɵAppHammerConfig_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](AppHammerConfig);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppHammerConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HAMMER_GESTURE_CONFIG"], useClass: AppHammerConfig }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HammerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_active_prayer_active_prayer_component__WEBPACK_IMPORTED_MODULE_5__["ActivePrayerComponent"],
        _components_mystery_selector_mystery_selector_component__WEBPACK_IMPORTED_MODULE_12__["MysterySelectorComponent"],
        _components_holy_rosary_prayer_holy_rosary_prayer_component__WEBPACK_IMPORTED_MODULE_7__["HolyRosaryPrayerComponent"],
        _components_notices_notices_component__WEBPACK_IMPORTED_MODULE_13__["NoticesComponent"],
        _components_pats_beads_pats_beads_component__WEBPACK_IMPORTED_MODULE_14__["PatsBeadsComponent"],
        _prayers_end_end_component__WEBPACK_IMPORTED_MODULE_15__["EndComponent"],
        _components_liturgical_dates_liturgical_dates_component__WEBPACK_IMPORTED_MODULE_11__["LiturgicalDatesComponent"],
        _components_testing_layouts_layouts_component__WEBPACK_IMPORTED_MODULE_10__["LayoutsComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
        _components_holy_rosary_prayer_mystery_display_mystery_display_component__WEBPACK_IMPORTED_MODULE_8__["MysteryDisplayComponent"],
        _components_holy_rosary_prayer_current_prayer_current_prayer_component__WEBPACK_IMPORTED_MODULE_6__["CurrentPrayerComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
        _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_17__["NavigationComponent"],
        _components_rotate_div_rotate_div_component__WEBPACK_IMPORTED_MODULE_18__["RotateDivComponent"],
        _components_testing_buzz_feedback_buzz_feedback_component__WEBPACK_IMPORTED_MODULE_20__["BuzzFeedbackComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HammerModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_active_prayer_active_prayer_component__WEBPACK_IMPORTED_MODULE_5__["ActivePrayerComponent"],
                    _components_mystery_selector_mystery_selector_component__WEBPACK_IMPORTED_MODULE_12__["MysterySelectorComponent"],
                    _components_holy_rosary_prayer_holy_rosary_prayer_component__WEBPACK_IMPORTED_MODULE_7__["HolyRosaryPrayerComponent"],
                    _components_notices_notices_component__WEBPACK_IMPORTED_MODULE_13__["NoticesComponent"],
                    _components_pats_beads_pats_beads_component__WEBPACK_IMPORTED_MODULE_14__["PatsBeadsComponent"],
                    _prayers_end_end_component__WEBPACK_IMPORTED_MODULE_15__["EndComponent"],
                    _components_liturgical_dates_liturgical_dates_component__WEBPACK_IMPORTED_MODULE_11__["LiturgicalDatesComponent"],
                    _components_testing_layouts_layouts_component__WEBPACK_IMPORTED_MODULE_10__["LayoutsComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                    _components_holy_rosary_prayer_mystery_display_mystery_display_component__WEBPACK_IMPORTED_MODULE_8__["MysteryDisplayComponent"],
                    _components_holy_rosary_prayer_current_prayer_current_prayer_component__WEBPACK_IMPORTED_MODULE_6__["CurrentPrayerComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
                    _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_17__["NavigationComponent"],
                    _components_rotate_div_rotate_div_component__WEBPACK_IMPORTED_MODULE_18__["RotateDivComponent"],
                    _components_testing_buzz_feedback_buzz_feedback_component__WEBPACK_IMPORTED_MODULE_20__["BuzzFeedbackComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HammerModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]
                ],
                providers: [
                    { provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HAMMER_GESTURE_CONFIG"], useClass: AppHammerConfig }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aFVH":
/*!***************************************************************!*\
  !*** ./src/app/components/rotate-div/rotate-div.component.ts ***!
  \***************************************************************/
/*! exports provided: RotateDivComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RotateDivComponent", function() { return RotateDivComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["targetElement"];
class RotateDivComponent {
    constructor() { }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.refreshImageDimensions();
    }
    refreshImageDimensions() {
        if (this.targetElement) {
            const element = this.targetElement.nativeElement;
            console.log(`rect: ${JSON.stringify(element.getBoundingClientRect())}`);
            console.log(`html: ${this.targetElement.nativeElement.innerHTML}`);
            console.log(`id: ${this.targetElement.nativeElement.id}`);
            console.log(`width: ${this.targetElement.nativeElement.offsetWidth}`);
            console.log(`height: ${this.targetElement.nativeElement.offsetHeight}`);
        }
    }
}
RotateDivComponent.ɵfac = function RotateDivComponent_Factory(t) { return new (t || RotateDivComponent)(); };
RotateDivComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RotateDivComponent, selectors: [["app-rotate-div"]], viewQuery: function RotateDivComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.targetElement = _t.first);
    } }, decls: 6, vars: 0, consts: [[1, "rotate-container"], ["targetElement", ""], [1, "rotate-div"], ["id", "rotate-img", "src", "assets/abc.png"], [1, "rotate-highligh-div"]], template: function RotateDivComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".rotate-container[_ngcontent-%COMP%] {\n  background-color: lightgray;\n  display: block;\n  opacity: 85%;\n  margin: 10px;\n  padding: 10px;\n}\n\n\n\n.rotate-div[_ngcontent-%COMP%] {\n  background-color: rosybrown;\n  height: 5vh;\n  width: 20vw;\n  text-align: center;\n  transform: rotate(45deg) scale(3);\n  transform-origin: center center;\n}\n\n#rotate-img[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n}\n\n.rotate-highligh-div[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 15px;\n  top: 15px;\n  background-color: red;\n  border: 5px solid darkred;\n  border-radius: 50%;\n  opacity: 0.5;\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JvdGF0ZS1kaXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBRUEsWUFBQTtFQUNBLGFBQUE7QUFBRjs7QUFJQTs7O0NBQUE7O0FBS0E7RUFDRSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBS0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUVBLCtCQUFBO0FBUEY7O0FBVUE7RUFDRSxrQkFBQTtFQUVBLFNBQUE7RUFDQSxRQUFBO0FBUkY7O0FBV0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBR0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBRUEsWUFBQTtFQUNBLFVBQUE7QUFYRiIsImZpbGUiOiJyb3RhdGUtZGl2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdGF0ZS1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvcGFjaXR5OiA4NSU7XHJcbiAgLy8gaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIC8vIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vKlxyXG5Sb3RhdGUgYW5kIHNjYWxlIHRoZSBwYXJlbnRcclxuUG9zaXRpb24gdGhlIGltYWdlIGFuZCBiZWFkcyAoYWJzb2x1dGUsIG1hcmdpbiBvZmZzZXQgYW5kIHgseSlcclxuKi9cclxuXHJcbi5yb3RhdGUtZGl2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByb3N5YnJvd247XHJcbiAgaGVpZ2h0OiA1dmg7XHJcbiAgd2lkdGg6IDIwdnc7XHJcbiAgLy8gcGFkZGluZy10b3A6IDF2aDtcclxuICAvLyBwYWRkaW5nLWJvdHRvbTogMXZoO1xyXG4gIC8vIHBhZGRpbmctbGVmdDogM3Z3O1xyXG4gIC8vIHBhZGRpbmctcmlnaHQ6IDN2dztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHNjYWxlKDMpO1xyXG4gIC8vIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XHJcbn1cclxuXHJcbiNyb3RhdGUtaW1nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLy8gbWFyZ2luLXRvcDogLTIwdnc7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHRvcDogMHB4O1xyXG59XHJcblxyXG4ucm90YXRlLWhpZ2hsaWdoLWRpdiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDE1cHg7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIC8vIG1hcmdpbi10b3A6IC0yMHZ3O1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgZGFya3JlZDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG4gIG9wYWNpdHk6IDAuNTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RotateDivComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rotate-div',
                templateUrl: './rotate-div.component.html',
                styleUrls: ['./rotate-div.component.scss']
            }]
    }], function () { return []; }, { targetElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['targetElement']
        }] }); })();


/***/ }),

/***/ "c2Te":
/*!**************************************************!*\
  !*** ./src/app/services/localization.service.ts ***!
  \**************************************************/
/*! exports provided: LocalizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizationService", function() { return LocalizationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LocalizationService {
    constructor() { }
    get adventLabel() {
        return $localize `:@@adventLabel:Advent`;
    }
    get christmasLabel() {
        return $localize `:@@christmasLabel:Christmas`;
    }
    get lentLabel() {
        return $localize `:@@lentLabel:Lent`;
    }
    get triduumLabel() {
        return $localize `:@@triduumLabel:Holy Triduum`;
    }
    get holyThursdayLabel() {
        return $localize `:@@holyThursday:Holy Thursday`;
    }
    get goodFridayLabel() {
        return $localize `:@@goodFridayLabel:Good Friday`;
    }
    get holySaturdayLabel() {
        return $localize `:@@holySaturdayLabel:Holy Saturday`;
    }
    get easterLabel() {
        return $localize `:@@easterLabel:Easter`;
    }
    get easterSundayLabel() {
        return $localize `:@@easterSundayLabel:Easter Sunday`;
    }
}
LocalizationService.ɵfac = function LocalizationService_Factory(t) { return new (t || LocalizationService)(); };
LocalizationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalizationService, factory: LocalizationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalizationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "deBk":
/*!**************************************************!*\
  !*** ./src/app/sequences/contemporary-rosary.ts ***!
  \**************************************************/
/*! exports provided: ContemporaryRosary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContemporaryRosary", function() { return ContemporaryRosary; });
/* harmony import */ var _models_bead_group_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/bead-group-list */ "COt9");
/* harmony import */ var _models_bead_group_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/bead-group-template */ "XQ6Z");
/* harmony import */ var _rosary_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rosary-helper */ "hwcc");



/*
IMPORTANT: If you change the order of prayers (ie: loadContemporaryHolyRosary),
           you also need to check that it matches up with the bead arrays.

           Search for things like:
             export const PATS_BEADS_COORDS: BeadPosition[]
*/
const prayerName = "the Holy Rosary";
class ContemporaryRosary extends _models_bead_group_list__WEBPACK_IMPORTED_MODULE_0__["BeadGroupList"] {
    constructor(mysteries) {
        super(prayerName, loadContemporaryHolyRosary(), mysteries);
        console.log(`Contemporary - ${mysteries.mysterySequenceName}`);
    }
}
function loadContemporaryHolyRosary() {
    let beadGroupIndex = 0;
    let mysteryIdx = 0;
    const beadMap = new Map();
    const beadGroups = [
        Object(_models_bead_group_template__WEBPACK_IMPORTED_MODULE_1__["initBeadGroup"])(beadMap, _rosary_helper__WEBPACK_IMPORTED_MODULE_2__["SIGN_CROSS"], undefined, beadGroupIndex++),
        Object(_models_bead_group_template__WEBPACK_IMPORTED_MODULE_1__["initBeadGroup"])(beadMap, _rosary_helper__WEBPACK_IMPORTED_MODULE_2__["APOSTLES_CREED"], undefined, beadGroupIndex++),
        Object(_models_bead_group_template__WEBPACK_IMPORTED_MODULE_1__["initBeadGroup"])(beadMap, _rosary_helper__WEBPACK_IMPORTED_MODULE_2__["OUR_FATHER"], undefined, beadGroupIndex++),
        Object(_models_bead_group_template__WEBPACK_IMPORTED_MODULE_1__["initBeadGroup"])(beadMap, _rosary_helper__WEBPACK_IMPORTED_MODULE_2__["OPENING_HAIL_MARYS"], undefined, beadGroupIndex++),
        Object(_models_bead_group_template__WEBPACK_IMPORTED_MODULE_1__["initBeadGroup"])(beadMap, _rosary_helper__WEBPACK_IMPORTED_MODULE_2__["GLORY"], undefined, beadGroupIndex++),
        Object(_models_bead_group_template__WEBPACK_IMPORTED_MODULE_1__["initBeadGroup"])(beadMap, _rosary_helper__WEBPACK_IMPORTED_MODULE_2__["MYSTERY_1"], mysteryIdx, beadGroupIndex++),
        Object(_models_bead_group_template__WEBPACK_IMPORTED_MODULE_1__["initBeadGroup"])(beadMap, _rosary_helper__WEBPACK_IMPORTED_MODULE_2__["OUR_FATHER"], mysteryIdx, beadGroupIndex++),
        Object(_models_bead_group_template__WEBPACK_IMPORTED_MODULE_1__["initBeadGroup"])(beadMap, _rosary_helper__WEBPACK_IMPORTED_MODULE_2__["HAIL_MARYS"], mysteryIdx, beadGroupIndex++),
        Object(_models_bead_group_template__WEBPACK_IMPORTED_MODULE_1__["initBeadGroup"])(beadMap, _rosary_helper__WEBPACK_IMPORTED_MODULE_2__["GLORY"], mysteryIdx, beadGroupIndex++),
        Object(_models_bead_group_template__WEBPACK_IMPORTED_MODULE_1__["initBeadGroup"])(beadMap, _rosary_helper__WEBPACK_IMPORTED_MODULE_2__["FATIMA"], mysteryIdx++, beadGroupIndex++),
        Object(_models_bead_group_template__WEBPACK_IMPORTED_MODULE_1__["initBeadGroup"])(beadMap, _rosary_helper__WEBPACK_IMPORTED_MODULE_2__["MYSTERY_2"], mysteryIdx, beadGroupIndex++),
        Object(_models_bead_group_template__WEBPACK_IMPORTED_MODULE_1__["initBeadGroup"])(beadMap, _rosary_helper__WEBPACK_IMPORTED_MODULE_2__["OUR_FATHER"], mysteryIdx, beadGroupIndex++),
        Object(_models_bead_group_template__WEBPACK_IMPORTED_MODULE_1__["initBeadGroup"])(beadMap, _rosary_helper__WEBPACK_IMPORTED_MODULE_2__["HAIL_MARYS"], mysteryIdx, beadGroupIndex++),
        Object(_models_bead_group_template__WEBPACK_IMPORTED_MODULE_1__["initBeadGroup"])(beadMap, _rosary_helper__WEBPACK_IMPORTED_MODULE_2__["GLORY"], mysteryIdx, beadGroupIndex++),
        Object(_models_bead_group_template__WEBPACK_IMPORTED_MODULE_1__["initBeadGroup"])(beadMap, _rosary_helper__WEBPACK_IMPORTED_MODULE_2__["FATIMA"], mysteryIdx++, beadGroupIndex++),
        Object(_models_bead_group_template__WEBPACK_IMPORTED_MODULE_1__["initBeadGroup"])(beadMap, _rosary_helper__WEBPACK_IMPORTED_MODULE_2__["MYSTERY_3"], mysteryIdx, beadGroupIndex++),
        Object(_models_bead_group_template__WEBPACK_IMPORTED_MODULE_1__["initBeadGroup"])(beadMap, _rosary_helper__WEBPACK_IMPORTED_MODULE_2__["OUR_FATHER"], mysteryIdx, beadGroupIndex++),
        Object(_models_bead_group_template__WEBPACK_IMPORTED_MODULE_1__["initBeadGroup"])(beadMap, _rosary_helper__WEBPACK_IMPORTED_MODULE_2__["HAIL_MARYS"], mysteryIdx, beadGroupIndex++),
        Object(_models_bead_group_template__WEBPACK_IMPORTED_MODULE_1__["initBeadGroup"])(beadMap, _rosary_helper__WEBPACK_IMPORTED_MODULE_2__["GLORY"], mysteryIdx, beadGroupIndex++),
        Object(_models_bead_group_template__WEBPACK_IMPORTED_MODULE_1__["initBeadGroup"])(beadMap, _rosary_helper__WEBPACK_IMPORTED_MODULE_2__["FATIMA"], mysteryIdx++, beadGroupIndex++),
        Object(_models_bead_group_template__WEBPACK_IMPORTED_MODULE_1__["initBeadGroup"])(beadMap, _rosary_helper__WEBPACK_IMPORTED_MODULE_2__["MYSTERY_4"], mysteryIdx, beadGroupIndex++),
        Object(_models_bead_group_template__WEBPACK_IMPORTED_MODULE_1__["initBeadGroup"])(beadMap, _rosary_helper__WEBPACK_IMPORTED_MODULE_2__["OUR_FATHER"], mysteryIdx, beadGroupIndex++),
        Object(_models_bead_group_template__WEBPACK_IMPORTED_MODULE_1__["initBeadGroup"])(beadMap, _rosary_helper__WEBPACK_IMPORTED_MODULE_2__["HAIL_MARYS"], mysteryIdx, beadGroupIndex++),
        Object(_models_bead_group_template__WEBPACK_IMPORTED_MODULE_1__["initBeadGroup"])(beadMap, _rosary_helper__WEBPACK_IMPORTED_MODULE_2__["GLORY"], mysteryIdx, beadGroupIndex++),
        Object(_models_bead_group_template__WEBPACK_IMPORTED_MODULE_1__["initBeadGroup"])(beadMap, _rosary_helper__WEBPACK_IMPORTED_MODULE_2__["FATIMA"], mysteryIdx++, beadGroupIndex++),
        Object(_models_bead_group_template__WEBPACK_IMPORTED_MODULE_1__["initBeadGroup"])(beadMap, _rosary_helper__WEBPACK_IMPORTED_MODULE_2__["MYSTERY_5"], mysteryIdx, beadGroupIndex++),
        Object(_models_bead_group_template__WEBPACK_IMPORTED_MODULE_1__["initBeadGroup"])(beadMap, _rosary_helper__WEBPACK_IMPORTED_MODULE_2__["OUR_FATHER"], mysteryIdx, beadGroupIndex++),
        Object(_models_bead_group_template__WEBPACK_IMPORTED_MODULE_1__["initBeadGroup"])(beadMap, _rosary_helper__WEBPACK_IMPORTED_MODULE_2__["HAIL_MARYS"], mysteryIdx, beadGroupIndex++),
        Object(_models_bead_group_template__WEBPACK_IMPORTED_MODULE_1__["initBeadGroup"])(beadMap, _rosary_helper__WEBPACK_IMPORTED_MODULE_2__["GLORY"], mysteryIdx, beadGroupIndex++),
        Object(_models_bead_group_template__WEBPACK_IMPORTED_MODULE_1__["initBeadGroup"])(beadMap, _rosary_helper__WEBPACK_IMPORTED_MODULE_2__["FATIMA"], mysteryIdx++, beadGroupIndex++),
        Object(_models_bead_group_template__WEBPACK_IMPORTED_MODULE_1__["initBeadGroup"])(beadMap, _rosary_helper__WEBPACK_IMPORTED_MODULE_2__["HAIL_HOLY_QUEEN"], undefined, beadGroupIndex++),
        Object(_models_bead_group_template__WEBPACK_IMPORTED_MODULE_1__["initBeadGroup"])(beadMap, _rosary_helper__WEBPACK_IMPORTED_MODULE_2__["CLOSING_1"], undefined, beadGroupIndex++),
        Object(_models_bead_group_template__WEBPACK_IMPORTED_MODULE_1__["initBeadGroup"])(beadMap, _rosary_helper__WEBPACK_IMPORTED_MODULE_2__["CLOSING_2"], undefined, beadGroupIndex++),
        Object(_models_bead_group_template__WEBPACK_IMPORTED_MODULE_1__["initBeadGroup"])(beadMap, _rosary_helper__WEBPACK_IMPORTED_MODULE_2__["SIGN_CROSS"], undefined, beadGroupIndex++)
    ];
    return {
        beadGroups,
        beadMap
    };
}


/***/ }),

/***/ "dxo7":
/*!*******************************************!*\
  !*** ./src/app/prayers/common-prayers.ts ***!
  \*******************************************/
/*! exports provided: Prayer, GroupPrayer, PrayerApostlesCreed, PrayerClosing1, PrayerClosing2, PrayerFatima, PrayerGlory, PrayerGloryFatima, PrayerHailHolyQueen, PrayerHailMary, PrayerOurFather, PrayerSignOfTheCross */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prayer", function() { return Prayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupPrayer", function() { return GroupPrayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrayerApostlesCreed", function() { return PrayerApostlesCreed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrayerClosing1", function() { return PrayerClosing1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrayerClosing2", function() { return PrayerClosing2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrayerFatima", function() { return PrayerFatima; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrayerGlory", function() { return PrayerGlory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrayerGloryFatima", function() { return PrayerGloryFatima; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrayerHailHolyQueen", function() { return PrayerHailHolyQueen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrayerHailMary", function() { return PrayerHailMary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrayerOurFather", function() { return PrayerOurFather; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrayerSignOfTheCross", function() { return PrayerSignOfTheCross; });
class Prayer {
    get all() {
        return undefined;
    }
}
/* ================================================================================ */
class GroupPrayer extends Prayer {
    get leader() {
        return undefined;
    }
    get response() {
        return undefined;
    }
}
/* ================================================================================ */
class PrayerApostlesCreed extends GroupPrayer {
    constructor() {
        super();
    }
    get name() {
        return $localize `:@@creedName:Apostles' Creed`;
    }
    get all() {
        return $localize `:@@creed:I believe in God the Father almighty
      Creator of Heaven and Earth;
      I believe in Jesus Christ, His only Son, Our Lord
      who was conceived by the Holy Spirit,
      born of the Virgin Mary,
      suffered under Pontius Pilate,
      was crucified, died and was buried;
      He decended into hell;
      the third day He rose again from the dead;
      He ascended into heaven,
      sits at the right hand of God the Father Almighty;
      from there He shall come to judge
         the living and the dead.
      I believe in the Holy Spirit;
      the Holy Catholic Church,
      the communion of saints;
      the forgiveness of sins;
      the resurrection of the body;
      and life everylasting.
      Amen.`;
    }
}
/* ================================================================================ */
class PrayerClosing1 extends Prayer {
    constructor() {
        super();
    }
    get name() {
        return $localize `:@@closingName1:Closing Prayer 1`;
    }
    get leader() {
        return $localize `:@@closing-leader-1:Pray for us, O holy Mother of God.`;
    }
    get response() {
        return $localize `:@@closing-response-1:That we may be made worthy of the promises of Christ.`;
    }
}
/* ================================================================================ */
class PrayerClosing2 extends Prayer {
    constructor() {
        super();
    }
    get name() {
        return $localize `:@@closingName2:Closing Prayer 2`;
    }
    get leader() {
        return $localize `:@@closing-leader-2:Let us pray:`;
    }
    get response() {
        return $localize `:@@closing-response-2:O God, whose only begotten Son,
      by His life, death and resurrection,
      has purchased for us
      the rewards of eternal life,
      grant, we beseech Thee,
      that meditating on these mysteries
      of the Most Holy Rosary
      of the Blessed Virgin Mary,
      we may imitate what they contain,
      and obtain what they promise,
      through the same Christ, our Lord.

      Amen.`;
    }
}
/* ================================================================================ */
function gloryBeLeader() {
    return $localize `:@@glory-leader:Glory be to the Father, and the Son,
      and the Holy Spirit.`;
}
function gloryBeResponse() {
    return $localize `:@@glory-response:As it was in the beginning, is now,
      and ever shall be, world without end.

      Amen.`;
}
/* ================================================================================ */
class PrayerFatima extends GroupPrayer {
    constructor() {
        super();
    }
    get name() {
        return $localize `:@@fatimaName:The Fatima Prayer`;
    }
    get all() {
        return $localize `:@@fatima:Oh my Jesus, forgive us our sins,
      save us from the fires of hell;
      lead all souls to heaven,
      especially those in most need of your mercy!

      Amen.`;
    }
}
/* ================================================================================ */
class PrayerGlory extends Prayer {
    constructor() {
        super();
    }
    // Reference: https://www.usccb.org/prayers/prayers-rosary
    get name() {
        return $localize `:@@gloryName:The Glory Be (The Doxology)`;
    }
    get leader() {
        return gloryBeLeader();
    }
    get response() {
        return gloryBeResponse();
    }
}
/* ================================================================================ */
class PrayerGloryFatima extends Prayer {
    constructor() {
        super();
        this.gloryPrayer = new PrayerGlory();
        this.fatimaPrayer = new PrayerFatima();
    }
    get name() {
        return `${this.gloryPrayer.name} / ${this.fatimaPrayer.name}`;
    }
    get leader() {
        return this.gloryPrayer.leader;
    }
    get response() {
        return `${this.gloryPrayer.response}

      ${this.fatimaPrayer.response}`;
    }
}
/* ================================================================================ */
class PrayerHailHolyQueen extends GroupPrayer {
    constructor() {
        super();
    }
    get all() {
        return $localize `:@@hail-holy-queen:Hail, Holy Queen, Mother of Mercy,
      our life, our sweetness, and our hope.
      To thee do we cry, poor banished children of Eve.
      To thee do we send up our sighs, mourning and weeping in this vale of tears.
      Turn then, most gracious advocate, thine eyes of mercy towards us,
      and after this our exile show unto us the blessed fruit of thy womb, Jesus.
      O clement, O loving, O sweet Virgin Mary.

      Amen`;
    }
    get name() {
        throw new Error("Method not implemented.");
    }
}
/* ================================================================================ */
class PrayerHailMary extends Prayer {
    constructor() {
        super();
    }
    // Reference: https://www.usccb.org/prayers/prayers-rosary
    get name() {
        return $localize `:@@hailMaryName:Hail Mary`;
    }
    get leader() {
        return $localize `:@@hail-mary-leader:Hail Mary, full of grace,
      the Lord is with thee;
      blessed art thou amongst women,
      and blessed is the fruit of thy womb, Jesus.`;
    }
    get response() {
        return $localize `:@@hail-mary-response:Holy Mary, Mother of God,
      pray for us sinners,
      now, and at the hour of our death.

      Amen.`;
    }
}
/* ================================================================================ */
class PrayerOurFather extends Prayer {
    constructor() {
        super();
    }
    // Reference: https://www.usccb.org/prayers/prayers-rosary
    get name() {
        return $localize `:@@ourFatherName:Our Father`;
    }
    get leader() {
        return $localize `:@@our-father-leader:Our Father who art in heaven,
      hallowed be Thy name;
      Thy kingdom come;
      Thy will be done
      on earth as it is in heaven.`;
    }
    get response() {
        return $localize `:@@our-father-response:Give us this day our daily bread;
      and forgive us our trespasses,
      as we forgive those who trespass against us;
      and lead us not into temptation;
      but deliver us from evil.

      Amen.`;
    }
}
/* ================================================================================ */
class PrayerSignOfTheCross extends GroupPrayer {
    constructor() {
        super();
    }
    // Reference: https://www.usccb.org/prayers/prayers-rosary
    get name() {
        return $localize `:@@signCrossName:The Sign of the Cross`;
    }
    get all() {
        return $localize `:@@sign-cross:In the name of the Father,
      and of the Son,
      and of the Holy Spirit.

      Amen.`;
    }
}


/***/ }),

/***/ "hwcc":
/*!********************************************!*\
  !*** ./src/app/sequences/rosary-helper.ts ***!
  \********************************************/
/*! exports provided: RosaryMysteriesEnum, lookupMystery, MYSTERY_1, MYSTERY_2, MYSTERY_3, MYSTERY_4, MYSTERY_5, SIGN_CROSS, APOSTLES_CREED, OUR_FATHER, OPENING_HAIL_MARYS, HAIL_MARYS, GLORY, FATIMA, GLORY_FATIMA, HAIL_HOLY_QUEEN, CLOSING_1, CLOSING_2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RosaryMysteriesEnum", function() { return RosaryMysteriesEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lookupMystery", function() { return lookupMystery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MYSTERY_1", function() { return MYSTERY_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MYSTERY_2", function() { return MYSTERY_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MYSTERY_3", function() { return MYSTERY_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MYSTERY_4", function() { return MYSTERY_4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MYSTERY_5", function() { return MYSTERY_5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_CROSS", function() { return SIGN_CROSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APOSTLES_CREED", function() { return APOSTLES_CREED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OUR_FATHER", function() { return OUR_FATHER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPENING_HAIL_MARYS", function() { return OPENING_HAIL_MARYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HAIL_MARYS", function() { return HAIL_MARYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLORY", function() { return GLORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FATIMA", function() { return FATIMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLORY_FATIMA", function() { return GLORY_FATIMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HAIL_HOLY_QUEEN", function() { return HAIL_HOLY_QUEEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSING_1", function() { return CLOSING_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSING_2", function() { return CLOSING_2; });
/* harmony import */ var _components_holy_rosary_prayer_mysteries_mystery_glorious__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/holy-rosary-prayer/mysteries/mystery-glorious */ "TJLn");
/* harmony import */ var _components_holy_rosary_prayer_mysteries_mystery_joyful__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/holy-rosary-prayer/mysteries/mystery-joyful */ "BB6k");
/* harmony import */ var _components_holy_rosary_prayer_mysteries_mystery_luminous__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/holy-rosary-prayer/mysteries/mystery-luminous */ "8pZM");
/* harmony import */ var _components_holy_rosary_prayer_mysteries_mystery_sorrowful__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/holy-rosary-prayer/mysteries/mystery-sorrowful */ "xMmV");




var RosaryMysteriesEnum;
(function (RosaryMysteriesEnum) {
    RosaryMysteriesEnum[RosaryMysteriesEnum["GLORIOUS"] = 0] = "GLORIOUS";
    RosaryMysteriesEnum[RosaryMysteriesEnum["JOYFUL"] = 1] = "JOYFUL";
    RosaryMysteriesEnum[RosaryMysteriesEnum["LUMINOUS"] = 2] = "LUMINOUS";
    RosaryMysteriesEnum[RosaryMysteriesEnum["SORROWFUL"] = 3] = "SORROWFUL";
})(RosaryMysteriesEnum || (RosaryMysteriesEnum = {}));
function lookupMystery(mysteryEnum) {
    if (RosaryMysteriesEnum.GLORIOUS === mysteryEnum) {
        return new _components_holy_rosary_prayer_mysteries_mystery_glorious__WEBPACK_IMPORTED_MODULE_0__["MysteryGloriousComponent"]();
    }
    else if (RosaryMysteriesEnum.JOYFUL === mysteryEnum) {
        return new _components_holy_rosary_prayer_mysteries_mystery_joyful__WEBPACK_IMPORTED_MODULE_1__["MysteryJoyfulComponent"]();
    }
    else if (RosaryMysteriesEnum.LUMINOUS === mysteryEnum) {
        return new _components_holy_rosary_prayer_mysteries_mystery_luminous__WEBPACK_IMPORTED_MODULE_2__["MysteryLuminousComponent"]();
    }
    else if (RosaryMysteriesEnum.SORROWFUL === mysteryEnum) {
        return new _components_holy_rosary_prayer_mysteries_mystery_sorrowful__WEBPACK_IMPORTED_MODULE_3__["MysterySorrowfulComponent"]();
    }
    return undefined;
}
const MYSTERY_1 = {
    sequence: 'mystery-1',
    sequenceId: 'mystery-1'
};
const MYSTERY_2 = {
    sequence: 'mystery-2',
    sequenceId: 'mystery-2'
};
const MYSTERY_3 = {
    sequence: 'mystery-3',
    sequenceId: 'mystery-3'
};
const MYSTERY_4 = {
    sequence: 'mystery-4',
    sequenceId: 'mystery-4'
};
const MYSTERY_5 = {
    sequence: 'mystery-5',
    sequenceId: 'mystery-5'
};
const SIGN_CROSS = {
    sequence: 'sign-cross',
    sequenceId: 'sign-cross',
    prayerIds: [
        '@@sign-cross'
    ]
};
const APOSTLES_CREED = {
    sequence: 'creed',
    sequenceId: 'creed',
    repeatCount: 0,
    prayerIds: [
        '@@creed'
    ]
};
const OUR_FATHER = {
    sequence: 'our-father',
    sequenceId: 'our-father',
    repeatCount: 0,
    prayerIds: [
        '@@our-father'
    ]
};
const OPENING_HAIL_MARYS = {
    sequence: 'hail-mary',
    sequenceId: 'hail-mary',
    repeatCount: 3,
    prayerIds: [
        '@@hail-mary'
    ]
};
const HAIL_MARYS = {
    sequence: 'hail-mary',
    sequenceId: 'hail-mary',
    repeatCount: 10,
    prayerIds: [
        '@@hail-mary'
    ]
};
const GLORY = {
    sequence: 'glory',
    sequenceId: 'glory',
    repeatCount: 0,
    prayerIds: [
        '@@glory'
    ],
    phoneFeedback: 'long'
};
const FATIMA = {
    sequence: 'fatima',
    sequenceId: 'fatima',
    repeatCount: 0,
    prayerIds: [
        '@@fatima'
    ],
    phoneFeedback: 'long'
};
const GLORY_FATIMA = {
    sequence: 'glory-fatima',
    sequenceId: 'glory-fatima',
    repeatCount: 0,
    prayerIds: [
        '@@glory',
        '@@fatima'
    ],
    phoneFeedback: 'long'
};
const HAIL_HOLY_QUEEN = {
    sequence: 'hail-holy-queen',
    sequenceId: 'hail-holy-queen',
    phoneFeedback: 'extra-long',
    incrementMysteryIdx: true
};
const CLOSING_1 = {
    sequence: 'closing1',
    sequenceId: 'closing1',
    repeatCount: 0,
    prayerIds: [
        '@@closing-1'
    ]
};
const CLOSING_2 = {
    sequence: 'closing2',
    sequenceId: 'closing2',
    repeatCount: 0,
    prayerIds: [
        '@@closing-2'
    ]
};


/***/ }),

/***/ "ivI1":
/*!*******************************************************!*\
  !*** ./src/app/services/bead-group-loader.service.ts ***!
  \*******************************************************/
/*! exports provided: BeadGroupLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeadGroupLoaderService", function() { return BeadGroupLoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sequences_contemporary_rosary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sequences/contemporary-rosary */ "deBk");
/* harmony import */ var _sequences_rosary_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sequences/rosary-helper */ "hwcc");




class BeadGroupLoaderService {
    constructor() { }
    loadHolyRosaryContemporaryMysteryEnum(mysteryEnum) {
        const mystery = Object(_sequences_rosary_helper__WEBPACK_IMPORTED_MODULE_2__["lookupMystery"])(mysteryEnum);
        return new _sequences_contemporary_rosary__WEBPACK_IMPORTED_MODULE_1__["ContemporaryRosary"](mystery);
    }
    loadHolyRosaryContemporary(mystery) {
        return new _sequences_contemporary_rosary__WEBPACK_IMPORTED_MODULE_1__["ContemporaryRosary"](mystery);
    }
}
BeadGroupLoaderService.ɵfac = function BeadGroupLoaderService_Factory(t) { return new (t || BeadGroupLoaderService)(); };
BeadGroupLoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BeadGroupLoaderService, factory: BeadGroupLoaderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BeadGroupLoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "k8Er":
/*!**************************************!*\
  !*** ./src/app/models/bead-group.ts ***!
  \**************************************/
/*! exports provided: BeadGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeadGroup", function() { return BeadGroup; });
class BeadGroup {
    constructor(data, mysteryIdx, beadGroupIndex) {
        if (data) {
            this.sequence = data.sequence;
            this.sequenceId = `${data.sequence}_${beadGroupIndex}`;
            this.beadGroupIndex = beadGroupIndex;
            this.repeatCount = (data.repeatCount) ? data.repeatCount : 0;
            this.prayerIds = data.prayerIds;
            this.phoneFeedback = ((data === null || data === void 0 ? void 0 : data.phoneFeedback) || 'short');
            this.mysteryIdx = mysteryIdx;
            this.incrementMysteryIdx = data === null || data === void 0 ? void 0 : data.incrementMysteryIdx;
            this.beadIndex = 0;
        }
    }
    isBeadGroupDone() {
        return this.beadIndex >= (this.repeatCount - 1);
    }
    resetBeadIndex() {
        this.beadIndex = 0;
    }
    resetBeadIndexToEnd() {
        this.beadIndex = this.repeatCount - 1;
    }
    next() {
        this.beadIndex++;
    }
    previous() {
        this.beadIndex--;
    }
    get groupIndex() {
        return this.beadGroupIndex;
    }
    get index() {
        return this.beadIndex;
    }
    get maxIndex() {
        return (this.repeatCount) ? this.repeatCount : 0;
    }
}


/***/ }),

/***/ "kiQV":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, scripts, private, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"rosary\",\"version\":\"0.0.9j\",\"scripts\":{\"ng\":\"ng\",\"start\":\"ng serve\",\"build\":\"ng build\",\"test\":\"ng test\",\"lint\":\"ng lint\",\"e2e\":\"ng e2e\",\"i18n\":\"ng extract-i18n --output-path src/assets/i18n/\"},\"private\":true,\"dependencies\":{\"@angular/animations\":\"~11.0.6\",\"@angular/common\":\"~11.0.6\",\"@angular/compiler\":\"~11.0.6\",\"@angular/core\":\"~11.0.6\",\"@angular/forms\":\"~11.0.6\",\"@angular/localize\":\"^12.2.6\",\"@angular/platform-browser\":\"~11.0.6\",\"@angular/platform-browser-dynamic\":\"~11.0.6\",\"@angular/router\":\"~11.0.6\",\"@types/hammerjs\":\"^2.0.40\",\"hammerjs\":\"^2.0.8\",\"rxjs\":\"~6.6.0\",\"tslib\":\"^2.0.0\",\"zone.js\":\"~0.10.2\"},\"devDependencies\":{\"@angular-devkit/build-angular\":\"~0.1100.6\",\"@angular/cli\":\"~11.0.6\",\"@angular/compiler-cli\":\"~11.0.6\",\"@types/jasmine\":\"~3.6.0\",\"@types/node\":\"^12.11.1\",\"codelyzer\":\"^6.0.0\",\"jasmine-core\":\"~3.6.0\",\"jasmine-spec-reporter\":\"~5.0.0\",\"karma\":\"~5.1.0\",\"karma-chrome-launcher\":\"~3.1.0\",\"karma-coverage\":\"~2.0.3\",\"karma-jasmine\":\"~4.0.0\",\"karma-jasmine-html-reporter\":\"^1.5.0\",\"protractor\":\"~7.0.0\",\"ts-node\":\"~8.3.0\",\"tslint\":\"~6.1.0\",\"typescript\":\"~4.0.2\"}}");

/***/ }),

/***/ "mvyS":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NavigationComponent {
    constructor() {
        this.onNextClickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onPreviousClickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onNext() {
        this.onNextClickEvent.emit('next');
    }
    onPrevious() {
        this.onPreviousClickEvent.emit('prev');
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], outputs: { onNextClickEvent: "onNextClickEvent", onPreviousClickEvent: "onPreviousClickEvent" }, decls: 6, vars: 0, consts: [[1, "left"], [3, "click"], [1, "right"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_button_click_1_listener() { return ctx.onPrevious(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "<=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_button_click_4_listener() { return ctx.onNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "=>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navigation',
                templateUrl: './navigation.component.html',
                styleUrls: ['./navigation.component.scss']
            }]
    }], function () { return []; }, { onNextClickEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onPreviousClickEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "qcAC":
/*!*************************************!*\
  !*** ./src/app/models/mysteries.ts ***!
  \*************************************/
/*! exports provided: mysteryByNumber, fruitByNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mysteryByNumber", function() { return mysteryByNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fruitByNumber", function() { return fruitByNumber; });
function mysteryByNumber(mystery, mysteryNum) {
    if (mysteryNum === 1) {
        return mystery.mystery1;
    }
    else if (mysteryNum === 2) {
        return mystery.mystery2;
    }
    else if (mysteryNum === 3) {
        return mystery.mystery3;
    }
    else if (mysteryNum === 4) {
        return mystery.mystery4;
    }
    else if (mysteryNum === 5) {
        return mystery.mystery5;
    }
    return undefined;
}
function fruitByNumber(mystery, mysteryNum) {
    if (mysteryNum === 1) {
        return mystery.fruit1;
    }
    else if (mysteryNum === 2) {
        return mystery.fruit2;
    }
    else if (mysteryNum === 3) {
        return mystery.fruit3;
    }
    else if (mysteryNum === 4) {
        return mystery.fruit4;
    }
    else if (mysteryNum === 5) {
        return mystery.fruit5;
    }
    return undefined;
}


/***/ }),

/***/ "rOcc":
/*!********************************!*\
  !*** ./src/utils/key-dates.ts ***!
  \********************************/
/*! exports provided: Months, addDays, LIT_DATES_2020, LIT_DATES_2021, LIT_YEAR_2020_2021 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Months", function() { return Months; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDays", function() { return addDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIT_DATES_2020", function() { return LIT_DATES_2020; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIT_DATES_2021", function() { return LIT_DATES_2021; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIT_YEAR_2020_2021", function() { return LIT_YEAR_2020_2021; });
/* harmony import */ var src_app_models_liturgical_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/liturgical-colors */ "72Gp");

var Months;
(function (Months) {
    Months[Months["JAN"] = 0] = "JAN";
    Months[Months["FEB"] = 1] = "FEB";
    Months[Months["MAR"] = 2] = "MAR";
    Months[Months["APR"] = 3] = "APR";
    Months[Months["MAY"] = 4] = "MAY";
    Months[Months["JUN"] = 5] = "JUN";
    Months[Months["JUL"] = 6] = "JUL";
    Months[Months["AUG"] = 7] = "AUG";
    Months[Months["SEP"] = 8] = "SEP";
    Months[Months["OCT"] = 9] = "OCT";
    Months[Months["NOV"] = 10] = "NOV";
    Months[Months["DEC"] = 11] = "DEC";
})(Months || (Months = {}));
function addDays(baseDate, days) {
    const workingDate = new Date(baseDate);
    workingDate.setDate(workingDate.getDate() + days);
    return workingDate;
}
const LIT_DATES_2020 = {
    advent: {
        startDate: new Date(2020, Months.NOV, 29),
        endDate: new Date(2020, Months.DEC, 24),
        name: 'test-advent',
        color: src_app_models_liturgical_colors__WEBPACK_IMPORTED_MODULE_0__["LiturgicalColors"].VIOLET
    },
    christmas: {
        startDate: new Date(2020, Months.DEC, 25),
        endDate: new Date(2021, Months.JAN, 10),
        name: 'test-christmas',
        color: src_app_models_liturgical_colors__WEBPACK_IMPORTED_MODULE_0__["LiturgicalColors"].WHITE
    },
    lent: {
        startDate: new Date(2020, Months.FEB, 26),
        endDate: new Date(2020, Months.APR, 9),
        name: 'test-lent',
        color: src_app_models_liturgical_colors__WEBPACK_IMPORTED_MODULE_0__["LiturgicalColors"].VIOLET
    },
    triduum: {
        startDate: new Date(2020, Months.APR, 9),
        endDate: new Date(2020, Months.APR, 12),
        name: 'test-triduum',
        color: src_app_models_liturgical_colors__WEBPACK_IMPORTED_MODULE_0__["LiturgicalColors"].RED
    },
    easter: {
        startDate: new Date(2020, Months.APR, 12),
        endDate: new Date(2020, Months.MAY, 31),
        name: 'test-easter',
        color: src_app_models_liturgical_colors__WEBPACK_IMPORTED_MODULE_0__["LiturgicalColors"].WHITE
    }
};
const LIT_DATES_2021 = {
    advent: {
        startDate: new Date(2021, Months.NOV, 28),
        endDate: new Date(2021, Months.DEC, 24),
        name: 'test-advent',
        color: src_app_models_liturgical_colors__WEBPACK_IMPORTED_MODULE_0__["LiturgicalColors"].VIOLET
    },
    christmas: {
        startDate: new Date(2021, Months.DEC, 25),
        endDate: new Date(2022, Months.JAN, 9),
        name: 'test-christmas',
        color: src_app_models_liturgical_colors__WEBPACK_IMPORTED_MODULE_0__["LiturgicalColors"].WHITE
    },
    lent: {
        startDate: new Date(2021, Months.FEB, 17),
        endDate: new Date(2021, Months.APR, 1),
        name: 'test-lent',
        color: src_app_models_liturgical_colors__WEBPACK_IMPORTED_MODULE_0__["LiturgicalColors"].VIOLET
    },
    triduum: {
        startDate: new Date(2021, Months.APR, 1),
        endDate: new Date(2021, Months.APR, 4),
        name: 'test-triduum',
        color: src_app_models_liturgical_colors__WEBPACK_IMPORTED_MODULE_0__["LiturgicalColors"].RED
    },
    easter: {
        startDate: new Date(2021, Months.APR, 4),
        endDate: new Date(2021, Months.MAY, 23),
        name: 'test-easter',
        color: src_app_models_liturgical_colors__WEBPACK_IMPORTED_MODULE_0__["LiturgicalColors"].WHITE
    }
};
const LIT_YEAR_2020_2021 = {
    advent: LIT_DATES_2020.advent,
    christmas: LIT_DATES_2020.christmas,
    lent: LIT_DATES_2021.lent,
    triduum: LIT_DATES_2021.triduum,
    easter: LIT_DATES_2021.easter
};


/***/ }),

/***/ "t1Hb":
/*!********************************************!*\
  !*** ./src/app/models/liturgical-dates.ts ***!
  \********************************************/
/*! exports provided: LiturgicalDates, PeriodStatus, automaticSelection, ordinaryTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiturgicalDates", function() { return LiturgicalDates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeriodStatus", function() { return PeriodStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "automaticSelection", function() { return automaticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordinaryTime", function() { return ordinaryTime; });
/* harmony import */ var _liturgical_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./liturgical-colors */ "72Gp");

class LiturgicalDates {
    constructor(source) {
        if (source) {
            this.advent = source.advent;
            this.christmas = source.christmas;
            this.lent = source.lent;
            this.triduum = source.triduum;
            this.easter = source.easter;
        }
    }
}
var PeriodStatus;
(function (PeriodStatus) {
    PeriodStatus[PeriodStatus["GOOD"] = 0] = "GOOD";
    PeriodStatus[PeriodStatus["MISSING"] = 1] = "MISSING";
    PeriodStatus[PeriodStatus["INCREMENT_YEAR"] = 2] = "INCREMENT_YEAR";
})(PeriodStatus || (PeriodStatus = {}));
const automaticSelection = {
    name: $localize `:@@:Automatic`,
    color: undefined
};
const ordinaryTime = {
    name: $localize `:@@:Ordinary Time`,
    color: _liturgical_colors__WEBPACK_IMPORTED_MODULE_0__["LiturgicalColors"].GREEN
};


/***/ }),

/***/ "tV7K":
/*!****************************************!*\
  !*** ./src/utils/dates-lent-easter.ts ***!
  \****************************************/
/*! exports provided: gaussEaster, calculateLentAndEaster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gaussEaster", function() { return gaussEaster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateLentAndEaster", function() { return calculateLentAndEaster; });
/* harmony import */ var src_app_models_liturgical_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/liturgical-colors */ "72Gp");
/* harmony import */ var _key_dates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./key-dates */ "rOcc");


/**
 * References:
 * https://www.geeksforgeeks.org/how-to-calculate-the-easter-date-for-a-given-year-using-gauss-algorithm/
 * https://www.usccb.org/prayer-worship/liturgical-year/lent
 * https://www.usccb.org/prayer-worship/liturgical-year/triduum
 * https://www.usccb.org/prayer-worship/liturgical-year/easter
 *
 * @param year
 */
function gaussEaster(year) {
    const a = year % 19;
    const b = year % 4;
    const c = year % 7;
    const p = Math.floor(year / 100);
    const q = Math.floor((13 + 8 * p) / 25);
    const m = Math.floor(15 - q + p - p / 4) % 30;
    const n = Math.floor(4 + p - p / 4) % 7;
    const d = Math.floor(19 * a + m) % 30;
    const e = Math.floor(2 * b + 4 * c + 6 * d + n) % 7;
    const days = Math.floor(22 + d + e);
    if (d == 29 && e == 6) {
        return new Date(year, _key_dates__WEBPACK_IMPORTED_MODULE_1__["Months"].APR, 19);
    }
    else if (d == 28 && e == 6) {
        return new Date(year, _key_dates__WEBPACK_IMPORTED_MODULE_1__["Months"].APR, 18);
    }
    return (days > 31)
        ? new Date(year, _key_dates__WEBPACK_IMPORTED_MODULE_1__["Months"].APR, days - 31)
        : new Date(year, _key_dates__WEBPACK_IMPORTED_MODULE_1__["Months"].MAR, days);
}
function calculateLentAndEaster(appDate, localization) {
    let easterDay = gaussEaster(appDate.currentYear);
    if (appDate.date > easterDay) {
        easterDay = gaussEaster(appDate.currentYear + 1);
    }
    const endEaster = Object(_key_dates__WEBPACK_IMPORTED_MODULE_1__["addDays"])(easterDay, 49);
    const lentEnds = Object(_key_dates__WEBPACK_IMPORTED_MODULE_1__["addDays"])(easterDay, -3);
    const lentStarts = Object(_key_dates__WEBPACK_IMPORTED_MODULE_1__["addDays"])(lentEnds, -43);
    return {
        lent: {
            startDate: lentStarts,
            endDate: lentEnds,
            name: localization.lentLabel,
            color: src_app_models_liturgical_colors__WEBPACK_IMPORTED_MODULE_0__["LiturgicalColors"].VIOLET
        },
        triduum: {
            startDate: lentEnds,
            endDate: easterDay,
            name: localization.triduumLabel,
            color: src_app_models_liturgical_colors__WEBPACK_IMPORTED_MODULE_0__["LiturgicalColors"].RED
        },
        easter: {
            startDate: easterDay,
            endDate: endEaster,
            name: localization.easterLabel,
            color: src_app_models_liturgical_colors__WEBPACK_IMPORTED_MODULE_0__["LiturgicalColors"].WHITE
        }
    };
}


/***/ }),

/***/ "tdVI":
/*!**********************************************!*\
  !*** ./src/app/services/app-date.service.ts ***!
  \**********************************************/
/*! exports provided: AppDateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDateService", function() { return AppDateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppDateService {
    constructor(activateRoute) {
        this.activateRoute = activateRoute;
        this.activateRoute.queryParams.subscribe(params => {
            if ('use-date' in params) {
                const value = params['use-date'];
                const useDate = new Date(value);
                this.updateDate(this.addDays(useDate, 1));
            }
        });
        this.updateDate(new Date());
    }
    get date() {
        return this._date;
    }
    get currentYear() {
        return this._currentYear;
    }
    normalizeStringDate(source) {
        return (source) ? this.normalizeDate(new Date(source)) : undefined;
    }
    normalizeDate(source) {
        const xformDate = new Date(source);
        return new Date(xformDate.getFullYear(), xformDate.getMonth(), xformDate.getDate());
    }
    addDays(source, adjustDays) {
        return new Date(source.getFullYear(), source.getMonth(), source.getDate() + adjustDays);
    }
    updateDate(date) {
        const baseDate = (date) ? this.normalizeDate(date) : this.normalizeDate(new Date());
        console.log(`processing: ${baseDate}`);
        this._currentYear = baseDate.getFullYear();
        this._date = new Date(this._currentYear, baseDate.getMonth(), baseDate.getDate());
    }
}
AppDateService.ɵfac = function AppDateService_Factory(t) { return new (t || AppDateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
AppDateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppDateService, factory: AppDateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppDateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "vJvT":
/*!***************************************************************!*\
  !*** ./src/app/components/pats-beads/pats-beads.component.ts ***!
  \***************************************************************/
/*! exports provided: PatsBeadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatsBeadsComponent", function() { return PatsBeadsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _pats_beads_coords__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pats-beads-coords */ "S4vp");
/* harmony import */ var src_app_services_app_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/app-config.service */ "JvtB");




class PatsBeadsComponent {
    constructor(appConfig) {
        this.appConfig = appConfig;
        this.highlightBeadIdx = 0;
        this.rawWidth = 1608;
        this.rawHeight = 3704;
        this.rawCoords = _pats_beads_coords__WEBPACK_IMPORTED_MODULE_1__["PATS_BEADS_COORDS_LONG"];
    }
    ngOnInit() { }
    ngOnChanges(changes) { }
    ngAfterViewInit() { }
    highlightStyle() {
        const offsetX = this.appConfig.isPortrait ? -100 : 0;
        const offsetY = this.appConfig.isPortrait ? -100 : 0;
        const point = this.rawCoords[this.highlightBeadIdx];
        return `left: ${point.x + offsetX}px; top: ${point.y + offsetY}px;` + this.imageStyle();
    }
    beadsTransformStyle() {
        const useRawWidth = (this.appConfig.isPortrait) ? this.rawHeight : this.rawWidth;
        const useRawHeight = (this.appConfig.isPortrait) ? this.rawWidth : this.rawHeight;
        const hscale = window.innerHeight / useRawHeight;
        const wscale = window.innerWidth / useRawWidth;
        const offset = (this.appConfig.isPortrait) ? -0.015 : -0.04;
        const scale = (hscale < wscale) ? hscale + offset : wscale + offset;
        return (this.appConfig.isPortrait)
            ? `transform: rotate(90deg) scale(${scale});`
            : `transform: scale(${scale});`;
    }
    imageStyle() {
        return (this.appConfig.isPortrait)
            ? `margin-top: ${this.rawHeight * -1}px;`
            : '';
    }
    imagePlaceholderStyle() {
        return '';
        // return (this.appConfig.isPortrait)
        //   ? `height: ${this.imageWidth}px;`
        //   : '';
    }
}
PatsBeadsComponent.ɵfac = function PatsBeadsComponent_Factory(t) { return new (t || PatsBeadsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_config_service__WEBPACK_IMPORTED_MODULE_2__["AppConfigService"])); };
PatsBeadsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PatsBeadsComponent, selectors: [["app-pats-beads"]], inputs: { highlightBeadIdx: "highlightBeadIdx" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 6, consts: [[1, "pats-beads-container"], ["id", "pats-beads-div"], ["id", "pats-beads-img", "src", "assets/cropped-2.png"], [1, "pats-beads-highlight-div"]], template: function PatsBeadsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.beadsTransformStyle());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.imageStyle());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.highlightStyle());
    } }, styles: ["@media (orientation: portrait) {\n  .pats-beads-container[_ngcontent-%COMP%] {\n    height: 24vh;\n    width: 24vw;\n  }\n}\n#pats-beads-div[_ngcontent-%COMP%] {\n  background-color: transparent;\n  width: 10px;\n}\n#pats-beads-img[_ngcontent-%COMP%] {\n  position: absolute;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  left: 0px;\n  top: 0px;\n}\n.pats-beads-highlight-div[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: red;\n  border: 50px solid darkred;\n  border-radius: 50%;\n  height: 20vh;\n  width: 20vh;\n  opacity: 0.5;\n  z-index: 2;\n}\n@media (orientation: landscape) {\n  .pats-beads-highlight-div[_ngcontent-%COMP%] {\n    margin-top: -15vw;\n    margin-left: -10vw;\n  }\n}\n#pats-beads-image-placeholder[_ngcontent-%COMP%] {\n  background-color: blueviolet;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhdHMtYmVhZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLFlBQUE7SUFDQSxXQUFBO0VBQ0Y7QUFDRjtBQUVBO0VBQ0UsNkJBQUE7RUFDQSxXQUFBO0FBQUY7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUFBRjtBQUdBO0VBQ0Usa0JBQUE7RUFFQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFFQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLFlBQUE7RUFDQSxVQUFBO0FBSEY7QUFNQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxrQkFBQTtFQUhGO0FBQ0Y7QUFNQTtFQUNFLDRCQUFBO0VBQ0EsVUFBQTtBQUpGIiwiZmlsZSI6InBhdHMtYmVhZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gIC5wYXRzLWJlYWRzLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDI0dmg7XHJcbiAgICB3aWR0aDogMjR2dztcclxuICB9XHJcbn1cclxuXHJcbiNwYXRzLWJlYWRzLWRpdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbn1cclxuXHJcbiNwYXRzLWJlYWRzLWltZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHRvcDogMHB4O1xyXG59XHJcblxyXG4ucGF0cy1iZWFkcy1oaWdobGlnaHQtZGl2IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICBib3JkZXI6IDUwcHggc29saWQgZGFya3JlZDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgLy8gbWF4LWhlaWdodDogNTAwdmg7XHJcbiAgaGVpZ2h0OiAyMHZoO1xyXG4gIHdpZHRoOiAyMHZoO1xyXG5cclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgLnBhdHMtYmVhZHMtaGlnaGxpZ2h0LWRpdiB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTV2dztcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTB2dztcclxuICB9XHJcbn1cclxuXHJcbiNwYXRzLWJlYWRzLWltYWdlLXBsYWNlaG9sZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatsBeadsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pats-beads',
                templateUrl: './pats-beads.component.html',
                styleUrls: ['./pats-beads.component.scss']
            }]
    }], function () { return [{ type: src_app_services_app_config_service__WEBPACK_IMPORTED_MODULE_2__["AppConfigService"] }]; }, { highlightBeadIdx: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_testing_buzz_feedback_buzz_feedback_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/testing/buzz-feedback/buzz-feedback.component */ "Kn0e");
/* harmony import */ var _components_testing_layouts_layouts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/testing/layouts/layouts.component */ "DZO2");







const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'testing/layout', component: _components_testing_layouts_layouts_component__WEBPACK_IMPORTED_MODULE_4__["LayoutsComponent"] },
    { path: 'testing/buzz', component: _components_testing_buzz_feedback_buzz_feedback_component__WEBPACK_IMPORTED_MODULE_3__["BuzzFeedbackComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xMmV":
/*!******************************************************************************!*\
  !*** ./src/app/components/holy-rosary-prayer/mysteries/mystery-sorrowful.ts ***!
  \******************************************************************************/
/*! exports provided: MysterySorrowfulComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MysterySorrowfulComponent", function() { return MysterySorrowfulComponent; });
class MysterySorrowfulComponent {
    constructor() { }
    get mysterySequenceName() {
        return 'Sorrowful';
    }
    get mystery1() {
        return $localize `:@@sorrowful-mystery-1:The Agony in the Garden`;
    }
    get fruit1() {
        return $localize `:@@sorrowful-fruit-1:Contrition for our sins`;
    }
    get mystery2() {
        return $localize `:@@sorrowful-mystery-2:The Scourging at the Pillar`;
    }
    get fruit2() {
        return $localize `:@@sorrowful-fruit-2:Mortification of our senses`;
    }
    get mystery3() {
        return $localize `:@@sorrowful-mystery-3:The Crowning of Thorns`;
    }
    get fruit3() {
        return $localize `:@@sorrowful-fruit-3:Interior mortification`;
    }
    get mystery4() {
        return $localize `:@@sorrowful-mystery-4:The Carrying of the Cross`;
    }
    get fruit4() {
        return $localize `:@@sorrowful-fruit-4:Patience under crosses`;
    }
    get mystery5() {
        return $localize `:@@sorrowful-mystery-5:The Crucifixion and Death of our Lord`;
    }
    get fruit5() {
        return $localize `:@@sorrowful-fruit-5:That we may die to ourselves`;
    }
}


/***/ }),

/***/ "z+NF":
/*!*********************************************************!*\
  !*** ./src/app/components/notices/notices.component.ts ***!
  \*********************************************************/
/*! exports provided: NoticesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticesComponent", function() { return NoticesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.component */ "Sy1n");
/* harmony import */ var _liturgical_dates_liturgical_dates_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../liturgical-dates/liturgical-dates.component */ "WsnB");




class NoticesComponent {
    constructor(appComponent) {
        this.appVersion = appComponent.appVersion;
    }
    ngOnInit() {
    }
}
NoticesComponent.ɵfac = function NoticesComponent_Factory(t) { return new (t || NoticesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"])); };
NoticesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NoticesComponent, selectors: [["app-notices"]], decls: 9, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4786716311029036527$$SRC_APP_COMPONENTS_NOTICES_NOTICES_COMPONENT_TS_1 = goog.getMsg(" Important Times ");
        i18n_0 = MSG_EXTERNAL_4786716311029036527$$SRC_APP_COMPONENTS_NOTICES_NOTICES_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟ccd97997b2b32e306dd62c8a4beb2b1f1e7e55b1␟4786716311029036527: Important Times `;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4742885352804981598$$SRC_APP_COMPONENTS_NOTICES_NOTICES_COMPONENT_TS_3 = goog.getMsg(" Rosary Beads ");
        i18n_2 = MSG_EXTERNAL_4742885352804981598$$SRC_APP_COMPONENTS_NOTICES_NOTICES_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟74a7870f0c50ad13e8df73d582077263b10a51a9␟4742885352804981598: Rosary Beads `;
    } return [[1, "content-border"], [1, "section-title"], i18n_0, i18n_2]; }, template: function NoticesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-liturgical-dates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](7, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" v", ctx.appVersion, " ");
    } }, directives: [_liturgical_dates_liturgical_dates_component__WEBPACK_IMPORTED_MODULE_2__["LiturgicalDatesComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpY2VzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoticesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notices',
                templateUrl: './notices.component.html',
                styleUrls: ['./notices.component.scss']
            }]
    }], function () { return [{ type: src_app_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map