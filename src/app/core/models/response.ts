
export interface ResponseShape<T> {
    message: string;
    statusCode: number;
    data: T
}