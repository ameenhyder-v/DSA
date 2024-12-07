//! Trie 
//? A Trie is a tree-like data structure used to store strings, especially for searching and prefix-matching. Each node represents a character. Words terminate at nodes marked as the end of a word.


class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}


class Trie {
    constructor() {
        this.root = new TrieNode();
    }


    insert(word) {
        let curr = this.root;

        for(const char of word) {
            if(!curr.children[char]) {
                curr.children[char] = new TrieNode();
            }
            curr = curr.children[char];
        }

        curr.isEndOfWord = true;
    }


    search (word) {
        let curr = this.root;
        for(const char of word) {
            if (!curr.children[char]) {
                return false;
            }
            curr = curr.children[char];
        }
        return curr.isEndOfWord;
    }

    startWith(prefix) {
        let curr = this.root;

        for(const char of prefix) {
            if (!curr.children[char]) {
                return false;
            }
            curr = curr.children[char]
        }
        return true;
    }

    collectWord(node, prefix, results) {
        if(node.isEndOfWord) {
            results.push(prefix)
        }
        
        for(const char in node.children) {
            this.collectWord(node.children[char], prefix + char, results);
        }

    }


    getWordPrefix(prefix) {
        let curr = this.root;

        for(const char of prefix) {
            if (!curr.children[char]) {
                return [];
            }

            curr = curr.children[char];
        }

        const result = [];

        this.collectWord(curr, prefix, result);
        return result;
    }

}


const trie = new Trie();


trie.insert("apple");
trie.insert("app");
trie.insert("apply");
trie.insert("appeal");

console.log(trie.search("apple"))
console.log(trie.getWord("app"));

console.log(trie.getWord("appl"));
console.log(trie.getWord("bat")); 
console.log(trie.getWord("ap"));
