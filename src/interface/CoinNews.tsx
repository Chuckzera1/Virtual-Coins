export interface CoinNews {
    _type?:         string;
    name?:          string;
    url?:           string;
    image?:         CoinNewsImage;
    description?:   string;
    provider?:      Provider[];
    datePublished?: string;
}

export interface CoinNewsImage {
    thumbnail?:  PurpleThumbnail;
    isLicensed?: boolean;
}

export interface PurpleThumbnail {
    contentUrl?: string;
    width?:      number;
    height?:     number;
}

export interface Provider {
    name?:  string;
    image?: ProviderImage;
}

export interface ProviderImage {
    thumbnail?: FluffyThumbnail;
}

export interface FluffyThumbnail {
    contentUrl?: string;
}
