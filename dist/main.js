/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const div=document.querySelector(\"#content\");\nconst tabdiv=document.createElement(\"div\");\nconst imgdiv=document.createElement(\"div\");\nimgdiv.classList=\"imagesClass\";\ntabdiv.classList=\"tabClass\";\n\n\n//Tabs/Buttons\nconst home=document.createElement(\"button\");\nhome.innerHTML=\"Home\";\nconst contact=document.createElement(\"button\");\ncontact.innerHTML=\"Contact\";\nconst menu=document.createElement(\"button\");\nmenu.innerHTML=\"Menu\";\n\ntabdiv.appendChild(home);\ntabdiv.appendChild(contact);\ntabdiv.appendChild(menu);\ndiv.appendChild(tabdiv);\n\n\n//Images \nconst img=document.createElement('img');\nimg.src=\"../images/rest.jpg\";\nconst img2=document.createElement('img');\nimg2.src=\"../images/rest1.jpeg\";\nimgdiv.appendChild(img);\nimgdiv.appendChild(img2);\n//div.appendChild(imgdiv);\n//Home Menu\nhome.addEventListener('click' ,()=>{\n    const p=document.createElement(\"table\");\n    const tr=document.createElement(\"tr\");\n\n    tr.textContent=\"This is a Home Tab\";\n    p.appendChild(tr)\n    div.appendChild(p);\n})\n\n//Contact tab\n\ncontact.addEventListener('click' ,()=>{\n    const p=document.createElement(\"table\");\n    const tr=document.createElement(\"tr\");\n\n    tr.textContent=\"This is a Contact Tab\";\n    const fb=document.createElement(\"img\");\n    fb.src=\"../images/circle.jpg\"\n    p.appendChild(tr)\n    p.appendChild(fb)\n    div.appendChild(p);\n\n    \n});\n\n//Menu Tab\nmenu.addEventListener('click' ,()=>{\n    const table=document.createElement(\"table\");\n    const th=document.createElement(\"th\");\n    const tr=document.createElement(\"tr\");\n    //First Item\n    th.innerHTML=\"Potato Salad\";\n    tr.innerHTML=`The irresistable goodness of this creamy dish will be sure to clog your arteries in no time flat. Puresome, wholesome\n\tingredients including homemade mayonayse, russet potatoes, and locally grown chives. Served with a side of butter and\n\tyour choice of soup.`\n    table.appendChild(th);\n    table.appendChild(tr);\n\n    //Second Item\n    const th1=document.createElement(\"th\");\n    const tr1=document.createElement(\"tr\");\n    //Second Item\n    th1.innerHTML=\"Wedge Salad\";\n    tr1.innerHTML=`Iceburg lettuce quarter served with sliced cucumbers, carrots, red onion alongside garden-fresh tomatoes served with\n    your choice of dressing.`\n    table.appendChild(th1);\n    table.appendChild(tr1);\n    //Third Item \n    \n    const th3=document.createElement(\"th\");\n    const tr3=document.createElement(\"tr\");\n    //Third Item\n    th3.innerHTML=\"CaesarSalad\";\n    tr3.innerHTML=`The original. Classic Caesar Salad: Crunchy romaine lettuce served with Caesar dressing, garden-fresh tomatoes, and homemade\n    garlic croutons.`\n    table.appendChild(th3);\n    table.appendChild(tr3);\n    \n    div.appendChild(table);\n  \n    \n    //table.style(background-color:blue\");\n})\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });