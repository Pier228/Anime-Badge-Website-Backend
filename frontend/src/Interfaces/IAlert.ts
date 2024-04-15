export default interface IAlert {
    message: string;
    success?: boolean;
    onClose: () => void;
}
