Ext.Loader.setConfig({
    enabled     : true
});

Ext.application({
    requires    : [
        'YHDM.view.DonorManager',
        'YHDM.view.donor.List'
    ],
    
    models      : ['Donor'],
    
    controllers : ['Donors'],
    
    stores      : ['DonorStore'],

    autoCreateViewport: true,
    name        : 'YHDM',
    appFolder   : 'app',

    
    launch      : function() {
        console.log('Launch application');
        Ext.setGlyphFontFamily('HeydingsCommonIconsRegular');
    }
}); 