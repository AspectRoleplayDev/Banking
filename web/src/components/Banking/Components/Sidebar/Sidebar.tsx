import styles from './Sidebar.module.scss'

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import { Accounts } from '../Accounts/Accounts'
import { Tooltip } from '@mui/material';

export const Sidebar: React.FC<{
    accounts: any
    selectedAccount: any

    setAccountCreationModalState: any

    CharacterData: any
    setCharacterData: any
    
    setDeleteAccount: any 
}> = (props) => {
    return (
        <>
            <div>
                <Tooltip
                    title={'Create Savings Account'}
                    placement={'right'}
                    arrow
                >
                    <div
                        style={{
                            position: 'fixed',
                            display: 'flex',
                            marginLeft: '32.5vh',
                            zIndex: '1',
                            bottom: '3vh',
                        }}
                    >
                        <Fab
                            color="success"
                            aria-label="add"
                            onClick={() => props.setAccountCreationModalState(true)}
                            disabled={props.CharacterData.savingsAvailable}
                            style={{
                                height: '5vh',
                                width: '5vh',
                            }}
                        >
                            <AddIcon
                                style={{
                                    fontSize: '2vh'
                                }}
                            />
                        </Fab>
                    </div>
                </Tooltip>
            </div>

            <div
                className={styles.Sidebar}
            >
                {props.accounts.map((data, index) => {
                    return (
                        <Accounts
                            key={index}
                            accountId={data.accountId}
                            accountType={data.accountType}
                            accountName={data.name}
                            accountBalance={data.balance}
                            selectedAccount={props.selectedAccount}
                            CharacterData={props.CharacterData}
                            setCharacterData={props.setCharacterData}
                            setDeleteAccount={props.setDeleteAccount}
                        />
                    )
                })}
            </div>
        </>
    )
}