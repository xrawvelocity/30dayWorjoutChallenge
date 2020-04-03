let pushups = 50;
let pullups = 25;
let legraises = 50;
let squats = 25;
let arr = [];

for (let day = 1; day < 31; day++) {
  if (day % 7) {
    arr.push({
      day: day,
      pushups: pushups,
      pullups: pullups,
      squats: squats,
      legraises: legraises,
      rest: false,
      checked: true
    });
    pushups += 10;
    pullups += 3;
    legraises += 10;
    squats += 3;
  } else {
    arr.push({
      day: day,
      rest: true,
      checked: false
    });
  }
}

module.exports = arr