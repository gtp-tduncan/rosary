export interface RosaryBeads {
  highlightBeadIdx: number;

  imageWidth: number;
  imageHeight: number;

  highlightTop: string;
  highlightLeft: string;

  highlightStyle: string;

  updateBeadPosition(): void;
}
