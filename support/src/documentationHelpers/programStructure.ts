export type Module = {
  readonly name: string;
  readonly location: string;
};

export type Course = {
  readonly name: string;
  readonly location: string;
  readonly modules: readonly Module[];
};

export type ProgramStructure = {
  readonly courses: readonly Course[];
};
