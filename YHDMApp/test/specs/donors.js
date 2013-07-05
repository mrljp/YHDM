describe("Donors", function() {
    var store = null, ctlr = null;

    beforeEach(function(){
        if (!ctlr) {
            ctlr = Application.getController('DonorController');
        }

        if (!store) {
            store = ctlr.getStore('DonorStore');
        }

        expect(store).toBeTruthy();

        waitsFor(
            function(){ return !store.isLoading(); },
            "load never completed",
            4000
        );
    });

    it("should have users",function(){
		var count = store.getCount();
        expect(count).toBeGreaterThan(1);
    });

	it("should open the editor window", function(){
		var editWin = Ext.ComponentQuery.query('donorEditorWindow')[0];
		expect(editWin).toBeTruthy();
	});
	
    it("should open the editor grid", function(){
        var grid = Ext.ComponentQuery.query('donorGridPanel')[0];

        ctlr.editUser(grid,store.getAt(0));

        var edit = Ext.ComponentQuery.query('donorFormPanel')[0];

        expect(edit).toBeTruthy();
        if(edit)edit.destroy();
    });

});
