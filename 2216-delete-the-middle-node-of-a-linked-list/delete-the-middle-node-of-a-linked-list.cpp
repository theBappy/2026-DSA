class Solution {
public:
    ListNode* deleteMiddle(ListNode* head) {
        if(!head || !head->next)
            return NULL;
        
        ListNode* slow      = head;
        ListNode* fast      = head->next->next;
        
        while(fast && fast->next) {
            slow     = slow->next;
            
            fast     = fast->next->next;
        }
        
        ListNode* toDelete = slow->next;
        slow->next = slow->next->next;
        delete(toDelete);
        
        return head;
    }
};