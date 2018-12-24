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

/***/ "./src/app/addmeeting/addmeeting.component.css":
/*!*****************************************************!*\
  !*** ./src/app/addmeeting/addmeeting.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\n    border-left: 5px solid #42A948; /* green */\n  }\n  \n  .ng-invalid:not(form)  {\n    border-left: 5px solid #a94442; /* orange*/\n  }\n  \n  body {\n    background : black;\n  }\n  \n  .form-container {\n    padding: 20px;\n    background: #f1f4f7;\n    box-shadow: 0 3px 20px 0 #ff6600;\n    color:black;\n  }\n  \n  .form-group-prop{\n    width: 50%;\n    \n  }"

/***/ }),

/***/ "./src/app/addmeeting/addmeeting.component.html":
/*!******************************************************!*\
  !*** ./src/app/addmeeting/addmeeting.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\n  <h1 style=\"font-family:italic;\">Add Meeting</h1>\n  <div class=\"row\" style=\"text-align:left\">\n      <div class=\"col-md-3\"></div>\n      <div class=\"col-md-6 col-xs-12 form-container\">\n          <form #meetingAddForm=\"ngForm\" (ngSubmit)=\"addMeeting()\">\n\n\n              <div class=\"form-group\">\n                  <label>Meeting By</label>\n                  <p>{{adminName}}</p>\n              </div>\n\n\n\n\n              <div class=\"form-group\">\n                  <label>Location</label>\n                  <input type=\"text\" name=\"where\" [(ngModel)]=\"where\" #wh=\"ngModel\" class=\"form-control\" placeholder=\"Enter Location.\" required>\n              </div>\n\n\n              <div class=\"form-group\">\n                  <label>Subject of meeting</label>\n                  <input type=\"text\" name=\"pupose\" [(ngModel)]=\"purpose\" #pur=\"ngModel\" class=\"form-control\" placeholder=\"Enter Purpose.\" required>\n              </div>\n\n              <div class=\"form-group\">\n                <label>Email ID</label>\n                <input type=\"text\" name=\"emailId\" [(ngModel)]=\"emailId\" class=\"form-control\" placeholder=\"Enter Your Email\" required>\n            </div>\n\n              <div class=\"form-group\">\n                <label>\n                    Date\n                    <input name='date' [(ngModel)]='date' placeholder=\"MM/DD/YYYY\">\n                    \n                </label>\n              </div>\n\n\n              <div class=\"form-group\">\n                  <label>\n                      Time\n                  </label>\n                  <select [(ngModel)]=\"time\" #t=\"ngModel\" name=\"time\" \n                  class=\"form-control\" id=\"ccode\" required>\n                      <option *ngFor=\"let hour of hourArray\" [value]=\"hour\">{{hour}}</option>\n                  </select>\n              \n              </div>\n\n              <button type=\"submit\" class=\"btn btn-primary\" style=\"color:white\" >Add Meeting</button>\n\n          </form>\n      </div>\n      <div class=\"col-md-3\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/addmeeting/addmeeting.component.ts":
/*!****************************************************!*\
  !*** ./src/app/addmeeting/addmeeting.component.ts ***!
  \****************************************************/
/*! exports provided: AddmeetingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddmeetingComponent", function() { return AddmeetingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var _meeting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../meeting.service */ "./src/app/meeting.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddmeetingComponent = /** @class */ (function () {
    function AddmeetingComponent(socketService, route, router, toastr, userService, cookie, meetingService) {
        var _this = this;
        this.socketService = socketService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.userService = userService;
        this.cookie = cookie;
        this.meetingService = meetingService;
        this.adminName = '';
        this.adminId = '';
        this.userId = '';
        this.where = '';
        this.emailId = '';
        this.purpose = '';
        this.date = '';
        this.time = '23:00';
        this.hourArray = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
        this.authToken = '';
        this.isAdminMode = false;
        this.listenVerifyUserConfirmation = function () {
            _this.socketService.verifyUser()
                .subscribe(function (data) {
                _this.socketDisconnected = false;
                // this.toastr.info(data.message, "Info.");
                var authData = {
                    authToken: _this.cookie.get('authToken'),
                    userId: _this.userId
                };
                _this.socketService.setUser(authData);
            });
        }; //end verify user consfirmation
        this.listenUserSetConfirmation = function () {
            _this.socketService.listenUserSetConfirmation()
                .subscribe(function (data) {
                // this.toastr.info("User Set.", "Info.");
                _this.socketId = data.socketId;
                _this.socketName = data.socketName;
                _this.roomName = data.roomName;
            });
        }; //end verify user consfirmation
        this.listenForError = function () {
            _this.socketService.errorListener()
                .subscribe(function (data) {
                _this.toastr.error(data, "Error");
            });
        }; //end listen for error
        this.listenSocketDisconnect = function () {
            _this.socketService.disconnectedSocketListener()
                .subscribe(function (data) {
                _this.socketDisconnected = true;
                _this.toastr.error(data, "SOCKET DISCONNECTED.");
            });
        }; //end listen for scoket disconnect
        this.onlineUserList = function () {
            _this.socketService.onlineUserListListener()
                .subscribe(function (data) {
                if (data.message == "join") {
                    // this.toastr.info(data.sendBy + " joined", "Info.");
                }
                else {
                    //this.toastr.info(data.sendBy + " left", "Info.");
                }
                console.log(data + " new user connected/ disconnected");
                var onlineUserArray = [];
                onlineUserArray = data.list;
            });
        }; //end online user list
        this.isEmpty = function (value) {
            if (value === null || value === undefined || _this.trim(value) === '' || value.length === 0) {
                return true;
            }
            else {
                return false;
            }
        };
        this.trim = function (x) {
            var value = String(x);
            return value.replace(/^\s+|\s+$/gm, '');
        };
        console.log('add meeting works');
        this.router.events.forEach(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                _this.socketService.disconnectSocket();
            }
        });
    }
    AddmeetingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authToken = this.cookie.get('authToken');
        var urlParams = this.filterUrl();
        this.checkUrlParamsAndDecideMode(urlParams);
        if (this.isAdminMode) {
            //if the there is admin id and user id then only we can allow adding of meeting
        }
        else {
            //as no admin id we can't allow add meeting so routing it login
            this.toastr.error('You are not admin.', "OOPS!");
            setTimeout(function () {
                _this.router.navigate(['/']);
            }, 2000);
        }
        this.listenVerifyUserConfirmation();
        this.listenUserSetConfirmation();
        this.listenForError();
        this.listenSocketDisconnect();
        this.onlineUserList();
    };
    AddmeetingComponent.prototype.filterUrl = function () {
        var urlParams;
        this.route.queryParams.subscribe(function (params) {
            urlParams = params;
        });
        return urlParams;
    }; //end filter url
    AddmeetingComponent.prototype.checkUrlParamsAndDecideMode = function (url) {
        var _this = this;
        this.adminId = url.adminId;
        this.userId = url.userId;
        //we need both to be there
        if (this.isEmpty(this.adminId) && this.isEmpty(this.userId)) {
            setTimeout(function () {
                _this.router.navigate(['/']);
            }, 2000);
        }
        else {
            if (this.adminId && this.userId) {
                this.isAdminMode = true;
                var userInfo = this.userService.getUserInfoFromLocalstorage();
                this.adminName = userInfo.firstName + " " + userInfo.lastName + "- admin";
            }
            else {
                this.isAdminMode = false;
            }
        }
    };
    AddmeetingComponent.prototype.addMeeting = function () {
        var _this = this;
        var data = {
            authToken: this.authToken,
            adminId: this.adminId,
            userId: this.userId,
            adminName: this.adminName,
            where: this.where,
            emailId: this.emailId,
            purpose: this.purpose,
            date: this.date,
            time: this.time,
            username: 'not necessary'
        };
        this.meetingService.addMeeting(data).subscribe(function (data) {
            var error = data.error;
            var message = data.message;
            if (error) {
                _this.toastr.error(message, 'Fail!!');
            }
            else {
                _this.toastr.success(message, 'Success!');
                var broadcastData = {
                    broadcastMessageBy: _this.adminId,
                    broadcastMessageFor: _this.userId,
                    broadcastMessage: "A meeting has been added for you by " + _this.adminName,
                };
                _this.socketService.broadcastMessage(broadcastData);
                setTimeout(function () {
                    _this.router.navigate(['/usercalendar'], {
                        queryParams: {
                            'adminId': _this.adminId,
                            'userId': _this.userId
                        }
                    });
                }, 2000);
            }
        }, function (error) {
            _this.toastr.error(error.message, 'Oops!');
        });
    };
    AddmeetingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addmeeting',
            template: __webpack_require__(/*! ./addmeeting.component.html */ "./src/app/addmeeting/addmeeting.component.html"),
            styles: [__webpack_require__(/*! ./addmeeting.component.css */ "./src/app/addmeeting/addmeeting.component.css")]
        }),
        __metadata("design:paramtypes", [_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"], _meeting_service__WEBPACK_IMPORTED_MODULE_4__["MeetingService"]])
    ], AddmeetingComponent);
    return AddmeetingComponent;
}());



