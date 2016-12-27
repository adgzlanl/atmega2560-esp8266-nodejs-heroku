var express = require('express');
var mongoose =require('mongoose');
var UserModel=require('./models/user');
var DeviceModel=require('./models/device');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var app = express();
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://freeuser:freeuser@ds141328.mlab.com:41328/esp8266');

app.use( bodyParser.json() );     // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
extended: true
}));

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});



app.post('/deviceSignup', function(request, response) {
  var param1=request.query.Param1;
  var param2=request.query.Param2;
  var param3=request.query.Param3;
  var param4=request.query.Param4;

  console.log(param1);
  console.log(param2);
  console.log(param3);
  console.log(param4);

  var DeviceClass=new DeviceModel();
  DeviceClass.Param1=param1;
  DeviceClass.Param2=param2;
  DeviceClass.Param3=param3;
  DeviceClass.Param4=param4;


  DeviceClass.save(function(err) {
    if (err) {
      //request.send(err);
      console.log('mongo save hata')
      response.send(err);
    } else {
      console.log('Person created');
      response.redirect('/');
      
    }
  });



});



app.post('/deviceSelect',function(request, response) {

  DeviceModel.findOne({ 'Param1': request.query.Param1,'Param2':request.query.Param2}, function(err, user) {
      if (err)
        response.send(err);
      else {
        if(user) {

          console.log(user);
          response.send(user);
        } else {

        }

      }
    });

  });


app.post('/userSignup', function(request, response) {
  var Username=request.query.name;
  var Useremail=request.query.email;
  var Userpass=request.query.pass;
  var UserDeviceID=request.query.deviceID;

  console.log(Username);
  console.log(Useremail);
  console.log(Userpass);
  console.log(UserDeviceID);

  var UserClass=new UserModel();
  UserClass.name=Username;
  UserClass.email=Useremail;
  UserClass.pass=Userpass;
  UserClass.deviceID=UserDeviceID;

  UserClass.save(function(err) {
    if (err) {
      //request.send(err);
      console.log('mongo save hata')
      response.send(err);
    } else {
      console.log('Person created');
      
    }
  });



});


app.post('/userSelect',function(request, response) {

  UserModel.findOne({ 'email': request.query.email,'name':request.query.name}, function(err, user) {
      if (err)
        response.send(err);
      else {
        if(user) {

          console.log(user);
          response.send(user);
        } else {

        }

      }
    });

  });



 app.post('/JsonuserSignup',jsonParser,function(request, response) {

            var JsonUserClass = new UserModel();
            JsonUserClass.name = request.body.name;
            JsonUserClass.email = request.body.email;
            JsonUserClass.pass = request.body.pass;//crypto.createHash('md5').update(request.body.pass).digest("hex");
            JsonUserClass.deviceID = request.body.deviceID;
            JsonUserClass.save(function(err) {
              if (err) {
                response.send(err);
                console.log('mongo save hata')
              } else {
                
                console.log(JsonUserClass);
                  }
            });

            });


  app.post('/JsondeviceSignup',jsonParser,function(request, response) {

            var JsonDeviceClass=new DeviceModel();
            JsonDeviceClass.Param1 = request.body.Param1;
            JsonDeviceClass.Param2 = request.body.Param2;
            JsonDeviceClass.Param3 = request.body.Param3;//crypto.createHash('md5').update(request.body.pass).digest("hex");
            JsonDeviceClass.Param4 = request.body.Param4;

            JsonDeviceClass.save(function(err) {
              if (err) {
                response.send(err);
                console.log('mongo save hata')
              } else {
               
                console.log(JsonDeviceClass);
                  }
            });

            });


  app.post('/JsonuserSelect', jsonParser ,function(request, response) {

              UserModel.findOne({'email': request.body.email}, function(err, user) {
                  if (err){
                    response.send(err);
                  }
                  else {
                    if(user) {
                     response.json({ID:user._id,name:user.name,email:user.email,pass:user.pass,deviceID:user.deviceID});
                      console.log(user);

                    } else {
                      response.json({error:true});
                      console.log("error:true");
                    }

                  }
                });
              });




  app.post('/JsondeviceSelect', jsonParser ,function(request, response) {

              DeviceModel.findOne({'Param1': request.body.Param1}, function(err, device) {
                  if (err){
                    response.send(err);
                  }
                  else {
                    if(device) {
                     response.json({ID:device._id,Param1:device.Param1,Param2:device.Param2,Param3:device.Param3,Param4:device.Param4});
                      console.log(device);

                    } else {
                      response.json({error:true});
                      console.log("error:true");
                    }

                  }
                });
              });



app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});