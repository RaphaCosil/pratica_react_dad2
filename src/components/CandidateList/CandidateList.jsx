import React, { useState } from 'react';
import styles from './CandidateList.module.css'
import CandidateItem from '../CandidateItem/CandidateItem'

const CandidateList = ({key, candidate, addCandidate, removeCandidate, voteInCandidate, unvoteInCandidate}) => {
    return (
        <div className={styles.listContainer}>
            <ul className={styles.listItem}>
                {
                    listItem.map((candidate) => (
                        <CandidateItem 
                        key = {key}
                        candidate = {candidate}
                        addCandidate={addCandidate}
                        removeCandidate = {removeCandidate}
                        voteInCandidate = {voteInCandidate}
                        unvoteCandidate={unvoteINCandidate}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

export default CandidateList