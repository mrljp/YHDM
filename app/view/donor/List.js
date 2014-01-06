Ext.define('YHDM.view.donor.List', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.donorlist',
	title : 'Donors',
	margins : '5 0 5 5',
//	layout : 'fit',

	initComponent : function() {
		console.log('init donor list component');
		Ext.apply(this, {
			store : 'Donors',

			columns : [ {
				xtype : 'gridcolumn',
				dataIndex : 'lastName',
				header : 'Last Name',
//				flex : 1,
				sortable : true
			}, {
				xtype : 'gridcolumn',
				dataIndex : 'firstName',
				header : 'First Name',
//				flex : 1,
				sortable : false
			}, {
				xtype : 'gridcolumn',
				dataIndex : 'secondName',
				header : 'Second Name',
//				flex : 1,
				sortable : false
			} ],
            listeners: {
                selectionchange: this.onSelectionChange
            },
			dockedItems : [ {
				xtype : 'toolbar',
				dock : 'bottom',
				items : [ {
					text : 'Add New Donor',
					glyph : '43@HeydingsCommonIconsRegular',
					action : 'add'
				}, {
					text : 'Remove Donor',
					glyph : '45@HeydingsCommonIconsRegular',
					action : 'remove',
					disabled : true
				}, ]
			} ]
		});
		this.callParent(arguments);

	},

	onSelectionChange : function(selmodel, selection) {
		var selected = selection[0], 
			button = this.down('button[action=remove]');
		if (selected) {
			button.enable();
		} else {
			button.disable();
		}
	}
});
