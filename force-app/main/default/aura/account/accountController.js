({
	doinit : function(component, event, helper) {
        
        
        var server=component.get("c.retrieveacc");
       
        
        //set callback
        
        server.setCallback(this,function(res){
            
            console.log(res);
            var state=res.getState();
              console.log(res);
            if(state==='SUCCESS'){
                var returnedvalue=res.getReturnValue();
                
                console.log(returnedvalue);
                component.set("v.multiacc",returnedvalue);
            }else{
                var errormsg=res.getError()[0].message;
                console.log(errormsg);
                component.set("v.msg",errormsg);
                
            }
        })
        
        $A.enqueueAction(server);
        
       
	},
    accountcreateClientController : function(component, event, helper) {
        
        var singleaccount=component.get('v.singleAcc');
        console.log(singleaccount.Name);
        console.log(singleaccount.Phone );
        console.log(singleaccount.Website);
        
		
        var server=component.get("c.create");
        //set parameters
        
        server.setParams({
            'singleAcc':singleaccount
        })
        
        //set callback
        
        server.setCallback(this,function(res){
            
            console.log(res);
            var state=res.getState();
              console.log(res);
            if(state==='SUCCESS'){
                var returnedvalue=res.getReturnValue();
                
                console.log(returnedvalue);
                component.set("v.accid",returnedvalue);
            }else{
                var errormsg=res.getError()[0].message;
                console.log(errormsg);
                component.set("v.msg",errormsg);
                
            }
        })
        
        $A.enqueueAction(server);
        
       
	}
})