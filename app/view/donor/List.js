Ext.define('YHDM.view.donor.List', {
	extend		: 'Ext.grid.Panel',
	alias		: 'widget.donorlist',
	
	xtype	: 'gridpanel',
	title	: 'Select Donor',
	store	: 'DonorStore',
	columns	: [
		{
			xtype		: 'gridcolumn',
			dataIndex	: 'lastName',
			text		: 'Last Name'
		},
		{
			xtype		: 'gridcolumn',
			dataIndex	: 'firstName',
			text		: 'First Name'
		}
	],
	
	listeners: {
			selectionchange:		this.onDonorSelectedChanged
	},
	
});

function onDonorSelectedChanged(model, records) {
		if (records[0]) {
			var record = records[0];
			console.log('Donor selected: ' + record.get('salutation') + ' ' + record.get('firstName') + ' ' + record.get('lastName'));
			this.up().down('form').loadRecord(record);
		}
	}
