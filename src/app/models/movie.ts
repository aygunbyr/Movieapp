export interface Movie {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    isPopular: boolean;
    datePublished: number; // json olarak saklanacagi icin Date degil number kullandik
    categoryId: number;
}