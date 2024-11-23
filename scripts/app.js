let tg = window.Telegram.WebApp;
        tg.expand();
        tg.MainButton.setText("Main Action").show().onClick(function(){
            tg.showAlert("Main button clicked!");
        });

        tg.BackButton.show().onClick(function(){
            tg.showAlert("Back button clicked!");
        });

        tg.onEvent('mainButtonClicked', function(){
            tg.HapticFeedback.impactOccurred('light');
        });