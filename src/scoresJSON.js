let differentials = [];
const scores = [];

class GolfScore {
  constructor(id, course, score, rating, slope) {
    this.id = id;
    this.course = course;
    this.score = score;
    this.rating = rating;
    this.slope = slope;
    this.differential = ((this.score - this.rating) * 113) / this.slope;
  }
}

function addScore(id, course, score, rating, slope) {
  const s = new GolfScore(id, course, score, rating, slope);
  differentials.push(s.differential);
  scores.push(s);
}

addScore(1, "Bunkerhill", 85, 67.2, 120);
addScore(2, "Bunkerhill", 88, 67.2, 120);
addScore(3, "Bunkerhill", 86, 67.2, 120);
addScore(4, "Royce Brook West", 92, 70.5, 129);
addScore(5, "Bunkerhill", 88, 67.2, 120);
addScore(6, "Bunkerhill", 86, 67.2, 120);
addScore(7, "Hillsborough", 88, 67.2, 123);
addScore(8, "Mercer Oaks East", 89, 72.6, 128);
addScore(9, "Mattawang", 91, 71.3, 124);
addScore(10, "Bunkerhill", 87, 67.2, 120);
addScore(11, "Bunkerhill", 84, 67.2, 120);
addScore(12, "Bunkerhill", 82, 68.2, 125);
addScore(13, "Green Valley Ranch", 93, 71.1, 128);
addScore(14, "Bunkerhill", 79, 68.2, 125);

differentials = differentials.sort((a, b) => a - b);

export { scores, differentials };
