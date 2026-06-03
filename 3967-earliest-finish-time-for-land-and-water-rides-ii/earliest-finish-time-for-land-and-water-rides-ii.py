

class Solution:
    def earliestFinishTime(
        self,
        landStartTime: List[int],
        landDuration: List[int],
        waterStartTime: List[int],
        waterDuration: List[int],
    ) -> int:
        
        def get_min_sequential_finish(start_first, duration_first, start_second, duration_second):
            # Phase 1: Find the earliest completion time for the first activity
            earliest_first_finish = inf
            for i in range(len(start_first)):
                earliest_first_finish = min(earliest_first_finish, start_first[i] + duration_first[i])
            
            # Phase 2: Find the earliest completion time for the second activity
            earliest_second_finish = inf
            for i in range(len(start_second)):
                # Second activity can only start after the first activity is finished
                actual_start_time = max(start_second[i], earliest_first_finish)
                earliest_second_finish = min(earliest_second_finish, actual_start_time + duration_second[i])
                
            return earliest_second_finish

        # Strategy A: Land first, then Water
        land_then_water = get_min_sequential_finish(
            landStartTime, landDuration, waterStartTime, waterDuration
        )
        # Strategy B: Water first, then Land
        water_then_land = get_min_sequential_finish(
            waterStartTime, waterDuration, landStartTime, landDuration
        )
        
        return min(land_then_water, water_then_land)