type Component = {
    type: string;
    content: string | Component;
}

type Page = {
    title: string;
    elements: Component[];
    description: string;
}

type LocaleFile = {
    [key: string]: Page;
}


export type {Component, Page, LocaleFile};