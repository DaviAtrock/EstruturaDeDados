function testTruthy(val){
    return val ? console.log('true') : console.log('false');
}

testTruthy(true);
testTruthy(false);
testTruthy(new Boolean(false));
testTruthy('');
testTruthy('Bom dia!');
testTruthy(new String(''));
testTruthy(1);
testTruthy(-1);
testTruthy(NaN);
testTruthy(new Number(NaN));
var obj = { name: 'João'};
testTruthy(obj);
testTruthy(obj.name);
testTruthy(obj.age);