/* Interface utilizada para posts */

export interface PostI {
    titlePost: string;
    contentPost: string;
    imagePost?: string;
    id: string;
    tagsPost: string;
    fileRefer?: string;
}