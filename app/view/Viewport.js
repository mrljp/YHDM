Ext.define('YHDM.view.Viewport', {
	extend : 'Ext.container.Viewport',
	alias : 'widget.donormanager',

	requires : [ 
	        'YHDM.view.donor.List', 
	        'YHDM.view.donor.Detail',
			'Ext.layout.container.Border'
	   ],

	layout : 'border',

	items : [ {
		region : 'center',
		xtype : 'donorlist'
	}, {
		region : 'east',
		width : '50%',
		xtype : 'donordetail'
	} ],

});