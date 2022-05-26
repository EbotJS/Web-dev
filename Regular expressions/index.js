// let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
// console.log(dateTime.test("30-01-2003 15:20"));

// let nonBinary = /[^01]/
// console.log(nonBinary.test("0101012"))

// console.log(/\d*/.test(""))


// let neighbour = /neighbou?r/;
// console.log(neighbour.test('neighbor')) // true
// console.log(neighbour.test('neighbour')) // true

// let dateTime = /\d{1,2}/;
// console.log(dateTime.test('111'))

// let cartoonCrying = /boo+(hoo)+/;
// console.log(cartoonCrying.test("boohoooohoohooo"));


// let match = /\d+/.exec("one two 100")
// console.log(match)
// console.log(match.index)

// let quotedText = /'[^']*'/;
// console.log(quotedText.exec("she said 'hello'"))


// console.log(/bad(ly)?/.exec("bad"));
// console.log(/(\d)+/.exec("123"))



// The Date Class

// console.log(new Date());

// console.log(new Date(2002, 6, 14))

// console.log(new Date(2002, 6, 14, 12, 59, 59, 999))

// console.log(new Date(2013, 11, 19).getTime());
// console.log(new Date(138740760000))


function getDate(string){
    let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
    return new Date(year, month - 1, day);
}

console.log(getDate("1-30-2003"))





