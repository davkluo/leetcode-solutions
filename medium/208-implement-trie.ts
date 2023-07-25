class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let current = this.root;

    for (const letter of word) {
      if (!(letter in current.children)) {
        current.children[letter] = new TrieNode();
      }
      current = current.children[letter];
    }

    current.isEnd = true;
  }

  search(word: string): boolean {
    let current = this.root;

    for (const letter of word) {
      if (!(letter in current.children)) {
        return false;
      }
      current = current.children[letter];
    }

    return current.isEnd;
  }

  startsWith(prefix: string): boolean {
    let current = this.root;

    for (const letter of prefix) {
      if (!(letter in current.children)) {
        return false;
      }
      current = current.children[letter];
    }

    return true;
  }
}

class TrieNode {
  children: Record<string, TrieNode>;
  isEnd: boolean;

  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}
