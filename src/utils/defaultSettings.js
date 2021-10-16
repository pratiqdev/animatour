const defaultSettings = {

  /// modal
  modal: 0,
  brochureType: 0,
  
  /// ring
  ringColor: '#f00',
  ringWidth: 1,
  ringRadius: 0,
  ringMargin: 10,
  ringShadowColor: 'rgba(150,150,150,.8)',
  ringShadowWidth: '10000px',

  /// durations
  transitionDuration: .8,
  stepDuration:0,

  /// labels
  closeLabel: 'Exit',
  nextLabel: '>',
  prevLabel: '<',

  /// locations
  defaultLocation: 'center-center',
  brochureAlignment: 'top-left',
  exitLocation: 'top',

  /// scroll
  scrollBehavior: 'smooth',
  scrollAlignmentVertical: 'center',
  scrollAlignmentHorizontal: 'center',

  /// config
  enableAutoProgressionOnNext: false,
  enableAutoProgressionOnPrev: false,
  autoProgressionTimingIncrement: 100,
}
export default defaultSettings