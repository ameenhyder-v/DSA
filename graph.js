class Graph{
    constructor() {
        this.adlist = {};
    }

    addVertex(vertex) {
        if (!this.adlist[vertex]) {
            this.adlist[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        if(this.adlist[vertex1] && this.adlist[vertex2]) {
            this.adlist[vertex1].push(vertex2);
            this.adlist[vertex2].push(vertex1);
        }
    }


    bfs(start) {
        const queue = [start];
        const visited = {};
        const result = [];

        visited[start] = true;

        while (queue.length > 0) {
            const current = queue.shift();
            result.push(current);

            this.adlist[current].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }

        return result;
    }

    dfs(start) {
        const stack = [start];
        const visited = {};
        const result = [];

        visited[start] = true;

        while (stack.length > 0) {
            const current = stack.pop();
            result.push(current);

            this.adlist[current].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            })
        }

        return result;
    }
}

