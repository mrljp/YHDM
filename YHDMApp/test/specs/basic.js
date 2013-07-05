describe("Basic Assumptions", function() {

    it("has Application defined", function() {
        expect(Application).toBeTruthy();
    });
    
    it("has ExtJS4 loaded", function() {
        expect(Ext).toBeDefined();
        expect(Ext.getVersion()).toBeTruthy();
        expect(Ext.getVersion().major).toEqual(4);
    });

    it("has loaded YHDM code",function(){
        expect(YHDMApp).toBeDefined();
    });
});
