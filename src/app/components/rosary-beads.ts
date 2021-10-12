export interface RosaryBeads {
  highlightBeadIdx: number;

  calcImageWidth(): string;

  imageWidth: number;
  imageHeight: number;

  highlightTop: string;
  highlightLeft: string;
  highlightRight: string;

  calculateHighlightPosition(): void;

  highlightStyle(): string;
}
