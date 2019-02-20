export interface MembersArray {
    meta: Meta;
    members: Member[];
}

export interface Member {
    sid: string;
    account_sid: string;
    channel_sid: string;
    service_sid: string;
    identity: string;
    role_sid: string;
    last_consumed_message_index?: any;
    last_consumption_timestamp?: any;
    date_created: string;
    date_updated: string;
    url: string;
}

export interface Meta {
    page: number;
    page_size: number;
    first_page_url: string;
    previous_page_url: string;
    url: string;
    next_page_url: string;
    key: string;
}
