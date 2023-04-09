
describe('test grouping', function(){
  it('should calculate the monthly rate correctly', function () {
    const values = { amount: 10000, years: 12, rate: 9 };
    expect(calculateMonthlyPayment(values)).toEqual("113.80");
  });


  it("should return a result with 2 decimal places", function() {
    const values = { amount: 10017, years: 12, rate: 9 };
    expect(calculateMonthlyPayment(values)).toEqual("114.00");
    // ..
  });
})

/// etc
