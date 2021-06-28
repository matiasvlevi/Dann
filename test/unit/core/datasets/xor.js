const makeXOR = Dannjs.makeXOR;

console.log(makeXOR(1));
console.log(makeXOR(2));
console.log(makeXOR(3));


suite('My series of tests',function(){
    const makeXOR = Dannjs.makeXOR;
   xor2 = [
       { input: [ 0, 0 ], output: [ 0 ] },
       { input: [ 0, 1 ], output: [ 1 ] },
       { input: [ 1, 0 ], output: [ 1 ] },
       { input: [ 1, 1 ], output: [ 0 ] }
   ];

   xor3 = [
       { input: [ 0, 0, 0 ], output: [ 0 ] },
       { input: [ 0, 0, 1 ], output: [ 1 ] },
       { input: [ 0, 1, 0 ], output: [ 1 ] },
       { input: [ 0, 1, 1 ], output: [ 0 ] },
       { input: [ 1, 0, 0 ], output: [ 1 ] },
       { input: [ 1, 0, 1 ], output: [ 0 ] },
       { input: [ 1, 1, 0 ], output: [ 0 ] },
       { input: [ 1, 1, 1 ], output: [ 1 ] }
   ];

    setup(function(){
        // setup code
    });
    test('xor2 Should equal makeXOR(2) ',function(){
        assert.equal(x, y);
    });
    test('xor3 Should equal makeXOR(3) ',function(){
        assert.equal(x, y);
    });

});



