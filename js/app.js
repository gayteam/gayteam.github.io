var app = angular.module('myApp', []);
app.controller('myCtrl', ['$scope', function ($scope) {
        $scope.projects = [{
                projectName: 'MK SPORT',
                projectType: 'Bán dụng cụ thể thao',
                projectImage: 'img/duan/impulse.png',
                link: 'http://dochoithethao.somee.com'
            }, {
                projectName: 'Challenge Team',
                projectType: 'Trang giới thiệu nhóm Challenge Team',
                projectImage: 'img/duan/challengeteam.png',
                link: 'http://challengeteam.github.io'
            }];

        $scope.services = [{
                name: 'Thương mại điện tử',
                description: 'Các trang web buôn bán hàng online',
                icon: 'fa-shopping-cart'
            }, {
                name: 'Reponsive Design',
                description: 'Thiết kế phù hợp mọi loại thiết bị',
                icon: 'fa-laptop'
            }, {
                name: 'Bảo mật web',
                description: 'Vấn đề bảo mật thông tin, dữ liệu của các trang web',
                icon: 'fa-lock'
            }];

//        $scope.members = [{
//                id: 1,
//                name: 'Phạm Lưu Thanh Bình',
//                image: 'header-bg.jpg',
//                studyTime: '2009 - 2011',
//                description: 'Học quá giỏi',
//                role: 'Front-end developer',
//                class: ''
//            }, {
//                id: 2,
//                name: 'Phan Hiền Triết',
//                image: 'header-bg.jpg',
//                studyTime: '2009 - 2011',
//                description: 'Học quá giỏi',
//                role: 'Front-end developer',
//                class: 'timeline-inverted'
//            }, {
//                id: 3,
//                name: 'Phạm Sơn Trà',
//                image: 'header-bg.jpg',
//                studyTime: '2009 - 2011',
//                description: 'Học quá giỏi',
//                role: 'Back-end developer',
//                class: ''
//            }, {
//                id: 4,
//                name: 'Nguyễn Việt Trung',
//                image: 'header-bg.jpg',
//                studyTime: '2009 - 2011',
//                description: 'Học quá giỏi',
//                role: 'Back-end developer',
//                class: 'timeline-inverted'
//            }, {
//                id: 5,
//                name: 'Đoàn Xuân Trí',
//                image: 'header-bg.jpg',
//                studyTime: '2009 - 2011',
//                description: 'Học quá giỏi',
//                role: 'Project Manager',
//                class: ''
//            }];
        $scope.infobox1 = false;
        $scope.infobox2 = false;
        $scope.infobox3 = false;
        $scope.infobox4 = false;
        $scope.infobox5 = false;

        $scope.closedetail = function () {
            $scope.infobox1 = false;
            $scope.infobox2 = false;
            $scope.infobox3 = false;
            $scope.infobox4 = false;
            $scope.infobox5 = false;
        };
        $scope.showdetail = function (id) {
            if (id === 1)
            {
                $scope.infobox1 = true;
            }
            if (id === 2)
            {
                $scope.infobox2 = true;
            }
            if (id === 3)
            {
                $scope.infobox3 = true;
            }
            if (id === 4)
            {
                $scope.infobox4 = true;
            }
            if (id === 5)
            {
                $scope.infobox5 = true;
            }
        };
    }]);