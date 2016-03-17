module.exports = function reversePrint(linkedList) {
    var arr = [];
    var root = linkedList;
    while (root) {
        arr.unshift(root.value);
        root = root.next;
    }

    console.log(arr.join(', '));
};
