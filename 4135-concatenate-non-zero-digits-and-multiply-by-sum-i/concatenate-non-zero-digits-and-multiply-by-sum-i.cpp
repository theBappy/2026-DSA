class Solution {
public:
    long long sumAndMultiply(int n) {

        string s = to_string(n);

        long long newNumber = 0;
        int sum = 0;

        for(char ch : s){

            if(ch != '0'){

                int digit = ch - '0';

                newNumber = newNumber * 10 + digit;

                sum += digit;
            }
        }

        return newNumber * sum;
    }
};