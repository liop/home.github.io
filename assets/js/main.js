var iUp = (function () {
	var time = 0,
		duration = 150,
		clean = function () {
			time = 0;
		},
		up = function (element) {
			setTimeout(function () {
				element.classList.add("up");
			}, time);
			time += duration;
		},
		down = function (element) {
			element.classList.remove("up");
		},
		toggle = function (element) {
			setTimeout(function () {
				element.classList.toggle("up");
			}, time);
			time += duration;
		};
	return {
		clean: clean,
		up: up,
		down: down,
		toggle: toggle
	};
})();

var defailt_bgs = ["https://www.bing.com/th?id=OHR.DuskyOwls_EN-GB7904137343_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp","https://www.bing.com/th?id=OHR.AlpineLakes_EN-GB6796431877_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp","https://www.bing.com/th?id=OHR.KatahdinWoods_EN-GB6027367272_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp","https://www.bing.com/th?id=OHR.ThamesLondon_EN-GB5554427883_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp","https://www.bing.com/th?id=OHR.DjanetAlgeria_EN-GB4963001163_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp","https://www.bing.com/th?id=OHR.WhaleSharkDay_EN-GB4536568745_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp","https://www.bing.com/th?id=OHR.CastellfollitSpain_EN-GB3934726824_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp","https://www.bing.com/th?id=OHR.ParalympicsParis_EN-GB7216458209_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp"];
var is_set_bg = false;
function getBingImages(imgUrls) {
  if (is_set_bg) return;
	/**
	 * 获取Bing壁纸
	 */
	var indexName = "bing-image-index";
	var index = sessionStorage.getItem(indexName);
	var panel = document.querySelector('#panel');
	if (isNaN(index) || index == 7) index = 0;
	else index++;
	var imgUrl = imgUrls[index];
	panel.style.background = "url('" + imgUrl + "') center center no-repeat #666";
	panel.style.backgroundSize = "cover";
	sessionStorage.setItem(indexName, index);
}

(function () {
   setTimeout(() => {
    if (is_set_bg)  return;
    getBingImages(defailt_bgs);
    is_set_bg = true;
  }, 2000);
})();
 
function decryptEmail(encoded) {
	var address = atob(encoded);
	window.location.href = "mailto:" + address;
}

document.addEventListener('DOMContentLoaded', function () {
	// 获取一言数据
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			var res = JSON.parse(this.responseText);
			document.getElementById('description').innerHTML = res.hitokoto + "<br/> -「<strong>" + res.from + "</strong>」";
		}
	};
	xhr.open("GET", "https://v1.hitokoto.cn", true);
	xhr.send();

	var iUpElements = document.querySelectorAll(".iUp");
	iUpElements.forEach(function (element) {
		iUp.up(element);
	});

	var avatarElement = document.querySelector(".js-avatar");
	avatarElement.addEventListener('load', function () {
		avatarElement.classList.add("show");
	});
});

var btnMobileMenu = document.querySelector('.btn-mobile-menu__icon');
var navigationWrapper = document.querySelector('.navigation-wrapper');

btnMobileMenu.addEventListener('click', function () {
	if (navigationWrapper.style.display == "block") {
		navigationWrapper.addEventListener('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
			navigationWrapper.classList.toggle('visible');
			navigationWrapper.classList.toggle('animated');
			navigationWrapper.classList.toggle('bounceOutUp');
			navigationWrapper.removeEventListener('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', arguments.callee);
		});
		navigationWrapper.classList.toggle('animated');
		navigationWrapper.classList.toggle('bounceInDown');
		navigationWrapper.classList.toggle('animated');
		navigationWrapper.classList.toggle('bounceOutUp');
	} else {
		navigationWrapper.classList.toggle('visible');
		navigationWrapper.classList.toggle('animated');
		navigationWrapper.classList.toggle('bounceInDown');
	}
	btnMobileMenu.classList.toggle('social');
	btnMobileMenu.classList.toggle('iconfont');
	btnMobileMenu.classList.toggle('icon-list');
	btnMobileMenu.classList.toggle('social');
	btnMobileMenu.classList.toggle('iconfont');
	btnMobileMenu.classList.toggle('icon-angleup');
	btnMobileMenu.classList.toggle('animated');
	btnMobileMenu.classList.toggle('fadeIn');
});
