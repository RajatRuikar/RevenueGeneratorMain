export class Customer{
        customerId:number;
        customerName : String;
        customerPhoneNumber : String;
        customerEmail : String;
        customerAddress : String;
        paymentIs:String;

    constructor(){
        this.customerId = 0;
        this.customerName = "";
        this.customerPhoneNumber = "";
        this.customerEmail = "";
        this.customerAddress = "";
        this.paymentIs = "";
    }
}