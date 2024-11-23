let tg = window.Telegram.WebApp;
        tg.expand();
        tg.MainButton.setText("Click Me!").show().onClick(function(){
            tg.showAlert("You clicked the button!");
        });