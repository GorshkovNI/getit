export interface IAdvertisementInterface{
    category: [],
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    error: ErrorPayload | null
}

export interface ErrorPayload {
    status?: number,
    message?: string;
    errors?: string[];
}