export interface CommonConfig {
  enableBeadProgressionIndicatorSounds: boolean;

  enableLandscapeNavBtns: boolean;
  enablePortraitNavBtns: boolean;
}

export function defaultCommonConfig(): CommonConfig {
  return {
    enableBeadProgressionIndicatorSounds: true,

    enableLandscapeNavBtns: true,
    enablePortraitNavBtns: false
  }
}
