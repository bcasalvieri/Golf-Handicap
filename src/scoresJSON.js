let differentials = [];
const scores = [];

class GolfScore {
  constructor(course, score, rating, slope) {
    this.course = course;
    this.score = score;
    this.rating = rating;
    this.slope = slope;
    this.differential = ((this.score - this.rating) * 113) / this.slope;
  }
}

function addScore(course, score, rating, slope) {
  const s = new GolfScore(course, score, rating, slope);
  differentials.push(s.differential);
  scores.push(s);
}

addScore("Bunkerhill", 85, 67.2, 120);
addScore("Bunkerhill", 88, 67.2, 120);
addScore("Bunkerhill", 86, 67.2, 120);
addScore("Royce Brook West", 92, 70.5, 129);
addScore("Bunkerhill", 88, 67.2, 120);
addScore("Bunkerhill", 86, 67.2, 120);
addScore("Hillsborough", 88, 67.2, 123);
addScore("Mercer Oaks East", 89, 72.6, 128);
addScore("Mattawang", 91, 71.3, 124);
addScore("Bunkerhill", 87, 67.2, 120);
addScore("Bunkerhill", 84, 67.2, 120);
addScore("Bunkerhill", 82, 68.2, 125);
addScore("Green Valley Ranch", 93, 71.1, 128);
addScore("Bunkerhill", 79, 68.2, 125);

differentials = differentials.sort((a, b) => a - b);

export { scores, differentials };