/***/ }),

/***/ "./src/app/alluser/alluser.component.css":
/*!***********************************************!*\
  !*** ./src/app/alluser/alluser.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".head{\n    font-family : italic;\n    color:black;\n    font-size : 1.5rem;\n    box-shadow: 0 3px 20px 0 #ff6600;\n}\n\n\n.card {\n    margin-top: 6px;\n    border-color: rgb(247, 40, 40);\n    background: rgb(243, 245, 245);\n    box-shadow: 0 3px 20px 0 #ff6600; \n}\n\n\n.card:hover {\n    background-color: #b5f7a8;\n  }\n\n\n"

/***/ }),

/***/ "./src/app/alluser/alluser.component.html":
/*!************************************************!*\
  !*** ./src/app/alluser/alluser.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-4 col-lg-4 col-xs-6 col-md-4\">\n        <h4><i style=\"font-size:24px\" class=\"fa\">&#xf0c0;</i> {{userName}}</h4>\n      </div>\n      <div class=\"col-sm-4 col-xs-0 col-lg-4 col-md-4\"></div>\n      \n      <div class=\"col-sm-2 col-xs-3 col-lg-2 col-md-2\">\n      \n        </div>\n        <div class=\"col-sm-2 col-xs-3 col-lg-2 col-md-2\">\n        <button  class=\" btn btn-primary btn-sm\" style=\"font-size:1.5rem;\" [routerLink]=\"['/login']\"> <i style=\"font-size:24px\" class=\"fa\">&#xf29b;</i> : Exit </button>\n      </div>\n    </div>\n\n    <br>\n\n        <div class=\"row text-center\" *ngIf=\"allUserList\" >\n          <div class=\"col-sm-4 col-lg-4 col-xs-12 col-md-4 box\" *ngFor=\"let user of allUserList\">\n          <div class=\"card\">\n             <div class=\"card-header head\">\n              <i style=\"font-size:24px\" class=\"fa\">&#xf2be;</i> {{user.firstName}} {{user.lastName}}\n              </div>\n              <div class=\"card-body\">\n                <h5 class=\"card-text\"><i class=\"fa fa-id-card\" aria-hidden=\"true\"> {{user.userId}}</i></h5>\n                <p class=\"card-text\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i> {{user.emailId}}</p>\n                <p class=\"card-text\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i> {{user.phoneNumber}}</p>\n                <div *ngIf=\"user.userId != userId\">\n                    <button class=\" btn btn-primary btn-sm\"  (click)=\"goToUserCalendar(user)\">\n                      <i class=\"fa fa-calendar\"></i>  -  Schedule Meeting\n                    </button>\n                </div>\n              </div>\n            </div>\n         </div>\n         </div>\n\n  </div>"

/***/ }),

/***/ "./src/app/alluser/alluser.component.ts":
/*!**********************************************!*\
  !*** ./src/app/alluser/alluser.component.ts ***!
  \**********************************************/
