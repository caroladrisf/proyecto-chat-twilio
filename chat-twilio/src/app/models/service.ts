export interface ServicesArray {
    services: Service[];
    meta: Meta;
}
export interface Service {
    date_updated: string;
    sid: string;
    url: string;
    friendly_name: string;
    account_sid: string;
    date_created: string;
}
export interface Meta {
    page: number;
    page_size: number;
    first_page_url: string;
    previous_page_url?: any;
    url: string;
    next_page_url?: any;
    key: string;
}
