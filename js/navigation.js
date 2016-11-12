var adminurl = "http://104.155.129.33:82/";
// var adminurl = "http://localhost:1337/";
var uploadurl = adminurl + "upload/";
var imgpath = uploadurl + "readFile";
var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function ($http) {
    var navigation = [{
        name: "Registered Users",
        classis: "active",
        link: "#/page/userView",
        subnav: []
    }, {
        name: "Smaaash Cities",
        classis: "active",
        link: "#/page/viewCity",
        subnav: []
    }, {
        name: "Home Page Sliders",
        classis: "active",
        link: "#/page/viewSlider",
        subnav: []
    }, {
        name: "Landing Page Video",
        classis: "active",
        link: "#/page/viewConfig",
        subnav: []
    }, {
        name: "What's New",
        classis: "active",
        link: "#/page/viewWhatsNew",
        subnav: []
    }, {
        name: "Attractions",
        classis: "active",
        link: "#/page/viewAttraction",
        subnav: []
    }, {
        name: "Deals and Packages",
        classis: "active",
        link: "#/page/viewDeals",
        subnav: []
    }, {
        name: "Host a Party",
        classis: "active",
        link: "#/page/viewHost",
        subnav: []
    }, {
        name: "--Host a Party Type",
        classis: "active",
        link: "#/page/viewHostType",
        subnav: [],
        type: true
    }, {
        name: "--Assistance Form",
        classis: "active",
        link: "#/page/viewAssistance",
        subnav: []
    }, {
        name: "--Party Enquiries",
        classis: "active",
        link: "#/page/viewEnquiry",
        subnav: []
    }, {
        name: "--Cust. Packages",
        classis: "active",
        link: "#/page/viewCustom",
        subnav: []
    }, {
        name: "--Get Called",
        classis: "active",
        link: "#/page/viewCallEnquiry",
        subnav: []
    }, {
        name: "Events",
        classis: "active",
        link: "#/page/viewEvents",
        subnav: []
    }, {
        name: "Food and Beverages",
        classis: "active",
        link: "#/page/viewFood",
        subnav: []
    }, {
        name: "Promotions",
        classis: "active",
        link: "#/page/viewPromotions",
        subnav: []
    }, {
        name: "Buy Now",
        classis: "active",
        link: "#/page/viewBuyNow",
        subnav: []
    }, {
        name: "Media & Gallery",
        classis: "active",
        link: "#/page/viewStars",
        subnav: []
    }, {
        name: "Subscribers",
        classis: "active",
        link: "#/page/viewSubscribe",
        subnav: []
    }, {
        name: "Type of Content",
        classis: "active",
        link: "#/page/viewType",
        subnav: []
    }, {
        name: "Leadership",
        classis: "active",
        link: "#/page/viewLeader",
        subnav: []
    }, {
        name: "Sponsor",
        classis: "active",
        link: "#/page/viewSponsor",
        subnav: []
    }, {
        name: "Benefit from us",
        classis: "active",
        link: "#/page/viewBenefit",
        subnav: []
    }];
    return {
        getnav: function () {
            return navigation;
        },
        makeactive: function (menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },
        saveApi: function (data, apiName, successCallback, errorCallback) {
            $http.post(adminurl + apiName, data).success(successCallback).error(errorCallback);
        },
        deleteProject: function (data, successCallback, errorCallback) {
            $http.post(adminurl + "project/delete", data).success(successCallback).error(errorCallback);
        },
        findProjects: function (apiName, pagination, successCallback, errorCallback) {
            $http.post(adminurl + apiName, pagination).success(successCallback).error(errorCallback);
        },
        findOneProject: function (apiName, urlParams, successCallback, errorCallback) {
            $http.post(adminurl + apiName, urlParams).success(successCallback).error(errorCallback);
        },
        getAssistance: function (status, fromDate, toDate, pagenumber, successCallback, errorCallback) {
            var urlParams = {};
            urlParams.status = status;
            urlParams.fromDate = fromDate;
            urlParams.toDate = toDate;
            urlParams.pagenumber = 1;
            urlParams.pagesize = 10;
            urlParams.search = '';
            console.log(urlParams);
            $http.post(adminurl + "assistance/findLimited", urlParams).success(successCallback).error(errorCallback);
        },

        getDropDown: function (apiName, successCallback, errorCallback) {
            $http.post(adminurl + apiName).success(successCallback).error(errorCallback);
        },
        submitLogin: function (data, successCallback, errorCallback) {
            $http.post(adminurl + "register/login", data).success(successCallback).error(errorCallback);
        },
        deleteApi: function (data, successCallback, errorCallback) {
            $http.post(adminurl + "api/delete", data).success(successCallback).error(errorCallback);
        },
        callExportApi: function (title, successCallback, errorCallback) {
            if (title == "Assistance") {
                var api = "assistance/exportAssistanceExcel";
            } else if (title == "Enquiries") {
                var api = "enquiry/exportEnquiryExcel";
            } else if (title == "Subcribers") {
                var api = "subscribe/exportSubscribeExcel";
            } else if (title == "Customized Packages") {
                var api = "custom/exportCustomExcel";
            } else if (title == "Call Enquiries") {
                var api = "callenquiry/exportCallEnquiriesExcel";
            } else if (title == "Registered Users") {
                var api = "signup/exportRegisteredUsersExcel";
            }
            $http.post(adminurl + api).success(successCallback).error(errorCallback);
        },
        logout: function (successCallback, errorCallback) {
            $http.post(adminurl + "register/logout").success(successCallback).error(errorCallback);
        },
        sideMenu1: function (apiName, pagination, successCallback, errorCallback) {
            $http.post(adminurl + apiName, pagination).success(successCallback).error(errorCallback);
        },

    };
});