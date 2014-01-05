Ext.define('YHDM.view.Viewport', {
	extend : 'Ext.container.Viewport',
	alias : 'widget.donormanager',

	// requires: [
	// 'YHDM.view.DonorManager'
	// ],
	//    
	// layout: {
	// align: 'stretch',
	// type: 'auto'
	// },
	// items : [
	// {
	// xtype : 'donormanager'
	// }
	// ],
	//    
	// renderTo: Ext.getBody()
	requires : [ 'YHDM.view.DonorManager', 
	             'YHDM.view.Donor.List' ],

	layout : {
		align : 'stretch',
		type : 'auto'
	},
	items : [ {
		region : 'center',
		xtype : 'donordetail'
	}, {
		region : 'west',
		width : 0.50,
		xtype : 'donormanager'
	} ],

	renderTo : Ext.getBody()
});