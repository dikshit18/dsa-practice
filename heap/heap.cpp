#include <iostream>
#include <stdio.h>
using namespace std;

class Heap {
public:
  int arr[100];
  int size;

  Heap() {
    arr[0] = -1;
    size = 0;
  }

  void insert(int num) {
    size = size + 1;
    int index = size;
    arr[index] = num;
    while (index > 1) {
      int parent = index / 2;
      if (arr[parent] < arr[index]) {
        swap(arr[parent], arr[index]);
        index = parent;
      } else {
        return;
      }
    }
  }

  void delete () {
    if (size == 0) {
      return;
    }
    arr[1] = arr[size];
    size--;
    let i = 1;
    while (i < size) {
      int leftChild = 2 * i;
      int rightChild = 2 * i + 1;
      if (leftChild < size && arr[i] < arr[leftChild]) {
        swap(arr[i], arr[leftChild]);
        i = leftChild;
      } else if (rightChild < size && arr[i] < arr[rightChild]) {
        swap(arr[i], arr[leftChild]);
        i = rightChild;
      } else
        return;
    }
  }

  void heapify(int arr[], int n, int i) {
    int largest = i;
    int leftChild = 2 * i;
    int rightChild = 2 * i + 1;
    if (leftChild < n && arr[leftChild] > arr[largest]) {
      largest = leftChild;
    } else if (rightChild < n && arr[rightChild] > arr[largest]) {
      largest = rightChild;
    }

    if (largest != i) {
      // largest was updated
      swap(arr[largest], arr[i]);
      heapify(arr, n, largest);
    }
  }

  void heapSort(int arr[], int n) {
    int t = n;
    while (t > 1) {
      swap(arr[t], arr[1]);
      t--;
      heapify(arr, t, 1)
    }
  }

  void print() {
    for (int i = 1; i <= size; i++) {
      cout << arr[i] << " ";
    }
    cout << endl;
  }
};

int main() {
  Heap h;
  h.insert(50);
  h.insert(55);
  h.insert(53);
  h.insert(52);
  h.insert(54);
  h.print();
  return 0;
}