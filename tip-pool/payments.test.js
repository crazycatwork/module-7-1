describe('Payments test (with setup and tear-down)', function (){
    beforeEach(function(){
        billAmtInput.value = 100;
        tipAmtInput.value = 20;

    })

    //add payment
    it('should add a new payment when submitPaymentInfo runs', function(){
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('100');
        expect(allPayments['payment1'].tipAmt).toEqual('20');
        expect(allPayments['payment1'].tipPercent).toEqual(20);
    })

    //don't add payment if no input
    it('should not add a payment if form is empty when submitPaymentInfo runs', function(){
        billAmtInput.value = '';
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(0);

    })

    it('should update #paymentTable on appendPaymentTable()', function(){
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;

        appendPaymentTable(curPayment);

        let curTdList = document.querySelectorAll('#paymentTable tbody tr td');

        expect(curTdList.length).toEqual(4);
        expect(curTdList[0].innerText).toEqual('$100');
        expect(curTdList[1].innerText).toEqual('$20');
        expect(curTdList[2].innerText).toEqual('20%');
        expect(curTdList[3].innerText).toEqual('X');
    })

    //create payment on createCurPayment
    it('should add a payment on createCurPayment', function(){
        let paymentExpected = {
            billAmt: '100',
            tipAmt: '20',
            tipPercent: 20,
        }

        expect(createCurPayment()).toEqual(paymentExpected);
    })
    

    //don't create payment on createCurPayment if no input
    it('should not create payment with empty input on createCurPayment()', function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        let curPayment = createCurPayment();

        expect(curPayment).toEqual(undefined);
    });

    afterEach(function(){
        billAmtInput.value = ''
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};

    })
})