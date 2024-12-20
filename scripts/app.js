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

        function sessionStorageSet(key, value) {
            try {
              window.sessionStorage.setItem('__telegram__' + key, JSON.stringify(value));
              return true;
            } catch (e) {}
            return false;
          }
        
          function sessionStorageGet(key) {
            try {
              return JSON.parse(window.sessionStorage.getItem('__telegram__' + key));
            } catch (e) {}
            return null;
          }
        
          var appTgVersion = 8.0;
        
          var initParams = sessionStorageGet('initParams');
          if (initParams) {
            if (!initParams.tgWebAppVersion) {
              initParams.tgWebAppVersion = appTgVersion;
            }
          } else {
            initParams = {
              tgWebAppVersion: appTgVersion
            };
          }
        
          sessionStorageSet('initParams', initParams);