/*! exports provided: AlluserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlluserComponent", function() { return AlluserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../socket.service */ "./src/app/socket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AlluserComponent = /** @class */ (function () {
    function AlluserComponent(route, router, http, toastr, userService, Cookie, socketService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.http = http;
        this.toastr = toastr;
        this.userService = userService;
        this.Cookie = Cookie;
        this.socketService = socketService;
        this.checkStatus = function () {
            if (_this.authToken === undefined || _this.authToken === '' || _this.authToken === null || _this.admin != 'admin') {
                _this.router.navigate(['/']);
                return false;
            }
            else {
                return true;
            }
        }; //end check status
        //get all users end
        this.goToUserCalendar = function (user) {
            setTimeout(function () {
                _this.router.navigate(['/usercalendar'], { queryParams: { 'adminId': _this.userId,
                        'userId': user.userId } });
            }, 2000);
        };
        console.log('all users works');
        this.router.events.forEach(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                //this.socketService.disconnectSocket();
            }
        });
    }
    AlluserComponent.prototype.ngOnInit = function () {
        this.authToken = this.Cookie.get('authToken');
        var userInfo = this.userService.getUserInfoFromLocalstorage();
        this.userName = userInfo.firstName + " " + userInfo.lastName;
        this.userId = userInfo.userId;
        this.admin = userInfo.admin;
        this.checkStatus();
        if (this.admin === 'admin') {
            this.userName = this.userName + "-admin";
        }
        this.getAllUser();
    };
    AlluserComponent.prototype.getAllUser = function () {
        var _this = this;
        this.userService.getAllUsers(this.authToken).subscribe(function (data) {
            var error = data.error;
            var message = data.message;
            var result = data.data;
            if (error) {
                _this.toastr.error(message, 'Fail!!');
                _this.allUserList = [];
            }
            else {
                _this.allUserList = result;
            }
        }, function (error) {
            _this.toastr.error(error.message, 'Oops!');
        });
    };
    AlluserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alluser',
            template: __webpack_require__(/*! ./alluser.component.html */ "./src/app/alluser/alluser.component.html"),
            styles: [__webpack_require__(/*! ./alluser.component.css */ "./src/app/alluser/alluser.component.css")],
            providers: [_socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"], _socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"]])
    ], AlluserComponent);
    return AlluserComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-custom {\n    background: Green;\n    background-color:#f13918;\n\n      \n       \n    }\n    #font-adjust{\n        font-family: Courier;\n        background: rgb(9, 102, 126);\n        font-weight:bold;\n        color:rgb(56, 58, 47);\n        cursor:pointer;\n        box-shadow: 0 3px 20px 0 #e7eb1b;\n        \n       text-transform: uppercase;\n       position :center;\n       border-radius: 5px;\n       display: flex;\n       margin-left: auto;\n        margin-right: auto;\n       \n      \n        \n    \n    }\n    P.blocktext {\n        margin-left: auto;\n        margin-right: auto;\n        width: 8em;\n    }\n\n\n    "

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- navbar start -->\n<nav class=\"navbar navbar-expand-md navbar-custom navbar-light fixed-top \">\n    <div class=\"container-fluid\">\n         <a class=\"navbar-brand\" id=\"font-adjust\">\n           *******************  Meeting Planner Application  *******************\n         </a>\n           \n     </div>\n </nav>\n <br/>\n \n <br/>\n <br/>\n <br/>\n \n \n \n <router-outlet></router-outlet>\n \n \n \n "

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'planner';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgotpassword/forgotpassword.component */ "./src/app/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./changepassword/changepassword.component */ "./src/app/changepassword/changepassword.component.ts");
/* harmony import */ var _verify_verify_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./verify/verify.component */ "./src/app/verify/verify.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _meeting_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./meeting.service */ "./src/app/meeting.service.ts");
/* harmony import */ var _sort_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sort.pipe */ "./src/app/sort.pipe.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _alluser_alluser_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./alluser/alluser.component */ "./src/app/alluser/alluser.component.ts");
/* harmony import */ var _addmeeting_addmeeting_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./addmeeting/addmeeting.component */ "./src/app/addmeeting/addmeeting.component.ts");
/* harmony import */ var _editmeeting_editmeeting_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./editmeeting/editmeeting.component */ "./src/app/editmeeting/editmeeting.component.ts");
/* harmony import */ var _usercalendar_usercalendar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./usercalendar/usercalendar.component */ "./src/app/usercalendar/usercalendar.component.ts");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! angularx-flatpickr */ "./node_modules/angularx-flatpickr/fesm5/angularx-flatpickr.js");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_24__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import some more module
















 // you may need to adjust the css import depending on your build tool
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"],
                _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_5__["ForgotpasswordComponent"],
                _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_6__["ChangepasswordComponent"],
                _alluser_alluser_component__WEBPACK_IMPORTED_MODULE_17__["AlluserComponent"],
                _addmeeting_addmeeting_component__WEBPACK_IMPORTED_MODULE_18__["AddmeetingComponent"],
                _editmeeting_editmeeting_component__WEBPACK_IMPORTED_MODULE_19__["EditmeetingComponent"],
                _usercalendar_usercalendar_component__WEBPACK_IMPORTED_MODULE_20__["UsercalendarComponent"],
                _verify_verify_component__WEBPACK_IMPORTED_MODULE_7__["VerifyComponent"],
            ],
            imports: [
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_22__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_22__["OwlNativeDateTimeModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                angular_calendar__WEBPACK_IMPORTED_MODULE_21__["CalendarModule"].forRoot(),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot(),
                angularx_flatpickr__WEBPACK_IMPORTED_MODULE_23__["FlatpickrModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot([
                    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
                    { path: '', redirectTo: 'login', pathMatch: 'full' },
                    { path: 'forgotpassword', component: _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_5__["ForgotpasswordComponent"] },
                    { path: 'changepassword/:changePasswordToken', component: _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_6__["ChangepasswordComponent"] },
                    { path: 'usercalendar', component: _usercalendar_usercalendar_component__WEBPACK_IMPORTED_MODULE_20__["UsercalendarComponent"] },
                    { path: 'addMeeting', component: _addmeeting_addmeeting_component__WEBPACK_IMPORTED_MODULE_18__["AddmeetingComponent"] },
                    { path: 'editMeeting', component: _editmeeting_editmeeting_component__WEBPACK_IMPORTED_MODULE_19__["EditmeetingComponent"] },
                    { path: 'alluser', component: _alluser_alluser_component__WEBPACK_IMPORTED_MODULE_17__["AlluserComponent"] },
                    { path: 'verify/:verifyToken', component: _verify_verify_component__WEBPACK_IMPORTED_MODULE_7__["VerifyComponent"] },
                    { path: '*', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                    { path: '**', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }
                ])
            ],
            providers: [_meeting_service__WEBPACK_IMPORTED_MODULE_13__["MeetingService"], _user_service__WEBPACK_IMPORTED_MODULE_15__["UserService"], _sort_pipe__WEBPACK_IMPORTED_MODULE_14__["SortPipe"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_16__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/changepassword/changepassword.component.css":
/*!*************************************************************!*\
  !*** ./src/app/changepassword/changepassword.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\n    border-left: 5px solid #42A948; \n  }\n  \n  .ng-invalid:not(form)  {\n    border-left: 5px solid #a94442;\n  }\n  \n  .form-container {\n    padding: 20px;\n    background: #f1f4f7;\n    box-shadow: 0 3px 20px 0 #ff6600;\n    color:black;\n    \n  }\n  \n  .form-group-prop{\n    width: 50%;\n  }"

/***/ }),

/***/ "./src/app/changepassword/changepassword.component.html":
/*!**************************************************************!*\
  !*** ./src/app/changepassword/changepassword.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container \">\n  <div class=\"row\" style=\"text-align:left; margin-top:10%;\">\n      <div class=\"col-md-3\" ></div>\n      <div class=\"col-md-6 col-xs-12 form-container\">\n      <form #cpform=\"ngForm\" (ngSubmit)=\"changePassword()\">\n\n        \n        <div class=\"form-group\">\n          <label>Enter New Password</label>\n\n          <input type=\"text\" name=\"emailId\" [(ngModel)]=\"emailId\"  class=\"form-control\" placeholder=\"Enter Email\"\n          required>\n\n          <input type=\"text\" name=\"password\" [(ngModel)]=\"password\"  #pass=\"ngModel\" class=\"form-control\" placeholder=\"Enter Password\"\n            required>\n        </div>\n\n\n        <button type=\"submit\" class=\"btn btn-primary\">Change Password!</button>\n        \n\n      </form>\n     \n    </div>\n    <div class=\"col-md-6\" ></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/changepassword/changepassword.component.ts":
/*!************************************************************!*\
  !*** ./src/app/changepassword/changepassword.component.ts ***!
  \************************************************************/
/*! exports provided: ChangepasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordComponent", function() { return ChangepasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangepasswordComponent = /** @class */ (function () {
    function ChangepasswordComponent(route, userService, router, toastr) {
        this.route = route;
        this.userService = userService;
        this.router = router;
        this.toastr = toastr;
        console.log('changepassword is work');
    }
    ChangepasswordComponent.prototype.ngOnInit = function () {
        this.changePasswordToken = this.route.snapshot.paramMap.get('changePasswordToken');
        if (!this.changePasswordToken) {
            this.toastr.error("Change Password Token Missing", 'TOKEN MISSING');
        }
    };
    ChangepasswordComponent.prototype.changePassword = function () {
        var _this = this;
        var userData = {
            emailId: this.emailId,
            password: this.password,
            authToken: this.changePasswordToken
        };
        this.userService.changePassword(userData).subscribe(function (data) {
            var error = data.error;
            var message = data.message;
            if (error) {
                _this.toastr.error(message, 'Fail!!');
            }
            else {
                _this.toastr.success(message, 'Success!');
                setTimeout(function () {
                    _this.router.navigate(['/login']);
                }, 1000);
            }
        }, function (error) {
            _this.toastr.error(error.message, 'Oops!');
        });
        return userData;
    };
    ChangepasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-changepassword',
            template: __webpack_require__(/*! ./changepassword.component.html */ "./src/app/changepassword/changepassword.component.html"),
            styles: [__webpack_require__(/*! ./changepassword.component.css */ "./src/app/changepassword/changepassword.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], ChangepasswordComponent);
    return ChangepasswordComponent;
}());



/***/ }),

/***/ "./src/app/editmeeting/editmeeting.component.css":
/*!*******************************************************!*\
  !*** ./src/app/editmeeting/editmeeting.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\n    border-left: 5px solid #42A948; \n  }\n  \n  .ng-invalid:not(form)  {\n    border-left: 5px solid #a94442; \n  }\n  \n  body {\n    background : black;\n  }\n  \n  .form-container {\n    padding: 20px;\n    background: #f1f4f7;\n    box-shadow: 0 3px 20px 0 #ff6600;\n    color:black;\n    \n  }\n  \n  .form-group-prop{\n    width: 50%;\n    \n  }"

/***/ }),

