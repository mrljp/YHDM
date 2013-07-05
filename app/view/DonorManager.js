Ext.define('YHDM.view.DonorManager', {
	extend: 'Ext.panel.Panel',
	alias	: 'widget.donorManager',
	
	frame: true,
	height: 250,
	layout: {
		align: 'stretch',
		type: 'hbox'
	},
	title: 'Yom Hashoah Donor Management',
	
	initComponent: function() {
		var	me = this;
		
		Ext.applyIf(me, {
			items: [
				{
					xtype	: 'donorlist',
					flex	: 1
				},
				{
					xtype	: 'donordetail',
					flex	: 2
				}
				// donations section, flex 1
			]
		});
		
		me.callParent(arguments);
	}
});