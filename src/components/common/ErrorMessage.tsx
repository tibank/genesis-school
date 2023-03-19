import React, { FC } from 'react';
import styles from './ErrorMessage.module.css';

interface IErrorMessageProps {
    message: string;
}

const hiddenMessage = () => {
    const modal: HTMLElement | null = document.querySelector(`.${styles.errorLayer}`);
    if (modal) {
        modal.style.display = 'none';
    }
};

export const ErrorMessage: FC<IErrorMessageProps> = ({ message }) => {
    return (
        <div className={`${styles.errorLayer}`}>
            <div className={`${styles.errorContent}`}>
                <div>{message}</div>
                <div className={styles.btnBlock}>
                    <button className={styles.btnOK} onClick={hiddenMessage}>
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
};
