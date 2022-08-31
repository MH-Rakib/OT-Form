function OnChangeOverTimeRate() {
  const overTimeRateType = document.getElementById("overTimeRateType");

  const overTimeSlotRate = document.getElementById("overTimeSlotRate");
  const overTimeNonSlotRate = document.getElementById("overTimeNonSlotRate");

  const selectedIndex = overTimeRateType.selectedIndex;

  if (overTimeRateType.options[selectedIndex].value === "flat") {
    overTimeSlotRate.style.display = "none";
    overTimeNonSlotRate.style.display = "block";
  } else if (overTimeRateType.options[selectedIndex].value === "slot") {
    overTimeSlotRate.style.display = "block";
    overTimeNonSlotRate.style.display = "none";
  } else {
    overTimeSlotRate.style.display = "block";
    overTimeNonSlotRate.style.display = "block";
  }
}

// -------------------------------------------------------------------------

const hasWeekendSpecialRate = document.getElementById("hasWeekendSpecialRate");
const weekendSpecialRateType = document.getElementById(
  "weekendSpecialRateType"
);

hasWeekendSpecialRate.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    weekendSpecialRateType.style.display = "block";
  } else {
    weekendSpecialRateType.style.display = "none";
  }
});

// -----------------------------------------------------------------------

const hasReligiousHoliday = document.getElementById("hasReligiousHoliday");
const religiousHolidayType = document.getElementById("religiousHolidayType");
religiousHolidayType.style.display = "none";

hasReligiousHoliday.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    religiousHolidayType.style.display = "block";
  } else {
    religiousHolidayType.style.display = "none";
  }
});

// -------------------------------------------------------------------

const hasRegularHoliday = document.getElementById("hasRegularHoliday");
const regularHolidayType = document.getElementById("regularHolidayType");
regularHolidayType.style.display = "none";

hasRegularHoliday.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    regularHolidayType.style.display = "block";
  } else {
    regularHolidayType.style.display = "none";
  }
});

// ----------------------------------------------------------------------

const hasMealAllowance = document.getElementById("hasMealAllowance");
const mealAllowanceType = document.getElementById("mealAllowanceType");
mealAllowanceType.style.display = "none";

hasMealAllowance.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    mealAllowanceType.style.display = "block";
  } else {
    mealAllowanceType.style.display = "none";
  }
});

const hasMinMealHour = document.getElementById("hasMinMealHour");
const hasMinMealTime = document.getElementById("hasMinMealTime");

const minMealHour = document.getElementById("minMealHour");
const minMealTime = document.getElementById("minMealTime");

minMealHour.style.display = "none";
minMealTime.style.display = "none";

hasMinMealHour.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    minMealHour.style.display = "block";
  } else {
    minMealHour.style.display = "none";
  }
});

hasMinMealTime.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    minMealTime.style.display = "block";
  } else {
    minMealTime.style.display = "none";
  }
});

// -----------------------------------------------------------------------------

const hasTransportAllowance = document.getElementById("hasTransportAllowance");
const transportAllowance = document.getElementById("transportAllowance");
transportAllowance.style.display = "none";

hasTransportAllowance.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    transportAllowance.style.display = "block";
  } else {
    transportAllowance.style.display = "none";
  }
});

const hasMinHourTransport = document.getElementById("hasMinHourTransport");
const hasMinTimeTransport = document.getElementById("hasMinTimeTransport");

const minHourTransport = document.getElementById("minHourTransport");
const minTimeTransport = document.getElementById("minTimeTransport");

minHourTransport.style.display = "none";
minTimeTransport.style.display = "none";

hasMinHourTransport.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    minHourTransport.style.display = "block";
  } else {
    minHourTransport.style.display = "none";
  }
});

hasMinTimeTransport.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    minTimeTransport.style.display = "block";
  } else {
    minTimeTransport.style.display = "none";
  }
});

// ------------------------------------------------------------------------------

const hasNightShift = document.getElementById("hasNightShift");
const nightShiftType = document.getElementById("nightShiftType");
nightShiftType.style.display = "none";

hasNightShift.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    nightShiftType.style.display = "block";
  } else {
    nightShiftType.style.display = "none";
  }
});

