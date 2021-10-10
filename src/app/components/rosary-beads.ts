export interface RosaryBeads {
  highlightBeadIdx: number;

  imageWidth: number;
  imageHeight: number;

  highlightTop: string;
  highlightLeft: string;
  highlightRight: string;

  calculateHighlightPosition();

  hightlightStyle(): string;
}
