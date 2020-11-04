import { LightningElement, wire } from 'lwc';
import { reduceErrors } from 'c/ldsUtils';
import getContacts from '@salesforce/apex/ContactController.getContacts';
import First_name from '@salesforce/schema/Contact.FirstName';
import Last_name from '@salesforce/schema/Contact.LastName';
import Email_field from '@salesforce/schema/Contact.Email';
const COLUMNS = [
    {label : 'First Name', fieldName : First_name.fieldApiName, type : 'text'},
    {label : 'Second Name', fieldName : Last_name.fieldApiName, type : 'text'},
    {label : 'Email', fieldName : First_name.fieldApiName, type : 'text'},
]
export default class ContactList extends LightningElement {
    columns = COLUMNS;
    @wire(getContacts)
    contacts;
    get errors() {
        return (this.contacts.error) ?
            reduceErrors(this.contacts.error) : [];
    }
}