/***/ "./src/app/editmeeting/editmeeting.component.html":
/*!********************************************************!*\
  !*** ./src/app/editmeeting/editmeeting.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\n    <h1 style=\"font-family:italic\">Update Meeting</h1>\n \n  <div class=\"row\" style=\"text-align:left\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-8 col-xs-12 form-container\">\n          <form #meetingAddForm=\"ngForm\" (ngSubmit)=\"updateMeeting()\">\n\n\n              <div class=\"form-group\">\n                  <label>Meeting By</label>\n                  <p>{{adminName}}</p>\n              </div>\n\n\n\n              <div class=\"form-group\">\n                  <label>Location</label>\n                  <input type=\"text\" name=\"where\" [(ngModel)]=\"where\" #wh=\"ngModel\" class=\"form-control\" placeholder=\"Enter Location\" required>\n              </div>\n\n\n              <div class=\"form-group\">\n                  <label>Subject of meeting</label>\n                  <input type=\"text\" name=\"pupose\" [(ngModel)]=\"purpose\" #pur=\"ngModel\" class=\"form-control\" placeholder=\"Enter Purpose\" required>\n              </div>\n\n              <div class=\"form-group\">\n                <label>Email ID</label>\n                <input type=\"text\" name=\"emailId\" [(ngModel)]=\"emailId\" class=\"form-control\" placeholder=\"Enter Email\" required>\n            </div>\n\n\n              <div class=\"form-group\">\n                    <label>\n                        Date: MM/DD/YYYY    \n                        <input name='date' [(ngModel)]='date'>\n                        \n                    </label>\n                </div>\n\n                <div class=\"form-group\">\n                    <label>\n                        Time\n                    </label>\n                    <select [(ngModel)]=\"time\" #t=\"ngModel\" name=\"time\" \n                    class=\"form-control\" id=\"ccode\" required>\n                        <option *ngFor=\"let hour of hourArray\" [value]=\"hour\">{{hour}}</option>\n                    </select>\n                \n                </div>\n\n\n              <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!meetingAddForm.form.valid\">Update Meeting information  </button>\n\n          </form>\n      </div>\n      <div class=\"col-md-2\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/editmeeting/editmeeting.component.ts":
/*!******************************************************!*\
  !*** ./src/app/editmeeting/editmeeting.component.ts ***!
  \******************************************************/
/*! exports provided: EditmeetingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditmeetingComponent", function() { return EditmeetingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var _meeting_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../meeting.service */ "./src/app/meeting.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditmeetingComponent = /** @class */ (function () {
    function EditmeetingComponent(socketService, meetingService, route, router, toastr, userService, cookie) {
        var _this = this;
        this.socketService = socketService;
        this.meetingService = meetingService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.userService = userService;
        this.cookie = cookie;
        this.adminName = '';
        this.adminId = '';
        this.userId = '';
        this.meetingId = '';
        this.where = '';
        this.emailId = '';
        this.purpose = '';
        this.date = '';
        this.time = '23:00';
        this.hourArray = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
        this.authToken = '';
        this.isAdminMode = false;
        this.listenVerifyUserConfirmation = function () {
            _this.socketService.verifyUser()
                .subscribe(function (data) {
                _this.socketDisconnected = false;
                // this.toastr.info(data.message, "Info.");
                var authData = {
                    authToken: _this.cookie.get('authToken'),
                    userId: _this.userId
                };
                _this.socketService.setUser(authData);
            });
        }; //end verify user consfirmation
        this.listenUserSetConfirmation = function () {
            _this.socketService.listenUserSetConfirmation()
                .subscribe(function (data) {
                // this.toastr.info("User Set.", "Info.");
                _this.socketId = data.socketId;
                _this.socketName = data.socketName;
                _this.roomName = data.roomName;
            });
        }; //end verify user consfirmation
        this.listenForError = function () {
            _this.socketService.errorListener()
                .subscribe(function (data) {
                _this.toastr.error(data, "Error");
            });
        }; //end listen for error
        this.listenSocketDisconnect = function () {
            _this.socketService.disconnectedSocketListener()
                .subscribe(function (data) {
                _this.socketDisconnected = true;
                _this.toastr.error(data, "SOCKET DISCONNECTED.");
            });
        }; //end listen for scoket disconnect
        this.onlineUserList = function () {
            _this.socketService.onlineUserListListener()
                .subscribe(function (data) {
                if (data.message == "join") {
                    // this.toastr.info(data.sendBy + " joined", "Info.");
                }
                else {
                    //this.toastr.info(data.sendBy + " left", "Info.");
                }
                console.log(data + " new user connected/ disconnected");
                var onlineUserArray = [];
                onlineUserArray = data.list;
            });
        }; //end online user list
        this.isEmpty = function (value) {
            if (value === null || value === undefined || _this.trim(value) === '' || value.length === 0) {
                return true;
            }
            else {
                return false;
            }
        };
        this.trim = function (x) {
            var value = String(x);
            return value.replace(/^\s+|\s+$/gm, '');
        };
        console.log('edit meeting works');
        this.router.events.forEach(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                _this.socketService.disconnectSocket();
            }
        });
    }
    EditmeetingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authToken = this.cookie.get('authToken');
        var urlParams = this.filterUrl();
        this.checkUrlParamsAndDecideMode(urlParams);
        if (this.isAdminMode) {
            //if the there is admin id and user id then only we can allow adding of meeting
        }
        else {
            //as no admin id we can't allow add meeting so routing it login
            this.toastr.error('You are not admin.', "OOPS!");
            setTimeout(function () {
                _this.router.navigate(['/']);
            }, 2000);
        }
        this.loadEditableMeetingData();
        this.listenVerifyUserConfirmation();
        this.listenUserSetConfirmation();
        this.listenForError();
        this.listenSocketDisconnect();
        this.onlineUserList();
    };
    EditmeetingComponent.prototype.filterUrl = function () {
        var urlParams;
        this.route.queryParams.subscribe(function (params) {
            urlParams = params;
        });
        return urlParams;
    }; //end filter url
    EditmeetingComponent.prototype.checkUrlParamsAndDecideMode = function (url) {
        var _this = this;
        this.adminId = url.adminId;
        this.userId = url.userId;
        this.meetingId = url.meetingId;
        //we need both to be there
        if (this.isEmpty(this.adminId) && this.isEmpty(this.userId) && this.meetingId) {
            setTimeout(function () {
                _this.router.navigate(['/']);
            }, 2000);
        }
        else {
            if (this.adminId && this.userId) {
                this.isAdminMode = true;
                var userInfo = this.userService.getUserInfoFromLocalstorage();
                this.adminName = userInfo.firstName + " " + userInfo.lastName + "- admin";
            }
            else {
                this.isAdminMode = false;
            }
        }
    };
    EditmeetingComponent.prototype.loadEditableMeetingData = function () {
        var _this = this;
        var data = {
            authToken: this.authToken,
            meetingId: this.meetingId,
        };
        this.meetingService.getMeetingByMeetingId(data).subscribe(function (data) {
            var error = data.error;
            var message = data.message;
            if (error) {
                _this.toastr.error(message, 'Fail!!');
            }
            else {
                _this.toastr.success(message, 'Success!');
                _this.where = data.data.where;
                _this.emailId = data.data.emailId;
                _this.purpose = data.data.purpose;
                _this.time = data.data.time;
                _this.date = data.data.date;
            }
        }, function (error) {
            _this.toastr.error(error.message, 'Oops!');
        });
    };
    EditmeetingComponent.prototype.updateMeeting = function () {
        var _this = this;
        var data = {
            authToken: this.authToken,
            adminId: this.adminId,
            userId: this.userId,
            adminName: this.adminName,
            where: this.where,
            emailId: this.emailId,
            purpose: this.purpose,
            date: this.date,
            time: this.time,
            username: 'not necessary',
            meetingId: this.meetingId
        };
        this.meetingService.updateMeeting(data).subscribe(function (data) {
            var error = data.error;
            var message = data.message;
            if (error) {
                _this.toastr.error(message, 'Fail!!');
            }
            else {
                _this.toastr.success(message, 'Success!');
                var broadcastData = {
                    broadcastMessageBy: _this.adminId,
                    broadcastMessageFor: _this.userId,
                    broadcastMessage: "Meeting by id " + _this.meetingId + " has been update",
                };
                _this.socketService.broadcastMessage(broadcastData);
                setTimeout(function () {
                    _this.router.navigate(['/usercalendar'], {
                        queryParams: {
                            'adminId': _this.adminId,
                            'userId': _this.userId
                        }
                    });
                }, 2000);
            }
        }, function (error) {
            _this.toastr.error(error.message, 'Oops!');
        });
    };
    EditmeetingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editmeeting',
            template: __webpack_require__(/*! ./editmeeting.component.html */ "./src/app/editmeeting/editmeeting.component.html"),
            styles: [__webpack_require__(/*! ./editmeeting.component.css */ "./src/app/editmeeting/editmeeting.component.css")],
            providers: [_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"]]
        }),
        __metadata("design:paramtypes", [_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"], _meeting_service__WEBPACK_IMPORTED_MODULE_6__["MeetingService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
    ], EditmeetingComponent);
    return EditmeetingComponent;
}());