const hasMinHourNight = document.getElementById("hasMinHourNight");
const hasMinTimeNight = document.getElementById("hasMinTimeNight");

const minHourNight = document.getElementById("minHourNight");
const minTimeNight = document.getElementById("minTimeNight");

minHourNight.style.display = "none";
minTimeNight.style.display = "none";

hasMinHourNight.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    minHourNight.style.display = "block";
  } else {
    minHourNight.style.display = "none";
  }
});

hasMinTimeNight.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    minTimeNight.style.display = "block";
  } else {
    minTimeNight.style.display = "none";
  }
});

// --------------------------------------------------------------------------------

const hasWeeklyHoliday = document.getElementById("hasWeeklyHoliday");
const weeklyHolidayType = document.getElementById("weeklyHolidayType");
weeklyHolidayType.style.display = "none";

hasWeeklyHoliday.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    weeklyHolidayType.style.display = "block";
  } else {
    weeklyHolidayType.style.display = "none";
  }
});

const hasMinHourWeeklyHoliday = document.getElementById(
  "hasMinHourWeeklyHoliday"
);
const hasMinTimeWeeklyHoliday = document.getElementById(
  "hasMinTimeWeeklyHoliday"
);

const minHourWeeklyHoliday = document.getElementById("minHourWeeklyHoliday");
const minTimeWeeklyHoliday = document.getElementById("minTimeWeeklyHoliday");

minHourWeeklyHoliday.style.display = "none";
minTimeWeeklyHoliday.style.display = "none";

hasMinHourWeeklyHoliday.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    minHourWeeklyHoliday.style.display = "block";
  } else {
    minHourWeeklyHoliday.style.display = "none";
  }
});

hasMinTimeWeeklyHoliday.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    minTimeWeeklyHoliday.style.display = "block";
  } else {
    minTimeWeeklyHoliday.style.display = "none";
  }
});

// ---------------------------------------------------------------------------------

const hasReligiousHolidayAllowance = document.getElementById(
  "hasReligiousHolidayAllowance"
);
const religiousHolidayAllowanceType = document.getElementById(
  "religiousHolidayAllowanceType"
);
religiousHolidayAllowanceType.style.display = "none";

hasReligiousHolidayAllowance.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    religiousHolidayAllowanceType.style.display = "block";
  } else {
    religiousHolidayAllowanceType.style.display = "none";
  }
});

const hasMinHourReligious = document.getElementById("hasMinHourReligious");
const hasMinTimeReligious = document.getElementById("hasMinTimeReligious");

const minHourReligious = document.getElementById("minHourReligious");
const minTimeReligious = document.getElementById("minTimeReligious");

minHourReligious.style.display = "none";
minTimeReligious.style.display = "none";

hasMinHourReligious.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    minHourReligious.style.display = "block";
  } else {
    minHourReligious.style.display = "none";
  }
});

hasMinTimeReligious.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    minTimeReligious.style.display = "block";
  } else {
    minTimeReligious.style.display = "none";
  }
});

// -------------------------------------------------------------------------------------------

const hasOtherHolidayAllowance = document.getElementById(
  "hasOtherHolidayAllowance"
);
const otherHolidayAllowanceType = document.getElementById(
  "otherHolidayAllowanceType"
);
otherHolidayAllowanceType.style.display = "none";

hasOtherHolidayAllowance.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    otherHolidayAllowanceType.style.display = "block";
  } else {
    otherHolidayAllowanceType.style.display = "none";
  }
});

const hasMinHourOtherHoliday = document.getElementById(
  "hasMinHourOtherHoliday"
);
const hasMinTimeOtherHoliday = document.getElementById(
  "hasMinTimeOtherHoliday"
);

const minHourOtherHoliday = document.getElementById("minHourOtherHoliday");
const minTimeOtherHoliday = document.getElementById("minTimeOtherHoliday");

minHourOtherHoliday.style.display = "none";
minTimeOtherHoliday.style.display = "none";

hasMinHourOtherHoliday.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    minHourOtherHoliday.style.display = "block";
  } else {
    minHourOtherHoliday.style.display = "none";
  }
});

hasMinTimeOtherHoliday.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    minTimeOtherHoliday.style.display = "block";
  } else {
    minTimeOtherHoliday.style.display = "none";
  }
});
