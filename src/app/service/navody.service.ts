import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Difficulty, Instruction, Step } from 'src/app/types';

const poleInstructiony: Array<Instruction> = [
  {
    id: "sf45",
    titleCz: "Harold",
    titleEn: "Harold",
    difficulty: Difficulty.hard,
    premium: true,
    finished: true,
    date: new Date(),
    userId: "eg8eb8",
    steps: [
      {
        id: "rbsdb64",
        titleCz: "Hlava",
        titleEn: "Head",
        descriptionCz: ["Mk (8)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "ks (6 řad)", "4 ks, A", "3 ks, A", "2 ks, A", "ks, A", "Po"],
        descriptionEn: ["Mr (8)", "Inc", "Sc, Inc", "2Sc, Inc", "3Sc, Inc", "4Sc, Inc", "Sc (6 rows)", "4Sc, Dec", "3Sc, Dec", "2Sc, Dec", "Sc, Dec", "SlSt"],
        instructionId: "sf45"
      },
      {
        id: "erb5",
        titleCz: "Spodní část krunýře",
        titleEn: "Bottom part of shell",
        descriptionCz: ["Mk (6)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "5 ks, V", "6ks, V", "Po"],
        descriptionEn: ["Mr (6)", "Inc", "Sc, Inc", "2Sc, Inc", "3Sc, Inc", "4Sc, Inc", "5Sc, Inc", "6Sc, Inc", "SlSt"],
        instructionId: "sf45"
      }
    ]
  },
  {
    id: "mk87",
    titleCz: "Boris",
    titleEn: "Boris",
    difficulty: Difficulty.medium,
    premium: false,
    finished: false,
    date: new Date(),
    userId: "pl12mn",
    steps: [
      {
        id: "hg47s",
        titleCz: "Tělo",
        titleEn: "Body",
        descriptionCz: ["Mk (10)", "V", "ks, V", "2 ks, V", "3 ks, V", "ks (8 řad)", "3 ks, A", "2 ks, A", "ks, A", "Po"],
        descriptionEn: ["Mr (10)", "Inc", "Sc, Inc", "2Sc, Inc", "3Sc, Inc", "Sc (8 rows)", "3Sc, Dec", "2Sc, Dec", "Sc, Dec", "SlSt"],
        instructionId: "mk87"
      },
      {
        id: "xn53d",
        titleCz: "Ocas",
        titleEn: "Tail",
        descriptionCz: ["Mk (6)", "V", "ks, V", "2 ks, V", "ks (6 řad)", "2 ks, A", "ks, A", "Po"],
        descriptionEn: ["Mr (6)", "Inc", "Sc, Inc", "2Sc, Inc", "Sc (6 rows)", "2Sc, Dec", "Sc, Dec", "SlSt"],
        instructionId: "mk87"
      }
    ]
  },
  {
    id: "pl92",
    titleCz: "Alice",
    titleEn: "Alice",
    difficulty: Difficulty.easy,
    premium: true,
    finished: true,
    date: new Date(),
    userId: "zt45hk",
    steps: [
      {
        id: "vk93s",
        titleCz: "Noha",
        titleEn: "Leg",
        descriptionCz: ["Mk (6)", "V", "ks, V", "ks (5 řad)", "ks, A", "Po"],
        descriptionEn: ["Mr (6)", "Inc", "Sc, Inc", "Sc (5 rows)", "Sc, Dec", "SlSt"],
        instructionId: "pl92"
      },
      {
        id: "tr56q",
        titleCz: "Ucho",
        titleEn: "Ear",
        descriptionCz: ["Mk (6)", "V", "ks, V", "2 ks, V", "ks, A", "Po"],
        descriptionEn: ["Mr (6)", "Inc", "Sc, Inc", "2Sc, Inc", "Sc, Dec", "SlSt"],
        instructionId: "pl92"
      }
    ]
  },
  {
    id: "tn45",
    titleCz: "Oliver",
    titleEn: "Oliver",
    difficulty: Difficulty.hard,
    premium: true,
    finished: false,
    date: new Date(),
    userId: "rt88po",
    steps: [
      {
        id: "ol76p",
        titleCz: "Tělo",
        titleEn: "Body",
        descriptionCz: ["Mk (8)", "V", "ks, V", "2 ks, V", "ks (10 řad)", "2 ks, A", "ks, A", "Po"],
        descriptionEn: ["Mr (8)", "Inc", "Sc, Inc", "2Sc, Inc", "Sc (10 rows)", "2Sc, Dec", "Sc, Dec", "SlSt"],
        instructionId: "tn45"
      },
      {
        id: "qz94s",
        titleCz: "Oči",
        titleEn: "Eyes",
        descriptionCz: ["Mk (4)", "V", "ks, V", "Po"],
        descriptionEn: ["Mr (4)", "Inc", "Sc, Inc", "SlSt"],
        instructionId: "tn45"
      }
    ]
  },
  {
    id: "xy73",
    titleCz: "Sophie",
    titleEn: "Sophie",
    difficulty: Difficulty.easy,
    premium: false,
    finished: true,
    date: new Date(),
    userId: "lm45qs",
    steps: [
      {
        id: "ld65z",
        titleCz: "Ruka",
        titleEn: "Arm",
        descriptionCz: ["Mk (6)", "V", "ks (6 řad)", "ks, A", "Po"],
        descriptionEn: ["Mr (6)", "Inc", "Sc (6 rows)", "Sc, Dec", "SlSt"],
        instructionId: "xy73"
      },
      {
        id: "mv82k",
        titleCz: "Čepice",
        titleEn: "Hat",
        descriptionCz: ["Mk (6)", "V", "ks, V", "2 ks, V", "ks (4 řady)", "Po"],
        descriptionEn: ["Mr (6)", "Inc", "Sc, Inc", "2Sc, Inc", "Sc (4 rows)", "SlSt"],
        instructionId: "xy73"
      }
    ]
  }
];

enum ShortcutEnumCZ {
  Řo = 'Řo',
  Po = 'Po',
  Ks = 'Ks',
  Pds = 'Pds',
  Ds = 'Ds',
  V = 'V',
  A = 'A',
  Mk = 'Mk',
}

enum ShortcutEnumEN {
  Ch = 'Ch',
  SlSt = 'SlSt',
  Sc = 'Sc',
  Hdc = 'Hdc',
  Dc = 'Dc',
  Inc = 'Inc',
  Dec = 'Dec',
  Mr = 'Mr',
}

const difficultyOrder = {
  easy: 1,
  medium: 2,
  hard: 3,
};

@Injectable({
  providedIn: 'root'
})
export class InstructionService {

  constructor(private translate: TranslateService) {
    poleInstructiony.forEach(instruction => {
      const matchedShortcutsCz: Set<string> = new Set();
      const matchedShortcutsEn: Set<string> = new Set();
      instruction.steps.forEach(step => {
        step.descriptionCz.forEach(description => {
          Object.values(ShortcutEnumCZ).forEach(shortcut => {
            if (description.includes(shortcut)) {
              matchedShortcutsCz.add(shortcut);
            }
          });
        });
        step.descriptionEn.forEach(description => {
          Object.values(ShortcutEnumEN).forEach(shortcut => {
            if (description.includes(shortcut)) {
              matchedShortcutsEn.add(shortcut);
            }
          });
        })
      });
      instruction.shortcutsCz = Array.from(matchedShortcutsCz).join(', ');
      instruction.shortcutsEn = Array.from(matchedShortcutsEn).join(', ');
    });
    poleInstructiony.sort((a, b) => {
      const difficultyA = difficultyOrder[a.difficulty];
      const difficultyB = difficultyOrder[b.difficulty];
      return difficultyA - difficultyB;
    });
  }

  public getInstructionsById(id: string): Instruction | void {
    return poleInstructiony.find(element => element.id == id);
  }

  public getAllInstructions(): Array<Instruction> {
    return poleInstructiony;
  }

  public getStepsById(id: string): Array<Step> {
    const index = poleInstructiony.findIndex(x => x.id == id);
    return poleInstructiony[index].steps;
  }

  public getIndexById(id: string, instructionId: string): number | undefined {
    const x = poleInstructiony.find((item) => item.id == instructionId);
    return x?.steps.findIndex((item) => item.id == id);
  }

  public getAllTitles(): Array<string> {
    if (this.translate.currentLang === "EN") {
      return poleInstructiony.map((item) => item.titleEn);
    }
    else {
      return poleInstructiony.map((item) => item.titleCz);
    }
  }

}
