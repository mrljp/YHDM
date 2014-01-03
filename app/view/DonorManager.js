Ext.define('YHDM.view.DonorManager', {
	extend: 'Ext.panel.Panel',
	requires: [
	           'YHDM.view.donor.List',
	           'YHDM.view.donor.DonorForm',
	           'YHDM.view.donation.DonationList'
	           ],
	alias	: 'widget.donorManager',
	
	frame: true,
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
					flex	: 2
				},
				{
					xtype	: 'panel',
					flex	: 1,
					layout	:
						{
							align : 'stretch',
							type : 'vbox'
						},
					items	: [
						{
							xtype	: 'gridpanel',
							flex	: 1,
							columns : [{xtype:'gridcolumn', header:'test'}]
						},
						{
							xtype	: 'donorform',
							flex	: 1
						}
					]
				}
			]
		});
		
		me.callParent(arguments);
	}
});