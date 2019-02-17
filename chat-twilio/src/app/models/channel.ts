export interface ChannelsArray {
    channels: Channel[];
    meta: Meta;
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

export interface Channel {
    sid: string;
    account_sid: string;
    service_sid: string;
    friendly_name: string;
    unique_name: string;
    attributes: Attributes;
    type: string;
    date_created: string;
    date_updated: string;
    created_by: string;
    members_count: number;
    messages_count: number;
    url: string;
    links: Links;
}

export interface Links {
    members: string;
    messages: string;
    invites: string;
    webhooks: string;
    last_message?: any;
}

export interface Attributes {
    foo: string;
}
