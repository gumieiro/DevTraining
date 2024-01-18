public with sharing class ContactController {
    public ContactController() { }

    @AuraEnabled(cacheable=true)
    public static List<Contact>  getContacts() {
        throw new AuraHandledException('Forced Error');
        // return [
        //     SELECT Id, FirstName, LastName, Email
        //     FROM Contact
        //     WITH SECURITY_ENFORCED
        //     ORDER BY CReatedDate DESC
        //     LIMIT 5
        // ];
    }
}