export interface InfoSection {
    media       ?: Media;
    paragraph   ?: string;
    title       ?: string;
    subTitle    ?: string;
    multiLine   ?: string[];
    dateStar    ?: string[];
    icon        ?: string;
    emphasis    ?: string;
    dateTitle   ?: string;
    description ?: string;
}

export interface Media {
    src  : string;
    type : MediaType;
    srcSets ?: {
        mobile: string;
        tablet: string;
    }
}

export enum MediaType{
    audio,
    doc,
    image,
    video,
}