/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.component.css":
/*!*************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\n    border-left: 5px solid #42A948; \n  }\n  \n  .ng-invalid:not(form)  {\n    border-left: 5px solid #a94442; \n  }\n  \n  body {\n    background : black;\n  }\n  \n  .form-container {\n    padding: 20px;\n    color:black;\n    background: #f1f4f7;\n    box-shadow: 0 3px 20px 0 #ff6600;\n    \n  }\n  \n  .form-group-prop{\n    width: 50%;\n    \n  }"

/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.component.html":
/*!**************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\" style=\"text-align:left; margin-top:10%;\">\n    <div class=\"col-md-3 col-xs-0 col-lg-3 col-md-3\" ></div>\n    <div class=\"col-md-6 col-xs-12 col-lg-6 col-md-6 form-container\">\n      <form #fpform=\"ngForm\" (ngSubmit)=\"changePassword()\">\n        <div class=\"form-group\">\n          <label>*Please enter registered email Id</label>\n          <input type=\"text\" name=\"emailid\" [(ngModel)]=\"emailId\" #email=\"ngModel\" class=\"form-control\" placeholder=\"Enter Your Email\"\n            required>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\">Send Link </button>\n      </form>\n     \n    </div>\n    <div class=\"col-md-3 col-xs-0 col-sm-3 col-lg-3\" ></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.component.ts":
/*!************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.component.ts ***!
  \************************************************************/
