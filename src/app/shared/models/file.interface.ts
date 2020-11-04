/* Interface que usaré cuando esté trabajando con la imagen de algún post */

export interface FileI{
    name: string;
    imageFile: File;
    size: string;
    type: string;
}