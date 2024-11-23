let tg = window.Telegram.WebApp;
        tg.expand();
        tg.BackButton.show().onClick(function(){
            tg.showAlert("Back button clicked!");
        });