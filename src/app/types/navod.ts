export type PremiumInstruction = {
  id: string,
  titleCz: string,
  titleEn: string,
  difficulty: Difficulty,
  link?: string | null,
  premium: boolean,
  finished?: boolean,
  date: Date,
  userId: string,
  shortcutsCz?: string | null;
  shortcutsEn?: string | null;
}

export type Instruction = {
  id: string,
  titleCz: string,
  titleEn: string,
  difficulty: Difficulty,
  link?: string | null,
  premium?: boolean,
  finished?: boolean,
  date: string,
  userId: string,
  shortcutsCz?: string | null;
  shortcutsEn?: string | null;
  steps: Step[],
  username: string,
  userLink: string,
}

export type Step = {
  id: number,
  titleCz: string,
  titleEn: string,
  descriptionCz: string[],
  descriptionEn: string[],
  link?: string | null,
  instructionId: string,
}

export enum Difficulty {
  easy = 'easy',
  medium = 'medium',
  hard = 'hard',
}