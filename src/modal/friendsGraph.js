class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
    this.visited = new Array(20);
  }

  setVisitedToFalse() {
    for (let i = 0; i < this.visited.length; i++) {
      this.visited[i] = false;
    }
  }
  addVertex(node) {
    if (!this.adjacentList[node]) {
      this.adjacentList[node] = [];
      console.log('vertex added');
      console.log(this.adjacentList);
      this.numberOfNodes++;
    }
  }
  addEdge(node1, node2) {
    //undirected Graph
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }
  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = '';
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + ' ';
      }
      console.log(node + '-->' + connections);
      return connections;
    }
  }
  bfs(node) {
    let nodeConnections = this.adjacentList[node];
    if (nodeConnections) {
      let connections = '';
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + ' ';
      }
      console.log('bfs' + '-->' + connections);
      return connections;
    }
    console.log(false);
    return false;
  }
  checkConnection(node) {
    let nodeConnections = this.adjacentList[7];
    if (nodeConnections) {
      let vertex;
      for (vertex of nodeConnections) {
        if (node === vertex) {
          return true;
        }
      }
    }
    return false;
  }
}

var myGraph = new Graph();
export default myGraph;