/*! exports provided: ForgotpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordComponent", function() { return ForgotpasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgotpasswordComponent = /** @class */ (function () {
    function ForgotpasswordComponent(route, userService, router, http, toastr) {
        this.route = route;
        this.userService = userService;
        this.router = router;
        this.http = http;
        this.toastr = toastr;
        console.log('forgot password work');
    }
    ForgotpasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotpasswordComponent.prototype.changePassword = function () {
        var _this = this;
        var userData = {
            emailId: this.emailId,
        };
        this.userService.sendEmailForPasswordChange(userData).subscribe(function (data) {
            var error = data.error;
            var message = data.message;
            if (error) {
                _this.toastr.error(message, 'Fail!!');
            }
            else {
                _this.toastr.success("Check your email id.", 'Success!');
                //let token = message;
                setTimeout(function () {
                    _this.router.navigate(['/changepassword']);
                }, 1000);
            }
        }, function (error) {
            _this.toastr.error(error.message, 'Oops!');
        });
        return userData;
    };
    ForgotpasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgotpassword',
            template: __webpack_require__(/*! ./forgotpassword.component.html */ "./src/app/forgotpassword/forgotpassword.component.html"),
            styles: [__webpack_require__(/*! ./forgotpassword.component.css */ "./src/app/forgotpassword/forgotpassword.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], ForgotpasswordComponent);
    return ForgotpasswordComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; \n}\n\n.ng-invalid:not(form)  {\n  border-left: 5px solid #111010; \n}\n\n.form-container {\n  padding: 1rem 2rem;\n  flex: 1;\n  font-family: 'Source Sans Pro', sans-serif;\n  box-shadow: 0 3px 20px 0 #ff6600;\n\n}\n\n.form-container.p {\n   \n  color: balck !important;\n  }\n\n.form-container.h1 {\n    font-size: 1.45rem;\n    margin: 0;\n  }\n\n.form-group-prop{\n  width: 50%;\n  \n}\n\n.wrapper {\n  height: 100%;\n  width : 100%; \n  display: flex;\n  border-radius:10px;\n  flex-direction: column;\n  background-position: center;\n  background-repeat : no-repeat;\n}\n\n.input {\n  outline: none;\n  border: 2px solid hsl(0, 0%, 95%);\n  background: hsl(0, 0%, 95%);\n  border-radius: 3px;\n  padding: 0.5rem 0.75rem;\n  transition: all .2s ease-in-out;\n  box-shadow: 0 3px 20px 0 #ff6600;\n}\n\n.label {\n  margin: 0 0 2px;\n  font-family: 'Roboto', sans-serif;\n  font-size: 0.9rem;\n}\n\n.form-group {\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n}\n\n.forgot-password-link {\ncolor: rgb(228, 13, 13) !important;\nfont-family: 'Roboto', sans-serif;\nfont-size: 0.9rem;\nmargin-left: 5px;\n}\n\n.button-container {\ntext-align: right;\nmargin-top: 3px;\n}\n\n.signup{\ncolor: rgb(85, 202, 30);\n}\n\nbutton {\nborder: none;\ncolor: white;\npadding : 2px;\nmargin-left : 2px;\nfont-family: 'Roboto', sans-serif;\nfont-size: 0.9rem;\nfont-weight: 500;\ntext-transform: uppercase;\nletter-spacing: 0.05rem;\ncursor: pointer;\noutline: none;\ntransition: all .2s ease-in-out;\n}\n\n.back{\nbackground-image: url(meeting.gif);\ncolor: black;\nheight:400px;\nwidth : 100%;\npadding : 2px;\nfont-family: italic;\nbackground-position: center;\nbackground-repeat : no-repeat;\nborder-radius:10px;\nbox-shadow: 0 3px 20px 0 #ff6600;\n}\n\n@media all and (max-width: 576px) {\nfooter.p {\n  padding: 1.5rem;\n  font-size: 1rem;\n}\n}\n\n@media only screen and (max-width: 600px) and (min-width: 0px){\nback {\n background:none;\n}\n}\n\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n\n  <div class=\"row\">\n      <div class=\"col-sm-6 col-xs-0  col-lg-6 back text-center \" >\n          \n </div>\n\n      \n\n       <div class=\"col-sm-6 col-xs-12 col-lg-6\">\n           <div class=\"wrapper\">\n             <div class=\"form-container\">\n                \n               <h1 class=\"text-center\"> LOGIN DETAILS </h1>\n\n                <br>\n                <form (ngSubmit)=\"loginUser()\" #loginForm=\"ngForm\">\n       \n                  <div class=\"form-group\" style=\"padding:2px\">\n                    <label style=\"padding:2px\" >Email ID</label>\n                     <input  style=\"padding:2px\" name=\"emailid\" type=\"text\" [(ngModel)]=\"emailId\" #email=\"ngModel\" class=\"form-control\" placeholder=\"Enter Email\" required>\n                  </div>\n                  <br>\n                  <div class=\"form-group\" style=\"padding:2px\" >\n                    <label>Password</label>\n                    <input style=\"padding:2px\" type=\"password\" name=\"Password\"  placeholder=\"********\" [(ngModel)] = \"password\" #pass=\"ngModel\" class=\"form-control\" required>\n                    <div style=\"padding:2px\">\n                       <a (click)=\"forgotPassword()\" class=\"forgot-password-link\">Forgot your password?</a>\n                    </div>\n                  </div>\n\n                  <div style=\"padding:2px\" class=\"alert alert-warning\" *ngIf=\"checkErrorFromBackend\">\n                    <strong>Warning!</strong> Invalid Username and/or Password.\n                  </div>\n                  \n                  <br><br>\n                  <button type=\"submit\" style=\"padding:2px; margin-left:2%;\" class=\"btn btn-success\">SignIn</button>\n                  <button type=\"submit\" style=\"padding:2px\" (click)=\"signUp()\" class=\"btn btn-primary\">SignUp</button>\n                 </form>\n            </div>\n        </div>\n      </div>\n   </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, http, toastr, userService, cookie) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.toastr = toastr;
        this.userService = userService;
        this.cookie = cookie;
        console.log('login component works');
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        var data = this.emailId + "  " + this.password;
        var userData = {
            emailId: this.emailId,
            password: this.password
        };
        this.userService.login(userData).subscribe(function (data) {
            var error = data.error;
            var message = data.message;
            var authToken = data.data.authToken;
            if (error) {
                _this.toastr.error(message, 'Fail');
                _this.checkError = true;
                setTimeout(function () {
                    _this.checkError = false;
                }, 2000);
            }
            else {
                if (data.status === 200) {
                    _this.cookie.set('authToken', authToken);
                    _this.userService.setUserInfoInLocalStorage(data.data.userDetails);
                    _this.toastr.success(message, 'Success');
                    if (data.data.userDetails.admin === 'admin') {
                        setTimeout(function () {
                            _this.router.navigate(['/alluser']);
                        }, 2000);
                    }
                    else {
                        setTimeout(function () {
                            _this.router.navigate(['/usercalendar'], { queryParams: { 'adminId': "", 'userId': data.data.userDetails.userId } });
                        }, 2000);
                    }
                }
            }
        }, function (error) {
            _this.checkError = true;
            setTimeout(function () {
                _this.checkError = false;
            }, 2000);
        });
        return userData;
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        setTimeout(function () {
            _this.router.navigate(['/signup']);
        }, 1000);
    };
    LoginComponent.prototype.forgotPassword = function () {
        var _this = this;
        setTimeout(function () {
            _this.router.navigate(['/forgotpassword']);
        }, 1000);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/meeting.service.ts":
/*!************************************!*\
  !*** ./src/app/meeting.service.ts ***!
  \************************************/
/*! exports provided: MeetingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingService", function() { return MeetingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MeetingService = /** @class */ (function () {
    function MeetingService(http) {
        this.http = http;
        this.baseUrl = 'http://api.jyotivermprojects.info/api/v1/meeting';
        this.events = [];
        console.log('meeting Service works');
    }
    MeetingService.prototype.getAllMeetingForUserId = function (userData) {
        var myResponse = this.http.post(this.baseUrl + '/getAllMeetingsForUser', userData);
        return myResponse;
    };
    MeetingService.prototype.addMeeting = function (data) {
        var myResponse = this.http.post(this.baseUrl + '/addMeeting', data);
        return myResponse;
    };
    MeetingService.prototype.deleteMeeting = function (data) {
        var myResponse = this.http.post(this.baseUrl + '/deleteMeeting', data);
        return myResponse;
    };
    MeetingService.prototype.updateMeeting = function (data) {
        var myResponse = this.http.post(this.baseUrl + '/updateMeeting', data);
        return myResponse;
    };
    MeetingService.prototype.getMeetingByMeetingId = function (data) {
        var myResponse = this.http.post(this.baseUrl + '/getMeetingByMeetingId', data);
        return myResponse;
    };
    MeetingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MeetingService);
    return MeetingService;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\n    border-left: 5px solid #42A948;\n  }\n  \n  .ng-invalid:not(form)  {\n    border-left: 5px solid #580302;\n  }\n  \n  body {\n    background : white;\n  }\n  \n  .form-container {\n    padding: 20px;\n    background: #f1f4f7;\n    color:rgb(20, 1, 1);\n    box-shadow: 0 3px 20px 0 #ff6600;\n    \n  }\n  \n  .form-group-prop{\n    width: 50%;\n   }"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n    <div class=\"text-center\">\n        <h1>Sign Up Details</h1>\n    </div>\n  <div class=\"row\" style=\"text-align:left\">\n      <div class=\"col-md-3\" ></div>\n      <div class=\"col-md-6 col-xs-12 form-container\">\n          <form #signUpForm=\"ngForm\" (ngSubmit)=\"createUser()\">\n\n              \n            <div class=\"form-group\">\n                <label>\n                    <input type=\"checkbox\" name=\"admin\" [(ngModel)]=\"admin\" #ad=\"ngModel\" (change)=\"checkValue(admin?'admin':'')\" class=\"\">\n                    <span style=\"padding:2px;\">Admin</span>\n                </label>\n                </div>\n            \n              <div class=\"form-group\">\n                  <label>First Name</label>\n                  <input type=\"text\" name=\"firstName\" [(ngModel)]=\"firstName\" #fName=\"ngModel\" class=\"form-control\" placeholder=\"Enter First Name\"\n                      required>\n              </div>\n\n              <div [hidden]=\"fName.valid || fName.pristine\" class=\"alert alert-danger\">\n                  First Name is required .\n              </div>\n\n              <div class=\"form-group\">\n                  <label>Last Name</label>\n                  <input type=\"text\" name=\"lastName\" [(ngModel)]=\"lastName\" #lName=\"ngModel\" class=\"form-control\" placeholder=\"Enter Last Name.\"\n                      required>\n              </div>\n\n\n              <div class=\"form-group\">\n                  <label>Email Id</label>\n                  <input type=\"text\" name=\"emailid\" [(ngModel)]=\"emailId\" #email=\"ngModel\" class=\"form-control\" placeholder=\"Enter Email Id.\" required>\n              </div>\n\n\n              <div class=\"form-group\">\n                  <label for=\"mobileNumber\">Phone Number</label>\n                  <div class=\"row\">\n                      <div class=\"col-md-4 col-xs-4\">\n                          <select [(ngModel)]=\"countryCode\" #ccode=\"ngModel\" name=\"countryCode\" \n                          class=\"form-control\" id=\"ccode\" required>\n                              <option *ngFor=\"let country of countryData\" [value]=\"country.callingCodes\">{{country.callingCodes}}</option>\n                          </select>\n                      </div>\n                      <div class=\"col-md-8 col-xs-8\">\n                          <input type=\"number\" name=\"phoneNumber\" [(ngModel)]=\"phoneNumber\" #mnum=\"ngModel\" class=\"form-control\" placeholder=\"Enter Phone Number.\"\n                      required>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                  <label>Password</label>\n                 \n                  <input type=\"text\"  name=\"password\" [(ngModel)]=\"password\"  passwordToggle  #pass=\"ngModel\" class=\"form-control\" placeholder=\"Enter Password.\"\n                      required>\n              </div>\n\n              <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!signUpForm.form.valid\">Create User</button>\n\n          </form>\n      </div>\n      <div class=\"col-md-3\" ></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(route, toastr, router, userService, http) {
        this.route = route;
        this.toastr = toastr;
        this.router = router;
        this.userService = userService;
        this.http = http;
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('https://restcountries.eu/rest/v2/all').subscribe(function (data) {
            _this.countryData = data;
        });
    };
    SignupComponent.prototype.createUser = function () {
        var _this = this;
        var data = this.firstName + " " + this.lastName + " " + this.admin + " " + this.emailId + " " + this.countryCode + " " + this.phoneNumber + " " + this.password;
        var userData = {
            firstName: this.firstName,
            lastName: this.lastName,
            emailId: this.emailId,
            admin: this.admin,
            phoneNumber: this.phoneNumber,
            countryCode: this.countryCode,
            password: this.password
        };
        this.userService.createUser(userData).subscribe(function (data) {
            var error = data.error;
            var message = data.message;
            if (error) {
                _this.toastr.error(message, 'Fail');
            }
            else {
                _this.toastr.success(message, 'Success!');
                setTimeout(function () {
                    _this.router.navigate(['/login']);
                }, 1000);
            }
        }, function (error) {
            _this.toastr.error(error.message, 'Oops!');
        });
        return userData;
    };
    SignupComponent.prototype.checkValue = function (event) {
        this.admin = event;
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/socket.service.ts":
/*!***********************************!*\
  !*** ./src/app/socket.service.ts ***!
  \***********************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SocketService = /** @class */ (function () {
    function SocketService(http) {
        var _this = this;
        this.http = http;
        this.url = 'http://api.jyotivermprojects.info/api/v1';
        //-----EMIT EVENTS
        this.disconnectSocket = function () {
            _this.socket.disconnect();
        };
        this.setUser = function (authData) {
            // this will set socket id after verifying from token
            _this.socket.emit('setUser', authData);
        };
        this.broadcastMessage = function (data) {
            _this.socket.emit('broadcastMessage', data);
        };
        //-----LISTEN EVENTS
        this.verifyUser = function () {
            var obs = rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on('verifyUser', function (data) {
                    console.log(data);
                    observer.next(data);
                });
            });
            return obs;
        };
        this.listenUserSetConfirmation = function () {
            var obs = rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on('userSet', function (data) {
                    console.log(data);
                    observer.next(data);
                });
            });
            return obs;
        };
        this.onlineUserListListener = function () {
            var obs = rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on('onlineUserList', function (data) {
                    console.log(data);
                    observer.next(data);
                });
            });
            return obs;
        };
        this.errorListener = function () {
            var obs = rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on('errorEvent', function (data) {
                    console.log(data);
                    observer.next(data);
                });
            });
            return obs;
        }; //--error listener
        this.broadcastMessageListListener = function () {
            var obs = rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on('broadcastMessage', function (data) {
                    console.log(data);
                    observer.next(data);
                });
            });
            return obs;
        }; //-- broadcast message listener
        this.disconnectedSocketListener = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on("disconnect", function () {
                    observer.next();
                }); // end Socket
            }); // end Observable
        };
        console.log('Socket Service called');
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(this.url);
    }
    SocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/sort.pipe.ts":
