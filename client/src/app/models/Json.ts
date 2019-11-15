export abstract class Json {
  [index: string]:
    | string
    | number
    | boolean
    | null
    | string[]
    | number[]
    | boolean[]
    | null[]
    | {}
    | {}[];
}
