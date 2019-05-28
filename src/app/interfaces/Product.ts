export class WsiProduct {
    public id: string;
    public name: string;
    public link: string;
    public sellingPriceMin: number;
    public sellingPriceMax: number;
    public messages: string[];
    public  images: WsiProductImage[];
    public heroImage: WsiProductImage;
    public thumbnailImage: WsiProductImage;

}
export class WsiProductImage {
    public size: string;
    public meta: string;
    public alt: string;
    public rel: string;
    public width: number;
    public href: string;
    public height: number;
}
