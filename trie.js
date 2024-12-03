//! Trie 
//? A Trie is a tree-like data structure used to store strings, especially for searching and prefix-matching. Each node represents a character. Words terminate at nodes marked as the end of a word.

class TrieNode {
    constructor() {
        this.childeren = {};
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;

        for(let char of word) {
            if (!node.childeren[char]) {
                node.childeren[char] = new TrieNode();
            }
            node = node.childeren[char];
        }
        node.isEnd = true;
    }


    search(word) {
        let node = this.root;

        for(let char of word) {
            if (!node.childeren[char]) return false;
            node = node.childeren[char];
        }
        return node.isEnd;
    }
}


const trie = new Trie();
trie.insert("cat");
trie.insert("car");
trie.insert("bat");
console.log(trie.search("cat")); 
console.log(trie.search("can")); 