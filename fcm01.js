var FCM = require('fcm-node');

var serverKey = '';

var fcm = new FCM(serverKey);

//var client_token = 'deBGB8jWJgn0RrdNLFRbKe:APA91bF5WE2yIIFi_oDkDCNQaDA9cURtJnVXx9Fa7AqP9G_Id4Xg9iZFif2n4oi-pPsXINsxm95sLentGIX4V8FfvCuEF0P6oo3YNYAytLj579EC4EajDXobzWECfbCb1RrEl9fF-zvu';
//var client_token = 'd35wCEHcXIJnV44XLCwiqB:APA91bHphOARmNasKvtDyWynqWmLiPJvTpWkTPLQVLgqxD-ZjTpCczqBw1A8mFsWZJlltVMJzBOrIo_-MU5F9oE0_sKJmfq0e5j5p7IFR8m9j1nf8C2EdeEPLI5YqQYW04Is6AtbLJIZ';
var client_token = 'eaAQykUKQNDT8-ENaEkXQP:APA91bEzdJeZH-yDI7mP7HdX5BacBqdwTbMnKWttkKIPwb84LOcVXsz6iWZOxBcT8fqfLw_VfmXafyrCeGDk-K6jjns4OnYOpIiqB0jSXl-hfSRvUaC3u306ct079xuDp13SdBL0tfuZ';

var title = 'Oni';

var body = 'fcm testing ...!!';

var push_data = {

    to: client_token,
    
    notification: {
        title: title,
        body: body,
        sound: "default",
        click_action: "http://localhost:8000/fcm01",
        icon: "fcm_push_icon"
    }
};

fcm.send(push_data, function(err, response) {

    if (err) {
        console.error('Push메시지 발송에 실패했습니다.');
        console.error(err);
        return;
    }

    console.log('Push메시지가 발송되었습니다.');
    console.log(response);
    console.log(response.results);

});
