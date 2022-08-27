class TrieNode {
  constructor(ch) {
    this.data = ch;
    this.isTerminal = false;
    this.children = [];
    for (let i = 0; i < 26; i++) {
      this.children[i] = null;
    }
  }
}
class Trie {
  constructor() {
    this.root = new TrieNode("\0");
  }
  insertUtil(root, word) {
    if (!word.length) {
      root.isTerminal = true;
      return;
    }

    let index = word[0].charCodeAt(0) - "A".charCodeAt(0);
    let child;
    if (root.children[index]) {
      child = root.children[index];
    } else {
      child = new TrieNode(word[0]);
      root.children[index] = child;
    }
    this.insertUtil(child, word.substring(1));
  }
  insert(word) {
    this.insertUtil(this.root, word);
    // console.log("=>", this.root);
  }

  searchUtil(root, word) {
    if (!word) {
      return root.isTerminal;
    }
    let index = word[0].charCodeAt(0) - "A".charCodeAt(0);
    let child;
    if (root.children[index]) {
      child = root.children[index];
    } else {
      return false;
    }
    return this.searchUtil(child, word.substring(1));
  }

  search(word) {
    return this.searchUtil(this.root, word);
  }
  removeUtil(root, word) {
    if (!word) {
      root.isTerminal = false;

      return root.isTerminal;
    }
    let index = word[0].charCodeAt(0) - "A".charCodeAt(0);
    let child;
    if (root.children[index]) {
      child = root.children[index];
    } else {
      return false;
    }

    this.removeUtil(child, word.substring(1));
    root.children[index] = null;
    return;
  }
  remove(word) {
    return this.removeUtil(this.root, word);
  }
}
const trie = new Trie();
trie.insert("ABC");
trie.insert("DO");
trie.remove("DO");
console.log(trie);
console.log(trie.search("DO"));
