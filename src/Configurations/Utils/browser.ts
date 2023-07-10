import DeviceDetector, { DeviceDetectorResult } from 'device-detector-js';
export const getBrowserDetails = () => {
  const deviceDetector: DeviceDetector = new DeviceDetector();
  const navigatorAgent = navigator.userAgent || navigator.vendor || window?.opera;
  const device = deviceDetector.parse(navigatorAgent);
  return device;
};
export const isMobileDevice = () => {
  const deviceInfo: DeviceDetectorResult = getBrowserDetails();
  const { device } = deviceInfo;
  return device?.type === 'smartphone';
};
export const isTabletDevice = () => {
  const deviceInfo = getBrowserDetails();
  const { device } = deviceInfo;
  return device?.type === 'tablet' || device?.type === 'phablet';
};
export const isDeskTopDevice = () => {
  const deviceInfo = getBrowserDetails();
  const { device } = deviceInfo;
  return device?.type === 'desktop';
};
