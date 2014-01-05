Ext.define('YHDM.view.donor.List', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.donorlist',

	xtype : 'gridpanel',
	title : 'Donors',

	initComponent : function() {
		Ext.apply(this, {
			store : 'DonorStore',
			iconCls : 'icon-user',
			columns : [ {
				xtype : 'gridcolumn',
				dataIndex : 'lastName',
				header : 'Last Name',
				flex : 1,
				sortable : true
			}, {
				xtype : 'gridcolumn',
				dataIndex : 'firstName',
				header : 'First Name',
				flex : 1,
				sortable : false
			}, {
				xtype : 'gridcolumn',
				dataIndex : 'secondName',
				header : 'Second Name',
				flex : 1,
				sortable : false
			} ],
			dockedItems : [ {
				xtype : 'toolbar',
				items : [ {
					text : 'Add New Donor',
					glyph : '43@HeydingsCommonIconsRegular',
					handler : this.onAddButton
				} ]
			} ],

			listeners : {
				selectionchange : this.onSelection
			}
		});
		this.callParent(arguments);

	},

	onSelection : function(model, records) {
		// populate form
		console.log('selection changed');
		var grid = this;
		var form = grid.up('donorManager').down('donorform');
		var record = records[0];
		if (record) {
			form.loadRecord(record);
		}
	},

	onAddButton : function() {
		var form = this.up('donorManager').down('donorform');
		var rec = new YHDM.model.Donor();
		form.loadRecord(rec);
		form.focus();
	}
});
