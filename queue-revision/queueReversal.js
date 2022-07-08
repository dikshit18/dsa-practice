const queue = require("./queue");
class Solution {
  //Function to reverse the queue.
  rev(q) {
    if (!q.empty()) {
      const item = q.pop();
      this.rev(q);
      q.push(item);
    }
  }
}