/*!******************************!*\
  !*** ./src/app/sort.pipe.ts ***!
  \******************************/
/*! exports provided: SortPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortPipe", function() { return SortPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortPipe = /** @class */ (function () {
    function SortPipe() {
    }
    SortPipe.prototype.transform = function (array, args) {
        if (array == null) {
            return null;
        }
        var finalArray = array.sort(function (a, b) {
            var textA = a['value'].toLowerCase();
            var textB = b['value'].toLowerCase();
            return textA < textB ? -1 : (textA > textB) ? 1 : 0;
        });
        return finalArray;
    };
    SortPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'sort'
        })
    ], SortPipe);
    return SortPipe;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = 'http://api.jyotivermprojects.info/api/v1/users';
        this.getUserInfoFromLocalstorage = function () {
            return JSON.parse(localStorage.getItem('userInfo'));
        }; // end getUserInfoFromLocalstorage
        this.setUserInfoInLocalStorage = function (data) {
            localStorage.setItem('userInfo', JSON.stringify(data));
        };
        console.log("user service was called");
    }
    UserService.prototype.createUser = function (data) {
        var myResponse = this.http.post(this.baseUrl + '/signup', data);
        return myResponse;
    };
    UserService.prototype.verify = function (data) {
        var myResponse = this.http.post(this.baseUrl + '/verify', data);
        return myResponse;
    };
    UserService.prototype.login = function (data) {
        var myResponse = this.http.post(this.baseUrl + '/login', data);
        return myResponse;
    };
    UserService.prototype.sendEmailForPasswordChange = function (data) {
        var myResponse = this.http.post(this.baseUrl + '/forgotpassword', data);
        return myResponse;
    };
    UserService.prototype.changePassword = function (userData) {
        var myResponse = this.http.post(this.baseUrl + '/changePassword', userData);
        return myResponse;
    };
    UserService.prototype.getAllUsers = function (authToken) {
        var myResponse = this.http.get(this.baseUrl + '/view/all?authToken=' + authToken);
        console.log(myResponse);
        return myResponse;
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/usercalendar/usercalendar.component.html":
/*!**********************************************************!*\
  !*** ./src/app/usercalendar/usercalendar.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top : 20px;margin-bottom:20px;\">\n  <div class=\"row text-center\">\n      <div class=\"col-md-4\">\n        <div class=\"btn-group\">\n          <div\n            class=\"btn btn-primary\"\n            mwlCalendarPreviousView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"activeDayIsOpen = false\">\n            Previous\n          </div>\n          <div\n            class=\"btn btn-outline-secondary\"\n            mwlCalendarToday\n            [(viewDate)]=\"viewDate\">\n            Today\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            mwlCalendarNextView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"activeDayIsOpen = false\">\n            Next\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\n      </div>\n      <div class=\"col-md-4\" *ngIf=\"isAdminMode\">\n        <button class=\"btn btn-primary\" (click) = 'redirectToAddMeeting()' style=\"margin:5px\"> Add Meeting</button>\n        <button class=\"btn btn-info\" (click) = 'redirectToUserList()' style=\"margin:5px\"> Home</button>\n      </div>\n  </div> \n\n<mwl-calendar-month-view \n[viewDate]=\"viewDate\"\n[events]=\"events\"\n[refresh]=\"refresh\"\n[activeDayIsOpen]=\"activeDayIsOpen\"\n(dayClicked)=\"dayClicked($event.day)\"\n\n>\n</mwl-calendar-month-view>\n</div>"

/***/ }),

/***/ "./src/app/usercalendar/usercalendar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/usercalendar/usercalendar.component.ts ***!
  \********************************************************/
