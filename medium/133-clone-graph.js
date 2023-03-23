'use strict';

// Definition for a Node.
function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
};

/**
* @param {Node} node
* @return {Node}
*/
function cloneGraph(node) {
  if (!node) return node;

  let nodeMap = {};

  // Traversal 1: Construct all the nodes with val and no neighbors
  let stack = [node];
  let seen = new Set([node]);

  while (stack.length) {
    const currNode = stack.pop();

    // Create a new node and map it to its value
    nodeMap[currNode.val] = new Node(currNode.val);

    // For each adjacency, add it to the set of seen nodes and the stack
    for (let neighbor of currNode.neighbors) {
      if (!seen.has(neighbor)) {
        stack.push(neighbor);
        seen.add(neighbor);
      }
    }
  }

  // Traversal 2: Traverse the graph and assign edges between the nodes we made
  stack = [node];
  seen = new Set([node]);

  while (stack.length) {
    const currNode = stack.pop();
    let newNode = nodeMap[currNode.val];

    for (let neighbor of currNode.neighbors) {
      // Add neighbor to adjacency list of new node
      newNode.neighbors.push(nodeMap[neighbor.val]);

      if (!seen.has(neighbor)) {
        stack.push(neighbor);
        seen.add(neighbor);
      }
    }
  }

  return nodeMap[1];
};

// More compact approach:
// function cloneGraph(node) {
//   if (!node) return node;

//   let nodeMap = {};
//   let stack = [node];
//   nodeMap[node.val] = new Node(node.val);

//   while (stack.length) {
//     const { val, neighbors } = stack.pop();

//     for (let neighbor of neighbors) {
//         if (!(neighbor.val in nodeMap)) {
//             nodeMap[neighbor.val] = new Node(neighbor.val);
//             stack.push(neighbor);
//         }

//         nodeMap[val].neighbors.push(nodeMap[neighbor.val]);
//     }
//   }

//   return nodeMap[node.val];
// };