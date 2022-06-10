import z from "zod";

const intZod = z.number().int();
const sequenceValidator = z.array(z.number());
type Sequence = z.infer<typeof sequenceValidator>;

const range = (size: number) =>
  [...Array(intZod.parse(size)).keys()].map((i) => i + 1);

export function contains(source: Sequence, subsequence: Sequence) {
  return !subsequence.map((target) => source.includes(target)).includes(false);
}

export function add(a: Sequence, b: Sequence): Sequence {
  return a.flatMap((r1) => b.map((r2) => r2 + r1));
}

export function negative(a: Sequence): Sequence {
  return a.map((i) => -i);
}

export function subtract(a: Sequence, b: Sequence): Sequence {
  return add(a, negative(b));
}

export function d(num: number, size: number): Sequence {
  const realNum = intZod.parse(num);
  const realSize = intZod.parse(size);
  const single = range(realSize);
  return range(realNum)
    .map(() => single)
    .reduce((sum, current) => add(sum, current));
}
