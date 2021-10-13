var reverseBetween = function(head, left, right) {
    let start = head;
    let counter = 1;
    let topTemp;
    let temp;
    let firstNodeBeforeSubList;
    let prev;
    while (head != null) {
        if (counter == left - 1) {
            firstNodeBeforeSubList = head;   
            head = head.next;
        }  else if (left == counter) {
            prev = head;
            head = head.next;
        } else if (left < counter && right >= counter) {
            topTemp = ( firstNodeBeforeSubList === undefined ? start : firstNodeBeforeSubList.next);
            temp = head.next;
            if (firstNodeBeforeSubList !== undefined) {
                firstNodeBeforeSubList.next = head;
            } else {
                start = head;
            }
            
            head.next = topTemp;
            
            prev.next = temp;
            head = temp;
         
        } else {
            head = head.next;
        }
        
        counter++;
    }
    
    return start;
};
