window.addEventListener('load', () =>{
	if(!window.Notification) return;
	//console.log(Notification.permission);
//Notification
//.requestPermission()
//.then(sendNotification)
//})

const sendNotification = (permission) =>{
	let notification = new Notification('Yeni Bildirim', {
		body: 'Lorem İpsun Mesajı basdaslkdklasdlkasdmşalsmdla',
		icon: 'icon.png'
	})
	notification.onclick = () =>{
		window.location.href = 'index.php'
	}
	console.log(notification);
}
const button = document.getElementById('button')
button.addEventListener('click',()=>{
	Notification
	.requestPermission()
	.then(sendNotification)
})
})