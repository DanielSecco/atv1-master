// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//importScripts('../static/js/idb.js');
 //importScripts('../static/js/utility.js');
require('../static/js/promise.js')
require('../static/js/fetch.js')
//require('../static/js/idb.js')
//require('../static/js/utility.js')

Vue.config.productionTip = false
var firebase = require('firebase');
var $ = require('jquery')
	var config = {
    apiKey: "AIzaSyCZLUzrohM-sSo6xdNozSj45tw7JO161Bw",
    authDomain: "fotogeo-16a78.firebaseapp.com",
    databaseURL: "https://fotogeo-16a78.firebaseio.com",
    projectId: "fotogeo-16a78",
    storageBucket: "fotogeo-16a78.appspot.com",
    messagingSenderId: "1093165096555"};

	var jhg = document.getElementById("imgf");
	var uio = [];
var dados1 = [];
var furlf;
	var defaultApp = firebase.initializeApp(config);
 var database = firebase.database();

console.log(defaultApp.name);  // "[DEFAULT]"


var promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    //resolve('This is executed once the timer is done!');
    reject({code: 500, message: 'An error occurred!'});
    //console.log('This is executed once the timer is done!');
  }, 3000);
});


////// cria blocos para cada elemento

function createCard(data) {
	$("#imgf").append( '<img  src="'+ data.foto +'" width="100px" height="auto"/>');
	//jhg.innerHTML = furlf;
	console.log(data.foto + '  <  >');

	
}

  function updateUI(data) {
  
  for (var i = 0; i < data.length; i++) {
    createCard(data[i]);
  }
}
/*var url2 = 'http://192.168.0.10:8081/';
var xhr1 = createCORSRequest('GET', url2);
xhr1.send();*/

var url = 'https://fotogeo-16a78.firebaseio.com/registro.json';
var networkDataReceived = false;

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    networkDataReceived = true;
	window.furlf = data.foto;
	


//$("#tarima").attr("src", data.itemcod.foto);
	console.log(data.foto + '<???>' + jhg) ;
	
    console.log('From web', data);
    var dataArray = [];
    for (var key in data) {
     dataArray.push(data[key]);
     uio.push(data[key]);
    }
    updateUI(dataArray);
	window.dados1 = uio;
	console.log(uio.length + '<???>' + jhg) ;
	
	return window.dados1, window.furlf;
  });
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://httpbin.org/ip');
xhr.responseType = 'json';

xhr.onload = function() {
  console.log(xhr.response);
};

xhr.onerror = function() {
  console.log('Error!');
};

xhr.send();

fetch('https://httpbin.org/ip')
  .then(function(response) {
    console.log(response);
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.log(err);
  });
fetch('http://192.168.0.10:8081/trees')
  .then(function(response) {
    console.log(response);
    return response.json();
  })
  .then(function(data) {
    
      var dataArrayTree = [];
    for (var key in data) {
     dataArrayTree.push(data[key]);
     
    }
/*  if ('indexedDB' in window) {
  readAllData('trees')
    .then(function(data) {
      if (!networkDataReceived) {
        console.log('From cache tree> ', data);
        updateUI(data);
      }
    });
}*/
    console.log(dataArrayTree);
  })
  .catch(function(err) {
    console.log(err);
  });


fetch('https://httpbin.org/post', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  mode: 'cors',
  body: JSON.stringify({message: 'Does this work?'})
})
  .then(function(response) {
    console.log(response);
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.log(err);
  });
/*
fetch('http://127.0.0.1:8081/trees', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  mode: 'no-cors',
  body: JSON.stringify({message: 'Does this work?'})
})
  .then(function(response) {
    console.log(response);
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.log(err);
  });
*/


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

promise.then(function(text) {
  return text;
}).then(function(newText) {
  console.log(newText);
}).catch(function(err) {
  console.log(err.code, err.message);
});

console.log('This is executed right after setTimeout()');
 