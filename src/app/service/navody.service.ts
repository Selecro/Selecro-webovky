import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Difficulty, Instruction, Step } from 'src/app/types';

const poleInstructiony: Array<Instruction> = [
  {
    id: "9969a692-e442-4b3d-9071-db3fba037c48",
    titleCz: "Vodní želva",
    titleEn: "Sea Turtle",
    difficulty: Difficulty.medium,
    link: "https://i.imgur.com/2oceccd.jpg",
    premium: false,
    date: "2023-10-26T09:39:27.120Z",
    userId: "01586689-f028-451e-90af-3eac357969b3",
    steps: [
      {
        id: 0,
        titleCz: "Příprava",
        titleEn: "What you'll need",
        descriptionCz: [
          "Háček (velikost 3 mm)",
          "YarnArt Jeans 1 klubíčko na tělo",
          "YarnArt Jeans 1 klubíčko na krunýř",
          "Kousek černé a růžové na doplňky",
          "Bezpečnostní očka (10 mm)",
          "Značkovač",
          "Výplň",
          "Nůžky",
          "Jehla"
        ],
        descriptionEn: [
          "Hook (size 3 mm)",
          "YarnArt Jeans 1 ball of yarn",
          "YarnArt Jeans 1 ball of yarn",
          "Piece of black and pink string for details.",
          "Safety eyes (10 mm)",
          "Stitch marker",
          "Filling",
          "Scissors",
          "Needle"
        ],
        link: null,
        "instructionId": "9969a692-e442-4b3d-9071-db3fba037c48"
      },
      {
        id: 1,
        titleCz: "Hlava",
        titleEn: "Head",
        descriptionCz: [
          "Mk (6)",
          "V",
          "ks, V",
          "2 ks, V",
          "3 ks, V",
          "4 ks, V",
          "ks (4 řad)",
          "4 ks, A",
          "3 ks, A",
          "2 ks, A",
          "ks, A",
          "A",
          "Po"
        ],
        descriptionEn: [
          "Mr (6)",
          "Inc",
          "Sc, Inc",
          "2Sc, Inc",
          "3Sc, Inc",
          "4Sc, Inc",
          "Sc (4 rows)",
          "4Sc, Dec",
          "3Sc, Dec",
          "2Sc, Dec",
          "Sc, Dec",
          "Dec",
          "SlSt"
        ],
        link: "https://i.imgur.com/Pr4hc3V.jpg",
        "instructionId": "9969a692-e442-4b3d-9071-db3fba037c48"
      },
      {
        id: 2,
        titleCz: "Horní část krunýře",
        titleEn: "Top part of shell",
        descriptionCz: [
          "Mk (6)",
          "V",
          "ks, V",
          "2 ks, V",
          "3 ks, V",
          "4 ks, V",
          "5 ks, V",
          "6ks, V",
          "ks (3 řady)",
          "Po"
        ],
        descriptionEn: [
          "Mr (6)",
          "Inc",
          "Sc, Inc",
          "2Sc, Inc",
          "3Sc, Inc",
          "4Sc, Inc",
          "5Sc, Inc",
          "6Sc, Inc",
          "Sc (3 rows)",
          "SlSt"
        ],
        link: "https://i.imgur.com/JgyvQj5.jpg",
        "instructionId": "9969a692-e442-4b3d-9071-db3fba037c48"
      },
      {
        id: 3,
        titleCz: "Spodní část krunýře",
        titleEn: "Bottom part of shell",
        descriptionCz: [
          "Mk (6)",
          "V",
          "ks, V",
          "2 ks, V",
          "3 ks, V",
          "4 ks, V",
          "5 ks, V",
          "6ks, V",
          "Po"
        ],
        descriptionEn: [
          "Mr (6)",
          "Inc",
          "Sc, Inc",
          "2Sc, Inc",
          "3Sc, Inc",
          "4Sc, Inc",
          "5Sc, Inc",
          "6Sc, Inc",
          "SlSt"
        ],
        link: "https://i.imgur.com/I4CxEHW.jpg",
        "instructionId": "9969a692-e442-4b3d-9071-db3fba037c48"
      },
      {
        id: 4,
        titleCz: "Zadní ploutev (2x)",
        titleEn: "Back fin (2x)",
        descriptionCz: [
          "Mk (6)",
          "V",
          "ks, V",
          "2 ks, V",
          "3 ks, V",
          "4 ks, V",
          "Po",
          "Po dokončení kolečko ohneme napůl a sešijeme k sobě."
        ],
        descriptionEn: [
          "Mr (6)",
          "Inc",
          "Sc, Inc",
          "2Sc, Inc",
          "3Sc, Inc",
          "4Sc, Inc",
          "SlSt",
          "After finish, fold the circle in half and sew it together."
        ],
        link: "https://i.imgur.com/kc8uOqW.jpg",
        "instructionId": "9969a692-e442-4b3d-9071-db3fba037c48"
      },
      {
        id: 5,
        titleCz: "Přední ploutev (2x)",
        titleEn: "Front fin (2x)",
        descriptionCz: [
          "Mk (6)",
          "V",
          "ks, V",
          "2 ks, V",
          "3 ks, V",
          "4 ks, V",
          "5 ks, V",
          "6ks, V",
          "Po",
          "Po dokončení kolečko ohneme napůl a sešijeme k sobě."
        ],
        descriptionEn: [
          "Mr (6)",
          "Inc",
          "Sc, Inc",
          "2Sc, Inc",
          "3Sc, Inc",
          "4Sc, Inc",
          "5Sc, Inc",
          "6Sc, Inc",
          "SlSt",
          "After finish, fold the circle in half and sew it together."
        ],
        link: "https://i.imgur.com/XVAkMyp.jpg",
        "instructionId": "9969a692-e442-4b3d-9071-db3fba037c48"
      },
      {
        id: 6,
        titleCz: "Ocásek",
        titleEn: "Tail",
        descriptionCz: [
          "Mk (4)",
          "ks (2 řady)",
          "Po"
        ],
        descriptionEn: [
          "Mr (4)",
          "Sc (2 rows)",
          "SlSt"
        ],
        link: "https://i.imgur.com/gJduyss.jpg",
        "instructionId": "9969a692-e442-4b3d-9071-db3fba037c48"
      },
      {
        id: 7,
        titleCz: "Doplňky",
        titleEn: "Details",
        descriptionCz: [
          "Jednu řadu pod očima můžu vytvořit tváře. Jednoduše si vyberu jeden bod, do kterého píchnu a jehlu vytáhnu o 2 očka dál. Zakončím zapošitím",
          "Pusinku z kousku černé. Vyberu si místa, kde chci mít koutky. Těmito dvěma body jehlu protáhnu dvakrát, abych měla venku volný oblouček nitě. Tu potom zachytím zhruba uprostřed, a tak upevním"
        ],
        descriptionEn: [
          "You can create cheeks one row under the eyes. Choose one point, where to put your needle, skip two chains and then pull it out. Finish off by sewing.",
          "Create a mouth from a piece of black yarn. Choose two points where you want to have corners of the mouth. Through these two chains, push the needle two times, so you're left witf a loose arch of yarn. Attach this piece of yarn in the middle by sewing."
        ],
        link: "https://i.imgur.com/wyHloHn.jpg",
        "instructionId": "9969a692-e442-4b3d-9071-db3fba037c48"
      }
    ],
    username: "szotkowski",
    userLink: "https://i.imgur.com/ZYO4Hn9.png"
  },
  {
    id: "997b6bcc-0c13-4014-88df-bf961f4e5599",
    titleCz: "Obracecí chobotnička",
    titleEn: "Two Sided Octopus",
    difficulty: Difficulty.easy,
    link: "https://i.imgur.com/BZeN9Fe.jpg",
    premium: false,
    date: "2023-10-26T09:48:48.020Z",
    userId: "01586689-f028-451e-90af-3eac357969b3",
    steps: [
      {
        id: 8,
        titleCz: "Příprava",
        titleEn: "What you'll need",
        descriptionCz: [
          "Háček (velikost 3 mm)",
          "YarnArt Jeans 2 klubíčka (každé jiné barvy)",
          "YarnArt Jeans černá na oči a doplňky",
          "Značkovač",
          "Nůžky",
          "Jehla"
        ],
        descriptionEn: [
          "Hook (size 3 mm)",
          "YarnArt Jeans 2 balls of yarn (each a different color)",
          "YarnArt Jeans black yarn for eyes and details",
          "Stitch marker",
          "Scissors",
          "Needle"
        ],
        link: null,
        "instructionId": "997b6bcc-0c13-4014-88df-bf961f4e5599"
      },
      {
        id: 9,
        titleCz: "Hlava (2x)",
        titleEn: "Head (2x)",
        descriptionCz: [
          "Mk (8)",
          "V",
          "ks, V",
          "2 ks, V",
          "ks (9 řad)",
          "Po"
        ],
        descriptionEn: [
          "Mr (8)",
          "Inc",
          "Sc, Inc",
          "2Sc, Inc",
          "Sc (9 rows)",
          "Sl St"
        ],
        link: "https://i.imgur.com/6HFVpMv.jpg",
        "instructionId": "997b6bcc-0c13-4014-88df-bf961f4e5599"
      },
      {
        id: 10,
        titleCz: "Sešití hlav",
        titleEn: "Sewing the heads together",
        descriptionCz: [
          "Jednu hlavu obrátím vzhůru nohama",
          "Obrácenou hlavu vložím do té druhé",
          "Sešívám delší nití",
          "Nezapomenu na konci zapošít, aby hlavy držely při otáčení"
        ],
        descriptionEn: [
          "Turn one head inside out.",
          "Put that head into the other one.",
          "Sew with a longer needle.",
          "Don't forget to sew so the heads hold together when turning over."
        ],
        link: "https://i.imgur.com/FVlceiL.jpg",
        "instructionId": "997b6bcc-0c13-4014-88df-bf961f4e5599"
      },
      {
        id: 11,
        titleCz: "Chapadlo (16x)",
        titleEn: "Tentacle (16x)",
        descriptionCz: [
          "6Řo",
          "Obracím směr 4PDS, 5PDS do jednoho oka, 4PDS",
          "Po"
        ],
        descriptionEn: [
          "6Ch",
          "Change direction 4Hdc, 5Hdc into one chain, 4Hdc",
          "Sl St"
        ],
        link: "https://i.imgur.com/AyFaIpd.jpg",
        "instructionId": "997b6bcc-0c13-4014-88df-bf961f4e5599"
      },
      {
        id: 12,
        titleCz: "Sešití chapadla (8x)",
        titleEn: "Sewing the tentacles together (8x)",
        descriptionCz: [
          "Vezmu jedno chapadlo od každé barvy a dám je pohledovou stranou do sebe",
          "Sešivám je nejdelší ze čtyř nití, co z nich vysí",
          "K tělu budu přišívat na 4 oka bez mezery"
        ],
        descriptionEn: [
          "Take one tentacle of each color and put them together the correct way.",
          "Sew together with the longest of the four strings, that are hanging from them.",
          "Connect the boby by sewing into four chain."
        ],
        link: "https://i.imgur.com/9Hjuvvl.jpg",
        "instructionId": "997b6bcc-0c13-4014-88df-bf961f4e5599"
      },
      {
        id: 13,
        titleCz: "Šťastné oko (2x)",
        titleEn: "Happy eye (2x)",
        descriptionCz: [
          "Mk (6)",
          "V",
          "ks, V",
          "Po"
        ],
        descriptionEn: [
          "Mr (6)",
          "Inc",
          "Sc, Inc",
          "Sl St"
        ],
        link: "https://i.imgur.com/pln9l3g.jpg",
        "instructionId": "997b6bcc-0c13-4014-88df-bf961f4e5599"
      },
      {
        id: 14,
        titleCz: "Naštvané oči (2x)",
        titleEn: "Angry eyes (2x)",
        descriptionCz: [
          "Levé: Mk (5)",
          "Řo, otočím, 5ks, 2Řo, 3ks, Po",
          "Pravé: Mk (5)",
          "Řo, 7ks, 2Řo, ks, Po"
        ],
        descriptionEn: [
          "Left eye: Mr (5)",
          "Ch, turn around, 5Sc, 2Ch, 3Sc, Sl St",
          "Right eye: Mr (5)",
          "Ch, 7Sc, 2Ch, Sc, Sl St"
        ],
        link: "https://i.imgur.com/LhPnHV3.jpg",
        "instructionId": "997b6bcc-0c13-4014-88df-bf961f4e5599"
      },
      {
        id: 15,
        titleCz: "Doplňky",
        titleEn: "Detail",
        descriptionCz: [
          "Dá se přidat ještě pusinka",
          "Bílá čárka do oka"
        ],
        descriptionEn: [
          "You can add a mouth",
          "White line into eye"
        ],
        link: null,
        "instructionId": "997b6bcc-0c13-4014-88df-bf961f4e5599"
      }
    ],
    username: "szotkowski",
    userLink: "https://i.imgur.com/ZYO4Hn9.png"
  },
  {
    id: "c49ae4f4-7416-465c-bc31-e7d3a0cd34a6",
    titleCz: "Pavouk",
    titleEn: "Spider",
    difficulty: Difficulty.hard,
    link: "https://i.imgur.com/TdBxUXP.jpg",
    premium: false,
    date: "2023-10-26T09:57:38.790Z",
    userId: "01586689-f028-451e-90af-3eac357969b3",
    steps: [
      {
        id: 16,
        titleCz: "Příprava",
        titleEn: "What you'll need",
        descriptionCz: [
          "Háček (velikost 3 mm)",
          "YarnArt Jeans 1 klubíčko",
          "Jakákoliv tenká příze s chlupem",
          "Kousek černé na pusu",
          "Bezpečnostní očka (velikost 10 mm a 8 mm)",
          "Značkovač",
          "Výplň",
          "Nůžky",
          "Jehla"
        ],
        descriptionEn: [
          "Hook (size 3 mm)",
          "YarnArt Jeans 1 ball of yarn",
          "Any fluffy yarn",
          "A piece of black of yarn for the mouth",
          "Safety eyes (soze 10 mm a 8 mm)",
          "Stitch marker",
          "Fillings",
          "Scissors",
          "Needle"
        ],
        link: null,
        "instructionId": "c49ae4f4-7416-465c-bc31-e7d3a0cd34a6"
      },
      {
        id: 17,
        titleCz: "Hlava",
        titleEn: "Head",
        descriptionCz: [
          "Mk (6)",
          "V",
          "ks, V",
          "2 ks, V",
          "3 ks, V",
          "4 ks, V",
          "5ks, V",
          "ks (2 řady)",
          "5ks, A",
          "4ks, A",
          "3ks, A",
          "2ks, A",
          "ks, A",
          "A",
          "Po"
        ],
        descriptionEn: [
          "Mr (6)",
          "Inc",
          "Sc, Inc",
          "2Sc, Inc",
          "3Sc, Inc",
          "4Sc, Inc",
          "5Sc, Inc",
          "Sc (2 rows)",
          "5Sc, Dec",
          "4Sc, Dec",
          "3Sc, Dec",
          "2Sc, DEC",
          "Sc, Dec",
          "Dec",
          "Sl St"
        ],
        link: "https://i.imgur.com/CRrlyin.jpg",
        "instructionId": "c49ae4f4-7416-465c-bc31-e7d3a0cd34a6"
      },
      {
        id: 18,
        titleCz: "Tělo",
        titleEn: "Body",
        descriptionCz: [
          "Mk (6)",
          "V",
          "ks, V",
          "2 ks, V",
          "3 ks, V",
          "4 ks, V",
          "5ks, V",
          "6ks, V",
          "ks (3 řady)",
          "6ks, A",
          "5ks, A",
          "ks (1 řada)",
          "4ks, A",
          "3ks, A",
          "ks (1 řada)",
          "Po"
        ],
        descriptionEn: [
          "Mr (6)",
          "Inc",
          "Sc, Inc",
          "2Sc, Inc",
          "3Sc, Inc",
          "4Sc, Inc",
          "5Sc, Inc",
          "6Sc, Inc",
          "Sc (3 rows)",
          "6Sc, Dec",
          "5Sc, Dec",
          "Sc (1 rows)",
          "4Sc, Dec",
          "3Sc, Dec",
          "Sc (1 rows)",
          "Sl St"
        ],
        link: "https://i.imgur.com/lEqA8Pu.jpg",
        "instructionId": "c49ae4f4-7416-465c-bc31-e7d3a0cd34a6"
      },
      {
        id: 19,
        titleCz: "První noha (2x)",
        titleEn: "Front legs (2x)",
        descriptionCz: [
          "Mk (6)",
          "2ks, V",
          "ks (4 řady)",
          "Po"
        ],
        descriptionEn: [
          "Mr (6)",
          "2Sc, Inc",
          "Sc (4 rows)",
          "Sl St"
        ],
        link: "https://i.imgur.com/5YTk85e.jpg",
        "instructionId": "c49ae4f4-7416-465c-bc31-e7d3a0cd34a6"
      },
      {
        id: 20,
        titleCz: "Druhá noha (2x)",
        titleEn: "Second leg (2x)",
        descriptionCz: [
          "Mk (6)",
          "2ks, V",
          "ks (3 řady)",
          "3Po, ks, 3PDS, ks",
          "ks (3 řady)",
          "Po"
        ],
        descriptionEn: [
          "Mr (6)",
          "2Sc, Inc",
          "Sc (3 rows)",
          "3Sl St, Sc, 3Hdc, Sc",
          "Sc (3 rows)",
          "Sl St"
        ],
        link: "https://i.imgur.com/VNolwdq.jpg",
        "instructionId": "c49ae4f4-7416-465c-bc31-e7d3a0cd34a6"
      },
      {
        id: 21,
        titleCz: "Třetí noha (2x)",
        titleEn: "Third leg (2x)",
        descriptionCz: [
          "Mk (6)",
          "2ks, V",
          "ks (4 řady)",
          "3Po, ks, 3PDS, ks",
          "ks (4 řady)",
          "Po"
        ],
        descriptionEn: [
          "Mr (6)",
          "2Sc, Inc",
          "Sc (4 rows)",
          "3Sl St, Sc, 3Hdc, Sc",
          "Sc (4 rows)",
          "Sl St"
        ],
        link: "https://i.imgur.com/qaYii2A.jpg",
        "instructionId": "c49ae4f4-7416-465c-bc31-e7d3a0cd34a6"
      },
      {
        id: 22,
        titleCz: "Čtvrtá noha (2x)",
        titleEn: "Fourth leg (2x)",
        descriptionCz: [
          "Mk (6)",
          "2ks, V",
          "ks (5 řad)",
          "3Po, ks, 3PDS, ks",
          "ks (5 řad)",
          "Po"
        ],
        descriptionEn: [
          "Mr (6)",
          "2Sc, Inc",
          "Sc (5 rows)",
          "3Sl St, Sc, 3Hdc, Sc",
          "Sc (5 rows)",
          "Sl St"
        ],
        link: "https://i.imgur.com/aMz6D38.jpg",
        "instructionId": "c49ae4f4-7416-465c-bc31-e7d3a0cd34a6"
      },
      {
        id: 23,
        titleCz: "Zub (2x)",
        titleEn: "Tooth (2x)",
        descriptionCz: [
          "Mk (6)",
          "2ks, V",
          "ks (2 řady)"
        ],
        descriptionEn: [
          "Mr (6)",
          "2Sc, Inc",
          "Sc (2 řady)"
        ],
        link: "https://i.imgur.com/4gFVxLF.jpg",
        "instructionId": "c49ae4f4-7416-465c-bc31-e7d3a0cd34a6"
      },
      {
        id: 24,
        titleCz: "Doplňky",
        titleEn: "Details",
        descriptionCz: [
          "Chloupky na nohou",
          "Pusinka"
        ],
        descriptionEn: [
          "Hairs on legs",
          "Mouth"
        ],
        link: null,
        "instructionId": "c49ae4f4-7416-465c-bc31-e7d3a0cd34a6"
      }
    ],
    username: "szotkowski",
    userLink: "https://i.imgur.com/ZYO4Hn9.png"
  },
  {
    id: "f1eabfee-2d82-4f18-92bb-0eb333839efc",
    titleCz: "Harold",
    titleEn: "Harold",
    difficulty: Difficulty.easy,
    link: "https://i.imgur.com/7uW3bCC.jpg",
    premium: false,
    date: "2023-10-25T21:55:41.072Z",
    userId: "01586689-f028-451e-90af-3eac357969b3",
    steps: [
      {
        id: 25,
        titleCz: "Příprava",
        titleEn: "What you'll need",
        descriptionCz: [
          "Háček (velikost 3 mm)",
          "Bezpečnostní očka (velikost 10 mm)",
          "YarnArt Jeans 1 klubko",
          "Kousek černé na doplňky",
          "Výplň",
          "Značkovač",
          "Nůžky",
          "Jehla"
        ],
        descriptionEn: [
          "Hook (size 3 mm)",
          "Safety eyes (velikost 10 mm)",
          "YarnArt Jeans 1 ball of yarn",
          "Piece of black string for details",
          "Filling",
          "Stitch marker",
          "Scissors",
          "Needle"
        ],
        link: null,
        "instructionId": "f1eabfee-2d82-4f18-92bb-0eb333839efc"
      },
      {
        id: 26,
        titleCz: "Hlava",
        titleEn: "Head",
        descriptionCz: [
          "Mk (8)",
          "V",
          "ks, V",
          "2 ks, V",
          "3 ks, V",
          "4 ks, V",
          "ks (6 řad)",
          "4 ks, A",
          "3 ks, A",
          "2 ks, A",
          "ks, A",
          "Po"
        ],
        descriptionEn: [
          "Mr (8)",
          "Inc",
          "Sc, Inc",
          "2Sc, Inc",
          "3Sc, Inc",
          "4Sc, Inc",
          "Sc (6 rows)",
          "4Sc, Dec",
          "3Sc, Dec",
          "2Sc, Dec",
          "Sc, Dec",
          "SlSt"
        ],
        link: "https://i.imgur.com/kxYIMGA.jpg",
        "instructionId": "f1eabfee-2d82-4f18-92bb-0eb333839efc"
      },
      {
        id: 27,
        titleCz: "Chapadla",
        titleEn: "Tentacles",
        descriptionCz: [
          "6*(25řo, otočím směr háčkování a střídám 2V, W, Po do dalšího oka opět za vnější přízi) "
        ],
        descriptionEn: [
          "6*(25Ch, change the direction of crocheting and alternate 2Dec, double Dec, SlSt, into the next chain again on the inside)"
        ],
        link: "https://i.imgur.com/SzYBclK.jpg",
        "instructionId": "f1eabfee-2d82-4f18-92bb-0eb333839efc"
      },
      {
        id: 28,
        titleCz: "Vyplnění",
        titleEn: "Filling",
        descriptionCz: [
          "Nezapomeňte v tomto bodě vyplnit."
        ],
        descriptionEn: [
          "Don't forget to fill it in."
        ],
        link: "https://i.imgur.com/uHVl8NQ.jpg",
        "instructionId": "f1eabfee-2d82-4f18-92bb-0eb333839efc"
      },
      {
        id: 29,
        titleCz: "Uzavření",
        titleEn: "Closing off",
        descriptionCz: [
          "A",
          "o na zakončení, necháme si delší kus příze na zapošití."
        ],
        descriptionEn: [
          "Dec",
          "SlSt to close off, leave a longer strand of yarn for sewing."
        ],
        link: "https://i.imgur.com/MFSahYa.jpg",
        "instructionId": "f1eabfee-2d82-4f18-92bb-0eb333839efc"
      },
      {
        id: 30,
        titleCz: "Doplňky",
        titleEn: "Details",
        descriptionCz: [
          "Obočí a pusinku našijeme černou přízí."
        ],
        descriptionEn: [
          "Create the eyebrows and mouth with black yarn."
        ],
        link: "https://i.imgur.com/slaLY6f.jpg",
        "instructionId": "f1eabfee-2d82-4f18-92bb-0eb333839efc"
      }
    ],
    username: "szotkowski",
    userLink: "https://i.imgur.com/ZYO4Hn9.png"
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
    return x?.steps.findIndex((item) => item.id == Number(id));
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
