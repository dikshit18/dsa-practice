function rotate(A, B) {
  const current = A.head;
  let l = 0;
  while (current.next) {
    l++;
  }
  const updatedB = B % l;
  if (updatedB === 0) {
    return A;
  } else {
    const difference = l - updatedB;
  }
}
