export enum Form {
    Initial,
    Loading,
    Success,
    Error
  }
  
  export enum PageType {
    WEBSITE = 'website',
    ARTICLE = 'article'
  }
  
  export type FormState = {
    state: Form;
    message?: string;
  };
  
  export enum SubscribeSize {
    SMALL = 'small',
    LARGE = 'large'
  }
  
  export type SocialFollowers = {
    followers: number;
  };
  
  export type Subscribers = {
    count: number;
  };
  
  export type Views = {
    total: number;
  };
  
  export enum ButtonType {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    TERTIARY = 'tertiary'
  }
  
  export type Article = {
    title: string;
    tags?: string[];
    coverImage: string;
    summary: string;
    publishedDate?: any;
    lastUpdatedDate?: any;
  };