Ext.define('MyApp.view.clients.Form',{
    extend: 'Ext.form.Panel',
    alias: 'widget.clientform',
    
    title: 'Client form',
    bodyPadding : 5,
    defaultType : 'textfield', //Step 1

    initComponent : function() { 
        var me = this;

        me.items = me.buildItems(); //Step 2

        me.callParent();
    },

    buildItems: function(){ //Step 3
        return [
            {
                fieldLabel: 'Name',
                name: 'name'
            },
            {
                fieldLabel: 'Contact',
                name: 'contact'
            }
        ];
    }
}); 