const MAX_LIMIT = 100005;
const waviness_counts = new Int32Array(MAX_LIMIT);
const prefix_sums = new Int32Array(MAX_LIMIT);

for (let num = 100; num < MAX_LIMIT; num++) {
    const units_digit = num % 10;
    const tens_digit = Math.floor(num / 10) % 10;
    const hundreds_digit = Math.floor(num / 100) % 10;

    const is_peak = tens_digit > Math.max(units_digit, hundreds_digit);
    const is_valley = tens_digit < Math.min(units_digit, hundreds_digit);
    const has_new_wave = (is_peak || is_valley) ? 1 : 0;

    waviness_counts[num] = waviness_counts[Math.floor(num / 10)] + has_new_wave;
    prefix_sums[num] = prefix_sums[num - 1] + waviness_counts[num];
}
var totalWaviness = function (start_num, end_num) {
    return prefix_sums[end_num] - prefix_sums[start_num - 1];
};