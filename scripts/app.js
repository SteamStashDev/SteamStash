let tg = window.Telegram.WebApp;
        tg.expand();

        document.getElementById('showAlert').addEventListener('click', function() {
            tg.showAlert("This is an alert!");
        });

        document.getElementById('showConfirm').addEventListener('click', function() {
            tg.showConfirm("Are you sure?", function(confirmed) {
                if (confirmed) {
                    tg.showAlert("You confirmed!");
                } else {
                    tg.showAlert("You cancelled!");
                }
            });
        });

        document.getElementById('showPopup').addEventListener('click', function() {
            tg.showPopup({
                title: "Popup Title",
                message: "This is a popup message",
                buttons: [
                    {id: "ok", type: "ok", text: "OK"},
                    {id: "cancel", type: "cancel", text: "Cancel"}
                ]
            }, function(buttonId) {
                tg.showAlert("You clicked: " + buttonId);
            });
        });

        tg.MainButton.setText("Main Action").show().onClick(function(){
            tg.showAlert("Main button clicked!");
        });

        tg.BackButton.show().onClick(function(){
            tg.showAlert("Back button clicked!");
        });

        tg.onEvent('mainButtonClicked', function(){
            tg.HapticFeedback.impactOccurred('light');
        });
        
// Получаем и декодируем initData
let initData = tg.initData || '';
let initDataUnsafe = tg.initDataUnsafe || {};

// Проверяем авторизацию пользователя
if (initDataUnsafe.user) {
    console.log("User is authorized:", initDataUnsafe.user.first_name);
} else {
    console.log("User is not authorized");
}

// Отправляем данные обратно боту
document.getElementById('sendData').addEventListener('click', function() {
    tg.sendData("Some data from Mini App");
});