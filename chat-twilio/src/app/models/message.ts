export interface MessagesArray {
    meta: Meta;
    messages: Message[];
}

export interface Message {
    sid: string;
    account_sid: string;
    service_sid: string;
    to: string;
    channel_sid: string;
    date_created: string;
    date_updated: string;
    last_updated_by?: any;
    was_edited: boolean;
    from: string;
    body: string;
    index: number;
    type: string;
    media?: Media;
    url: string;
}

interface Media {
    sid: string;
    size: number;
    content_type: string;
    filename: string;
}

interface Meta {
    page: number;
    page_size: number;
    first_page_url: string;
    previous_page_url: string;
    url: string;
    next_page_url: string;
    key: string;
}
