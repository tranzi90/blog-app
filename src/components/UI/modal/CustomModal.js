import style from './CustomModal.module.css'

const CustomModal = ({children, visible, setVisible}) => {

    const rootClasses = [style.modal]

    if (visible)
        rootClasses.push(style.active)

    return (
        <div className={rootClasses.join(' ')}>
            <div className={style.modalContent}>
                {children}
            </div>
        </div>
    );
};

export default CustomModal;