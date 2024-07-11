export class Revenue{
    investment: number;
	gainOrLoss: number;
	sumOfEmployeeSalary: number;
	investmentOnMaterial: number;
	paymentRecieve: number;
	paymentPending: number;
	paymentPaid: number;

    constructor(){
        this.investment=0;
        this.gainOrLoss=0;
        this.sumOfEmployeeSalary=0;
        this.investmentOnMaterial=0;
        this.paymentRecieve=0;
        this.paymentPending=0;
        this.paymentPaid=0;
    }
}