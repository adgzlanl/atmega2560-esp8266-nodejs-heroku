
// THIS NODE JS SERVICE IS DESIGNED FOR ESP8266 IOT
//DESIGNED BY ANIL ADIGUZEL 
// YOU CAN PUBLISH ,DISTRIBUTE AND CHANGE.


//BUFORE USING THIS SERVICE, YOU SHOULD INSTALL NODE JS ON THE INTERNET AND INSTALL HEROKU TOOLKIT
// HEROKU REDIRECTS YOU 


//*********************************** Variables*****************************************************

var express = require('express');
var mongoose =require('mongoose');
var UserModel=require('./models/user');
var DeviceModel=require('./models/device');
var UserandDeviceModel=require('./models/useranddevice');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var app = express();

//******************************** Mongodb connection Strings*****************************************
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://freeuser:freeuser@ds141328.mlab.com:41328/esp8266');// ALSO YOU CAN SIGNUP AND GET FREE ACCOUNT FROM MBLAB FOR MONGO DATABASE
// OR YOU CAN USE ABOVE MONGO CONNECTION STRING FOR TESTING

//*********************Json Body Parser***************************************************************
app.use( bodyParser.json() );     // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
extended: true
}));

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

//****************** views is directory for all template files*****************************************
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');



//************************************* Get / request *************************************************
app.get('/', function(request, response) {
  response.render('pages/index');
});



//*****************************POST / SIGNUP USER AND DEVICE REQUEST*********************************************
app.post('/user_and_device_signup', function(request, response) {
  var name=request.query.name;
  var username=request.query.username;
  var password=request.query.password;
  var admin=request.query.admin;
  var location=request.query.location;
  var deviceid=request.query.deviceid;
  var email=request.query.email;
  var deviceparam1="NULL";
  var deviceparam2="NULL";
  var deviceparam3="NULL";
  var deviceparam4="NULL";
  var deviceparam5="NULL";
  var deviceparam6="NULL";
  var deviceparam7="NULL";
  var deviceparam8="NULL";
  var deviceparam9="NULL";
  var deviceparam10="NULL";
  var deviceparam11="NULL";
  var deviceparam12="NULL";


  var UserandDeviceClass=new UserandDeviceModel();
  UserandDeviceClass.name=name;
  UserandDeviceClass.username=username;
  UserandDeviceClass.password=password;
  UserandDeviceClass.admin=admin;
  UserandDeviceClass.location=location;
  UserandDeviceClass.DeviceInfo.deviceID=deviceid;
  UserandDeviceClass.DeviceInfo.Param1=deviceparam1;
  UserandDeviceClass.DeviceInfo.Param2=deviceparam2;
  UserandDeviceClass.DeviceInfo.Param3=deviceparam3;
  UserandDeviceClass.DeviceInfo.Param4=deviceparam4;
  UserandDeviceClass.DeviceInfo.Param5=deviceparam5;
  UserandDeviceClass.DeviceInfo.Param6=deviceparam6;
  UserandDeviceClass.DeviceInfo.Param7=deviceparam7;
  UserandDeviceClass.DeviceInfo.Param8=deviceparam8;
  UserandDeviceClass.DeviceInfo.Param9=deviceparam9;
  UserandDeviceClass.DeviceInfo.Param10=deviceparam10;
  UserandDeviceClass.DeviceInfo.Param11=deviceparam11;
  UserandDeviceClass.DeviceInfo.Param12=deviceparam12;


  UserandDeviceClass.save(function(err) {
    if (err) {
  
      console.log('mongo save hata')
      response.send(err);
    } else {
      console.log('Person created');
      response.redirect('/');
      
    }
  });

});
//*****************************POST / UPDATE USER INFO AND DEVICE PARAM REQUEST*********************************************
app.post('/update_device_param',function(request, response) {

  var deviceparam1=request.query.deviceparam1;
  var deviceparam2=request.query.deviceparam2;
  var deviceparam3=request.query.deviceparam3;
  var deviceparam4=request.query.deviceparam4;
  var deviceparam5=request.query.deviceparam5;
  var deviceparam6=request.query.deviceparam6;
  var deviceparam7=request.query.deviceparam7;
  var deviceparam8=request.query.deviceparam8;
  var deviceparam9=request.query.deviceparam9;
  var deviceparam10=request.query.deviceparam10;
  var deviceparam11=request.query.deviceparam11;
  var deviceparam12=request.query.deviceparam12;


  UserandDeviceModel.findOne({'email':request.query.email,'username':request.query.username,'DeviceInfo.deviceID':request.query.deviceid}, function(err, useranddevice) {
      if (err)
        response.send(err);
      else {
        if(useranddevice) {

          console.log(useranddevice);
          response.send(useranddevice);


          		useranddevice.DeviceInfo.Param1=deviceparam1;
          		useranddevice.DeviceInfo.Param2=deviceparam2;
          		useranddevice.DeviceInfo.Param3=deviceparam3;
          		useranddevice.DeviceInfo.Param4=deviceparam4;
          		useranddevice.DeviceInfo.Param5=deviceparam5;
          		useranddevice.DeviceInfo.Param6=deviceparam6;
          		useranddevice.DeviceInfo.Param7=deviceparam7;
          		useranddevice.DeviceInfo.Param8=deviceparam8;
          		useranddevice.DeviceInfo.Param9=deviceparam9;
          		useranddevice.DeviceInfo.Param10=deviceparam10;
          		useranddevice.DeviceInfo.Param11=deviceparam11;
          		useranddevice.DeviceInfo.Param12=deviceparam12;


				  useranddevice.save(function(err) {
				    if (err) {
				  
				      console.log('mongo save hata')
				      response.send(err);
				    } else {
				      console.log('Person created');
				    				      
				    }
				  });

        } else {

        }

      }
    });

  });
