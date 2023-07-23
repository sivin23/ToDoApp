
// Date format
// module.exports.DateFunction = DateFunction;
exports.DateFunction = function() {
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      };
    const today = new Date();
    return (today.toLocaleDateString("en-US", options));

};

// Day Format
// module.exports.DayFunction = DayFunction;
exports.DayFunction = function() {
    const options = {
        weekday: "long"
      };
    const today = new Date();
    return (today.toLocaleDateString("en-US", options));
};