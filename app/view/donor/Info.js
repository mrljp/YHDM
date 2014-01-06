Ext.define('YHDM.view.donor.Info', {
	extend : 'Ext.form.Panel',
	alias : 'widget.donorinfo',
//	xtype : 'contact-form',
	xtype : 'form',
	title : 'Donor Info',

	initComponent : function() {
		console.log('init donor info component');
		Ext.apply(this, {

			store : 'Donors',
			trackResetOnLoad : true,
			// frame : true,
			// width : 400,
			// layout : 'anchor',
			// border : false,
			// bodyPadding : 10,
			fieldDefaults : {
				labelAlign : top,
				labelWidth : 100,
				labelStyle : 'font-weight:bold'
			},
			defaults : {
				anchor : '100%',
				margins : '0 0 10 0'
			},

			defaultType : 'textfield',
			items : [ {
				fieldLabel : 'Salutation',
				name : 'salutation',
			}, {
				fieldLabel : 'First Name',
				name : 'firstName',
				allowBlank : false
			}, {
				fieldLabel : 'Last Name',
				name : 'lastName',
				allowBlank : false
			}, {
				fieldLabel : 'Second Name',
				name : 'secondName'
			}, {
				fieldLabel : 'Address',
				name : 'address'
			}, {
				fieldLabel : 'City',
				name : 'city'
			}, {
				fieldLabel : 'State',
				name : 'state'
			}, {
				fieldLabel : 'ZIP',
				name : 'zip'
			} ],
			dockedItems : [ {
				xtype : 'toolbar',
				dock : 'bottom',
				items : [ {
					text : 'Revert',
					itemId : 'revert',
					glyph : '88@HeydingsCommonIconsRegular',
					action : 'revert',
					disabled : true
				}, '-', {
					text : 'Save',
					itemId : 'save',
					glyph : '79@HeydingsCommonIconsRegular',
					action : 'save',
					disabled : true
				} ]
			} ]
		});
		this.callParent(arguments);

	}

});