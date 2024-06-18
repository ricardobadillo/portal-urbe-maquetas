export interface SliderItem {
    altText?: string;
    imageUrl?: string;
    imageUrlSets?: ImgSets;
    linkMode?: Link;
    text?: SliderText;
}

export interface Controls {
    button?: {
        position?: "left" | "right";
        where: "inside" | "outside";
    };
    dots?: {
        where: "inside" | "outside";
    };
    outSidePosition: 'botton' | 'top';
}

export interface ImgSets {
    mobile: string;
    tablet: string;
}

export interface SliderConfig {
    bucleMode?: boolean;
    controls?: Controls;
    handletrack?: {
        active: boolean;
        time: number;
    };
}

export interface SliderData {
    buttonText: string;
    icon: string;
    route: string;
}

export interface SliderText {
    subtitle?: string;
    title: string;
}

export interface Link {
    path: string;
    target: '_blank' | '_self'
}