//*****************************JSON USER AND DEVICE SIGNUP*********************************************
 app.post('/json_user_and_device_signup',jsonParser,function(request, response) {


  var name=request.body.name;
  var username=request.body.username;
  var password=request.body.password;
  var admin=request.body.admin;
  var location=request.body.location;
  var deviceid=request.body.deviceid;
  var email=request.body.email;
  var deviceparam1="NULL";
  var deviceparam2="NULL";
  var deviceparam3="NULL";
  var deviceparam4="NULL";
  var deviceparam5="NULL";
  var deviceparam6="NULL";
  var deviceparam7="NULL";
  var deviceparam8="NULL";
  var deviceparam9="NULL";
  var deviceparam10="NULL";
  var deviceparam11="NULL";
  var deviceparam12="NULL";


  var UserandDeviceClass=new UserandDeviceModel();
  UserandDeviceClass.name=name;
  UserandDeviceClass.username=username;
  UserandDeviceClass.password=password;
  UserandDeviceClass.admin=admin;
  UserandDeviceClass.location=location;
  UserandDeviceClass.DeviceInfo.deviceID=deviceid;
  UserandDeviceClass.DeviceInfo.Param1=deviceparam1;
  UserandDeviceClass.DeviceInfo.Param2=deviceparam2;
  UserandDeviceClass.DeviceInfo.Param3=deviceparam3;
  UserandDeviceClass.DeviceInfo.Param4=deviceparam4;
  UserandDeviceClass.DeviceInfo.Param5=deviceparam5;
  UserandDeviceClass.DeviceInfo.Param6=deviceparam6;
  UserandDeviceClass.DeviceInfo.Param7=deviceparam7;
  UserandDeviceClass.DeviceInfo.Param8=deviceparam8;
  UserandDeviceClass.DeviceInfo.Param9=deviceparam9;
  UserandDeviceClass.DeviceInfo.Param10=deviceparam10;
  UserandDeviceClass.DeviceInfo.Param11=deviceparam11;
  UserandDeviceClass.DeviceInfo.Param12=deviceparam12;

        UserandDeviceClass.save(function(err) {
          if (err) {
            
            console.log('mongo save error')
          } else {
            
            console.log('data saved');
            response.json(UserandDeviceClass);
              }
        });

        });
//*****************************JSON UPDATE USER INFO AND DEVICE PARAM*********************************************
  app.post('/json_update_device_param', jsonParser ,function(request, response) {


  var deviceparam1=request.body.deviceparam1;
  var deviceparam2=request.body.deviceparam2;
  var deviceparam3=request.body.deviceparam3;
  var deviceparam4=request.body.deviceparam4;
  var deviceparam5=request.body.deviceparam5;
  var deviceparam6=request.body.deviceparam6;
  var deviceparam7=request.body.deviceparam7;
  var deviceparam8=request.body.deviceparam8;
  var deviceparam9=request.body.deviceparam9;
  var deviceparam10=request.body.deviceparam10;
  var deviceparam11=request.body.deviceparam11;
  var deviceparam12=request.body.deviceparam12;

              UserandDeviceModel.findOne({'email':request.body.email,'username':request.query.username,'DeviceInfo.deviceID':request.query.deviceid}, function(err, useranddevice) {
                  if (err){
                    response.send(err);
                  }
                  else {
                    if(useranddevice) {

                useranddevice.DeviceInfo.Param1=deviceparam1;
          		useranddevice.DeviceInfo.Param2=deviceparam2;
          		useranddevice.DeviceInfo.Param3=deviceparam3;
          		useranddevice.DeviceInfo.Param4=deviceparam4;
          		useranddevice.DeviceInfo.Param5=deviceparam5;
          		useranddevice.DeviceInfo.Param6=deviceparam6;
          		useranddevice.DeviceInfo.Param7=deviceparam7;
          		useranddevice.DeviceInfo.Param8=deviceparam8;
          	    useranddevice.DeviceInfo.Param9=deviceparam9;
          		useranddevice.DeviceInfo.Param10=deviceparam10;
          		useranddevice.DeviceInfo.Param11=deviceparam11;
          		useranddevice.DeviceInfo.Param12=deviceparam12;



					           useranddevice.save(function(err) {
					          if (err) {
					            response.send(err);
					            console.log('mongo save error')
					          } else {
					            
					            console.log('data saved');
					            response.json({useranddevice});
					           
					              }
					        });


                    } else {
                      response.json({error:true});
                      console.log("error:true");
                    }

                  }
                });
              });
//*****************************LOCALHOST PORT LISTENING*********************************************
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});