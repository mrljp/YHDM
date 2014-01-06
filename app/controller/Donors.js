Ext.define('YHDM.controller.Donors', {
	extend : 'Ext.app.Controller',

	stores : [ 'Donors' ], // ?Add Donations
	models : [ 'Donor' ],
	views : [ 'donor.List', 'donor.Info' ],

	requires : [ 'YHDM.store.Donors',
	// 'YHDM.store.Donations'
	],

	refs : [ {
		ref : 'donorList',
		selector : 'donormanager donorlist'
	}, {
		ref : 'donorInfo',
		selector : 'donormanager donorinfo'
	}, {
		ref : 'donorToolbar',
		selector : 'donormanager donortoolbar'
//	}, {
//		ref : 'donationsList',
//		selector : 'donormanager donationslist'
	} ],

	init : function() {
		console.log('init controller Donors');
		this.control({
			'donorlist' : {
				selectionchange : this.onSelection
			},
			'donorlist button[action=add]' : {
				click : this.addDonor
			},
			'donorlist button[action=remove]' : {
				click : this.removeDonor
			},
			'donorinfo button[action=save]' : {
				click : this.saveDonor
			},
			'donorinfo button[action=revert]' : {
				click : this.revertDonor
			}
		});
	},

	onSelection : function(model, records) {
		// populate form
		console.log('selection changed');
		var form = this.getDonorInfo();
		var record = records[0];
		if (record) {
			form.loadRecord(record);
			this.getDonorInfo().down('button[action=save]').enable();
			this.getDonorInfo().down('button[action=revert]').enable();
		}
		else
		{
			form.reset();
			this.getDonorInfo().down('button[action=save]').enable();
			this.getDonorInfo().down('button[action=revert]').enable();
		}
	},

	addDonor : function() {
		console.log('add donor requested');
		var form = this.getDonorInfo();
		var rec = new YHDM.model.Donor();
		form.loadRecord(rec);
	},

	removeDonor : function() {
		this.getDonorsStore().remove(
				this.getDonorList().getSelectionModel().getSelection()[0]);
	},

	// revert changes requested
	revertDonor : function() {
		// if adding a new donor, clear the form
		// else revert to previous values
//		this.getDonorInfo().reset();
		var form = this.getDonorInfo();
		var rec = this.getDonorList().getSelectionModel().getSelection()[0];
		if (rec) {
			form.loadRecord(rec);
		}
	},

	// save changes requested
	saveDonor : function() {
		// if adding a new donor, submit new record
		// else update record
		this.getDonorInfo().submit();
	}

});
