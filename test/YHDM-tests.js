Ext.require('Ext.app.Application');

var Application = null;

//Ext.onReady(function() {
//    Application = Ext.create('Ext.app.Application', {
//        name        : 'YHDMApp',
//
//        appFolder   : 'YHDMApp',
//
//        //controllers : [
//        //    'DonorController'
//        //],
//        //
//        launch      : function() {
//            //include the tests in the test.html head
//            jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
//            jasmine.getEnv().execute();
//        }
//    });
//});


Ext.application({
    name            : 'YHDMApp',

    appFolder       : 'YHDMApp',
    
    controllers     : [
                        'DonorController'
    ],
    
    models          : [
                        'DonorModel'
    ],
    
    launch          : function() {
            Application = this;
            //include the tests in the test.html head
            jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
            jasmine.getEnv().execute();
    }
}); 