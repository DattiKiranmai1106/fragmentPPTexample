sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.sap.kt.fragm.fragmentpptexample.controller.View1", {
            onInit: function () {

            },
            onPress:function(){
                var oView = this.getView();
                if (!this.oDialog) {
                    this.oDialog = sap.ui.core.Fragment.load({
                        name: "com.sap.kt.fragm.fragmentpptexample.fragment.pptex",
                        controller: this
                    }).then(function (oDialog) {
                        this.oDialog = oDialog;
                        oView.addDependent(this.oDialog);
                        this.oDialog.open();
                    }.bind(this));
                }else{
                    this.oDialog.open();
                }
            },
            sapsucker:function(){
                this.oDialog.close();
            }
        });
    });
