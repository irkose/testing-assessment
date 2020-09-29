describe('canGregBuyBeer', () => {
    describe('when Greg is over 17', () => {
        it('should return true', () => { 
        const originalAge = greg.age;
        greg.age = 18
        const result = canGregBuyBeer();
        greg.age = originalAge;
        expect(result).toBe('Greg is 18, he can buy beer!');
        });
    });

    describe('when Greg is under 18', () => {
        it('should return false', () => {
            const originalAge = greg.age;
            greg.age = 15
            const result = canGregBuyBeer();
            greg.age = originalAge;
            expect(result).toBe('Greg is 15, he can not buy beer :(');   
        });
    });
});