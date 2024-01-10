export enum Fit {
    Block = 'block',
    Inline = 'inline',
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
    Link = 'link',
}

export enum NoteVariant {
    Neutral = 'neutral',
    Success = 'success',
    Warning = 'warning',
    Error = 'error',
    Info = 'info',
}

export enum Orientation {
    Horizontal = 'horizontal',
    Vertical = 'vertical',
}

export interface CanBeJoinChild {
    isJoinChild?: boolean;
}
