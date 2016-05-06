var app = angular.module('myApp',[]);
app.controller('myCtrl',['$scope',function($scope){
	$scope.projects = [{
		projectName:'MK SPORT',
		projectType:'Bán dụng cụ thể thao',
		projectImage:'img/duan/impulse.png',
		link:'http://dochoithethao.somee.com'
	},{
		projectName:'Challenge Team',
		projectType:'Trang giới thiệu nhóm Challenge Team',
		projectImage:'img/duan/challengeteam.png',
		link:'http://challengeteam.github.io'
	}];

	$scope.services = [{
		name:'Thương mại điện tử',
		description:'Các trang web buôn bán hàng online',
		icon: 'fa-shopping-cart'
	},{
		name:'Reponsive Design',
		description:'Thiết kế phù hợp mọi loại thiết bị',
		icon: 'fa-laptop'
	},{
		name:'Bảo mật web',
		description:'Vấn đề bảo mật thông tin, dữ liệu của các trang web',
		icon: 'fa-lock'
	}];

	$scope.members = [{
		name:'Phạm Lưu Thanh Bình',
		image:'header-bg.jpg',
		studyTime:'2009 - 2011',
		description:'Học quá giỏi',
		role:'Front-end developer',
		class:''
	},{
		name:'Phan Hiền Triết',
		image:'header-bg.jpg',
		studyTime:'2009 - 2011',
		description:'Học quá giỏi',
		role:'Front-end developer',
		class:'timeline-inverted'
	},{
		name:'Phạm Sơn Trà',
		image:'header-bg.jpg',
		studyTime:'2009 - 2011',
		description:'Học quá giỏi',
		role:'Back-end developer',
		class:''
	},{
		name:'Nguyễn Việt Trung',
		image:'header-bg.jpg',
		studyTime:'2009 - 2011',
		description:'Học quá giỏi',
		role:'Back-end developer',
		class:'timeline-inverted'
	},{
		name:'Đoàn Xuân Trí',
		image:'header-bg.jpg',
		studyTime:'2009 - 2011',
		description:'Học quá giỏi',
		role:'Project Manager',
		class:''
	}]
}])