public class accountServerController {
    
    @auraEnabled
    
    public static String create (Account singleAcc){
        
        try{
            
            insert singleAcc;
        }catch(Exception e){
            
            throw new AuraHandledException(e.getMessage());
        }
        
        
        return singleAcc.id;
        
    }
     @auraEnabled
    
    public static List<Account> retrieveacc () {
        
        List<Account> multiacc=new list<Account>();
        
        try{
            
          multiacc=[Select Id,Name,Phone,Website,Industry from Account ORDER BY CreatedDate DESC LIMIT 10];
        }catch(Exception e){
            
            throw new AuraHandledException(e.getMessage());
        }
        
        
        return multiacc;
        
    }

}