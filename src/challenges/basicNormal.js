let pushups = 100;
let pullups = 50;
let legraises = 50;
let squats = 100;
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
    pushups += 15;
    pullups += 5;
    legraises += 15;
    squats += 5;
  } else {
    arr.push({
      day: day,
      rest: true,
      checked: false
    });
  }
}

module.exports = arr