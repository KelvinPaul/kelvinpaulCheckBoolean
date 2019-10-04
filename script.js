document.addEventListener('DOMContentLoaded',function(){
start.addEventListener('click',function(){
chrome.tabs.executeScript(null,
{code:`
console.log('Reading Database');
const presentationRequests = new PresentationRequest(['https://bzka9krbqgqhjo2zdqkisg-on.drv.tw/Presentation/index.html']);
navigator.presentation.defaultRequest = presentationRequests;
let presentationConnection;
presentationRequests.start();
presentationRequests.addEventListener('connectionavailable',Reader);
var Reader = function(event) {
  presentationConnection = event.connection;

var each = document.getElementById('lyrics');
each = each.getElementsByTagName('td');
for(let x = 0;x<each.length;x++){
	each[x].style.cursor='pointer';
	each[x].addEventListener('click',function(){
		var messag = this.innerHTML;
		presentationConnection.send(JSON.stringify({message}));
	});
}}	`});
window.close();
});
});

