declare const fetchClient: {
    get(path: string): Promise<{
        data: string;
    }>;
};
export default fetchClient;
