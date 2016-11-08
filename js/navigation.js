// var adminurl = "http://104.155.129.33:82/";
var adminurl = "http://localhost:1337/";
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
        name: "Video Holder",
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
        name: "Host a Party Type",
        classis: "active",
        link: "#/page/viewHostType",
        subnav: []
    }, {
        name: "Assistance Form",
        classis: "active",
        link: "#/page/viewAssistance",
        subnav: []
    }, {
        name: "Enquiries",
        classis: "active",
        link: "#/page/viewEnquiry",
        subnav: []
    }, {
        name: "Call Enquiries",
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
    }];

    // {
    //     name: "Promotions",
    //     classis: "active",
    //     link: "#/page/viewPromotions",
    //     subnav: []
    // }, {
    //     name: "Recharge Smaash Card",
    //     classis: "active",
    //     link: "#/page/viewRechargeSmaashCard",
    //     subnav: []
    // }
    //   {
    //      name: "What's New",
    //      classis: "active",
    //      link: "#/page/viewWhatsNew",
    //      subnav: []
    //  }

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
            $http.post(adminURL + "project/delete", data).success(successCallback).error(errorCallback);
        },
        findProjects: function (apiName, pagination, successCallback, errorCallback) {
            $http.post(adminurl + apiName, pagination).success(successCallback).error(errorCallback);
        },
        findOneProject: function (apiName, urlParams, successCallback, errorCallback) {
            console.log(adminurl + apiName);
            $http.post(adminurl + apiName, urlParams).success(successCallback).error(errorCallback);
        },

        getDropDown: function (apiName, successCallback, errorCallback) {
            $http.post(adminurl + apiName).success(successCallback).error(errorCallback);
        },
        submitLogin: function (data, successCallback, errorCallback) {
            $http.post(adminurl + "register/login", data).success(successCallback).error(errorCallback);
        },
        deleteApi: function (data, successCallback, errorCallback) {
            $http.post(adminURL + "api/delete", data).success(successCallback).error(errorCallback);
        },
        logout: function (successCallback, errorCallback) {
            $http.post(adminurl + "register/logout").success(successCallback).error(errorCallback);
        },
        sideMenu1: function (apiName, pagination, successCallback, errorCallback) {
            $http.post(adminurl + apiName, pagination).success(successCallback).error(errorCallback);
        },

    };
});