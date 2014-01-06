Ext.Loader.setConfig({
    enabled     : true
});

Ext.application({
//    requires    : [
//        'YHDM.view.DonorManager',
//        'YHDM.view.donor.List'
//    ],
//    
    models      : ['Donor'],
    
    controllers : ['Donors'],
    
    stores      : ['Donors'],

    name        : 'YHDM',
    appFolder   : 'app',

    launch      : function() {
        console.log('Launch application');
    },
    
	autoCreateViewport: true
}); 