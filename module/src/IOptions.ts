
export interface IOptions {
    id?: string;
    username?: string;
    privateKey?: string;
}

export interface TransferOptions {
    /**
     * Number of concurrent reads
     */
    concurrency?: number | undefined;

    /**
     * Size of each read in bytes
     */
    chunkSize?: number | undefined;

    /**
     * Called every time a part of a file was transferred
     */
    step?: ((total_transferred: number, chunk: number, total: number) => void) | undefined;

    /**
     * Integer or string representing the file mode to set for the uploaded file.
     */
    mode?: number | string | undefined;
}
