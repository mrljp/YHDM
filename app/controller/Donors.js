// Global detail panel reference
var		detailPanel = null;

Ext.define('YHDM.controller.Donors', {
	extend:		'Ext.app.Controller',
	
	stores : ['Donors'],
	models : ['Donor'],
	views:		[
		'donor.List',
		'donor.DonorForm'
	],
	
	ref : [
	       {
	    	   
	       }]
});