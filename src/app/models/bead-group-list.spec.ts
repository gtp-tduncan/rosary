import { BeadGroupLoaderService, RosaryMysteriesEnum, SequenceIdEnum } from "../services/bead-group-loader.service";
import { BeadGroup } from "./bead-group";
import { BeadGroupList } from "./bead-group-list";

describe('BeadGroupList', () => {

  describe('transition to next', () => {

    it('for Holy Rosary sequence', () => {
      // given
      const loader = new BeadGroupLoaderService();
      let beadGroupList: BeadGroupList = loader.loadMysteryEnum(SequenceIdEnum.HOLY_ROSARY, RosaryMysteriesEnum.JOYFUL);
      let beadGroup = beadGroupList.next();
      let groupIdx = 0;
      let mysteryNum = 1;

      expect(beadGroup.groupIndex).toEqual(groupIdx++);
      expect(beadGroup.index).toEqual(0);
      expect(beadGroup.maxIndex).toEqual(0);
      expect(beadGroup.prayerIds).toEqual([ '@@creed' ]);

      // when / then
      beadGroup = beadGroupList.next();
      expectOurFather(beadGroup, groupIdx++);

      // when / then
      expectHailMarySequence(beadGroupList, groupIdx++, 3);

      // when / then
      beadGroup = beadGroupList.next();
      expectGloryBeOnly(beadGroup, groupIdx++);

      // when / then
      beadGroup = beadGroupList.next();
      expectMystery(beadGroup, mysteryNum++);
    });

  });

});

function expectOurFather(beadGroup: BeadGroup, expectedGroupIndex: number) {
  expect(beadGroup.groupIndex).toEqual(expectedGroupIndex);
  expect(beadGroup.index).toEqual(0);
  expect(beadGroup.maxIndex).toEqual(0);
  expect(beadGroup.prayerIds).toEqual(['@@our-father']);
}

function expectHailMarySequence(beadGroupList: BeadGroupList, expectedGroupIndex: number, expectedMaxIndex: number) {
  for (let idx = 0; idx < expectedMaxIndex; idx++) {
    const beadGroup = beadGroupList.next();
    expectHailMary(beadGroup, expectedGroupIndex, idx, expectedMaxIndex);
  }
}

function expectHailMary(beadGroup: BeadGroup, expectedGroupIndex: number,
    expectedIndex: number, expectedMaxIndex: number) {
  expect(beadGroup.groupIndex).toEqual(expectedGroupIndex);
  expect(beadGroup.index).toEqual(expectedIndex);
  expect(beadGroup.maxIndex).toEqual(expectedMaxIndex);
  expect(beadGroup.prayerIds).toEqual(['@@hail-mary']);
}

function expectGloryBeOnly(beadGroup: BeadGroup, expectedGroupIndex: number) {
  expect(beadGroup.groupIndex).toEqual(expectedGroupIndex);
  expect(beadGroup.index).toEqual(0);
  expect(beadGroup.maxIndex).toEqual(0);
  expect(beadGroup.prayerIds).toEqual(['@@glory']);
}

function expectMystery(beadGroup: BeadGroup, mysteryNum: number) {
  console.log(`mystery # ${mysteryNum} - ${JSON.stringify(beadGroup)}`);
}