/*! exports provided: UsercalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsercalendarComponent", function() { return UsercalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _meeting_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../meeting.service */ "./src/app/meeting.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var UsercalendarComponent = /** @class */ (function () {
    function UsercalendarComponent(meetingService, socketService, cd, route, router, http, toastr, userService, cookie) {
        var _this = this;
        this.meetingService = meetingService;
        this.socketService = socketService;
        this.cd = cd;
        this.route = route;
        this.router = router;
        this.http = http;
        this.toastr = toastr;
        this.userService = userService;
        this.cookie = cookie;
        this.view = 'month';
        this.viewDate = new Date();
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.events = [];
        this.authToken = '';
        this.isAdminMode = false;
        this.adminId = '';
        this.userId = '';
        this.activeDayIsOpen = true;
        this.arrayOfMeetings = [];
        this.listenForBroadcastMessage = function () {
            _this.socketService.broadcastMessageListListener()
                .subscribe(function (data) {
                // let messageFor = [{
                //   messageForUserId : freindRequestReceiverId or senderId
                //   messageForUsername : rname
                // }]
                // let data = {
                //   broadcastMessageBy : this.userId,
                //   broadcastMessageByName : this.userName,
                //   broadcastMessageFor : messageFor,
                //   broadcastMessage : this.friendreqsend or this.friendrequestaccepted,
                // //to be used when we edit,add,delete items and undo changelog
                //       //ADD,DELETE,EDIT,UNDO
                //       broadcastMessageListId : "",
                //       broadcastMessageItemId :"",
                //       broadcastMessageActionType : "",
                // }
                var messageForMe = false;
                //broadcastMessageFor is an array of userids
                if (data.broadcastMessageFor === _this.userId) {
                    messageForMe = true;
                }
                if (!messageForMe) {
                    return;
                }
                _this.toastr.info(data.broadcastMessage, "Info");
                _this.loadEvents();
            });
        }; //end listen for broacast message
        this.listenVerifyUserConfirmation = function () {
            _this.socketService.verifyUser()
                .subscribe(function (data) {
                _this.socketDisconnected = false;
                // this.toastr.info(data.message, "Info.");
                var authData = {
                    authToken: _this.cookie.get('authToken'),
                    userId: _this.userId
                };
                _this.socketService.setUser(authData);
            });
        }; //end verify user consfirmation
        this.listenUserSetConfirmation = function () {
            _this.socketService.listenUserSetConfirmation()
                .subscribe(function (data) {
                // this.toastr.info("User Set.", "Info.");
                _this.socketId = data.socketId;
                _this.socketName = data.socketName;
                _this.roomName = data.roomName;
            });
        }; //end verify user consfirmation
        this.listenForError = function () {
            _this.socketService.errorListener()
                .subscribe(function (data) {
                _this.toastr.error(data, "Error");
            });
        }; //end listen for error
        this.listenSocketDisconnect = function () {
            _this.socketService.disconnectedSocketListener()
                .subscribe(function (data) {
                _this.socketDisconnected = true;
                _this.toastr.error(data, "SOCKET DISCONNECTED.");
            });
        }; //end listen for scoket disconnect
        this.onlineUserList = function () {
            _this.socketService.onlineUserListListener()
                .subscribe(function (data) {
                if (data.message == "join") {
                    // this.toastr.info(data.sendBy + " joined", "Info.");
                }
                else {
                    //this.toastr.info(data.sendBy + " left", "Info.");
                }
                var onlineUserArray = [];
                onlineUserArray = data.list;
            });
        }; //end online user list
        this.isEmpty = function (value) {
            if (value === null || value === undefined || _this.trim(value) === '' || value.length === 0) {
                return true;
            }
            else {
                return false;
            }
        };
        this.trim = function (x) {
            var value = String(x);
            return value.replace(/^\s+|\s+$/gm, '');
        };
        this.router.events.forEach(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                _this.socketService.disconnectSocket();
            }
        });
    }
    UsercalendarComponent.prototype.ngOnInit = function () {
        this.authToken = this.cookie.get('authToken');
        var urlParams = this.filterUrl();
        this.checkUrlParamsAndDecideMode(urlParams);
        if (this.isAdminMode) {
            //loadEvents with all features
        }
        else {
            //just load events and no features
        }
        this.loadEvents();
        //socket related methods
        this.listenVerifyUserConfirmation();
        this.listenUserSetConfirmation();
        this.listenForError();
        this.listenSocketDisconnect();
        this.onlineUserList();
        this.listenForBroadcastMessage();
    };
    UsercalendarComponent.prototype.filterUrl = function () {
        var urlParams;
        this.route.queryParams.subscribe(function (params) {
            urlParams = params;
        });
        return urlParams;
    }; //end filter url
    UsercalendarComponent.prototype.checkUrlParamsAndDecideMode = function (url) {
        var _this = this;
        this.adminId = url.adminId;
        this.userId = url.userId;
        //we need both to be there
        if (this.isEmpty(this.adminId) && this.isEmpty(this.userId)) {
            setTimeout(function () {
                _this.router.navigate(['/']);
            }, 2000);
        }
        else {
            if (this.adminId && this.userId) {
                this.isAdminMode = true;
            }
            else {
                this.isAdminMode = false;
            }
        }
    };
    UsercalendarComponent.prototype.loadEvents = function () {
        var _this = this;
        var userData = {
            authToken: this.authToken,
            userId: this.userId,
        };
        this.meetingService.getAllMeetingForUserId(userData).subscribe(function (data) {
            var error = data.error;
            var message = data.message;
            if (error) {
                _this.toastr.error(message, 'Fail!!');
                _this.arrayOfMeetings = [];
                _this.events = [];
            }
            else {
                if (data.status === 200) {
                    _this.arrayOfMeetings = data.data;
                    _this.mountCalendarEvents();
                }
                else {
                    _this.arrayOfMeetings = [];
                    _this.events = [];
                }
                _this.cd.detectChanges();
                _this.refresh.next();
            }
        }, function (error) {
            _this.toastr.error(error.message, 'Oops!');
        });
        return userData;
    }; //load events end
    UsercalendarComponent.prototype.mountCalendarEvents = function () {
        var _this = this;
        this.events = [];
        for (var _i = 0, _a = this.arrayOfMeetings; _i < _a.length; _i++) {
            var d = _a[_i];
            var eventVal = {
                id: d.meetingId,
                title: " Your meeting is scheduled by " + d.adminName + " at " + d.time + " at " + d.where + " for  " + d.purpose + " ",
                color: colors.blue,
                start: new Date(d.date),
                actions: [
                    {
                        label: '<i class="fa fa-fw fa-pencil fa-2x"></i>',
                        onClick: function (_a) {
                            var event = _a.event;
                            if (_this.isAdminMode) {
                                _this.redirectToEditMeeting(event.id);
                            }
                            else {
                                _this.toastr.warning("You are not authorized", "Access Denied!");
                            }
                        }
                    },
                    {
                        label: '<i class="fa fa-fw fa-times fa-2x"></i>',
                        onClick: function (_a) {
                            //this.events = this.events.filter(iEvent => iEvent !== event);
                            var event = _a.event;
                            if (_this.isAdminMode) {
                                _this.deleteEvent(event);
                            }
                            else {
                                _this.toastr.warning("You are not authorized", "Access Denied!");
                            }
                        }
                    }
                ]
            };
            this.events.push(eventVal);
        }
    };
    UsercalendarComponent.prototype.deleteEvent = function (event) {
        var _this = this;
        var userData = {
            authToken: this.authToken,
            adminId: this.adminId,
            meetingId: event.id,
            userId: this.userId
        };
        this.meetingService.deleteMeeting(userData).subscribe(function (data) {
            var error = data.error;
            var message = data.message;
            if (error) {
                _this.toastr.error(message, 'Fail!!');
            }
            else {
                if (data.status === 200) {
                    _this.loadEvents();
                    var broadcastData = {
                        broadcastMessageBy: _this.adminId,
                        broadcastMessageFor: _this.userId,
                        broadcastMessage: "Meeting by id " + event.id + " has been deleted",
                    };
                    _this.socketService.broadcastMessage(broadcastData);
                }
            }
        }, function (error) {
            _this.toastr.error(error.message, 'Oops!');
        });
    };
    UsercalendarComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    };
    //redirect to add meeting
    UsercalendarComponent.prototype.redirectToAddMeeting = function () {
        var _this = this;
        setTimeout(function () {
            _this.router.navigate(['/addMeeting'], {
                queryParams: {
                    'adminId': _this.adminId,
                    'userId': _this.userId
                }
            });
        }, 1000);
    };
    //redirect ot alluser page
    UsercalendarComponent.prototype.redirectToUserList = function () {
        var _this = this;
        setTimeout(function () {
            _this.router.navigate(['/alluser']);
        }, 1000);
    };
    //redirect to edit meeting
    UsercalendarComponent.prototype.redirectToEditMeeting = function (meetingId) {
        var _this = this;
        setTimeout(function () {
            _this.router.navigate(['/editMeeting'], {
                queryParams: {
                    'adminId': _this.adminId,
                    'userId': _this.userId,
                    'meetingId': meetingId
                }
            });
        }, 1000);
    };
    UsercalendarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mwl-demo-component',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(/*! ./usercalendar.component.html */ "./src/app/usercalendar/usercalendar.component.html"),
            providers: [_socket_service__WEBPACK_IMPORTED_MODULE_8__["SocketService"]]
        }),
        __metadata("design:paramtypes", [_meeting_service__WEBPACK_IMPORTED_MODULE_7__["MeetingService"], _socket_service__WEBPACK_IMPORTED_MODULE_8__["SocketService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
    ], UsercalendarComponent);
    return UsercalendarComponent;
}());



/***/ }),

/***/ "./src/app/verify/verify.component.css":
/*!*********************************************!*\
  !*** ./src/app/verify/verify.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/verify/verify.component.html":
/*!**********************************************!*\
  !*** ./src/app/verify/verify.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\n\n  Your Account is Verified\n\n  <button [routerLink]=\"['/login']\"> Click here</button>\n\n</div>"

/***/ }),

/***/ "./src/app/verify/verify.component.ts":
/*!********************************************!*\
  !*** ./src/app/verify/verify.component.ts ***!
  \********************************************/
/*! exports provided: VerifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyComponent", function() { return VerifyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VerifyComponent = /** @class */ (function () {
    function VerifyComponent(route, userService, router, toastr) {
        this.route = route;
        this.userService = userService;
        this.router = router;
        this.toastr = toastr;
    }
    VerifyComponent.prototype.ngOnInit = function () {
        this.hash = this.route.snapshot.paramMap.get('verifyToken');
        if (!this.hash) {
        }
    };
    VerifyComponent.prototype.verify = function () {
        var _this = this;
        this.userService.verify(this.hash).subscribe(function (Response) {
            if (Response.status === 200) {
                _this.success = 1;
            }
            else {
                _this.failure = 1;
            }
        }, function (error) {
            _this.toastr.error(error.message, 'oops!');
        });
    };
    VerifyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-verify',
            template: __webpack_require__(/*! ./verify.component.html */ "./src/app/verify/verify.component.html"),
            styles: [__webpack_require__(/*! ./verify.component.css */ "./src/app/verify/verify.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], VerifyComponent);
    return VerifyComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\riksw\Desktop\MeetingFrontend\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map