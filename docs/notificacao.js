

  
   document.addEventListener('DOMContentLoaded', function () {
  if (!Notification) {
    alert('Desktop notifications not available in your browser. Try Chromium.'); 
    return;
  }
  if (Notification.permission !== "granted")
    Notification.requestPermission();
});

var notification = new Notification('Pomodoro', {
      icon: 'https://st3.depositphotos.com/1007168/14192/v/1600/depositphotos_141927588-stock-illustration-tomato-cartoon-character.jpg',
      body: "Hey, vc será notificado!!",
    });

