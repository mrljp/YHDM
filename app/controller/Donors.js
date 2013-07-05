// Global detail panel reference
var		detailPanel = null;

Ext.define('YHDM.controller.Donors', {
	extend:		'Ext.app.Controller',
	
	views:		[
		'donor.List',
		'donor.Detail'
	]
});