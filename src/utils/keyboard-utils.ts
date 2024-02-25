export const isEnterDown = (e: any) => {
  return e.keyCode === 13 && e.ctrlKey === false && e.shiftKey === false;
};
export const isArrowWithShiftDown = (e: any) => {
  return (
    e.shiftKey === true &&
    e.ctrlKey === false &&
    e.keyCode >= 37 &&
    e.keyCode <= 40
  );
};
export const isUpDown = (e: any) => {
  return e.shiftKey === false && e.ctrlKey === false && e.keyCode === 38;
};

export const isDownDown = (e: any) => {
  return e.shiftKey === false && e.ctrlKey === false && e.keyCode === 40;
};

export const isTabDown = (e: any) => {
  return e.shiftKey === false && e.ctrlKey === false && e.keyCode === 9;
};
export const isTabShiftDown = (e: any) => {
  return e.shiftKey === true && e.ctrlKey === false && e.keyCode === 9;
};

export const isCtrlCDown = (e: any) => {
  return e.shiftKey === false && e.ctrlKey === true && e.keyCode === 67;
};

export const removeAllBehave = (e: any) => e.preventDefault();
