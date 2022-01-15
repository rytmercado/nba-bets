// The purpose if this function is to take an an array of objects
// [{x: Datetime, y: currency}] and reduce the length of the array, so as 
// having our frontned hold less data. The approach is to iterate over the array,
// scoring data points by change. Leaving the first and last data point, 