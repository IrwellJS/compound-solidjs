export enum Fit {
    Block = 'block',
    Inline = 'inline',
}

export enum AspectRatio {
    Square = '1-1',
    FullFrame = '3-2',
    StandardDefinition = '4-3',
    HighDefinition = '16-9',
    Cinema = '21-9',
}

export enum Level {
    Base100 = '100',
    Base200 = '200',
    Base300 = '300',
    BaseContent = 'content',
}

export enum Shape {
    Circle = 'circle',
    Square = 'square',
    Rectangle = 'rectangle',
}

export enum Size {
    Xs = 'xs',
    Sm = 'sm',
    Md = 'md',
    Lg = 'lg',
}

export enum Variant {
    Basic = 'basic',
    Neutral = 'neutral',
    Primary = 'primary',
    Secondary = 'secondary',
    Accent = 'accent',
    Ghost = 'ghost',
}

export enum NoteVariant {
    Neutral = 'neutral',
    Success = 'success',
    Warning = 'warning',
    Error = 'error',
    Info = 'info',
}

export const AllVariants = { ...Variant, ...NoteVariant};
export type AllVariants = typeof AllVariants;

export enum Orientation {
    Horizontal = 'horizontal',
    Vertical = 'vertical',
}

export interface CanBeJoinChild {
    isJoinChild?: boolean;
}
