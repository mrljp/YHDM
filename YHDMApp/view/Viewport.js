Ext.define('YHDM.view.Viewport', {
    extend: 'Ext.container.Viewport',

    layout: 'fit',
    items: [{
        xtype: 'donorlist'
    }],
    
    initComponent : function() {
        console.log('Init Viewport');
    }
});