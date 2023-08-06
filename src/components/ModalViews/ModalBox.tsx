
type ModalBoxProps = { children: React.ReactNode, onClose?: () => void }

export default function ModalBox({ children, onClose }: ModalBoxProps) {
    return (
        <>
            <div
                className="flex bg-red-300 max-w-3xl max-h-[80vh] my-auto mx-auto justify-center items-center overflow-y-auto fixed inset-0 outline-none z-20 focus:outline-none px-5"
            >
                <button type="button" onClick={onClose} className="fixed inset-0 bg-black/20"></button>
                <div className="relative my-6 mx-auto">
                    {children}
                </div>
            </div>

        </>
    )
}