/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let newList,
    head,
    val,
    flag = 0;
  while (l1 && l2) {
    val = (l1.val + l2.val + flag) % 10;
    flag = Math.floor((l1.val + l2.val + flag) / 10);
    if (!head) {
      head = new ListNode(val);
      newList = head;
    } else {
      newList.next = new ListNode(val);
      newList = newList.next;
    }
    l1 = l1.next;
    l2 = l2.next;
  }
  while (l1) {
    newList.next = new ListNode((l1.val + flag) % 10);
    flag = Math.floor((l1.val + flag) / 10);
    newList = newList.next;
    l1 = l1.next;
  }
  while (l2) {
    newList.next = new ListNode((l2.val + flag) % 10);
    flag = Math.floor((l2.val + flag) / 10);
    newList = newList.next;
    l2 = l2.next;
  }
  while (flag) {
    newList.next = new ListNode(1);
    flag = 0;
  }
  return head;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}
const printList = node => {
  if (!node) {
    return "";
  }
  return node.val + (node.next ? "->" + printList(node.next) : "");
};

const List1 = new ListNode(3);
List1.next = new ListNode(7);
// List1.next.next = new ListNode(3);

const List2 = new ListNode(9);
List2.next = new ListNode(2);
// List2.next.next = new ListNode(4);

console.log(printList(addTwoNumbers(List1, List2)));
