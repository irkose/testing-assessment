describe('Calculator', () => {
                     // ADD//
  describe('#add', () => {
    describe('when passed a string as a number', () => {
      it('should throw an error', () => {
        const calculator = new Calculator();

        expect(() => calculator.add('1', 2)).toThrow();
        expect(() => calculator.add(1, '2')).toThrow();

        // expect(calculator.add('1', 2)).toThrow();
        // expect(calculator.add(1, '2')).toThrow();
      });
    });

    describe('when passed two numbers', () => {
      it('should not throw an error', () => {
        const calculator = new Calculator();

        expect(() => calculator.add(1, 2)).not.toThrow();
      });

      it('should add the numbers together', () => {
        const calculator = new Calculator();

        const result = calculator.add(1, 2);

        expect(result).toBe(3);
      });
    });
  });
                  //SUBTRACT//

  describe('#subtract', () => {
    describe('when passed a string as a number', () => {
      it('should throw an error', () => {
        const calculator = new Calculator();

        expect(() => calculator.subtract('1', 2)).toThrow();
        expect(() => calculator.subtract(1, '2')).toThrow(); 
      });
    });
    describe('when passed two numbers', () => {
      it('should not throw an error', () => {
        const calculator = new Calculator();

        expect(() => calculator.subtract(1, 2)).not.toThrow();
      });

      it('should subtract the numbers', () => {
        const calculator = new Calculator();

        const result = calculator.subtract(1, 2);

        expect(result).toBe(-1);
      });
    });
  });
                  //MULTIPLY//

  describe('#multiply', () => {
    describe('when passed a string as a number', () => {
      it('should throw an error', () => {
        const calculator = new Calculator();

        expect(() => calculator.multiply('1', 2)).toThrow();
        expect(() => calculator.multiply(1, '2')).toThrow(); 
      });
    });
    describe('when passed two numbers', () => {
      it('should not throw an error', () => {
        const calculator = new Calculator();

        expect(() => calculator.multiply(1, 2)).not.toThrow();
      });

      it('should multiply the numbers', () => {
        const calculator = new Calculator();

        const result = calculator.multiply(1, 2);

        expect(result).toBe(2);
      });
    });
  });
              //DIVIDE//

  describe('#divide', () => {
    describe('when passed a string as a number', () => {
      it('should throw an error', () => {
        const calculator = new Calculator();

        expect(() => calculator.divide('1', 2)).toThrow();
        expect(() => calculator.divide(1, '2')).toThrow(); 
      });
    });
    describe('when passed two numbers', () => {
      it('should not throw an error', () => {
        const calculator = new Calculator();

        expect(() => calculator.divide(1, 2)).not.toThrow();
      });

      it('should divide the numbers', () => {
        const calculator = new Calculator();

        const result = calculator.divide(1, 2);

        expect(result).toBe(0.5);
      });

    describe('when divided by zero', () => {
      describe('when passed two numbers', () => {  
        it('should throw new Error', () => {
          const calculator = new Calculator();
      
          expect(() => calculator.divide(1, 0)).toThrow();
        });
      });
    });
  });
});
})
