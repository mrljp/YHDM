Ext.define('YHDM.view.donor.Detail', {
	extend : 'Ext.panel.Panel',
	requires : [ 'YHDM.view.donor.Info',
	// 'YHDM.view.donation.DonationList'
	],
	alias : 'widget.donordetail',

	frame : true,
	closable : false,
	title : 'Donor Details',

	initComponent : function() {
		console.log('init component donor detail');
		Ext.apply(this, {
			items : [ {
				// xtype : 'donationlist'
				items : [ {
					xtype : 'text',
					text : 'Donations list'
				} ]
			}, {
				xtype : 'donorinfo'
			} ]

		});

		this.callParent(arguments);
	}
});