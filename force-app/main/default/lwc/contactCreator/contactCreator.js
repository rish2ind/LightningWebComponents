import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import First_name from '@salesforce/schema/Contact.FirstName';
import Last_name from '@salesforce/schema/Contact.LastName';
import Email_field from '@salesforce/schema/Contact.Email';
export default class ContactCreator extends LightningElement {
    objectApiName = CONTACT_OBJECT;
    fields = [First_name, Last_name, Email_field];
    handleSuccess(event){
        const toastEvent = new ShowToastEvent({
            title: "Contact Created",
            message: "Record Id : " + event.detail.id,
            variant : "success"
        });
        this.dispatchEvent(toastEvent);
    }
}