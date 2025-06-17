/**
 * Author: George Mattingly
 * Date: 06/17/2025
 * Title: Adding Reversed Linked Lists
 * Description: When two node lists are supplied in reverse
 * order the program will first reverse the lists, then
 * add the two numbers together and lastly print the result.
 *
 * Sample Input/Output:
 * 2 -> 4 -> 3 becomes 3 -> 4 -> 2
 * 5 -> 6 -> 4 becomes 4 -> 5 -> 6
 * total = 342 + 456 = 807
 */
//some changes

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

node6 = new ListNode(4, null);
node5 = new ListNode(6, node6);
node4 = new ListNode(5, node5);

node3 = new ListNode(3, null);
node2 = new ListNode(4, node3);
node1 = new ListNode(2, node2);

function reversedHead(head) {
  let currentNode = head;
  let next;
  let prev;

  while (currentNode != null) {
    next = currentNode.next;
    currentNode.next = prev;
    prev = currentNode;
    currentNode = next;
  }
  return prev;
}

var addStringNumbers = function (reversedNode) {
  let addedNumbers = "";
  while (reversedNode != null) {
    addedNumbers += String(reversedNode.val);
    reversedNode = reversedNode.next;
  }
  return Number(addedNumbers);
};

var addTwoNumbers = function (l1, l2) {
  let reversedNode1 = reversedHead(l1);
  let reversedNode2 = reversedHead(l2);
  let addedNumbers1 = 0;
  let addedNumbers2 = 0;

  addedNumbers1 = addStringNumbers(reversedNode1);
  addedNumbers2 = addStringNumbers(reversedNode2);
  let total = addedNumbers1 + addedNumbers2;
  console.log(total);
};

addTwoNumbers(node1, node4);
