function tour(p, n) {
  let front = 0,
    rear = 0,
    balance = 0;
  for (let i = 0; i < p; i++) {
    balance = p[i].petrol - p[i].distance;
    if (balance < 0) {
      front = rear + 1;
    } else rear++;
  }
  if (balance < 0) return -1;
  else return front;
}
tour([]);
