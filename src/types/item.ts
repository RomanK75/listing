export type ItemType = {
    listing_id : number;    //  уникальный идентификатор предложения, число;
    url : string;           // ссылка на предложение, строка;
    MainImage: {
        url_75x75: string;
        url_170x135: string;
        url_570xN: string;
        url_fullxfull: string;
      };     // информация об изображении, строка;
    title : string;         // название предложения, строка
    currency_code : string; // код валюты, строка;
    price : string;         //  цена, строка;
    quantity : number;      // доступное количество, число.
    state : string;         //  состояние предложения, строка;
}