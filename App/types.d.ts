type Nullable<T> = T | null | undefined;

type PartialNullable<T> = {
    [P in keyof T]: T[P] | null | undefined;
};