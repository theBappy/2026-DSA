class Solution {
public:
    double angleClock(int hour, int minutes) {
        //normalize 12 to 0
        if (hour == 12) hour = 0;
        
        //calculate positions in degrees from 12 o'clock
        double minuteAngle = minutes * 6.0;
        double hourAngle = (hour * 30.0) + (minutes * 0.5);
        
        //find absolute difference
        double diff = std::abs(hourAngle - minuteAngle);
        
        //return the smaller angle
        return std::min(diff, 360.0 - diff);
    }
};