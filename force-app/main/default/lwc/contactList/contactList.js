import { LightningElement, wire } from 'lwc';
import FIRST_NAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LAST_NAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import getContacts from '@salesforce/apex/ContactController.getContacts';
import { reduceErrors } from 'c/ldsUtils';

export default class ContactList extends LightningElement {
    fields = [FIRST_NAME_FIELD, LAST_NAME_FIELD, EMAIL_FIELD]
    @wire(getContacts)
    contactList;
    get errors() {
        return (this.contactList.error) ?
            reduceErrors(this.contactList.error) : [];
    }
}