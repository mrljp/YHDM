Ext.define('YHDM.view.Viewport', {
    extend      : 'Ext.container.Viewport',
    requires: [
       'YHDM.view.DonorManager'
    ],
    
	layout: {
		align: 'stretch',
		type: 'auto'
	},
    items       : [
        {
            xtype   : 'donorManager'
        }
    ],
    
    renderTo: Ext.getBody()
});