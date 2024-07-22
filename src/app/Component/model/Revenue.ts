export class Revenue{
    investment: number;
	gainOrLoss: number;
	sumOfEmployeeSalary: number;
	investmentOnMaterial: number;
	materialPaymentPaid:number;
    materialPaymentPending:number;
    customerPaymentRecieve:number;
    customerPaymentPending:number;

    constructor(){
        this.investment=0;
        this.gainOrLoss=0;
        this.sumOfEmployeeSalary=0;
        this.investmentOnMaterial=0;
        this.materialPaymentPaid=0;
        this.materialPaymentPending=0;
        this.customerPaymentRecieve=0;
        this.customerPaymentPending=0;
    }
}