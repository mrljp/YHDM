Ext.define('YHDM.view.Viewport', {
    //extend: 'YHDM.view.DonorManager',
    extend      : 'Ext.container.Viewport',
    
	layout: {
		align: 'stretch',
		type: 'fit'
	},
    items       : [
        {
            xtype   : 'donorManager'
        }
    ],
    
    renderTo: Ext.getBody()
});